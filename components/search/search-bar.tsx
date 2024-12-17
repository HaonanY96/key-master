'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search shortcuts..."
          className="w-full px-4 py-2 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-highlight focus:border-highlight"
        />
        <MagnifyingGlassIcon 
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
    </form>
  );
} 