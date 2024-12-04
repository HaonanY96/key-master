// 键盘按键映射
export const keyMappings = {
  windows: {
    Control: "Ctrl",
    Meta: "Win",
    Alt: "Alt",
    Escape: "Esc",
    Shift: "Shift",
    Enter: "Enter",
    Backspace: "Backspace",
    Tab: "Tab",
    CapsLock: "Caps",
    Space: "Space",
    ArrowUp: "Up",
    ArrowDown: "Down",
    ArrowLeft: "Left",
    ArrowRight: "Right",
    Delete: "Del",
  },
  mac: {
    Control: "Control",
    Meta: "Command",
    Option: "Option",
    Escape: "Esc",
    Shift: "Shift",
    Return: "Return",
    Backspace: "Delete",
    Tab: "Tab",
    CapsLock: "Caps",
    Space: "Space",
    ArrowUp: "Up",
    ArrowDown: "Down",
    ArrowLeft: "Left",
    ArrowRight: "Right",
  },
};

// SVG 键位ID映射
export const keyPositionMap = {
  windows: {
    // 第一行
    "key-escape": "Escape",
    "key-f1": "F1",
    "key-f2": "F2",
    "key-f3": "F3",
    "key-f4": "F4",
    "key-f5": "F5",
    "key-f6": "F6",
    "key-f7": "F7",
    "key-f8": "F8",
    "key-f9": "F9",
    "key-f10": "F10",
    "key-f11": "F11",
    "key-f12": "F12",
    "key-del": "Delete",
    // 第二行
    "key-backquote": "`",
    "key-1": "1",
    "key-2": "2",
    "key-3": "3",
    "key-4": "4",
    "key-5": "5",
    "key-6": "6",
    "key-7": "7",
    "key-8": "8",
    "key-9": "9",
    "key-0": "0",
    "key-minus": "-",
    "key-equal": "=",
    "key-backspace": "Backspace",
    // 第三行
    "key-tab": "Tab",
    "key-q": "q",
    "key-w": "w",
    "key-e": "e",
    "key-r": "r",
    "key-t": "t",
    "key-y": "y",
    "key-u": "u",
    "key-i": "i",
    "key-o": "o",
    "key-p": "p",
    "key-bracketleft": "[",
    "key-bracketright": "]",
    "key-backslash": "\\",
    // 第四行
    "key-capslock": "CapsLock",
    "key-a": "a",
    "key-s": "s",
    "key-d": "d",
    "key-f": "f",
    "key-g": "g",
    "key-h": "h",
    "key-j": "j",
    "key-k": "k",
    "key-l": "l",
    "key-semicolon": ";",
    "key-quote": "'",
    "key-enter": "Enter",
    // 第五行
    "key-shiftleft": "Shift",
    "key-z": "z",
    "key-x": "x",
    "key-c": "c",
    "key-v": "v",
    "key-b": "b",
    "key-n": "n",
    "key-m": "m",
    "key-comma": ",",
    "key-period": ".",
    "key-slash": "/",
    "key-shiftright": "Shift",
    // 第六行
    "key-controlleft": "Control",
    "key-metaleft": "Meta",
    "key-altleft": "Alt",
    "key-space": "Space",
    "key-altright": "Alt",
    "key-metaright": "Meta",
    "key-controlright": "Control",
    // 方向键
    "key-arrowleft": "ArrowLeft",
    "key-arrowup": "ArrowUp",
    "key-arrowdown": "ArrowDown",
    "key-arrowright": "ArrowRight",
  },
  mac: {
    // 第一行
    "key-escape": "Escape",
    "key-f1": "F1",
    "key-f2": "F2",
    "key-f3": "F3",
    "key-f4": "F4",
    "key-f5": "F5",
    "key-f6": "F6",
    "key-f7": "F7",
    "key-f8": "F8",
    "key-f9": "F9",
    "key-f10": "F10",
    "key-f11": "F11",
    "key-f12": "F12",
    "key-eject": "Eject",
    // 第二行
    "key-backquote": "`",
    "key-1": "1",
    "key-2": "2",
    "key-3": "3",
    "key-4": "4",
    "key-5": "5",
    "key-6": "6",
    "key-7": "7",
    "key-8": "8",
    "key-9": "9",
    "key-0": "0",
    "key-minus": "-",
    "key-equal": "=",
    "key-backspace": "Backspace",
    // 第三行
    "key-tab": "Tab",
    "key-q": "q",
    "key-w": "w",
    "key-e": "e",
    "key-r": "r",
    "key-t": "t",
    "key-y": "y",
    "key-u": "u",
    "key-i": "i",
    "key-o": "o",
    "key-p": "p",
    "key-bracketleft": "[",
    "key-bracketright": "]",
    "key-backslash": "\\",
    // 第四行
    "key-capslock": "CapsLock",
    "key-a": "a",
    "key-s": "s",
    "key-d": "d",
    "key-f": "f",
    "key-g": "g",
    "key-h": "h",
    "key-j": "j",
    "key-k": "k",
    "key-l": "l",
    "key-semicolon": ";",
    "key-quote": "'",
    "key-return": "Return",
    // 第五行
    "key-shiftleft": "Shift",
    "key-z": "z",
    "key-x": "x",
    "key-c": "c",
    "key-v": "v",
    "key-b": "b",
    "key-n": "n",
    "key-m": "m",
    "key-comma": ",",
    "key-period": ".",
    "key-slash": "/",
    "key-shiftright": "Shift",
    // 第六行
    "key-fn": "Fn",
    "key-controlleft": "Control",
    "key-optionleft": "Option",
    "key-metaleft": "Meta",
    "key-space": "Space",
    "key-metaright": "Meta",
    "key-optionright": "Option",
    // 方向键
    "key-arrowleft": "ArrowLeft",
    "key-arrowup": "ArrowUp",
    "key-arrowdown": "ArrowDown",
    "key-arrowright": "ArrowRight",
  },
};

