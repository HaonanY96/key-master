export const shortcutGroups = {
  copyPaste: {
    name: "复制和粘贴",
    shortcuts: [
      { keys: ["Control", "c"], description: "复制" },
      { keys: ["Control", "v"], description: "粘贴" },
    ],
  },
};

export const keyMappings = {
  windows: {
    Control: "Ctrl",
    c: "C",
    v: "V",
  },
  mac: {
    Control: "⌃",
    c: "C",
    v: "V",
  },
};
