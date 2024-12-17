import React, { Suspense } from 'react'
import { ShortcutList } from '@/components/shortcuts/shortcut-list'
import { FilterPanel } from '@/components/filter-panel'

export default function ShortcutsPage() {
  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Windows Keyboard Shortcuts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <FilterPanel />
          </aside>
          
          <section className="md:col-span-3">
            <Suspense fallback={
              <div className="text-text-secondary">Loading...</div>
            }>
              <ShortcutList />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  )
} 