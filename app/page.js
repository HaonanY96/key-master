import React from 'react'
import Hero from '@/components/hero'
import { SearchModal } from '@/components/search/search-modal'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <Hero />
      {/* <SearchModal /> */}
    </main>
  )
}
