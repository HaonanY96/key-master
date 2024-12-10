"use client";

import { motion } from "framer-motion";
import {
  KEYBOARD_DIMENSIONS,
  KEY_STYLES,
  KEY_SIZES,
  KEYBOARD_LAYOUT,
  KEY_DISPLAY,
  KEY_ID_MAP,
} from "./keyboard-layout";

export default function BaseKeyboard({
  activeKeys = [],
  className,
  keyMap = {},
  keyboardType = "windows", // 用于区分 Windows/Mac
  ...props
}) {
  // 判断按键是否需要高亮
  const isKeyHighlighted = (keyId) => {
    return activeKeys.includes(keyId);
  };

  // 获取按键显示文本
  const getKeyLabel = (keyId) => {
    const platformSpecific = KEY_DISPLAY[keyboardType]?.[keyId];
    const common = KEY_DISPLAY.common[keyId];
    return (platformSpecific || common)?.primary || keyId;
  };

  // 获取按键次要显示文本
  const getKeySecondaryLabel = (keyId) => {
    return KEY_DISPLAY.common[keyId]?.secondary;
  };

  // 获取按键尺寸
  const getKeySize = (keyId) => {
    return (
      KEY_SIZES[keyboardType]?.[keyId] ||
      KEY_SIZES.special[keyId] ||
      KEY_SIZES.standard
    );
  };

  // 渲染单个按键组
  const renderKeyGroup = (keyId, children) => {
    return (
      <motion.g key={keyId} id={KEY_ID_MAP[keyboardType][keyId]}>
        {children}
      </motion.g>
    );
  };

  // 渲染按键背景
  const renderKeyBackground = (keyId, props) => {
    const keyStyle = isKeyHighlighted(keyId)
      ? KEY_STYLES.highlighted
      : KEY_STYLES.default;
    return (
      <motion.rect
        {...props}
        {...keyStyle}
        whileHover={KEY_STYLES.hover}
        whileTap={KEY_STYLES.active}
      />
    );
  };

  // 渲染按键文字
  const renderKeyText = (keyId, props) => {
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
        {KEYBOARD_LAYOUT.rows[keyboardType].map((row, rowIndex) => (
          <g key={rowIndex}>
            {row.keys.map((keyId, keyIndex) => {
              const keySize = getKeySize(keyId);
              const x =
                KEYBOARD_DIMENSIONS.case.padding.left +
                keyIndex * (keySize.width + KEYBOARD_LAYOUT.spacing.horizontal);
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

BaseKeyboard.propTypes = {
  activeKeys: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  keyMap: PropTypes.object,
  keyboardType: PropTypes.oneOf(["windows", "mac"]),
};

BaseKeyboard.defaultProps = {
  activeKeys: [],
  keyMap: {},
  keyboardType: "windows",
};
