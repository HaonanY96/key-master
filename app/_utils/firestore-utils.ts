import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import type { UserData, ShortcutFavorite } from './types';

export const firestoreUtils = {
  // Get user document
  async getUserData(uid: string): Promise<UserData | null> {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() as UserData : null;
  },

  // Add shortcut to favorites
  async addToFavorites(uid: string, shortcutId: string, folder?: string): Promise<ShortcutFavorite> {
    const userRef = doc(db, "users", uid);
    const favoriteData: ShortcutFavorite = {
      shortcutId,
      addedAt: serverTimestamp(),
      folder
    };

    await updateDoc(userRef, {
      [`shortcuts.favorites.${shortcutId}`]: favoriteData
    });

    return favoriteData;
  },

  // Remove shortcut from favorites
  async removeFromFavorites(uid: string, shortcutId: string): Promise<void> {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      [`shortcuts.favorites.${shortcutId}`]: deleteDoc
    });
  },

  // Update favorite note
  async updateFavoriteNote(uid: string, shortcutId: string, notes: string): Promise<void> {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      [`shortcuts.favorites.${shortcutId}.notes`]: notes
    });
  },

  // Move favorite to different folder
  async moveFavoriteToFolder(uid: string, shortcutId: string, folder: string): Promise<void> {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      [`shortcuts.favorites.${shortcutId}.folder`]: folder
    });
  }
}; 