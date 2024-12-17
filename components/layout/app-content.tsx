"use client";

import { useUserAuth } from "@/app/_utils/auth-context";
import Navbar from "@/components/layout/navbar";

interface AppContentProps {
  children: React.ReactNode;
}

export default function AppContent({ children }: AppContentProps) {
  const { loading } = useUserAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-page-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center text-text-secondary">
            <p>© {new Date().getFullYear()} Key Master. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 