import { KEY_IDENTIFIERS } from "./keyboard-constants-identifiers.json" assert { type: "json" };

// 1. 键盘尺寸常量
export const KEYBOARD_DIMENSIONS = {
  viewBox: { width: 1782, height: 738, x: 0, y: 0 },
  case: {
    width: 1782,
    height: 738,
    padding: { top: 40, left: 105 },
  },
};

// 2. 按键样式常量
export const KEY_STYLES = {
  default: {
    fill: "#F1F1EF",
    textFill: "#545454",
    rx: 8,
    filter: "url(#filter_ddi)",
    shapeRendering: "crispEdges",
    transition: "all 0.2s ease",
  },
  hover: {
    fill: "#E5E5E3",
    textFill: "#404040",
    filter: "url(#filter_ddi_hover)",
  },
  active: {
    fill: "#D9D9D7",
    textFill: "#333333",
    transform: "translateY(1px)",
  },
  highlighted: {
    fill: "#FFED4A",
    textFill: "#545454",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// 3. 按键尺寸配置
export const KEY_SIZES = {
  // 标准按键
  standard: { width: 96, height: 96 },

  // 特殊按键(通用)
  special: {
    [KEY_IDENTIFIERS.ESCAPE]: { width: 168, height: 96 },
    [KEY_IDENTIFIERS.TAB]: { width: 168, height: 96 },
    [KEY_IDENTIFIERS.CAPS_LOCK]: { width: 192, height: 96 },
    [KEY_IDENTIFIERS.SHIFT_LEFT]: { width: 240, height: 96 },
    [KEY_IDENTIFIERS.SHIFT_RIGHT]: { width: 240, height: 96 },
    [KEY_IDENTIFIERS.ARROW_UP]: { width: 96, height: 46 },
    [KEY_IDENTIFIERS.ARROW_DOWN]: { width: 96, height: 46 },
  },

  // Windows 特有
  windows: {
    [KEY_IDENTIFIERS.CONTROL_LEFT]: { width: 96, height: 96 },
    [KEY_IDENTIFIERS.CONTROL_RIGHT]: { width: 96, height: 96 },
    [KEY_IDENTIFIERS.META_LEFT]: { width: 96, height: 96 },
    [KEY_IDENTIFIERS.META_RIGHT]: { width: 96, height: 96 },
    [KEY_IDENTIFIERS.ALT_LEFT]: { width: 96, height: 96 },
    [KEY_IDENTIFIERS.ALT_RIGHT]: { width: 96, height: 96 },
    [KEY_IDENTIFIERS.SPACE]: { width: 596, height: 96 },
    [KEY_IDENTIFIERS.BACKSPACE]: { width: 168, height: 96 },
    [KEY_IDENTIFIERS.ENTER]: { width: 180, height: 96 },
  },

  // Mac 特有
  mac: {
    [KEY_IDENTIFIERS.BACKSPACE]: { width: 168, height: 96 },
    [KEY_IDENTIFIERS.ENTER]: { width: 180, height: 96 },
    [KEY_IDENTIFIERS.META_LEFT]: { width: 144, height: 96 },
    [KEY_IDENTIFIERS.META_RIGHT]: { width: 144, height: 96 },
    [KEY_IDENTIFIERS.SPACE]: { width: 504, height: 96 },
  },
};

// 4. 键盘布局配置
export const KEYBOARD_LAYOUT = {
  spacing: { horizontal: 8, vertical: 8 },
  rows: {
    windows: [
      {
        y: 40, // 功能键行
        keys: [
          KEY_IDENTIFIERS.ESCAPE,
          KEY_IDENTIFIERS.F1,
          KEY_IDENTIFIERS.F2,
          KEY_IDENTIFIERS.F3,
          KEY_IDENTIFIERS.F4,
          KEY_IDENTIFIERS.F5,
          KEY_IDENTIFIERS.F6,
          KEY_IDENTIFIERS.F7,
          KEY_IDENTIFIERS.F8,
          KEY_IDENTIFIERS.F9,
          KEY_IDENTIFIERS.F10,
          KEY_IDENTIFIERS.F11,
          KEY_IDENTIFIERS.F12,
          KEY_IDENTIFIERS.DELETE,
        ],
      },
      {
        y: 148, // 数字键行
        spacing: 8,
        keys: [
          KEY_IDENTIFIERS.BACKQUOTE,
          KEY_IDENTIFIERS.DIGIT_1,
          KEY_IDENTIFIERS.DIGIT_2,
          KEY_IDENTIFIERS.DIGIT_3,
          KEY_IDENTIFIERS.DIGIT_4,
          KEY_IDENTIFIERS.DIGIT_5,
          KEY_IDENTIFIERS.DIGIT_6,
          KEY_IDENTIFIERS.DIGIT_7,
          KEY_IDENTIFIERS.DIGIT_8,
          KEY_IDENTIFIERS.DIGIT_9,
          KEY_IDENTIFIERS.DIGIT_0,
          KEY_IDENTIFIERS.MINUS,
          KEY_IDENTIFIERS.EQUAL,
          KEY_IDENTIFIERS.BACKSPACE,
        ],
      },
      {
        y: 256, // 第一字母行
        spacing: 8,
        keys: [
          KEY_IDENTIFIERS.TAB,
          KEY_IDENTIFIERS.Q,
          KEY_IDENTIFIERS.W,
          KEY_IDENTIFIERS.E,
          KEY_IDENTIFIERS.R,
          KEY_IDENTIFIERS.T,
          KEY_IDENTIFIERS.Y,
          KEY_IDENTIFIERS.U,
          KEY_IDENTIFIERS.I,
          KEY_IDENTIFIERS.O,
          KEY_IDENTIFIERS.P,
          KEY_IDENTIFIERS.BRACKET_LEFT,
          KEY_IDENTIFIERS.BRACKET_RIGHT,
          KEY_IDENTIFIERS.BACKSLASH,
        ],
      },
      {
        y: 364, // 第二字母行
        spacing: 8,
        keys: [
          KEY_IDENTIFIERS.CAPS_LOCK,
          KEY_IDENTIFIERS.A,
          KEY_IDENTIFIERS.S,
          KEY_IDENTIFIERS.D,
          KEY_IDENTIFIERS.F,
          KEY_IDENTIFIERS.G,
          KEY_IDENTIFIERS.H,
          KEY_IDENTIFIERS.J,
          KEY_IDENTIFIERS.K,
          KEY_IDENTIFIERS.L,
          KEY_IDENTIFIERS.SEMICOLON,
          KEY_IDENTIFIERS.QUOTE,
          KEY_IDENTIFIERS.ENTER,
        ],
      },
      {
        y: 472, // 第三字母行
        spacing: 8,
        keys: [
          KEY_IDENTIFIERS.SHIFT_LEFT,
          KEY_IDENTIFIERS.Z,
          KEY_IDENTIFIERS.X,
          KEY_IDENTIFIERS.C,
          KEY_IDENTIFIERS.V,
          KEY_IDENTIFIERS.B,
          KEY_IDENTIFIERS.N,
          KEY_IDENTIFIERS.M,
          KEY_IDENTIFIERS.COMMA,
          KEY_IDENTIFIERS.PERIOD,
          KEY_IDENTIFIERS.SLASH,
          KEY_IDENTIFIERS.SHIFT_RIGHT,
        ],
      },
      {
        y: 580, // 底部控制键行
        spacing: 8,
        keys: [
          KEY_IDENTIFIERS.CONTROL_LEFT,
          KEY_IDENTIFIERS.META_LEFT,
          KEY_IDENTIFIERS.ALT_LEFT,
          KEY_IDENTIFIERS.SPACE,
          KEY_IDENTIFIERS.ALT_RIGHT,
          KEY_IDENTIFIERS.META_RIGHT,
          KEY_IDENTIFIERS.CONTROL_RIGHT,
          KEY_IDENTIFIERS.ARROW_LEFT,
          KEY_IDENTIFIERS.ARROW_UP,
          KEY_IDENTIFIERS.ARROW_DOWN,
          KEY_IDENTIFIERS.ARROW_RIGHT,
        ],
      },
    ],
  },
};

// 5. 键位显示文本配置
export const KEY_DISPLAY = {
  // Windows 特殊键显示
  windows: {
    [KEY_IDENTIFIERS.CONTROL_LEFT]: { primary: "Ctrl" },
    [KEY_IDENTIFIERS.CONTROL_RIGHT]: { primary: "Ctrl" },
    [KEY_IDENTIFIERS.META_LEFT]: { primary: "Win" },
    [KEY_IDENTIFIERS.META_RIGHT]: { primary: "Win" },
    [KEY_IDENTIFIERS.ALT_LEFT]: { primary: "Alt" },
    [KEY_IDENTIFIERS.ALT_RIGHT]: { primary: "Alt" },
  },

  // Mac 特殊键显示
  mac: {
    [KEY_IDENTIFIERS.CONTROL_LEFT]: { primary: "Control" },
    [KEY_IDENTIFIERS.META_LEFT]: { primary: "Command" },
    [KEY_IDENTIFIERS.ALT_LEFT]: { primary: "Option" },
    [KEY_IDENTIFIERS.ALT_RIGHT]: { primary: "Option" },
    [KEY_IDENTIFIERS.ENTER]: { primary: "Return" },
  },

  // 通用键显示配置
  common: {
    // 数字键显示配置
    [KEY_IDENTIFIERS.DIGIT_1]: { primary: "1", secondary: "!" },
    [KEY_IDENTIFIERS.DIGIT_2]: { primary: "2", secondary: "@" },
    [KEY_IDENTIFIERS.DIGIT_3]: { primary: "3", secondary: "#" },
    [KEY_IDENTIFIERS.DIGIT_4]: { primary: "4", secondary: "$" },
    [KEY_IDENTIFIERS.DIGIT_5]: { primary: "5", secondary: "%" },
    [KEY_IDENTIFIERS.DIGIT_6]: { primary: "6", secondary: "^" },
    [KEY_IDENTIFIERS.DIGIT_7]: { primary: "7", secondary: "&" },
    [KEY_IDENTIFIERS.DIGIT_8]: { primary: "8", secondary: "*" },
    [KEY_IDENTIFIERS.DIGIT_9]: { primary: "9", secondary: "(" },
    [KEY_IDENTIFIERS.DIGIT_0]: { primary: "0", secondary: ")" },

    // 符号键显示配置
    [KEY_IDENTIFIERS.MINUS]: { primary: "-", secondary: "_" },
    [KEY_IDENTIFIERS.EQUAL]: { primary: "=", secondary: "+" },
    [KEY_IDENTIFIERS.BRACKET_LEFT]: { primary: "[", secondary: "{" },
    [KEY_IDENTIFIERS.BRACKET_RIGHT]: { primary: "]", secondary: "}" },
    [KEY_IDENTIFIERS.SEMICOLON]: { primary: ";", secondary: ":" },
    [KEY_IDENTIFIERS.QUOTE]: { primary: "'", secondary: '"' },
    [KEY_IDENTIFIERS.BACKQUOTE]: { primary: "`", secondary: "~" },
    [KEY_IDENTIFIERS.BACKSLASH]: { primary: "\\", secondary: "|" },
    [KEY_IDENTIFIERS.COMMA]: { primary: ",", secondary: "<" },
    [KEY_IDENTIFIERS.PERIOD]: { primary: ".", secondary: ">" },
    [KEY_IDENTIFIERS.SLASH]: { primary: "/", secondary: "?" },

    // 功能键显示配置
    [KEY_IDENTIFIERS.ESCAPE]: { primary: "Esc" },
    [KEY_IDENTIFIERS.TAB]: { primary: "Tab" },
    [KEY_IDENTIFIERS.CAPS_LOCK]: { primary: "Caps Lock" },
    [KEY_IDENTIFIERS.SHIFT_LEFT]: { primary: "Shift" },
    [KEY_IDENTIFIERS.SHIFT_RIGHT]: { primary: "Shift" },
    [KEY_IDENTIFIERS.SPACE]: { primary: "" },
    [KEY_IDENTIFIERS.ENTER]: { primary: "Enter" },
    [KEY_IDENTIFIERS.BACKSPACE]: { primary: "Backspace" },
    [KEY_IDENTIFIERS.DELETE]: { primary: "Delete" },

    // 方向键显示配置
    [KEY_IDENTIFIERS.ARROW_LEFT]: { primary: "←" },
    [KEY_IDENTIFIERS.ARROW_RIGHT]: { primary: "→" },
    [KEY_IDENTIFIERS.ARROW_UP]: { primary: "↑" },
    [KEY_IDENTIFIERS.ARROW_DOWN]: { primary: "↓" },

    // 字母键显示配置
    [KEY_IDENTIFIERS.Q]: { primary: "Q" },
    [KEY_IDENTIFIERS.W]: { primary: "W" },
    [KEY_IDENTIFIERS.E]: { primary: "E" },
    [KEY_IDENTIFIERS.R]: { primary: "R" },
    [KEY_IDENTIFIERS.T]: { primary: "T" },
    [KEY_IDENTIFIERS.Y]: { primary: "Y" },
    [KEY_IDENTIFIERS.U]: { primary: "U" },
    [KEY_IDENTIFIERS.I]: { primary: "I" },
    [KEY_IDENTIFIERS.O]: { primary: "O" },
    [KEY_IDENTIFIERS.P]: { primary: "P" },
    [KEY_IDENTIFIERS.A]: { primary: "A" },
    [KEY_IDENTIFIERS.S]: { primary: "S" },
    [KEY_IDENTIFIERS.D]: { primary: "D" },
    [KEY_IDENTIFIERS.F]: { primary: "F" },
    [KEY_IDENTIFIERS.G]: { primary: "G" },
    [KEY_IDENTIFIERS.H]: { primary: "H" },
    [KEY_IDENTIFIERS.J]: { primary: "J" },
    [KEY_IDENTIFIERS.K]: { primary: "K" },
    [KEY_IDENTIFIERS.L]: { primary: "L" },
    [KEY_IDENTIFIERS.Z]: { primary: "Z" },
    [KEY_IDENTIFIERS.X]: { primary: "X" },
    [KEY_IDENTIFIERS.C]: { primary: "C" },
    [KEY_IDENTIFIERS.V]: { primary: "V" },
    [KEY_IDENTIFIERS.B]: { primary: "B" },
    [KEY_IDENTIFIERS.N]: { primary: "N" },
    [KEY_IDENTIFIERS.M]: { primary: "M" },
  },
};

// SVG 样式相关常量
export const KEYBOARD_STYLE = {
  // 键盘主体样式
  main: {
    width: 1620,
    height: 684,
    x: 81,
    y: 24,
    rx: 16,
    fill: "#9F9F9F",
  },
  // 键盘内层样式
  inner: {
    width: 1620,
    height: 684,
    x: 81,
    y: 16,
    rx: 16,
    fill: "#C0C0C0",
  },
};

// SVG 特效相关常量
export const KEYBOARD_EFFECTS = {
  // 渐变定义
  gradients: {
    background: [
      {
        id: "paint0_linear",
        type: "linearGradient",
        x1: 100,
        y1: 172,
        x2: 1684.5,
        y2: 510,
        stops: [
          { offset: 0, color: "white", opacity: 1 },
          { offset: 0.295544, color: "white", opacity: 0 },
          { offset: 0.483052, color: "white", opacity: 1 },
          { offset: 0.654934, color: "white", opacity: 0.81 },
          { offset: 1, color: "white", opacity: 1 },
        ],
      },
      {
        id: "paint1_linear",
        type: "linearGradient",
        x1: 100,
        y1: 164,
        x2: 1684.5,
        y2: 502,
        stops: [
          { offset: 0, color: "white", opacity: 1 },
          { offset: 0.295544, color: "white", opacity: 0 },
          { offset: 0.483052, color: "white", opacity: 1 },
          { offset: 0.654934, color: "white", opacity: 0.81 },
          { offset: 1, color: "white", opacity: 1 },
        ],
      },
    ],
  },
  // 滤镜定义
  filters: {
    // 键盘左侧阴影
    leftShadow: {
      id: "filter0_f",
      opacity: 0.3,
      path: "M44 76L103 44V694H86.567L44 76Z",
      fill: "black",
    },
    // 键盘右侧阴影
    rightShadow: {
      id: "filter1_f",
      opacity: 0.3,
      path: "M1738 76L1679 44V694H1695.43L1738 76Z",
      fill: "black",
    },
    // 键盘主体阴影
    mainShadow: {
      id: "filter2_dd",
      type: "feGaussianBlur",
      stdDeviation: 4,
    },
    // 按键阴影（通用）
    keysShadow: {
      id: "filter_ddi",
      type: "dropShadow",
      dx: 0,
      dy: 2,
      stdDeviation: 4,
      floodOpacity: 0.25,
    },
    // 按键阴影和高光效果
    keyEffect: {
      id: "filter_ddi",
      effects: [
        {
          // 外阴影
          type: "dropShadow",
          dx: 0,
          dy: 0,
          stdDeviation: 1.5,
          floodOpacity: 0.45,
          blendMode: "multiply",
        },
        {
          // 底部阴影
          type: "dropShadow",
          dx: 0,
          dy: 4,
          stdDeviation: 2,
          floodOpacity: 0.25,
        },
        {
          // 内部高光
          type: "innerShadow",
          dx: 0,
          dy: 3,
          color: "white",
          opacity: 1,
          blendMode: "screen",
        },
      ],
    },
  },
  // 混合模式
  blendModes: {
    screenOverlay: {
      mode: "screen",
      opacity: 0.3,
      rect: {
        x: 81,
        y: -8,
        width: 1620,
        height: 716,
        fill: "white",
      },
    },
  },
};

// 功能键文本样式
export const FUNCTION_KEY_STYLES = {
  default: {
    fontSize: "32px",
    fontFamily: "Inter, Arial, sans-serif",
    textAnchor: "middle",
    dominantBaseline: "middle",
    fill: "#333333",
    fontWeight: 500,
  },
  // 特殊键（如 Esc）可能需要稍小的字号
  small: {
    fontSize: "28px",
    fontFamily: "Inter, Arial, sans-serif",
    textAnchor: "middle",
    dominantBaseline: "middle",
    fill: "#333333",
    fontWeight: 500,
  },
};

// 数字和符号键文本样式
export const SYMBOL_KEY_STYLES = {
  primary: {
    fontSize: "32px",
    fontFamily: "Inter, Arial, sans-serif",
    textAnchor: "middle",
    dominantBaseline: "middle",
    fill: "#333333",
    fontWeight: 500,
  },
  secondary: {
    fontSize: "24px",
    fontFamily: "Inter, Arial, sans-serif",
    textAnchor: "middle",
    dominantBaseline: "middle",
    fill: "#666666",
    fontWeight: 400,
  },
};

// 6. SVG 键位ID映射
export const KEY_ID_MAP = {
  windows: {
    // 第一行 - 功能键
    [KEY_IDENTIFIERS.ESCAPE]: "key-escape",
    [KEY_IDENTIFIERS.F1]: "key-f1",
    [KEY_IDENTIFIERS.F2]: "key-f2",
    [KEY_IDENTIFIERS.F3]: "key-f3",
    [KEY_IDENTIFIERS.F4]: "key-f4",
    [KEY_IDENTIFIERS.F5]: "key-f5",
    [KEY_IDENTIFIERS.F6]: "key-f6",
    [KEY_IDENTIFIERS.F7]: "key-f7",
    [KEY_IDENTIFIERS.F8]: "key-f8",
    [KEY_IDENTIFIERS.F9]: "key-f9",
    [KEY_IDENTIFIERS.F10]: "key-f10",
    [KEY_IDENTIFIERS.F11]: "key-f11",
    [KEY_IDENTIFIERS.F12]: "key-f12",
    [KEY_IDENTIFIERS.DELETE]: "key-delete",

    // 第二行 - 数字键
    [KEY_IDENTIFIERS.BACKQUOTE]: "key-backquote",
    [KEY_IDENTIFIERS.DIGIT_1]: "key-1",
    [KEY_IDENTIFIERS.DIGIT_2]: "key-2",
    [KEY_IDENTIFIERS.DIGIT_3]: "key-3",
    [KEY_IDENTIFIERS.DIGIT_4]: "key-4",
    [KEY_IDENTIFIERS.DIGIT_5]: "key-5",
    [KEY_IDENTIFIERS.DIGIT_6]: "key-6",
    [KEY_IDENTIFIERS.DIGIT_7]: "key-7",
    [KEY_IDENTIFIERS.DIGIT_8]: "key-8",
    [KEY_IDENTIFIERS.DIGIT_9]: "key-9",
    [KEY_IDENTIFIERS.DIGIT_0]: "key-0",
    [KEY_IDENTIFIERS.MINUS]: "key-minus",
    [KEY_IDENTIFIERS.EQUAL]: "key-equal",
    [KEY_IDENTIFIERS.BACKSPACE]: "key-backspace",

    // 第三行 - 第一字母行
    [KEY_IDENTIFIERS.TAB]: "key-tab",
    [KEY_IDENTIFIERS.Q]: "key-q",
    [KEY_IDENTIFIERS.W]: "key-w",
    [KEY_IDENTIFIERS.E]: "key-e",
    [KEY_IDENTIFIERS.R]: "key-r",
    [KEY_IDENTIFIERS.T]: "key-t",
    [KEY_IDENTIFIERS.Y]: "key-y",
    [KEY_IDENTIFIERS.U]: "key-u",
    [KEY_IDENTIFIERS.I]: "key-i",
    [KEY_IDENTIFIERS.O]: "key-o",
    [KEY_IDENTIFIERS.P]: "key-p",
    [KEY_IDENTIFIERS.BRACKET_LEFT]: "key-bracketleft",
    [KEY_IDENTIFIERS.BRACKET_RIGHT]: "key-bracketright",
    [KEY_IDENTIFIERS.BACKSLASH]: "key-backslash",

    // 第四行 - 第二字母
    [KEY_IDENTIFIERS.CAPS_LOCK]: "key-capslock",
    [KEY_IDENTIFIERS.A]: "key-a",
    [KEY_IDENTIFIERS.S]: "key-s",
    [KEY_IDENTIFIERS.D]: "key-d",
    [KEY_IDENTIFIERS.F]: "key-f",
    [KEY_IDENTIFIERS.G]: "key-g",
    [KEY_IDENTIFIERS.H]: "key-h",
    [KEY_IDENTIFIERS.J]: "key-j",
    [KEY_IDENTIFIERS.K]: "key-k",
    [KEY_IDENTIFIERS.L]: "key-l",
    [KEY_IDENTIFIERS.SEMICOLON]: "key-semicolon",
    [KEY_IDENTIFIERS.QUOTE]: "key-quote",
    [KEY_IDENTIFIERS.ENTER]: "key-enter",

    // 第五行 - 第三字母行
    [KEY_IDENTIFIERS.SHIFT_LEFT]: "key-shiftleft",
    [KEY_IDENTIFIERS.Z]: "key-z",
    [KEY_IDENTIFIERS.X]: "key-x",
    [KEY_IDENTIFIERS.C]: "key-c",
    [KEY_IDENTIFIERS.V]: "key-v",
    [KEY_IDENTIFIERS.B]: "key-b",
    [KEY_IDENTIFIERS.N]: "key-n",
    [KEY_IDENTIFIERS.M]: "key-m",
    [KEY_IDENTIFIERS.COMMA]: "key-comma",
    [KEY_IDENTIFIERS.PERIOD]: "key-period",
    [KEY_IDENTIFIERS.SLASH]: "key-slash",
    [KEY_IDENTIFIERS.SHIFT_RIGHT]: "key-shiftright",

    // 第六行 - 控制键和方向键
    [KEY_IDENTIFIERS.CONTROL_LEFT]: "key-controlleft",
    [KEY_IDENTIFIERS.META_LEFT]: "key-metaleft",
    [KEY_IDENTIFIERS.ALT_LEFT]: "key-altleft",
    [KEY_IDENTIFIERS.SPACE]: "key-space",
    [KEY_IDENTIFIERS.ALT_RIGHT]: "key-altright",
    [KEY_IDENTIFIERS.META_RIGHT]: "key-metaright",
    [KEY_IDENTIFIERS.CONTROL_RIGHT]: "key-controlright",
    [KEY_IDENTIFIERS.ARROW_LEFT]: "key-arrowleft",
    [KEY_IDENTIFIERS.ARROW_UP]: "key-arrowup",
    [KEY_IDENTIFIERS.ARROW_DOWN]: "key-arrowdown",
    [KEY_IDENTIFIERS.ARROW_RIGHT]: "key-arrowright",
  },
  mac: {
    // ... mac 键盘映射保持不变 ...
  },
};
