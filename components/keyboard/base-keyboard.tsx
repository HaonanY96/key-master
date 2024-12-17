"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  KEYBOARD_DIMENSIONS,
  KEY_STYLES,
  KEY_SIZES,
  KEYBOARD_LAYOUT,
  KEY_DISPLAY,
  KEY_ID_MAP,
} from "./keyboard-constants-layout.js";

type KeyboardType = 'windows' | 'mac';

interface KeyStyle {
  fill: string;
  stroke: string;
  textFill: string;
  rx: number;
}

interface BaseKeyboardProps {
  activeKeys?: string[];
  className?: string;
  keyMap?: Record<string, string>;
  keyboardType?: KeyboardType;
}

interface KeyBackgroundProps {
  width: number;
  height: number;
  rx: number;
  x: number;
  y: number;
}

interface KeyTextProps {
  x: number;
  y: number;
  textAnchor?: string;
  dominantBaseline?: string;
  children: ReactNode;
}

// 添加类型定义
interface KeyboardRow {
  y: number;
  spacing?: number;
  keys: string[];
}

interface KeyboardLayout {
  rows: {
    windows: KeyboardRow[];
    mac: KeyboardRow[];
  };
  spacing: {
    horizontal: number;
    vertical: number;
  };
}

const getKeyId = (keyboardType: KeyboardType, keyId: string): string => {
  return (KEY_ID_MAP[keyboardType] as Record<string, string>)[keyId] || keyId;
};

export default function BaseKeyboard({
  activeKeys = [],
  className,
  keyMap = {},
  keyboardType = "windows",
  ...props
}: BaseKeyboardProps) {
  const isKeyHighlighted = (keyId: string): boolean => {
    return activeKeys.includes(keyId);
  };

  const getKeyLabel = (keyId: string): string => {
    const platformSpecific = KEY_DISPLAY[keyboardType]?.[keyId];
    const common = KEY_DISPLAY.common[keyId];
    return (platformSpecific || common)?.primary || keyId;
  };

  const getKeySecondaryLabel = (keyId: string): string | undefined => {
    return KEY_DISPLAY.common[keyId]?.secondary;
  };

  const getKeySize = (keyId: string) => {
    return (
      KEY_SIZES[keyboardType]?.[keyId] ||
      KEY_SIZES.special[keyId] ||
      KEY_SIZES.standard
    );
  };

  const renderKeyGroup = (keyId: string, children: React.ReactNode) => {
    return (
      <motion.g key={keyId} id={getKeyId(keyboardType, keyId)}>
        {children}
      </motion.g>
    );
  };

  const renderKeyBackground = (keyId: string, props: KeyBackgroundProps) => {
    const keyStyle = isKeyHighlighted(keyId)
      ? KEY_STYLES.highlighted
      : KEY_STYLES.default;

    // 移除 transition 和 textFill，只保留 SVGRect 相关属性
    const { textFill, transition, ...rectStyle } = keyStyle;

    return (
      <motion.rect
        {...props}
        {...rectStyle}
        whileHover={KEY_STYLES.hover}
        whileTap={KEY_STYLES.active}
      />
    );
  };

  const renderKeyText = (keyId: string, props: KeyTextProps) => {
    const keyStyle = isKeyHighlighted(keyId)
      ? KEY_STYLES.highlighted
      : KEY_STYLES.default;
    return (
      <motion.text
        {...props}
        fill={keyStyle.textFill}
        style={{
          userSelect: "none",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
        }}
      />
    );
  };

  // 类型断言
  const layout = KEYBOARD_LAYOUT as KeyboardLayout;

  return (
    <motion.svg
      className={className}
      width={KEYBOARD_DIMENSIONS.case.width}
      height={KEYBOARD_DIMENSIONS.case.height}
      viewBox={`${KEYBOARD_DIMENSIONS.viewBox.x} ${KEYBOARD_DIMENSIONS.viewBox.y} ${KEYBOARD_DIMENSIONS.viewBox.width} ${KEYBOARD_DIMENSIONS.viewBox.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* 键盘外壳阴影 */}
      <g opacity="0.3" filter="url(#filter0_f)">
        <path d="M44 76L103 44V694H86.567L44 76Z" fill="black" />
        <path d="M1738 76L1679 44V694H1695.43L1738 76Z" fill="black" />
      </g>

      {/* 键盘主体 */}
      <g filter="url(#filter2_dd)">
        <rect
          x={KEYBOARD_DIMENSIONS.case.padding.left}
          y={KEYBOARD_DIMENSIONS.case.padding.top}
          width={
            KEYBOARD_DIMENSIONS.case.width -
            KEYBOARD_DIMENSIONS.case.padding.left * 2
          }
          height={
            KEYBOARD_DIMENSIONS.case.height -
            KEYBOARD_DIMENSIONS.case.padding.top * 2
          }
          rx="16"
          fill="#C0C0C0"
        />
        <rect
          x={KEYBOARD_DIMENSIONS.case.padding.left}
          y={KEYBOARD_DIMENSIONS.case.padding.top}
          width={
            KEYBOARD_DIMENSIONS.case.width -
            KEYBOARD_DIMENSIONS.case.padding.left * 2
          }
          height={
            KEYBOARD_DIMENSIONS.case.height -
            KEYBOARD_DIMENSIONS.case.padding.top * 2
          }
          rx="16"
          fill="url(#paint0_linear)"
          fillOpacity="0.3"
        />
      </g>

      {/* 按键组 */}
      <g>
        {layout.rows[keyboardType].map((row, rowIndex) => (
          <g key={rowIndex}>
            {row.keys.map((keyId: string, keyIndex: number) => {
              const keySize = getKeySize(keyId);
              const x =
                KEYBOARD_DIMENSIONS.case.padding.left +
                keyIndex * (keySize.width + layout.spacing.horizontal);
              const y = row.y;

              return renderKeyGroup(
                keyId,
                <>
                  {renderKeyBackground(keyId, {
                    width: keySize.width,
                    height: keySize.height,
                    rx: KEY_STYLES.default.rx,
                    x,
                    y,
                  })}
                  {renderKeyText(keyId, {
                    x: x + keySize.width / 2,
                    y: y + keySize.height / 2,
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    children: getKeyLabel(keyId),
                  })}
                  {getKeySecondaryLabel(keyId) &&
                    renderKeyText(keyId, {
                      x: x + keySize.width / 2,
                      y: y + keySize.height / 3,
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      children: getKeySecondaryLabel(keyId),
                    })}
                </>
              );
            })}
          </g>
        ))}
      </g>

      {/* 渐变定义 */}
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="891"
          y1="24"
          x2="891"
          y2="708"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* 这里需要添加所有的滤镜定义 */}
      </defs>
    </motion.svg>
  );
} 