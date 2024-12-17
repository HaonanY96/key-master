'use client';

import { useUserAuth } from "@/app/_utils/auth-context";

export default function SettingsPage() {
  const { user } = useUserAuth();
  
  return (
    <main className="min-h-screen bg-page-bg">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Settings</h1>
        
        <div className="bg-page-white rounded-lg shadow-sm p-6">
          {/* 用户设置表单 */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Display Settings</h2>
              {/* 显示设置选项 */}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Keyboard Settings</h2>
              {/* 键盘设置选项 */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 