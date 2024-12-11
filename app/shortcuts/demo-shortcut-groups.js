import { KEY_IDENTIFIERS } from "@/lib/shortcuts/constants/keyboard";

// Shortcut categories for demo purposes
export const SHORTCUT_CATEGORIES = {
  EDIT: "edit",                // Text and content editing operations
  FILE: "file",                // File management operations
  NAVIGATION: "navigation",    // Navigation and movement operations
  VIEW: "view",                // View and display operations
};

// Demo shortcut groups
export const shortcutGroups = {
  "copy-paste": {
    id: "copy-paste",
    name: "Copy & Paste",
    category: SHORTCUT_CATEGORIES.EDIT,
    description: "Common clipboard operation shortcuts",
    order: 1,
    metadata: {
      complexity: "basic",
      context: "editing",
    },
    shortcuts: [
      {
        id: "copy",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.C],
        description: "Copy",
        tooltip: "Copy selected content to clipboard",
        usage: "Select content and use shortcut to copy",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "clipboard",
        },
      },
      {
        id: "paste",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.V],
        description: "Paste",
        tooltip: "Paste content from clipboard",
        usage: "Position cursor and use shortcut to paste",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "clipboard",
        },
      },
    ],
  },

  "undo-redo": {
    id: "undo-redo",
    name: "Undo & Redo",
    category: SHORTCUT_CATEGORIES.EDIT,
    description: "Action history management shortcuts",
    order: 2,
    metadata: {
      complexity: "basic",
      context: "editing",
    },
    shortcuts: [
      {
        id: "undo",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.Z],
        description: "Undo",
        tooltip: "Undo last action",
        usage: "Use shortcut to reverse recent changes",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "history",
        },
      },
      {
        id: "redo",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.Y],
        description: "Redo",
        tooltip: "Redo previously undone action",
        usage: "Use shortcut to restore undone changes",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "history",
        },
      },
    ],
  },

  "file-operations": {
    id: "file-operations",
    name: "File Operations",
    category: SHORTCUT_CATEGORIES.FILE,
    description: "Basic file management shortcuts",
    order: 3,
    metadata: {
      complexity: "basic",
      context: "files",
    },
    shortcuts: [
      {
        id: "save",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.S],
        description: "Save",
        tooltip: "Save current file",
        usage: "Save changes to current document",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "file-management",
        },
      },
      {
        id: "open",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.O],
        description: "Open",
        tooltip: "Open file",
        usage: "Open existing document",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "file-management",
        },
      },
      {
        id: "new",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.N],
        description: "New",
        tooltip: "Create new file",
        usage: "Create new document",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "file-management",
        },
      },
    ],
  },

  "text-editing": {
    id: "text-editing",
    name: "Text Editing",
    category: SHORTCUT_CATEGORIES.EDIT,
    description: "Common text editing shortcuts",
    order: 4,
    metadata: {
      complexity: "basic",
      context: "text",
    },
    shortcuts: [
      {
        id: "select-all",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.A],
        description: "Select All",
        tooltip: "Select all content",
        usage: "Select entire document content",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "selection",
        },
      },
      {
        id: "cut",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.X],
        description: "Cut",
        tooltip: "Cut selected content to clipboard",
        usage: "Remove and copy selected content",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "clipboard",
        },
      },
      {
        id: "find",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.F],
        description: "Find",
        tooltip: "Search for content",
        usage: "Search within document",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "search",
        },
      },
    ],
  },
};

// Helper function: Get all shortcuts from all groups
export function getAllShortcuts() {
  const result = [];
  Object.values(shortcutGroups).forEach(group => {
    group.shortcuts.forEach(shortcut => {
      result.push({
        ...shortcut,
        groupId: group.id,
        groupName: group.name,
        category: group.category,
      });
    });
  });
  return result;
}

// Helper function: Get shortcut groups by category
export function getShortcutsByCategory(category) {
  return Object.values(shortcutGroups).filter(
    group => group.category === category
  );
}

// Helper function: Get sorted shortcut groups by order
export function getSortedShortcutGroups() {
  return Object.values(shortcutGroups).sort((a, b) => a.order - b.order);
}
