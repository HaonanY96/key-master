import { KEY_IDENTIFIERS } from "./keyboard-constants-identifiers";
import {
  KEY_SIZES,
  KEYBOARD_LAYOUT,
  KEY_STYLES,
  KEYBOARD_DIMENSIONS,
  KEY_DISPLAY,
  KEYBOARD_STYLE,
  KEYBOARD_EFFECTS,
  FUNCTION_KEY_STYLES,
  SYMBOL_KEY_STYLES,
} from "./keyboard-layout";

// 键盘 SVG 数据
export const keyboardSvgData = {
  // 键盘整体配置
  config: {
    viewBox: KEYBOARD_DIMENSIONS.viewBox,
    keyboard: {
      main: KEYBOARD_STYLE.main,
      inner: KEYBOARD_STYLE.inner,
    },
    gradients: KEYBOARD_EFFECTS.gradients,
    filters: KEYBOARD_EFFECTS.filters,
    blendModes: KEYBOARD_EFFECTS.blendModes,
  },
  // Windows 键盘数据
  windows: {
    // 按键数据
    keys: [
      // 第一行功能键
      {
        id: "key-escape",
        keyIdentifier: KEY_IDENTIFIERS.ESCAPE,
        rect: {
          width: KEY_SIZES.special[KEY_IDENTIFIERS.ESCAPE].width,
          height: KEY_SIZES.special[KEY_IDENTIFIERS.ESCAPE].height,
          rx: 8,
          x: 105,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ESCAPE].primary,
          x: 189,
          y: 88,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-f1",
        keyIdentifier: KEY_IDENTIFIERS.F1,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 285,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F1].primary,
          x: 333,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f2",
        keyIdentifier: KEY_IDENTIFIERS.F2,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 393,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F2].primary,
          x: 441,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f3",
        keyIdentifier: KEY_IDENTIFIERS.F3,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 501,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F3].primary,
          x: 549,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f4",
        keyIdentifier: KEY_IDENTIFIERS.F4,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 609,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F4].primary,
          x: 657,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f5",
        keyIdentifier: KEY_IDENTIFIERS.F5,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 717,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F5].primary,
          x: 765,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f6",
        keyIdentifier: KEY_IDENTIFIERS.F6,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 825,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F6].primary,
          x: 873,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f7",
        keyIdentifier: KEY_IDENTIFIERS.F7,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 933,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F7].primary,
          x: 981,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f8",
        keyIdentifier: KEY_IDENTIFIERS.F8,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1041,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F8].primary,
          x: 1089,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f9",
        keyIdentifier: KEY_IDENTIFIERS.F9,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1149,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F9].primary,
          x: 1197,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f10",
        keyIdentifier: KEY_IDENTIFIERS.F10,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1257,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F10].primary,
          x: 1305,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f11",
        keyIdentifier: KEY_IDENTIFIERS.F11,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1365,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F11].primary,
          x: 1413,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-f12",
        keyIdentifier: KEY_IDENTIFIERS.F12,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1473,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.F12].primary,
          x: 1521,
          y: 88,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-delete",
        keyIdentifier: KEY_IDENTIFIERS.DELETE,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1581,
          y: 40,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.DELETE].primary,
          x: 1629,
          y: 88,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      // 第二行按键（数字键行）
      {
        id: "key-backquote",
        keyIdentifier: KEY_IDENTIFIERS.BACKQUOTE,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 105,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BACKQUOTE].primary,
            x: 153,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BACKQUOTE].secondary,
            x: 153,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-1",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_1,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 213,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_1].primary,
            x: 261,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_1].secondary,
            x: 261,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-2",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_2,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 321,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_2].primary,
            x: 369,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_2].secondary,
            x: 369,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-3",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_3,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 429,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_3].primary,
            x: 477,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_3].secondary,
            x: 477,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-4",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_4,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 537,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_4].primary,
            x: 585,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_4].secondary,
            x: 585,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-5",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_5,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 645,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_5].primary,
            x: 693,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_5].secondary,
            x: 693,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-6",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_6,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 753,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_6].primary,
            x: 801,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_6].secondary,
            x: 801,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-7",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_7,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 861,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_7].primary,
            x: 909,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_7].secondary,
            x: 909,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-8",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_8,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 969,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_8].primary,
            x: 1017,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_8].secondary,
            x: 1017,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-9",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_9,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1077,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_9].primary,
            x: 1125,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_9].secondary,
            x: 1125,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-digit-0",
        keyIdentifier: KEY_IDENTIFIERS.DIGIT_0,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1185,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_0].primary,
            x: 1233,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.DIGIT_0].secondary,
            x: 1233,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-minus",
        keyIdentifier: KEY_IDENTIFIERS.MINUS,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1293,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.MINUS].primary,
            x: 1341,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.MINUS].secondary,
            x: 1341,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-equal",
        keyIdentifier: KEY_IDENTIFIERS.EQUAL,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1401,
          y: 148,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.EQUAL].primary,
            x: 1449,
            y: 180,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.EQUAL].secondary,
            x: 1449,
            y: 165,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-backspace",
        keyIdentifier: KEY_IDENTIFIERS.BACKSPACE,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.BACKSPACE].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.BACKSPACE].height,
          rx: 8,
          x: 1509,
          y: 148,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.BACKSPACE].primary,
          x: 1593,
          y: 196,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      // 第三行按键（Tab 到 Backslash）
      {
        id: "key-tab",
        keyIdentifier: KEY_IDENTIFIERS.TAB,
        rect: {
          width: KEY_SIZES.special[KEY_IDENTIFIERS.TAB].width,
          height: KEY_SIZES.special[KEY_IDENTIFIERS.TAB].height,
          rx: 8,
          x: 105,
          y: 256,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.TAB].primary,
          x: 189,
          y: 304,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-q",
        keyIdentifier: KEY_IDENTIFIERS.Q,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 285,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.Q].primary,
            x: 333,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-w",
        keyIdentifier: KEY_IDENTIFIERS.W,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 393,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.W].primary,
            x: 441,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-e",
        keyIdentifier: KEY_IDENTIFIERS.E,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 501,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.E].primary,
            x: 549,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-r",
        keyIdentifier: KEY_IDENTIFIERS.R,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 609,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.R].primary,
            x: 657,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-t",
        keyIdentifier: KEY_IDENTIFIERS.T,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 717,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.T].primary,
            x: 765,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-y",
        keyIdentifier: KEY_IDENTIFIERS.Y,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 825,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.Y].primary,
            x: 873,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-u",
        keyIdentifier: KEY_IDENTIFIERS.U,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 933,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.U].primary,
            x: 981,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-i",
        keyIdentifier: KEY_IDENTIFIERS.I,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1041,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.I].primary,
            x: 1089,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-o",
        keyIdentifier: KEY_IDENTIFIERS.O,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1149,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.O].primary,
            x: 1197,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-p",
        keyIdentifier: KEY_IDENTIFIERS.P,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1257,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.P].primary,
            x: 1305,
            y: 304,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-bracket-left",
        keyIdentifier: KEY_IDENTIFIERS.BRACKET_LEFT,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1365,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BRACKET_LEFT].primary,
            x: 1413,
            y: 288,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BRACKET_LEFT].secondary,
            x: 1413,
            y: 273,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-bracket-right",
        keyIdentifier: KEY_IDENTIFIERS.BRACKET_RIGHT,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1473,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BRACKET_RIGHT].primary,
            x: 1521,
            y: 288,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BRACKET_RIGHT].secondary,
            x: 1521,
            y: 273,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-backslash",
        keyIdentifier: KEY_IDENTIFIERS.BACKSLASH,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1581,
          y: 256,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BACKSLASH].primary,
            x: 1629,
            y: 288,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.BACKSLASH].secondary,
            x: 1629,
            y: 273,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      // 第四行按键（Caps Lock 到 Enter）
      {
        id: "key-caps-lock",
        keyIdentifier: KEY_IDENTIFIERS.CAPS_LOCK,
        rect: {
          width: KEY_SIZES.special[KEY_IDENTIFIERS.CAPS_LOCK].width,
          height: KEY_SIZES.special[KEY_IDENTIFIERS.CAPS_LOCK].height,
          rx: 8,
          x: 105,
          y: 364,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.CAPS_LOCK].primary,
          x: 201,
          y: 412,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-a",
        keyIdentifier: KEY_IDENTIFIERS.A,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 309,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.A].primary,
            x: 357,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-s",
        keyIdentifier: KEY_IDENTIFIERS.S,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 417,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.S].primary,
            x: 465,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-d",
        keyIdentifier: KEY_IDENTIFIERS.D,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 525,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.D].primary,
            x: 573,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-f",
        keyIdentifier: KEY_IDENTIFIERS.F,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 633,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.F].primary,
            x: 681,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-g",
        keyIdentifier: KEY_IDENTIFIERS.G,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 741,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.G].primary,
            x: 789,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-h",
        keyIdentifier: KEY_IDENTIFIERS.H,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 849,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.H].primary,
            x: 897,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-j",
        keyIdentifier: KEY_IDENTIFIERS.J,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 957,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.J].primary,
            x: 1005,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-k",
        keyIdentifier: KEY_IDENTIFIERS.K,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1065,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.K].primary,
            x: 1113,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-l",
        keyIdentifier: KEY_IDENTIFIERS.L,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1173,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.L].primary,
            x: 1221,
            y: 412,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-semicolon",
        keyIdentifier: KEY_IDENTIFIERS.SEMICOLON,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1281,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.SEMICOLON].primary,
            x: 1329,
            y: 396,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.SEMICOLON].secondary,
            x: 1329,
            y: 381,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-quote",
        keyIdentifier: KEY_IDENTIFIERS.QUOTE,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1389,
          y: 364,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.QUOTE].primary,
            x: 1437,
            y: 396,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.QUOTE].secondary,
            x: 1437,
            y: 381,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-enter",
        keyIdentifier: KEY_IDENTIFIERS.ENTER,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.ENTER].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.ENTER].height,
          rx: 8,
          x: 1497,
          y: 364,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ENTER].primary,
          x: 1587,
          y: 412,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      // 第五行按键（左Shift 到 右Shift）
      {
        id: "key-shift-left",
        keyIdentifier: KEY_IDENTIFIERS.SHIFT_LEFT,
        rect: {
          width: KEY_SIZES.special[KEY_IDENTIFIERS.SHIFT_LEFT].width,
          height: KEY_SIZES.special[KEY_IDENTIFIERS.SHIFT_LEFT].height,
          rx: 8,
          x: 105,
          y: 472,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.SHIFT_LEFT].primary,
          x: 225,
          y: 520,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-z",
        keyIdentifier: KEY_IDENTIFIERS.Z,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 357,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.Z].primary,
            x: 405,
            y: 520,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-x",
        keyIdentifier: KEY_IDENTIFIERS.X,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 465,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.X].primary,
            x: 513,
            y: 520,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-c",
        keyIdentifier: KEY_IDENTIFIERS.C,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 573,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.C].primary,
            x: 621,
            y: 520,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-v",
        keyIdentifier: KEY_IDENTIFIERS.V,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 681,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.V].primary,
            x: 729,
            y: 520,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-b",
        keyIdentifier: KEY_IDENTIFIERS.B,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 789,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.B].primary,
            x: 837,
            y: 520,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-n",
        keyIdentifier: KEY_IDENTIFIERS.N,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 897,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.N].primary,
            x: 945,
            y: 520,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-m",
        keyIdentifier: KEY_IDENTIFIERS.M,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1005,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.M].primary,
            x: 1053,
            y: 520,
            style: SYMBOL_KEY_STYLES.primary,
          },
        },
      },
      {
        id: "key-comma",
        keyIdentifier: KEY_IDENTIFIERS.COMMA,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1113,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.COMMA].primary,
            x: 1161,
            y: 504,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.COMMA].secondary,
            x: 1161,
            y: 489,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-period",
        keyIdentifier: KEY_IDENTIFIERS.PERIOD,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1221,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.PERIOD].primary,
            x: 1269,
            y: 504,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.PERIOD].secondary,
            x: 1269,
            y: 489,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-slash",
        keyIdentifier: KEY_IDENTIFIERS.SLASH,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1329,
          y: 472,
        },
        text: {
          primary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.SLASH].primary,
            x: 1377,
            y: 504,
            style: SYMBOL_KEY_STYLES.primary,
          },
          secondary: {
            content: KEY_DISPLAY[KEY_IDENTIFIERS.SLASH].secondary,
            x: 1377,
            y: 489,
            style: SYMBOL_KEY_STYLES.secondary,
          },
        },
      },
      {
        id: "key-shift-right",
        keyIdentifier: KEY_IDENTIFIERS.SHIFT_RIGHT,
        rect: {
          width: KEY_SIZES.special[KEY_IDENTIFIERS.SHIFT_RIGHT].width,
          height: KEY_SIZES.special[KEY_IDENTIFIERS.SHIFT_RIGHT].height,
          rx: 8,
          x: 1437,
          y: 472,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.SHIFT_RIGHT].primary,
          x: 1557,
          y: 520,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      // 第六行按键（左Ctrl 到 右方向键）
      {
        id: "key-control-left",
        keyIdentifier: KEY_IDENTIFIERS.CONTROL_LEFT,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.CONTROL_LEFT].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.CONTROL_LEFT].height,
          rx: 8,
          x: 105,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.CONTROL_LEFT].primary,
          x: 153,
          y: 628,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-meta-left",
        keyIdentifier: KEY_IDENTIFIERS.META_LEFT,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.META_LEFT].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.META_LEFT].height,
          rx: 8,
          x: 213,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.META_LEFT].primary,
          x: 261,
          y: 628,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-alt-left",
        keyIdentifier: KEY_IDENTIFIERS.ALT_LEFT,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.ALT_LEFT].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.ALT_LEFT].height,
          rx: 8,
          x: 321,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ALT_LEFT].primary,
          x: 369,
          y: 628,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-space",
        keyIdentifier: KEY_IDENTIFIERS.SPACE,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.SPACE].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.SPACE].height,
          rx: 8,
          x: 429,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.SPACE].primary,
          x: 727,
          y: 628,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-alt-right",
        keyIdentifier: KEY_IDENTIFIERS.ALT_RIGHT,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.ALT_RIGHT].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.ALT_RIGHT].height,
          rx: 8,
          x: 1037,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ALT_RIGHT].primary,
          x: 1085,
          y: 628,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-meta-right",
        keyIdentifier: KEY_IDENTIFIERS.META_RIGHT,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.META_RIGHT].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.META_RIGHT].height,
          rx: 8,
          x: 1145,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.META_RIGHT].primary,
          x: 1193,
          y: 628,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-control-right",
        keyIdentifier: KEY_IDENTIFIERS.CONTROL_RIGHT,
        rect: {
          width: KEY_SIZES.windows[KEY_IDENTIFIERS.CONTROL_RIGHT].width,
          height: KEY_SIZES.windows[KEY_IDENTIFIERS.CONTROL_RIGHT].height,
          rx: 8,
          x: 1253,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.CONTROL_RIGHT].primary,
          x: 1301,
          y: 628,
          style: FUNCTION_KEY_STYLES.small,
        },
      },
      {
        id: "key-arrow-left",
        keyIdentifier: KEY_IDENTIFIERS.ARROW_LEFT,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1361,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ARROW_LEFT].primary,
          x: 1409,
          y: 628,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-arrow-up",
        keyIdentifier: KEY_IDENTIFIERS.ARROW_UP,
        rect: {
          width: KEY_SIZES.special[KEY_IDENTIFIERS.ARROW_UP].width,
          height: KEY_SIZES.special[KEY_IDENTIFIERS.ARROW_UP].height,
          rx: 8,
          x: 1469,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ARROW_UP].primary,
          x: 1517,
          y: 603,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-arrow-down",
        keyIdentifier: KEY_IDENTIFIERS.ARROW_DOWN,
        rect: {
          width: KEY_SIZES.special[KEY_IDENTIFIERS.ARROW_DOWN].width,
          height: KEY_SIZES.special[KEY_IDENTIFIERS.ARROW_DOWN].height,
          rx: 8,
          x: 1469,
          y: 630,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ARROW_DOWN].primary,
          x: 1517,
          y: 653,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
      {
        id: "key-arrow-right",
        keyIdentifier: KEY_IDENTIFIERS.ARROW_RIGHT,
        rect: {
          width: KEY_SIZES.standard.width,
          height: KEY_SIZES.standard.height,
          rx: 8,
          x: 1577,
          y: 580,
        },
        text: {
          content: KEY_DISPLAY[KEY_IDENTIFIERS.ARROW_RIGHT].primary,
          x: 1625,
          y: 628,
          style: FUNCTION_KEY_STYLES.default,
        },
      },
    ],
  },

  // 按键通用样式
  keyStyle: KEY_STYLES,
  // Windows 键盘布局
  windows: {
    layout: KEYBOARD_LAYOUT.rows.windows,
  },
};
