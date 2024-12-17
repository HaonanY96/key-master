import { useState, useEffect } from 'react';
import { useUserAuth } from '../auth-context';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';
import type { ShortcutFavorite } from '../types';

export function useUserFavorites() {
  const { user } = useUserAuth();
  const [favorites, setFavorites] = useState<Record<string, ShortcutFavorite>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setFavorites({});
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = onSnapshot(
      doc(db, "users", user.uid),
      (doc) => {
        if (doc.exists()) {
          setFavorites(doc.data()?.shortcuts?.favorites || {});
        } else {
          setFavorites({});
        }
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching favorites:", err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  return { favorites, loading, error };
} 