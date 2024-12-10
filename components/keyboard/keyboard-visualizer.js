"use client";

import { useState, useEffect } from "react";
import WindowsKeyboard from "./windows-keyboard";
import {
  shortcutGroups,
  getAllShortcuts,
} from "../../app/shortcuts/shortcut-groups";

export default function KeyboardVisualizer() {
  const [activeKeys, setActiveKeys] = useState([]);
  const [currentShortcut, setCurrentShortcut] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const shortcuts = shortcutGroups.copyPaste.shortcuts;
    let index = 0;

    const interval = setInterval(() => {
      const shortcut = shortcuts[index];
      setCurrentShortcut(shortcut);
      setActiveKeys(shortcut.keys);
      index = (index + 1) % shortcuts.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

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
          {isPlaying ? "暂停" : "播放"}
        </button>
      </div>

      {currentShortcut && (
        <div className="mt-4 text-center">
          <div className="text-lg font-medium">
            {currentShortcut.description}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {currentShortcut.tooltip}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {currentShortcut.usage}
          </div>
        </div>
      )}
    </div>
  );
}
