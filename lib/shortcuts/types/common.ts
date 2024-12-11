/**
 * Shortcut category enum
 */
export enum ShortcutCategory {
  WINDOW = "window-management",
  DESKTOP = "desktop-navigation",
  VIRTUAL_DESKTOP = "virtual-desktop",
  FILE_EXPLORER = "file-explorer",
  TEXT_EDITING = "text-editing",
  GENERAL = "general-operations",
  MENU = "menu-operations",
  WINDOWS_KEY = "windows-key",
  ACCESSIBILITY = "accessibility",
  SETTINGS = "settings",
  TERMINAL = "terminal",
  TASKBAR = "taskbar",
  DIALOG = "dialog",
  GENERAL_UI = "general-ui",
  SCREENSHOT = "screenshot",
  CLIPBOARD = "clipboard",
  SEARCH = "search",
  QUICK_ACCESS = "quick-access",
  GAMING = "gaming",
  INPUT = "input-methods",
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
  keys: string[];
  description: string;
  tooltip: string;
  usage: string;
  metadata: ShortcutMetadata;
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
 * Shortcut group
 */
export interface ShortcutGroup {
  id: string;
  name: string;
  category: ShortcutCategory;
  description: string;
  order: number;
  metadata: ShortcutGroupMetadata;
  shortcuts: Shortcut[];
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