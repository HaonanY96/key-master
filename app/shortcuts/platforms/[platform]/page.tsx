import { Suspense } from 'react';
import { ShortcutList } from '../../../../components/ShortcutList';
import { notFound } from 'next/navigation';

interface PlatformPageProps {
  params: {
    platform: string;
  };
}

const VALID_PLATFORMS = ['windows', 'macos', 'linux'];

export default function PlatformPage({ params }: PlatformPageProps) {
  // Validate if platform exists
  if (!VALID_PLATFORMS.includes(params.platform.toLowerCase())) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {params.platform.toUpperCase()} Shortcuts
      </h1>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ShortcutList platform={params.platform} />
      </Suspense>
    </main>
  );
} 