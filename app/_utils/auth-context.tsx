"use client";

import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  User
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import type { UserProfile } from "./types";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  gitHubSignIn: () => Promise<void>;
  firebaseSignOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useUserAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const updateUserProfile = async (user: User): Promise<void> => {
    if (!user) return;
    
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    
    const userData: UserProfile = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      lastLoginAt: new Date(),
      createdAt: userSnap.exists() 
        ? userSnap.data().createdAt 
        : new Date()
    };

    await setDoc(userRef, { profile: userData }, { merge: true });
  };

  const gitHubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await updateUserProfile(result.user);
      return;
    } catch (error) {
      console.error("GitHub sign in error:", error);
      throw error;
    }
  };

  const firebaseSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        try {
          await updateUserProfile(currentUser);
        } catch (error) {
          console.error("Error updating user profile:", error);
        }
      }
    });

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}