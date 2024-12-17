'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FunctionType } from '@/lib/shortcuts/types/common';

const CATEGORY_NAMES: Record<keyof typeof FunctionType, string> = {
  WINDOW: 'Window Management',
  DESKTOP: 'Desktop Navigation',
  VIRTUAL_DESKTOP: 'Virtual Desktop',
  FILE: 'File Explorer',
  TEXT: 'Text Editing',
  SYSTEM: 'System Operations',
  UI: 'General UI',
  MENU: 'Menu Operations',
  ACCESSIBILITY: 'Accessibility',
  SETTINGS: 'Settings',
  TERMINAL: 'Terminal',
  TASKBAR: 'Taskbar',
  DIALOG: 'Dialog',
  SCREENSHOT: 'Screenshot',
  CLIPBOARD: 'Clipboard',
  SEARCH: 'Search',
  GAMING: 'Gaming',
  INPUT: 'Input Methods'
};

export function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleCategoryClick = (category: keyof typeof FunctionType) => {
    router.push(`/shortcuts/${FunctionType[category].toLowerCase()}`);
  };
  
  return (
    <div className="bg-page-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-text-primary mb-4">Categories</h2>
      
      <div className="space-y-1.5">
        {Object.entries(FunctionType).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleCategoryClick(key as keyof typeof FunctionType)}
            className="w-full text-left px-4 py-2.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-highlight/5 focus:bg-highlight/10 transition-colors"
          >
            {CATEGORY_NAMES[key as keyof typeof FunctionType]}
          </button>
        ))}
      </div>
    </div>
  );
} 