"use client";

import { useUserAuth } from "@/app/_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginButton from "@/components/auth/login-button";

export default function LoginPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const redirectPath = sessionStorage.getItem("redirectPath") || "/";
      sessionStorage.removeItem("redirectPath");
      router.push(redirectPath);
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-page-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-text-primary">
            Sign In
          </h2>
          <p className="mt-2 text-center text-sm text-text-secondary">
            Sign in with GitHub to access more features
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <LoginButton />
        </div>
      </div>
    </div>
  );
} 