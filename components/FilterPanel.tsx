'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ShortcutCategory } from '@/lib/shortcuts/types/common';

const CATEGORY_NAMES: Record<keyof typeof ShortcutCategory, string> = {
  WINDOW: 'Window Management',
  DESKTOP: 'Desktop Navigation',
  VIRTUAL_DESKTOP: 'Virtual Desktop',
  FILE_EXPLORER: 'File Explorer',
  TEXT_EDITING: 'Text Editing',
  GENERAL: 'General Operations',
  MENU: 'Menu Operations',
  WINDOWS_KEY: 'Windows Key',
  ACCESSIBILITY: 'Accessibility',
  SETTINGS: 'Settings',
  TERMINAL: 'Terminal',
  TASKBAR: 'Taskbar',
  DIALOG: 'Dialog',
  GENERAL_UI: 'General UI',
  SCREENSHOT: 'Screenshot',
  CLIPBOARD: 'Clipboard',
  SEARCH: 'Search',
  QUICK_ACCESS: 'Quick Access',
  GAMING: 'Gaming',
  INPUT: 'Input Methods'
};

export function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleCategoryClick = (category: string) => {
    router.push(`/shortcuts/${category}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Shortcut Categories</h2>
      
      <div className="space-y-2">
        {Object.entries(ShortcutCategory).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleCategoryClick(value)}
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            {CATEGORY_NAMES[key as keyof typeof ShortcutCategory]}
          </button>
        ))}
      </div>
    </div>
  );
} 