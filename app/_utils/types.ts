import { FieldValue } from 'firebase/firestore';

export interface UserProfile {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  createdAt: Date;
  lastLoginAt: Date;
}

export interface ShortcutFavorite {
  shortcutId: string;
  addedAt: Date | FieldValue;
  notes?: string;
  folder?: string;
}

export interface UserData {
  profile: UserProfile;
  shortcuts: {
    favorites: Record<string, ShortcutFavorite>;
  };
  settings?: {
    defaultPlatform: 'windows' | 'mac';
    theme: 'light' | 'dark';
  };
} 