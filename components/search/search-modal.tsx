'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full px-4 py-3 text-left text-text-secondary bg-page-white rounded-lg border border-highlight/10 hover:border-highlight/20 focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <span>Search shortcuts...</span>
        </div>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="min-h-screen px-4 flex items-center justify-center">
          <div className="fixed inset-0 bg-text-primary/30" aria-hidden="true" />
          
          <Dialog.Panel className="relative bg-page-white w-full max-w-2xl rounded-xl shadow-lg">
            {/* Search input and results */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
} 