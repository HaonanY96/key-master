import React from 'react'
import SearchResults from '@/components/search/search-results'
import { FilterPanel } from '@/components/filter-panel'

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Search Shortcuts</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <FilterPanel />
          </aside>
          <section className="md:col-span-3 bg-page-white rounded-lg shadow-sm">
            <SearchResults />
          </section>
        </div>
      </div>
    </main>
  )
} 