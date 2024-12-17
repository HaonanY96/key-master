import React, { Suspense } from 'react'
import { ShortcutList } from '@/components/shortcuts/shortcut-list'
import { notFound } from 'next/navigation'

const VALID_PLATFORMS = ['windows', 'macos', 'linux']

export default function PlatformPage({ params }) {
  // Validate if platform exists
  if (!VALID_PLATFORMS.includes(params.platform.toLowerCase())) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {params.platform.toUpperCase()} Shortcuts
        </h1>
        
        <Suspense fallback={
          <div className="text-text-secondary">Loading...</div>
        }>
          <ShortcutList platform={params.platform} />
        </Suspense>
      </div>
    </main>
  )
} 