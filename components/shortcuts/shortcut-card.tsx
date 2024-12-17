import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import KeyboardVisualizer from '../keyboard/keyboard-visualizer';
import FavoriteButton from './favorite-button';
import { Shortcut } from '@/lib/shortcuts/types/common';
import { useUserFavorites } from '@/app/_utils/hooks/useUserFavorites';

interface ShortcutCardProps {
  shortcut: Shortcut;
  variant?: 'compact' | 'expanded' | 'category';
  onExpand?: () => void;
  showFavorite?: boolean;
}

export default function ShortcutCard({ 
  shortcut, 
  variant = 'compact',
  onExpand,
  showFavorite = false
}: ShortcutCardProps) {
  const { favorites } = useUserFavorites();
  const isFavorited = showFavorite ? Boolean(favorites[shortcut.id]) : false;

  return (
    <div className="p-4 bg-page-white border border-highlight/10 rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex flex-col gap-3">
        {/* 名称和描述 */}
        <div>
          <h3 className="text-lg font-bold text-text-primary">{shortcut.name}</h3>
          <p className="text-sm text-text-secondary mt-1">{shortcut.description}</p>
          {shortcut.usage && (
            <p className="text-xs text-text-secondary italic mt-1">{shortcut.usage}</p>
          )}
        </div>

        {/* 快捷键组合 */}
        <div className="flex items-center gap-2">
          {shortcut.keys.map((key, index) => (
            <React.Fragment key={index}>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-medium">
                {key}
              </kbd>
              {index < shortcut.keys.length - 1 && (
                <span className="text-gray-400 font-medium">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 收藏按钮 */}
        {showFavorite && (
          <div className="self-end">
            <FavoriteButton shortcutId={shortcut.id} isFavorited={isFavorited} />
          </div>
        )}
      </div>
    </div>
  );
} 