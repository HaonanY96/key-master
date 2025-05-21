"use client";

import { useState, useEffect } from "react";
import WindowsKeyboard from "./windows-keyboard";
import { Shortcut } from "@/lib/shortcuts/types/common";

interface KeyboardVisualizerProps {
  platform?: 'windows' | 'mac';
  shortcut: Shortcut;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  autoPlay?: boolean;
  loop?: boolean;
  showInternalControls?: boolean; // New prop
}

// This type seems to be duplicated in the provided file, ensuring it's defined once.
type AnimationState = "highlighted" | "pressed" | "initial";


export default function KeyboardVisualizer({
  platform = 'windows',
  shortcut,
  isPlaying,
  setIsPlaying,
  autoPlay = false,
  loop = false,
  showInternalControls = true, // Default to true
}: KeyboardVisualizerProps) {
  const [animatedKeys, setAnimatedKeys] = useState<Record<string, AnimationState>>({});
  const [currentShortcut, setCurrentShortcut] = useState<Shortcut | null>(null);
  // Ensuring ANIMATION_CONSTANTS is imported
  import { ANIMATION_CONSTANTS } from "./keyboard-constants-layout";

  useEffect(() => {
    setCurrentShortcut(shortcut); // Keep track of the current shortcut for display
    
    if (!shortcut || !shortcut.keys || shortcut.keys.length === 0) {
      setAnimatedKeys({});
      if (isPlaying) setIsPlaying(false); // Stop if no keys
      return;
    }

    let animationTimeoutId: NodeJS.Timeout | undefined;
    let isMounted = true; // To prevent state updates on unmounted component

    const runAnimation = async () => {
      const keysToAnimate = shortcut.keys;
      let currentAnimated: Record<string, AnimationState> = {};

      // Optional: Briefly highlight all keys in the shortcut first
      // keysToAnimate.forEach(key => currentAnimated[key] = "highlighted");
      // if (isMounted) setAnimatedKeys({...currentAnimated});
      // await new Promise(resolve => setTimeout(resolve, 300));

      for (let i = 0; i < keysToAnimate.length; i++) {
        if (!isMounted || !isPlaying) break; // Exit loop if unmounted or paused

        const currentKey = keysToAnimate[i];
        
        if (i > 0) {
          const prevKey = keysToAnimate[i-1];
          currentAnimated[prevKey] = "highlighted";
        }
        
        currentAnimated[currentKey] = "pressed";
        if (isMounted) setAnimatedKeys({...currentAnimated});

        // Wait for sequenceStepDelay before processing the next key in the sequence
        // The current key will remain "pressed" during this time.
        // Its own visual transition to "pressed" is quick (KEY_STYLES.pressed.transition.duration = 0.1s).
        // It will change to "highlighted" at the start of the next key's step, or stay "pressed" if it's the last key.
        await new Promise(resolve => setTimeout(resolve, ANIMATION_CONSTANTS.duration.sequenceStepDelay * 1000));
      }

      if (!isMounted) return;

      // After the loop, the last key is still "pressed".
      // Hold this state for finalHold duration.
      animationTimeoutId = setTimeout(() => {
        if (!isMounted) return;
        
        // If not looping, set the last key to highlighted before finishing
        if (!loop && keysToAnimate.length > 0) {
            const lastKey = keysToAnimate[keysToAnimate.length - 1];
            currentAnimated[lastKey] = "highlighted"; // Or keep it pressed, depending on desired final visual
            if (isMounted) setAnimatedKeys({...currentAnimated});
            
            // Add a small delay to show the final highlighted state before reset
            setTimeout(() => {
                if (!isMounted) return;
                setAnimatedKeys({});
                if (isPlaying) setIsPlaying(false);
            }, ANIMATION_CONSTANTS.duration.keyPress * 1000); // Allow time to see final highlight
            return; // Avoid double setIsPlaying(false)
        }


        if (loop && isPlaying) {
          setAnimatedKeys({}); // Reset for loop
          runAnimation();
        } else {
          setAnimatedKeys({}); // Reset all to initial
          if (isPlaying) setIsPlaying(false);
        }
      }, ANIMATION_CONSTANTS.duration.finalHold * 1000);
    };

    if (isPlaying) {
      runAnimation();
    } else {
      setAnimatedKeys({}); // Clear animations if paused
    }

    return () => {
      isMounted = false;
      if (animationTimeoutId) clearTimeout(animationTimeoutId);
    };
  }, [isPlaying, shortcut, loop, setIsPlaying, platform]);

  return (
    <div className="relative">
      <WindowsKeyboard
        animatedKeyStates={animatedKeys} // Pass the new state here
        className="w-full max-w-4xl mx-auto"
        // keyboardType={platform} // Assuming WindowsKeyboard can take keyboardType
      />

      {showInternalControls && (
        <>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label={isPlaying ? "Pause animation" : "Play animation"}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          {currentShortcut && (
            <div className="mt-4 text-center p-2 bg-gray-50 rounded-md">
              <div className="text-md font-semibold text-gray-800">
                {currentShortcut.name}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {currentShortcut.description}
              </div>
              {currentShortcut.usage && (
                 <div className="text-xs text-gray-500 mt-1 italic">
                   Usage: {currentShortcut.usage}
                 </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}