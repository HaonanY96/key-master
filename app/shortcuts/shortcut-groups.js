import { KEY_IDENTIFIERS } from "../../components/keyboard/keyboard-constants-identifiers.json" assert { type: "json" };

// 快捷键分类
export const SHORTCUT_CATEGORIES = {
  EDIT: "edit",
  FILE: "file",
  NAVIGATION: "navigation",
  VIEW: "view",
};

// 演示用的快捷键组
export const shortcutGroups = {
  copyPaste: {
    id: "copy-paste",
    name: "Copy & Paste",
    category: SHORTCUT_CATEGORIES.EDIT,
    description: "复制和粘贴操作的快捷键",
    order: 1,
    shortcuts: [
      {
        id: "copy",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.C],
        description: "Copy",
        tooltip: "复制选中的内容到剪贴板",
        usage: "选中要复制的内容，然后按下快捷键",
      },
      {
        id: "paste",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.V],
        description: "Paste",
        tooltip: "从剪贴板粘贴内容",
        usage: "将光标放在要粘贴的位置，然后按下快捷键",
      },
    ],
  },
  undoRedo: {
    id: "undo-redo",
    name: "Undo & Redo",
    category: SHORTCUT_CATEGORIES.EDIT,
    description: "撤销和重做操作的快捷键",
    order: 2,
    shortcuts: [
      {
        id: "undo",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.Z],
        description: "Undo",
        tooltip: "撤销上一步操作",
        usage: "在需要撤销操作时按下快捷键",
      },
      {
        id: "redo",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.Y],
        description: "Redo",
        tooltip: "重做上一步被撤销的操作",
        usage: "在需要重做被撤销的操作时按下快捷键",
      },
    ],
  },
  fileOperations: {
    id: "file-operations",
    name: "File Operations",
    category: SHORTCUT_CATEGORIES.FILE,
    description: "文件操作相关的快捷键",
    order: 3,
    shortcuts: [
      {
        id: "save",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.S],
        description: "Save",
        tooltip: "保存当前文件",
        usage: "在需要保存文件时按下快捷键",
      },
      {
        id: "open",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.O],
        description: "Open",
        tooltip: "打开文件",
        usage: "在需要打开文件时按下快捷键",
      },
      {
        id: "new",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.N],
        description: "New",
        tooltip: "新建文件",
        usage: "在需要新建文件时按下快捷键",
      },
    ],
  },
  textEdit: {
    id: "text-edit",
    name: "Text Editing",
    category: SHORTCUT_CATEGORIES.EDIT,
    description: "文本编辑相关的快捷键",
    order: 4,
    shortcuts: [
      {
        id: "select-all",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.A],
        description: "Select All",
        tooltip: "选择所有内容",
        usage: "在需要全选时按下快捷键",
      },
      {
        id: "cut",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.X],
        description: "Cut",
        tooltip: "剪切选中的内容到剪贴板",
        usage: "选中要剪切的内容，然后按下快捷键",
      },
      {
        id: "find",
        keys: [KEY_IDENTIFIERS.CONTROL_LEFT, KEY_IDENTIFIERS.F],
        description: "Find",
        tooltip: "查找内容",
        usage: "在需要搜索内容时按下快捷键",
      },
    ],
  },
};

// 辅助函数：获取分组内的所有快捷键
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

// 辅助函数：按分类获取快捷键组
export function getShortcutsByCategory(category) {
  return Object.values(shortcutGroups).filter(
    group => group.category === category
  );
}

// 辅助函数：获取快捷键组的展示顺序
export function getSortedShortcutGroups() {
  return Object.values(shortcutGroups).sort((a, b) => a.order - b.order);
}
