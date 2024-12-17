import { useState, useCallback } from 'react';
import { useUserAuth } from '../auth-context';
import { firestoreUtils } from '../firestore-utils';
import type { ShortcutFavorite } from '../types';

export function useFavorites() {
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addToFavorites = useCallback(async (shortcutId: string, folder?: string) => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    try {
      await firestoreUtils.addToFavorites(user.uid, shortcutId, folder);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add favorite');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const removeFromFavorites = useCallback(async (shortcutId: string) => {
    if (!user) return;

    setLoading(true);
    setError(null);
    try {
      await firestoreUtils.removeFromFavorites(user.uid, shortcutId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove favorite');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  return {
    addToFavorites,
    removeFromFavorites,
    loading,
    error
  };
} 