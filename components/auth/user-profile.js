"use client";

import { useUserAuth } from "@/app/_utils/auth-context";
import Image from "next/image";

export default function UserProfile() {
  const { user, firebaseSignOut } = useUserAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      {user.photoURL && (
        <Image
          src={user.photoURL}
          alt={user.displayName || "User Avatar"}
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium">{user.displayName}</span>
        <span className="text-xs text-gray-500">{user.email}</span>
      </div>
      <button
        onClick={firebaseSignOut}
        className="px-3 py-1 text-sm text-gray-700 hover:text-gray-900"
      >
        Sign Out
      </button>
    </div>
  );
} 