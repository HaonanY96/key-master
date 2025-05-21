import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ShortcutCard from './shortcut-card'; // Adjust path as needed
import { Shortcut } from '@/lib/shortcuts/types/common'; // Adjust path as needed

// Mock useUserFavorites hook
vi.mock('@/app/_utils/hooks/useUserFavorites', () => ({
  useUserFavorites: () => ({
    favorites: {}, // Default mock favorites state
    addFavorite: vi.fn(),
    removeFavorite: vi.fn(),
    isFavorited: vi.fn(() => false),
  }),
}));

// Mock AnimationModal to simplify testing and avoid its internal complexities for this unit test
// We are only testing if ShortcutCard attempts to render it.
vi.mock('../keyboard/AnimationModal', () => ({
  default: ({ isOpen, shortcut, onClose }: any) => {
    if (!isOpen) return null;
    return (
      <div role="dialog" aria-labelledby="modal-title">
        <h3 id="modal-title">Keyboard Animation for {shortcut?.name}</h3>
        <button onClick={onClose}>Close Modal</button>
        {/* Minimal mock content */}
      </div>
    );
  },
}));


describe('ShortcutCard Interactions', () => {
  const mockShortcut: Shortcut = {
    id: 'test-shortcut-card',
    name: 'Card Test Shortcut',
    keys: ['Control', 'S'],
    description: 'Saves the current file.',
    category: 'File',
    platform: ['windows'],
    keywords: ['save', 'file'],
    usage: 'Press Control+S to save your work.'
  };

  beforeEach(() => {
    // Clear any previous modal states if necessary, though mocks handle this well
  });

  it('should open AnimationModal when "Animate" button is clicked', async () => {
    render(<ShortcutCard shortcut={mockShortcut} showFavorite={true} />);

    // Find the "Animate" button. Using a more specific selector if possible.
    // The button has an accessible name "Play animation for [shortcut name]"
    // and text content "Animate"
    const animateButton = screen.getByRole('button', { name: /animate/i });
    expect(animateButton).toBeInTheDocument();

    // Ensure modal is not visible initially
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    fireEvent.click(animateButton);

    // Wait for the modal to appear
    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Check if the modal title (or some content) is correct based on the mock modal
    expect(screen.getByText(`Keyboard Animation for ${mockShortcut.name}`)).toBeInTheDocument();
  });

  it('should close AnimationModal when its close mechanism is triggered (simulated)', async () => {
    render(<ShortcutCard shortcut={mockShortcut} />);
    
    const animateButton = screen.getByRole('button', { name: /animate/i });
    fireEvent.click(animateButton);

    let modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Simulate closing the modal (e.g., by clicking a close button if our mock had a real one)
    // Our mock AnimationModal has a "Close Modal" button
    const closeModalButton = screen.getByRole('button', { name: 'Close Modal' });
    fireEvent.click(closeModalButton);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
