'use client';

import { useUserAuth } from "@/app/_utils/auth-context";

export default function ProfilePage() {
  const { user } = useUserAuth();

  return (
    <main className="min-h-screen bg-page-bg">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8">Profile</h1>
        
        <div className="bg-page-white rounded-lg shadow-sm p-6">
          {/* 用户资料展示 */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">User Information</h2>
              {user && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-text-secondary">Email</label>
                    <p className="text-text-primary">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-text-secondary">Name</label>
                    <p className="text-text-primary">{user.name}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Learning Progress</h2>
              {/* 学习进度统计 */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 