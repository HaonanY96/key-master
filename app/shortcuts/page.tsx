import React, { Suspense } from 'react';
import { ShortcutList } from '@/components/shortcuts/shortcut-list';
import { FilterPanel } from '@/components/filter-panel';
import { getShortcuts } from '@/lib/shortcuts/api'; // Import for server-side fetching
import { ShortcutGroup } from '@/lib/shortcuts/types'; // Import type for props

// Props for the page component are now related to fetched data
interface ShortcutsPageProps {
  // No direct props from Next.js page system, but we fetch data and pass it down.
  // We can define what data we expect to fetch and pass to children if needed here,
  // but the primary fetched data will be passed directly to ShortcutList.
}

// Convert to async function component for server-side data fetching
const ShortcutsPage: React.FC<ShortcutsPageProps> = async () => {
  // Fetch data on the server
  let shortcutGroups: ShortcutGroup[] = [];
  try {
    const apiResponse = await getShortcuts({ platform: 'windows' }); // Default platform
    if (apiResponse.success && apiResponse.groups) {
      shortcutGroups = Object.values(apiResponse.groups);
    } else {
      console.error("Failed to fetch shortcuts for ShortcutsPage:", apiResponse.error);
    }
  } catch (error) {
    console.error("Error fetching shortcuts in ShortcutsPage:", error);
  }

  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Windows Keyboard Shortcuts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <FilterPanel />
          </aside>
          
          <section className="md:col-span-3">
            {/* Suspense fallback can be simplified if data is pre-fetched,
                but can remain for client-side navigation or parts that still suspend */}
            <Suspense fallback={<div className="text-text-secondary">Loading shortcuts...</div>}>
              <ShortcutList groups={shortcutGroups} />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  )
} 