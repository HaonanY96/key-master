import React, { Suspense } from 'react'; // Keep Suspense for now, might be used by FilterPanel or other parts
import { FilterPanel } from '@/components/filter-panel';
import { ShortcutList } from '@/components/shortcuts/shortcut-list';
import { getShortcuts } from '@/lib/shortcuts/api'; // Import for server-side fetching
import { ShortcutGroup } from '@/lib/shortcuts/types'; // Import type for props

// Define the props type for the page, including searchParams
interface CategoriesPageProps {
  searchParams?: {
    category?: string;
    // Add other potential searchParams here if known
  };
}

// Convert to async function component for server-side data fetching
const CategoriesPage: React.FC<CategoriesPageProps> = async ({ searchParams }) => {
  const categoryParam = searchParams?.category;
  
  // Generate title (can remain the same)
  const title = categoryParam 
    ? categoryParam.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ') + ' Shortcuts'
    : 'Keyboard Shortcut Categories';

  // Fetch data on the server
  let shortcutData: ShortcutGroup[] = [];
  try {
    // Pass category to getShortcuts, ensure it's lowercase if it exists
    const apiResponse = await getShortcuts({ 
      platform: 'windows', // Or make this dynamic if needed
      category: categoryParam?.toLowerCase() 
    });
    if (apiResponse.success && apiResponse.groups) {
      shortcutData = Object.values(apiResponse.groups);
    } else if (apiResponse.success && apiResponse.data) {
      // If API returns a flat list in `data` and no groups
      // And ShortcutList expects groups, we might need to adapt
      // For now, assuming API returns groups when category is passed,
      // or ShortcutList can also handle a flat `shortcuts` prop.
      // Based on ShortcutList refactor, it can take `shortcuts` or `groups`.
      // If groups are preferred, and API gives flat list, one might group it here.
      // Let's assume for now `apiResponse.groups` is the primary source when available.
      // If only `apiResponse.data` is available, pass it to `shortcuts` prop of ShortcutList.
      // For this page, we expect groups.
      console.error("Failed to fetch shortcut groups for CategoriesPage:", apiResponse.error);
    }
  } catch (error) {
    console.error("Error fetching shortcuts in CategoriesPage:", error);
  }
  
  return (
    <main className="min-h-screen bg-page-bg text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <FilterPanel />
          </aside>
          
          <section className="md:col-span-3">
            {/* Data is now pre-fetched. Suspense might not be strictly needed for ShortcutList,
                but can remain for other client components or Next.js streaming. */}
            <Suspense fallback={<div className="text-text-secondary">Loading shortcuts...</div>}>
              <ShortcutList groups={shortcutData} />
            </Suspense>
          </section>
        </div>
      </div>
    </main>
  );
} 