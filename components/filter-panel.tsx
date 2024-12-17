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
  const currentCategory = searchParams.get('category');
  
  const handleCategoryClick = (key: keyof typeof FunctionType) => {
    const categoryValue = FunctionType[key].toLowerCase();
    router.push(`/categories?category=${categoryValue}`);
  };
  
  return (
    <div className="bg-page-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-text-primary mb-4">Categories</h2>
      
      <div className="space-y-1.5">
        {Object.entries(CATEGORY_NAMES).map(([key, name]) => {
          const categoryValue = FunctionType[key as keyof typeof FunctionType].toLowerCase();
          return (
            <button
              key={key}
              onClick={() => handleCategoryClick(key as keyof typeof FunctionType)}
              className={`w-full text-left px-4 py-2.5 rounded-md transition-colors
                ${currentCategory === categoryValue
                  ? 'bg-highlight/10 text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-highlight/5'
                }`}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
} 