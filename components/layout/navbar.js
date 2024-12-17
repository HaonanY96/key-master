"use client";

import Link from "next/link";
import Image from "next/image";
import { useUserAuth } from "@/app/_utils/auth-context";
import LoginButton from "../auth/login-button";
import UserProfile from "../auth/user-profile";
import { SearchBar } from "../search/search-bar";

export default function Navbar() {
  const { user } = useUserAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-12 w-[200px]">
              <Image
                src="/images/logo.svg"
                alt="Key Master Logo"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-64">
              <SearchBar />
            </div>

            <Link 
              href="/categories"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Categories
            </Link>

            <div className="flex items-center">
              {user ? <UserProfile /> : <LoginButton />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 