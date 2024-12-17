/**
 * Keyboard key types
 */
export type KeyIdentifier = typeof KEY_IDENTIFIERS[keyof typeof KEY_IDENTIFIERS];
export type ModifierKey = "SHIFT_LEFT" | "SHIFT_RIGHT" | "CONTROL_LEFT" | "CONTROL_RIGHT" | "ALT_LEFT" | "ALT_RIGHT" | "META_LEFT" | "META_RIGHT";
export type NavigationKey = "ARROW_LEFT" | "ARROW_UP" | "ARROW_DOWN" | "ARROW_RIGHT";
export type FunctionKey = "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12";

/**
 * Keyboard key identifiers mapping
 */
export const KEY_IDENTIFIERS = {
  // Function row
  ESCAPE: "Escape",
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  DELETE: "Delete",

  // Number row
  BACKQUOTE: "Backquote",
  DIGIT_1: "Digit1",
  DIGIT_2: "Digit2",
  DIGIT_3: "Digit3",
  DIGIT_4: "Digit4",
  DIGIT_5: "Digit5",
  DIGIT_6: "Digit6",
  DIGIT_7: "Digit7",
  DIGIT_8: "Digit8",
  DIGIT_9: "Digit9",
  DIGIT_0: "Digit0",
  MINUS: "Minus",
  EQUAL: "Equal",
  BACKSPACE: "Backspace",

  // Top letter row
  TAB: "Tab",
  Q: "KeyQ",
  W: "KeyW",
  E: "KeyE",
  R: "KeyR",
  T: "KeyT",
  Y: "KeyY",
  U: "KeyU",
  I: "KeyI",
  O: "KeyO",
  P: "KeyP",
  BRACKET_LEFT: "BracketLeft",
  BRACKET_RIGHT: "BracketRight",
  BACKSLASH: "Backslash",

  // Middle letter row
  CAPS_LOCK: "CapsLock",
  A: "KeyA",
  S: "KeyS",
  D: "KeyD",
  F: "KeyF",
  G: "KeyG",
  H: "KeyH",
  J: "KeyJ",
  K: "KeyK",
  L: "KeyL",
  SEMICOLON: "Semicolon",
  QUOTE: "Quote",
  ENTER: "Enter",

  // Bottom letter row
  SHIFT_LEFT: "ShiftLeft",
  Z: "KeyZ",
  X: "KeyX",
  C: "KeyC",
  V: "KeyV",
  B: "KeyB",
  N: "KeyN",
  M: "KeyM",
  COMMA: "Comma",
  PERIOD: "Period",
  SLASH: "Slash",
  SHIFT_RIGHT: "ShiftRight",

  // Bottom modifier row
  CONTROL_LEFT: "ControlLeft",
  META_LEFT: "MetaLeft",
  ALT_LEFT: "AltLeft",
  SPACE: "Space",
  ALT_RIGHT: "AltRight",
  META_RIGHT: "MetaRight",
  CONTROL_RIGHT: "ControlRight",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_RIGHT: "ArrowRight",
} as const;

/**
 * Key groups for quick access
 */
export const MODIFIER_KEYS: ModifierKey[] = [
  "SHIFT_LEFT", "SHIFT_RIGHT",
  "CONTROL_LEFT", "CONTROL_RIGHT",
  "ALT_LEFT", "ALT_RIGHT",
  "META_LEFT", "META_RIGHT"
];

export const NAVIGATION_KEYS: NavigationKey[] = [
  "ARROW_LEFT", "ARROW_UP",
  "ARROW_DOWN", "ARROW_RIGHT"
];

export const FUNCTION_KEYS: FunctionKey[] = [
  "F1", "F2", "F3", "F4", "F5", "F6",
  "F7", "F8", "F9", "F10", "F11", "F12"
];

/**
 * Keyboard layout definition
 */
export const KEYBOARD_LAYOUT = {
  windows: [
    {
      y: 40, // Function row
      keys: [
        "ESCAPE", "F1", "F2", "F3", "F4", "F5", "F6",
        "F7", "F8", "F9", "F10", "F11", "F12", "DELETE"
      ],
    },
    {
      y: 148, // Number row
      spacing: 8,
      keys: [
        "BACKQUOTE", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4",
        "DIGIT_5", "DIGIT_6", "DIGIT_7", "DIGIT_8", "DIGIT_9",
        "DIGIT_0", "MINUS", "EQUAL", "BACKSPACE"
      ],
    },
    {
      y: 256, // Top letter row
      spacing: 8,
      keys: [
        "TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O",
        "P", "BRACKET_LEFT", "BRACKET_RIGHT", "BACKSLASH"
      ],
    },
    {
      y: 364, // Middle letter row
      spacing: 8,
      keys: [
        "CAPS_LOCK", "A", "S", "D", "F", "G", "H", "J", "K",
        "L", "SEMICOLON", "QUOTE", "ENTER"
      ],
    },
    {
      y: 472, // Bottom letter row
      spacing: 8,
      keys: [
        "SHIFT_LEFT", "Z", "X", "C", "V", "B", "N", "M",
        "COMMA", "PERIOD", "SLASH", "SHIFT_RIGHT"
      ],
    },
    {
      y: 580, // Bottom modifier row
      spacing: 8,
      keys: [
        "CONTROL_LEFT", "META_LEFT", "ALT_LEFT", "SPACE",
        "ALT_RIGHT", "META_RIGHT", "CONTROL_RIGHT",
        "ARROW_LEFT", "ARROW_UP", "ARROW_DOWN", "ARROW_RIGHT"
      ],
    },
  ],
} as const;

/**
 * Type guard functions
 */
export function isModifierKey(key: string): key is ModifierKey {
  return MODIFIER_KEYS.includes(key as ModifierKey);
}

export function isNavigationKey(key: string): key is NavigationKey {
  return NAVIGATION_KEYS.includes(key as NavigationKey);
}

export function isFunctionKey(key: string): key is FunctionKey {
  return FUNCTION_KEYS.includes(key as FunctionKey);
}

/**
 * Utility functions
 */
export function getKeyCode(key: keyof typeof KEY_IDENTIFIERS): string {
  return KEY_IDENTIFIERS[key];
}

export function formatKeyName(keyCode: string): string {
  return Object.entries(KEY_IDENTIFIERS).find(([_, value]) => value === keyCode)?.[0] || keyCode;
} 