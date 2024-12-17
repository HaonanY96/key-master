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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { favorites } = useUserFavorites();
  const isFavorited = showFavorite ? Boolean(favorites[shortcut.id]) : false;

  const cardContent = (
    <>
      <div className="relative">
        <div className="w-full aspect-video bg-page-white rounded-lg overflow-hidden">
          <KeyboardVisualizer
            shortcut={shortcut}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            autoPlay={variant === 'category' && isHovered}
            loop={false}
          />
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="absolute bottom-2 right-2 bg-highlight text-white rounded-full p-2 hover:bg-highlight/90 transition-colors"
        >
          {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
        </button>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-text-primary">{shortcut.description}</h3>
          {variant !== 'compact' && (
            <p className="text-sm text-text-secondary mt-1">{shortcut.description}</p>
          )}
        </div>
        {showFavorite && <FavoriteButton shortcutId={shortcut.id} isFavorited={isFavorited} />}
      </div>
    </>
  );

  if (variant === 'category') {
    return (
      <motion.div 
        className="p-4 bg-page-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => {
          setIsHovered(true);
          setIsPlaying(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          setIsPlaying(false);
        }}
      >
        {cardContent}
      </motion.div>
    );
  }

  if (variant === 'expanded') {
    return (
      <div className="p-6 bg-page-white rounded-lg shadow-lg">
        <div className="w-full max-w-2xl mx-auto">
          {cardContent}
          <div className="mt-6 space-y-4">
            <div className="text-text-primary">
              <h4 className="font-medium">Usage Context</h4>
              <p className="text-text-secondary">{shortcut.usage}</p>
            </div>
            {shortcut.metadata && (
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary">Complexity: </span>
                  <span className="text-text-primary">{shortcut.metadata.complexity}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Frequency: </span>
                  <span className="text-text-primary">{shortcut.metadata.popularity}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Context: </span>
                  <span className="text-text-primary">{shortcut.metadata.context}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-page-white border border-highlight/10 rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-4">
        <div className="relative w-24">
          {cardContent}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-text-primary">{shortcut.description}</h3>
          <p className="text-sm text-text-secondary">{shortcut.keys.join(' + ')}</p>
        </div>
        {showFavorite && <FavoriteButton shortcutId={shortcut.id} isFavorited={isFavorited} />}
      </div>
    </div>
  );
} 