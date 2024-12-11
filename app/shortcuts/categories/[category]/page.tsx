import { Suspense } from 'react';
import { ShortcutList } from '../../../../components/ShortcutList';
import { notFound } from 'next/navigation';
import { ShortcutCategory } from '@/lib/shortcuts/types/common';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Validate if category exists
  if (!Object.values(ShortcutCategory).includes(params.category as ShortcutCategory)) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {params.category} Shortcuts
      </h1>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ShortcutList category={params.category} />
      </Suspense>
    </main>
  );
} 