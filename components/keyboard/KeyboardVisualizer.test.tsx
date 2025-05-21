import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import KeyboardVisualizer from './keyboard-visualizer'; // Adjust path as needed
import { Shortcut } from '@/lib/shortcuts/types/common'; // Adjust path as needed

// Mock constants and child components
const mockKeyIdentifiers = {
  CONTROL_LEFT: 'ControlLeft',
  A: 'A',
  B: 'B',
};

const mockedKeyPressDuration = 300;
const mockedSequenceStepDelay = 400;
const mockedFinalHoldDuration = 1000;

vi.mock('./keyboard-constants-layout', () => ({
  KEY_IDENTIFIERS: mockKeyIdentifiers,
  ANIMATION_CONSTANTS: {
    duration: {
      keyPress: mockedKeyPressDuration / 1000,
      sequenceStepDelay: mockedSequenceStepDelay / 1000,
      finalHold: mockedFinalHoldDuration / 1000,
    },
  },
}));

// Mock WindowsKeyboard to inspect its props
const mockWindowsKeyboard = vi.fn();
vi.mock('./windows-keyboard', () => ({
  default: (props: any) => {
    mockWindowsKeyboard(props);
    return <div data-testid="mock-windows-keyboard">Mock Windows Keyboard</div>;
  },
}));

describe('KeyboardVisualizer Animation Sequence', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockWindowsKeyboard.mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restores original implementations + clears timers
    vi.useRealTimers(); 
  });

  it('should animate a simple two-key shortcut sequence (non-looping)', async () => {
    const mockShortcut: Shortcut = {
      id: 'test-shortcut',
      name: 'Test Shortcut',
      keys: [mockKeyIdentifiers.CONTROL_LEFT, mockKeyIdentifiers.A],
      description: 'A test shortcut',
      category: 'test',
      platform: ['windows'],
      keywords: ['test'],
    };

    const setIsPlayingMock = vi.fn();

    render(
      <KeyboardVisualizer
        shortcut={mockShortcut}
        isPlaying={true}
        setIsPlaying={setIsPlayingMock}
        platform="windows"
        loop={false} // Test non-looping behavior
        showInternalControls={false}
      />
    );

    // Initial state: First key pressed
    // Need to wait for the initial useEffect logic to run
    await vi.advanceTimersByTimeAsync(1); // Allow microtasks like initial state update
    expect(mockWindowsKeyboard).toHaveBeenCalledTimes(1); // Initial render
    // The first call to runAnimation sets the state, then re-renders.
    // So we might need to wait for the second call to mockWindowsKeyboard after the first state update.
    await waitFor(() => {
        // The first key press happens quickly within runAnimation before the first timeout
        expect(mockWindowsKeyboard.mock.calls[mockWindowsKeyboard.mock.calls.length -1][0].animatedKeyStates)
          .toEqual({ [mockKeyIdentifiers.CONTROL_LEFT]: 'pressed' });
    });


    // Step 2: First key becomes highlighted, second key becomes pressed
    vi.advanceTimersByTime(mockedSequenceStepDelay);
    await waitFor(() => {
      expect(mockWindowsKeyboard.mock.calls[mockWindowsKeyboard.mock.calls.length -1][0].animatedKeyStates)
        .toEqual({
        [mockKeyIdentifiers.CONTROL_LEFT]: 'highlighted',
        [mockKeyIdentifiers.A]: 'pressed',
      });
    });
    
    // Step 3: Hold final key (A) as pressed for finalHold duration
    // (The logic in KeyboardVisualizer now transitions last key to highlighted after finalHold, then holds that for keyPress duration)
    vi.advanceTimersByTime(mockedFinalHoldDuration);
    await waitFor(() => {
      expect(mockWindowsKeyboard.mock.calls[mockWindowsKeyboard.mock.calls.length -1][0].animatedKeyStates)
        .toEqual({
          [mockKeyIdentifiers.CONTROL_LEFT]: 'highlighted', // Previous key remains highlighted
          [mockKeyIdentifiers.A]: 'highlighted',         // Last key becomes highlighted
        });
    });

    // Step 4: Hold the "highlighted" state of the last key for keyPress duration
    vi.advanceTimersByTime(mockedKeyPressDuration);
    await waitFor(() => {
      // All keys reset
      expect(mockWindowsKeyboard.mock.calls[mockWindowsKeyboard.mock.calls.length -1][0].animatedKeyStates)
        .toEqual({});
    });

    // Check if setIsPlaying(false) was called
    expect(setIsPlayingMock).toHaveBeenCalledWith(false);
  });
});
