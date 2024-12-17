import { useState } from 'react';
import { useFavorites } from '@/app/_utils/hooks/useFavorites';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

interface FavoriteButtonProps {
  shortcutId: string;
  isFavorited?: boolean;
  onToggle?: (isFavorited: boolean) => void;
}

export default function FavoriteButton({ 
  shortcutId, 
  isFavorited = false,
  onToggle 
}: FavoriteButtonProps) {
  const [isActive, setIsActive] = useState(isFavorited);
  const { addToFavorites, removeFromFavorites, loading } = useFavorites();

  const handleToggle = async () => {
    if (loading) return;

    try {
      if (isActive) {
        await removeFromFavorites(shortcutId);
      } else {
        await addToFavorites(shortcutId);
      }
      setIsActive(!isActive);
      onToggle?.(!isActive);
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      aria-label={isActive ? "Remove from favorites" : "Add to favorites"}
    >
      {isActive ? (
        <FaHeart className="w-5 h-5 text-red-500" />
      ) : (
        <FaRegHeart className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
} 