"use client";

import { useAuth } from "@/app/_utils/auth-context";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  // 临时移除认证检查
  return <>{children}</>;
} 