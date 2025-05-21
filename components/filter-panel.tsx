'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FunctionType } from '@/lib/shortcuts/types';
import { formatCategoryName } from '@/app/_utils/string-utils'; // Import the moved function

export function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  
  const handleCategoryClick = (key: keyof typeof FunctionType) => {
    // Assuming FunctionType enum values are lowercase strings matching the desired URL param
    const categoryValue = FunctionType[key].toLowerCase(); 
    router.push(`/categories?category=${categoryValue}`);
  };
  
  // Get the string keys of the FunctionType enum
  // Filter out numeric keys if FunctionType is a mixed string/number enum (common in TS)
  const functionTypeKeys = Object.keys(FunctionType).filter(key => isNaN(Number(key))) as (keyof typeof FunctionType)[];

  return (
    <div className="bg-page-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-text-primary mb-4">Categories</h2>
      
      <div className="space-y-1.5">
        {functionTypeKeys.map((key) => {
          const displayName = formatCategoryName(key);
          // The actual value used for navigation, derived from the enum
          const categoryValueForUrl = FunctionType[key].toLowerCase(); 
          return (
            <button
              key={key}
              onClick={() => handleCategoryClick(key)}
              className={`w-full text-left px-4 py-2.5 rounded-md transition-colors
                ${currentCategory === categoryValueForUrl
                  ? 'bg-highlight/10 text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-highlight/5'
                }`}
            >
              {displayName}
            </button>
          );
        })}
      </div>
    </div>
  );
} 