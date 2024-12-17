"use client";

import { useUserAuth } from "@/app/_utils/auth-context";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function LoginButton() {
  const { gitHubSignIn } = useUserAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      await gitHubSignIn();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error occurred");
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="animate-spin">⏳</span>
        ) : (
          <FaGithub className="w-5 h-5" />
        )}
        {isLoading ? "Signing in..." : "Sign in with GitHub"}
      </button>
      {error && (
        <div className="mt-2 text-sm text-red-600">
          {error}
        </div>
      )}
    </div>
  );
} 