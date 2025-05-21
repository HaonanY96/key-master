import React, { useState } from 'react';
// import { motion } from 'framer-motion'; // Not used in current version
// import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'; // Not used
// import KeyboardVisualizer from '../keyboard/keyboard-visualizer'; // Not directly used in card now
import FavoriteButton from './favorite-button';
import { Shortcut } from '@/lib/shortcuts/types/common';
import { useUserFavorites } from '@/app/_utils/hooks/useUserFavorites';
import AnimationModal from '../keyboard/AnimationModal'; // Import the modal
import { PlayCircleIcon } from '@heroicons/react/24/outline'; // Icon for play button

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

  const [isAnimationModalOpen, setIsAnimationModalOpen] = useState(false);
  // selectedShortcutForModal is not strictly needed if we pass 'shortcut' directly
  // const [selectedShortcutForModal, setSelectedShortcutForModal] = useState<Shortcut | null>(null);

  const openAnimationModal = () => {
    // setSelectedShortcutForModal(shortcut);
    setIsAnimationModalOpen(true);
  };

  const closeAnimationModal = () => {
    setIsAnimationModalOpen(false);
    // setSelectedShortcutForModal(null);
  };

  return (
    <>
      <div className="p-4 bg-page-white border border-highlight/10 rounded-lg hover:shadow-lg transition-shadow_transform_colors_opacity_border-color_box-shadow_filter_backdrop-filter duration-300 ease-in-out_filter_backdrop-filter">
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
          <div className="flex items-center gap-2 flex-wrap">
            {shortcut.keys.map((key, index) => (
              <React.Fragment key={index}>
                <kbd className="px-2 py-1 bg-gray-200 rounded text-gray-800 font-mono text-sm">
                  {key}
                </kbd>
                {index < shortcut.keys.length - 1 && (
                  <span className="text-gray-500 font-medium">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Actions: Play Animation Button and Favorite Button */}
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={openAnimationModal}
              className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors p-1 -ml-1 rounded-md hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={`Play animation for ${shortcut.name}`}
            >
              <PlayCircleIcon className="h-5 w-5" />
              <span>Animate</span>
            </button>

            {showFavorite && (
              <FavoriteButton shortcutId={shortcut.id} isFavorited={isFavorited} />
            )}
          </div>
        </div>
      </div>

      <AnimationModal
        isOpen={isAnimationModalOpen}
        onClose={closeAnimationModal}
        shortcut={shortcut} // Pass the current card's shortcut
      />
    </>
  );
}