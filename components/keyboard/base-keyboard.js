// "use client";

// import { motion } from "framer-motion";
// import { keyboardStyles, keyPositionMap } from "./keyboard-data";

// // 键盘按键变体动画
// const keyVariants = keyboardStyles.variants;

// export default function BaseKeyboard({
//   activeKeys = [],
//   className,
//   keyMap = {},
//   keyboardType, // 用于区分 Windows/Mac
//   ...props
// }) {
//   // 判断按键是否需要高亮
//   const isKeyHighlighted = (keyId) => {
//     const mappedKey = keyPositionMap[keyboardType]?.[keyId];
//     return mappedKey && activeKeys.includes(mappedKey);
//   };

//   // 获取按键显示文本
//   const getKeyLabel = (keyId) => {
//     const mappedKey = keyPositionMap[keyboardType]?.[keyId];
//     return mappedKey ? keyMap[mappedKey] || mappedKey : keyId;
//   };

//   // 渲染单个按键组
//   const renderKeyGroup = (keyId, children) => {
//     return (
//       <motion.g key={keyId} id={keyId}>
//         {children}
//       </motion.g>
//     );
//   };

//   // 渲染按键背景
//   const renderKeyBackground = (keyId, props) => {
//     return (
//       <motion.rect
//         {...props}
//         variants={keyVariants}
//         animate={isKeyHighlighted(keyId) ? "highlighted" : "initial"}
//       />
//     );
//   };

//   // 渲染按键文字
//   const renderKeyText = (keyId, props) => {
//     return (
//       <motion.path
//         {...props}
//         fill={keyboardStyles.keyText.fill}
//         initial={{ fill: keyboardStyles.keyText.fill }}
//         animate={{
//           fill: isKeyHighlighted(keyId)
//             ? "#FFFFFF"
//             : keyboardStyles.keyText.fill,
//         }}
//       />
//     );
//   };

//   return (
//     <motion.svg
//       className={className}
//       width={keyboardStyles.keyboard.width}
//       height={keyboardStyles.keyboard.height}
//       viewBox={keyboardStyles.keyboard.viewBox}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       {/* 键盘外壳阴影 */}
//       <g opacity="0.3" filter="url(#filter0_f)">
//         <path d="M44 76L103 44V694H86.567L44 76Z" fill="black" />
//         <path d="M1738 76L1679 44V694H1695.43L1738 76Z" fill="black" />
//       </g>

//       {/* 键盘主体 */}
//       <g filter="url(#filter2_dd)">
//         <rect
//           x="81"
//           y="24"
//           width="1620"
//           height="684"
//           rx="16"
//           fill={keyboardStyles.keyboard.background}
//         />
//         <rect
//           x="81"
//           y="24"
//           width="1620"
//           height="684"
//           rx="16"
//           fill="url(#paint0_linear)"
//           fillOpacity="0.3"
//         />
//       </g>

//       {/* 按键组 */}
//       <g>
//         {/* 示例：渲染 Escape 键 */}
//         {renderKeyGroup(
//           "key-escape",
//           <>
//             {renderKeyBackground("key-escape", {
//               width: keyboardStyles.keySize.standard.width,
//               height: keyboardStyles.keySize.standard.height,
//               rx: keyboardStyles.keyBase.rx,
//               x: 105,
//               y: 40,
//             })}
//             {renderKeyText("key-escape", {
//               d: "M...", // 这里需要实际的路径数据
//             })}
//           </>
//         )}

//         {/* 这里需要添加所有其他按键的渲染 */}
//       </g>

//       {/* 渐变定义 */}
//       <defs>
//         <linearGradient
//           id="paint0_linear"
//           x1="891"
//           y1="24"
//           x2="891"
//           y2="708"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="white" />
//           <stop offset="1" stopColor="white" stopOpacity="0" />
//         </linearGradient>
//         {/* 这里需要添加所有的滤镜定义 */}
//       </defs>
//     </motion.svg>
//   );
// }

"use client";

export default function BaseKeyboard({
  activeKeys = [],
  className,
  keyMap = {},
  keyboardType,
}) {
  return (
    <div className={`keyboard ${className}`}>
      {activeKeys.map((key) => (
        <div key={key} className="active-key">
          {keyMap[key] || key}
        </div>
      ))}
    </div>
  );
}
