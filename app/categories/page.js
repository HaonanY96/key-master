import React from 'react';
import { FilterPanel } from '@/components/filter-panel';
import { ShortcutList } from '@/components/shortcuts/shortcut-list';

export default function CategoriesPage({ searchParams }) {
  const category = searchParams?.category;
  const title = category 
    ? category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ') + ' Shortcuts'
    : 'Keyboard Shortcut Categories';

  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <FilterPanel />
          </aside>
          
          <section className="md:col-span-3">
            <ShortcutList />
          </section>
        </div>
      </div>
    </main>
  );
} 