import { Suspense } from 'react';
import { ShortcutList } from '../../components/ShortcutList';
import { FilterPanel } from '../../components/FilterPanel';

export default function ShortcutsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Windows Keyboard Shortcuts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <FilterPanel />
        </aside>
        
        <section className="md:col-span-3">
          <Suspense fallback={<div>Loading...</div>}>
            <ShortcutList />
          </Suspense>
        </section>
      </div>
    </main>
  );
} 