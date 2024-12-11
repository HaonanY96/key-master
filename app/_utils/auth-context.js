"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // 临时移除认证逻辑
  const githubSignIn = async () => {
    console.log("GitHub sign in temporarily disabled");
    return null;
  };

  const firebaseSignOut = () => {
    console.log("Sign out temporarily disabled");
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user: null, 
        loading: false,
        isAuthenticated: false,
        githubSignIn, 
        firebaseSignOut 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}; 