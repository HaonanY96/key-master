'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ShortcutCard from '../shortcuts/shortcut-card';
import type { Shortcut } from '@/lib/shortcuts/types/common';

export default function SearchResults() {
  const [results, setResults] = useState<Shortcut[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    async function fetchResults() {
      setLoading(true);
      try {
        const response = await fetch(`/api/shortcuts?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (data.success) {
          setResults(data.data);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      fetchResults();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="p-6 text-center text-text-secondary">
        Enter a search term to find shortcuts
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-6 text-center text-text-secondary">
        No shortcuts found for &quot;{query}&quot;
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="space-y-4">
        {results.map((shortcut) => (
          <ShortcutCard
            key={shortcut.id}
            shortcut={shortcut}
            variant="compact"
          />
        ))}
      </div>
    </div>
  );
} 