import React from 'react'
import AuthGuard from '@/components/auth/auth-guard'
import SavedShortcuts from '@/components/shortcuts/saved-shortcuts'
import UserPreferences from '@/components/user/user-preferences'

export default function DashboardPage() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-page-bg text-text-primary">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">My Shortcuts</h1>
          <SavedShortcuts />
          <UserPreferences />
        </div>
      </main>
    </AuthGuard>
  )
} 