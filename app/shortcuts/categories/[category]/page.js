import React, { Suspense } from 'react'
import { ShortcutList } from '@/components/shortcuts/shortcut-list'
import { notFound } from 'next/navigation'

/** @type {string[]} */
const VALID_CATEGORIES = [
  'system',
  'text-editing',
  'window-management',
  'browser',
  'development'
]

export default function CategoryPage({ params }) {
  if (!VALID_CATEGORIES.includes(params.category)) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {params.category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')} Shortcuts
        </h1>
        
        <div className="bg-page-white rounded-lg shadow-sm p-6">
          <Suspense fallback={
            <div className="text-text-secondary">Loading...</div>
          }>
            <ShortcutList category={params.category} />
          </Suspense>
        </div>
      </div>
    </main>
  )
} 