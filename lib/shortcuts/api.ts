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
  const params = new URLSearchParams();
  
  if (options.platform) params.append('platform', options.platform);
  if (options.category) params.append('category', options.category);
  if (options.software) params.append('software', options.software);
  
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/shortcuts${params.toString() ? `?${params.toString()}` : ''}`;
  
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch shortcuts');
  
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.error || 'Failed to fetch shortcuts');
  }
  
  return data;
} 