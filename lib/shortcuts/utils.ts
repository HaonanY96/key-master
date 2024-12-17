import { 
  Shortcut, 
  ShortcutGroup, 
  ShortcutsCollection, 
  ShortcutMetadata, 
  SearchOptions, 
  SearchResult, 
  ShortcutWithGroup,
  FilterOptions 
} from "./types/common";
import { fuzzyMatch, calculateSimilarity } from './utils/search';

/**
 * Sort options interface
 */
interface SortOptions {
  /** Sort criteria, defaults to "order" */
  sortBy?: "order" | "name";
}

/**
 * Search options with fuzzy search settings
 */
interface FuzzySearchOptions extends SearchOptions, FilterOptions {
  /** Enable fuzzy search */
  fuzzy?: boolean;
  /** Fuzzy search similarity threshold (0-1) */
  threshold?: number;
}

/**
 * Get all shortcuts with optional filtering
 */
export function getAllShortcuts(
  collection: ShortcutsCollection,
  options: FilterOptions = {}
): ShortcutWithGroup[] {
  try {
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

    // Apply filters if provided
    if (options.category) {
      shortcuts = shortcuts.filter(s => s.category === options.category);
    }
    if (options.complexity) {
      shortcuts = shortcuts.filter(s => s.metadata.complexity === options.complexity);
    }
    if (options.platform) {
      shortcuts = shortcuts.filter(s => collection.metadata.platform === options.platform);
    }
    if (options.context) {
      shortcuts = shortcuts.filter(s => s.metadata.context === options.context);
    }

    return shortcuts;
  } catch (error) {
    console.error('Error in getAllShortcuts:', error);
    return [];
  }
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
 * Get sorted shortcut groups
 */
export function getSortedShortcutGroups(
  collection: ShortcutsCollection,
  options: SortOptions = { sortBy: "order" }
): ShortcutGroup[] {
  try {
    return Object.values(collection.groups).sort((a, b) => {
      if (options.sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return a.order - b.order;
    });
  } catch (error) {
    console.error('Error in getSortedShortcutGroups:', error);
    return [];
  }
}

/**
 * Calculate search score for a shortcut
 */
function calculateSearchScore(shortcut: ShortcutWithGroup, searchTerm: string): number {
  const searchFields = [
    shortcut.description,
    shortcut.usage,
    shortcut.groupName,
    ...shortcut.keys
  ].filter((field): field is string => Boolean(field));

  return Math.max(
    ...searchFields.map(field => calculateSimilarity(field, searchTerm))
  );
}

/**
 * Enhanced search shortcuts with fuzzy search capability
 */
export function enhancedSearchShortcuts(
  collection: ShortcutsCollection,
  options: FuzzySearchOptions
): SearchResult {
  try {
    let shortcuts = getAllShortcuts(collection, options);
    
    // Search
    if (options.query) {
      const searchTerm = options.query.toLowerCase();
      const searchResults: Array<{ shortcut: ShortcutWithGroup; score: number }> = [];

      shortcuts.forEach(shortcut => {
        const searchFields = [
          shortcut.id,
          shortcut.description,
          shortcut.usage,
          ...shortcut.keys,
          shortcut.groupName,
          shortcut.metadata.context
        ].filter((field): field is string => Boolean(field));

        // Check if any field matches
        const matches = options.fuzzy
          ? searchFields.some(field => fuzzyMatch(field, searchTerm, options.threshold))
          : searchFields.some(field => field.toLowerCase().includes(searchTerm));

        if (matches) {
          const score = calculateSearchScore(shortcut, searchTerm);
          searchResults.push({ shortcut, score });
        }
      });

      // Sort by score if using fuzzy search and relevance sorting
      if (options.fuzzy && options.sortBy === 'relevance') {
        searchResults.sort((a, b) => b.score - a.score);
      }

      shortcuts = searchResults.map(result => result.shortcut);
    }
    
    // Apply other sorting if not already sorted by relevance
    if (options.sortBy && options.sortBy !== 'relevance') {
      shortcuts.sort((a, b) => {
        switch (options.sortBy) {
          case 'popularity':
            return (b.metadata.popularity || 'low').localeCompare(
              a.metadata.popularity || 'low'
            );
          case 'complexity':
            return a.metadata.complexity.localeCompare(b.metadata.complexity);
          default:
            return 0;
        }
      });
    }
    
    // Pagination
    const total = shortcuts.length;
    const offset = options.offset || 0;
    const limit = options.limit || 20;
    
    shortcuts = shortcuts.slice(offset, offset + limit);
    
    return {
      items: shortcuts,
      total,
      hasMore: total > offset + shortcuts.length
    };
  } catch (error) {
    console.error('Error in enhancedSearchShortcuts:', error);
    return {
      items: [],
      total: 0,
      hasMore: false
    };
  }
}