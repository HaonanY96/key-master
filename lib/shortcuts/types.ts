/**
 * Category type definition - Category hierarchy types
 */
export enum CategoryType {
  PLATFORM = 'platform',    // Platform type (Windows/Mac)
  SYSTEM = 'system',        // System shortcuts
  SOFTWARE = 'software',    // Software shortcuts
  FUNCTION = 'function'     // Function categories
}

/**
 * Function category type - Specific function categories
 */
export enum FunctionType {
  // Window Management
  WINDOW = "window-management",
  DESKTOP = "desktop-navigation",
  VIRTUAL_DESKTOP = "virtual-desktop",
  
  // File Operations
  FILE = "file-explorer",
  
  // Text Editing
  TEXT = "text-editing",
  CLIPBOARD = "clipboard",
  
  // System Operations
  SYSTEM = "system-operations",
  SETTINGS = "settings",
  TERMINAL = "terminal",
  
  // UI Operations
  UI = "general-ui",
  MENU = "menu-operations",
  TASKBAR = "taskbar",
  DIALOG = "dialog",
  
  // Special Features
  SEARCH = "search",
  SCREENSHOT = "screenshot",
  GAMING = "gaming",
  ACCESSIBILITY = "accessibility",
  INPUT = "input-methods",
}

/**
 * Category interface - Category structure
 */
export interface Category {
  id: string;              // Unique identifier
  name: string;            // Display name
  type: CategoryType;      // Category type
  description: string;     // Description
  parentId?: string;       // Parent category ID
  functionType?: FunctionType; // Used when type is FUNCTION
  order?: number;         // Sort order
}

/**
 * Shortcut complexity levels
 */
export type ShortcutComplexity = "basic" | "intermediate" | "advanced";

/**
 * Shortcut popularity levels
 */
export type ShortcutPopularity = "low" | "medium" | "high";

/**
 * Shortcut metadata
 */
export interface ShortcutMetadata {
  complexity: ShortcutComplexity;
  popularity?: ShortcutPopularity;
  context: string;
  holdTime?: number;
  pressCount?: number;
  relatedShortcuts?: string[];
}

/**
 * Single shortcut
 */
export interface Shortcut {
  id: string;
  name: string;
  description: string;
  usage?: string;
  keys: string[];
  metadata: ShortcutMetadata;
  platform?: string;
  category?: string;
  software?: string;
}

/**
 * Shortcut group metadata
 */
export interface ShortcutGroupMetadata {
  complexity: ShortcutComplexity;
  context: string;
  platform?: string;
}

/**
 * Single shortcut with its group information
 * Extends Shortcut to include the group context
 */
export interface ShortcutWithGroup extends Shortcut {
  groupId: string;      // ID of the parent group
  groupName: string;    // Name of the parent group
  category: FunctionType; // Category from the parent group
}

/**
 * Shortcut group
 */
export interface ShortcutGroup {
  id: string;
  name: string;
  category: FunctionType;
  description: string;
  order: number;
  shortcuts: Shortcut[];
  metadata?: ShortcutGroupMetadata;
}

/**
 * Shortcuts collection metadata
 */
export interface ShortcutsCollectionMetadata {
  version: string;
  platform: string;
  lastUpdated: string;
  totalShortcuts: number;
}

/**
 * Complete shortcuts collection
 */
export interface ShortcutsCollection {
  metadata: ShortcutsCollectionMetadata;
  groups: Record<string, ShortcutGroup>;
}

/**
 * API response interfaces
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  metadata?: {
    total: number;
    currentPage?: number;
    totalPages?: number;
    limit?: number;
  };
}

export interface ShortcutResponse extends ApiResponse<Shortcut[]> {}
export interface CategoryResponse extends ApiResponse<Category[]> {}

export interface SearchOptions {
  query?: string;
  offset?: number;
  limit?: number;
  sortBy?: 'relevance' | 'popularity' | 'complexity';
}

export interface SearchResult {
  items: ShortcutWithGroup[];
  total: number;
  hasMore: boolean;
}

export interface FilterOptions {
  category?: string;
  complexity?: ShortcutComplexity;
  platform?: string;
  context?: string;
}