import { CategoryType, type Category } from './types/common';

// Get base URL
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Browser environment
    return '';
  }
  // Test environment uses local server
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
};

interface GetCategoriesOptions {
  platform?: string;
  type?: CategoryType;
  software?: string;
  id?: string;
}

export async function getCategories(options: GetCategoriesOptions = {}) {
  const params = new URLSearchParams();
  
  if (options.platform) params.append('platform', options.platform);
  if (options.type) params.append('type', options.type);
  if (options.software) params.append('software', options.software);
  if (options.id) params.append('id', options.id);
  
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/categories${params.toString() ? `?${params.toString()}` : ''}`;
  
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch categories');
  
  return res.json();
}

interface GetShortcutsOptions {
  platform?: string;
  category?: string;
  software?: string;
  query?: string;
  page?: number;
  limit?: number;
  sort?: 'popularity' | 'complexity' | 'name';
}

export async function getShortcuts(options: GetShortcutsOptions = {}) {
  // Import local data
  const { windowsSystemShortcuts } = await import('./data/windows/system');
  
  // Filter data based on platform and category
  if (options.platform === 'windows') {
    return windowsSystemShortcuts;
  }
  
  // Return empty data if no platform specified
  return {
    metadata: {
      version: "1.0.0",
      platform: "",
      lastUpdated: new Date().toISOString(),
      totalShortcuts: 0,
    },
    groups: {}
  };
} 