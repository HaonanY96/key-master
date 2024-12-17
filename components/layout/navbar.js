"use client";

import Link from "next/link";
import Image from "next/image";
import { useUserAuth } from "@/app/_utils/auth-context";
import LoginButton from "../auth/login-button";
import UserProfile from "../auth/user-profile";

export default function Navbar() {
  const { user } = useUserAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Key Master Logo"
                width={40}
                height={32}
                priority
                className="w-auto h-8"
              />
              <span className="ml-3 text-xl font-bold text-gray-900">Key Master</span>
            </Link>
          </div>
          <div className="flex items-center">
            {user ? <UserProfile /> : <LoginButton />}
          </div>
        </div>
      </div>
    </nav>
  );
} 