// 演示用的快捷键组
export const shortcutGroups = {
  copyPaste: {
    name: "Copy & Paste",
    shortcuts: [
      { keys: ["Control", "c"], description: "Copy" },
      { keys: ["Control", "v"], description: "Paste" },
    ],
  },
  undoRedo: {
    name: "Undo & Redo",
    shortcuts: [
      { keys: ["Control", "z"], description: "Undo" },
      { keys: ["Control", "y"], description: "Redo" },
    ],
  },
  fileOperations: {
    name: "File Operations",
    shortcuts: [
      { keys: ["Control", "s"], description: "Save" },
      { keys: ["Control", "o"], description: "Open" },
      { keys: ["Control", "n"], description: "New" },
    ],
  },
  textEdit: {
    name: "Text Editing",
    shortcuts: [
      { keys: ["Control", "a"], description: "Select All" },
      { keys: ["Control", "x"], description: "Cut" },
      { keys: ["Control", "f"], description: "Find" },
    ],
  },
};

// 键盘样式配置
export const keyboardStyles = {
  // 按键基础样式
  keyBase: {
    fill: "#F1F1EF",
    rx: 8,
  },
  // 按键文字样式
  keyText: {
    fill: "#545454",
  },
  // 键盘外壳样式
  keyboard: {
    width: 1782,
    height: 738,
    viewBox: "0 0 1782 738",
    background: "#C0C0C0",
  },
  // 动画变体
  variants: {
    initial: {
      fill: "#F1F1EF",
    },
    highlighted: {
      fill: "#FFED4A",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },
};

// 键盘布局配置
export const keyboardLayout = {
  windows: {
    // Windows 键盘特有的布局配置
    keySpacing: 8,
    keySize: {
      standard: { width: 96, height: 96 },
      wide: { width: 168, height: 96 },
      space: { width: 480, height: 96 },
    },
  },
  mac: {
    // Mac 键盘特有的布局配置
    keySpacing: 8,
    keySize: {
      standard: { width: 96, height: 96 },
      wide: { width: 168, height: 96 },
      space: { width: 480, height: 96 },
    },
  },
};
