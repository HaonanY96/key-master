import { KEY_IDENTIFIERS } from "@/lib/shortcuts/constants/keyboard";
import { 
  FunctionType,
  ShortcutGroup,
  ShortcutsCollection,
  Shortcut
} from "@/lib/shortcuts/types/common";

// Export Shortcut type
export type { Shortcut };

// Demo shortcut groups
export const demoShortcutGroups: Record<string, ShortcutGroup> = {
  "copy-paste": {
    id: "copy-paste",
    name: "Copy & Paste",
    category: FunctionType.TEXT,
    description: "Common clipboard operation shortcuts",
    order: 1,
    metadata: {
      complexity: "basic",
      context: "clipboard",
    },
    shortcuts: [
      {
        id: "copy",
        name: "Copy",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.C],
        description: "Copy selected content to the clipboard while keeping the original intact",
        usage: "When you want to duplicate content elsewhere",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "clipboard",
          relatedShortcuts: ["paste", "cut", "clipboard-history"],
        },
      },
      {
        id: "paste",
        name: "Paste",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.V],
        description: "Insert content from the clipboard at the current cursor position",
        usage: "When you want to insert previously copied content",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "clipboard",
          relatedShortcuts: ["copy", "cut", "clipboard-history"],
        },
      },
      {
        id: "cut",
        name: "Cut",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.X],
        description: "Remove selected content and copy it to the clipboard for moving elsewhere",
        usage: "When you want to move content to a different location",
        metadata: {
          complexity: "basic",
          popularity: "high",
          context: "clipboard",
          relatedShortcuts: ["copy", "paste", "clipboard-history"],
        },
      },
    ],
  },
};

// Export complete shortcuts collection
export const demoShortcuts: ShortcutsCollection = {
  metadata: {
    version: "1.0.0",
    platform: "windows",
    lastUpdated: "2024-03-20",
    totalShortcuts: Object.values(demoShortcutGroups).reduce(
      (total, group) => total + group.shortcuts.length, 
      0
    ),
  },
  groups: demoShortcutGroups,
};

// Get all shortcuts helper function
export function getAllShortcuts(): Shortcut[] {
  const result: Shortcut[] = [];
  Object.values(demoShortcutGroups).forEach(group => {
    result.push(...group.shortcuts);
  });
  return result;
}
