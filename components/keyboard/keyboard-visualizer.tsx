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
}

export default function KeyboardVisualizer({ 
  platform = 'windows',
  shortcut,
  isPlaying,
  setIsPlaying,
  autoPlay = false,
  loop = false 
}: KeyboardVisualizerProps) {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [currentShortcut, setCurrentShortcut] = useState<Shortcut | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      setActiveKeys([]);
      return;
    }

    setCurrentShortcut(shortcut);
    setActiveKeys(shortcut.keys);

    if (!loop) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
        setActiveKeys([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, shortcut, loop, setIsPlaying]);

  return (
    <div className="relative">
      <WindowsKeyboard
        activeKeys={activeKeys}
        className="w-full max-w-4xl mx-auto"
      />

      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {currentShortcut && (
        <div className="mt-4 text-center">
          <div className="text-lg font-medium">
            {currentShortcut.description}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {currentShortcut.description}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {currentShortcut.usage}
          </div>
        </div>
      )}
    </div>
  );
} 