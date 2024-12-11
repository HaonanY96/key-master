import { Shortcut, ShortcutGroup, ShortcutsCollection, ShortcutMetadata, ShortcutCategory } from "./types/common";

/**
 * Extended shortcut type with group information
 */
interface ShortcutWithGroup extends Omit<Shortcut, 'metadata'> {
  /** Group identifier */
  groupId: string;
  /** Group name */
  groupName: string;
  /** Category */
  category: ShortcutCategory;
  /** Metadata including context */
  metadata: ShortcutMetadata;
}

/**
 * Filter options interface
 */
interface FilterOptions {
  /** Filter by category */
  category?: string;
  /** Filter by complexity */
  complexity?: string;
}

/**
 * Sort options interface
 */
interface SortOptions {
  /** Sort criteria, defaults to "order" */
  sortBy?: "order" | "name";
}

/**
 * Get all shortcuts with optional filtering
 * @param {ShortcutsCollection} collection - Shortcuts collection object
 * @param {FilterOptions} options - Filter options
 * @param {string} [options.category] - Category to filter by
 * @param {string} [options.complexity] - Complexity level to filter by
 * @returns {ShortcutWithGroup[]} Array of shortcuts with group information
 */
export function getAllShortcuts(
  collection: ShortcutsCollection,
  options: FilterOptions = {}
): ShortcutWithGroup[] {
  let shortcuts: ShortcutWithGroup[] = [];
  
  Object.values(collection.groups).forEach(group => {
    group.shortcuts.forEach(shortcut => {
      shortcuts.push({
        ...shortcut,
        groupId: group.id,
        groupName: group.name,
        category: group.category,
      });
    });
  });

  if (options.category) {
    shortcuts = shortcuts.filter(s => s.category === options.category);
  }
  if (options.complexity) {
    shortcuts = shortcuts.filter(s => s.metadata.complexity === options.complexity);
  }

  return shortcuts;
}

/**
 * Get shortcuts by category
 * @param {ShortcutsCollection} collection - Shortcuts collection object
 * @param {string} category - Category to filter by
 * @returns {ShortcutGroup[]} Array of shortcut groups in the category
 */
export function getShortcutsByCategory(
  collection: ShortcutsCollection,
  category: string
): ShortcutGroup[] {
  return Object.values(collection.groups).filter(
    group => group.category === category
  );
}

/**
 * Get shortcut by ID
 * @param {ShortcutsCollection} collection - Shortcuts collection object
 * @param {string} shortcutId - Shortcut identifier
 * @returns {ShortcutWithGroup|null} Shortcut object with group info or null if not found
 */
export function getShortcutById(
  collection: ShortcutsCollection,
  shortcutId: string
): ShortcutWithGroup | null {
  for (const group of Object.values(collection.groups)) {
    const shortcut = group.shortcuts.find(s => s.id === shortcutId);
    if (shortcut) {
      return {
        ...shortcut,
        groupId: group.id,
        groupName: group.name,
        category: group.category,
      };
    }
  }
  return null;
}

/**
 * Get sorted shortcut groups
 * @param {ShortcutsCollection} collection - Shortcuts collection object
 * @param {SortOptions} options - Sort options
 * @param {string} [options.sortBy="order"] - Sort criteria ("order" or "name")
 * @returns {ShortcutGroup[]} Sorted array of shortcut groups
 */
export function getSortedShortcutGroups(
  collection: ShortcutsCollection,
  options: SortOptions = { sortBy: "order" }
): ShortcutGroup[] {
  return Object.values(collection.groups).sort((a, b) => {
    if (options.sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.order - b.order;
  });
}

/**
 * Get all available categories
 * @param {ShortcutsCollection} collection - Shortcuts collection object
 * @returns {string[]} Array of unique categories
 */
export function getCategories(collection: ShortcutsCollection): string[] {
  const categories = new Set<string>();
  Object.values(collection.groups).forEach(group => {
    categories.add(group.category);
  });
  return Array.from(categories).sort();
}

/**
 * Get all available complexity levels
 * @param {ShortcutsCollection} collection - Shortcuts collection object
 * @returns {string[]} Array of unique complexity levels
 */
export function getComplexityLevels(collection: ShortcutsCollection): string[] {
  const levels = new Set<string>();
  Object.values(collection.groups).forEach(group => {
    group.shortcuts.forEach(shortcut => {
      if (shortcut.metadata?.complexity) {
        levels.add(shortcut.metadata.complexity);
      }
    });
  });
  return Array.from(levels).sort();
}

/**
 * Search shortcuts by keyword
 * @param {ShortcutsCollection} collection - Shortcuts collection object
 * @param {string} keyword - Search keyword
 * @returns {ShortcutWithGroup[]} Array of matching shortcuts
 */
export function searchShortcuts(
  collection: ShortcutsCollection,
  keyword: string
): ShortcutWithGroup[] {
  const searchTerm = keyword.toLowerCase();
  const shortcuts = getAllShortcuts(collection);
  
  return shortcuts.filter(shortcut => 
    shortcut.id.toLowerCase().includes(searchTerm) ||
    shortcut.description.toLowerCase().includes(searchTerm) ||
    shortcut.tooltip.toLowerCase().includes(searchTerm) ||
    shortcut.usage.toLowerCase().includes(searchTerm) ||
    shortcut.keys.some(key => key.toLowerCase().includes(searchTerm))
  );
}