"use client";

import BaseKeyboard from "./base-keyboard";
import { keyMappings } from "./keyboard-data";

export default function WindowsKeyboard({
  activeKeys = [],
  className,
  ...props
}) {
  return (
    <BaseKeyboard
      activeKeys={activeKeys}
      className={className}
      keyMap={keyMappings.windows}
      keyboardType="windows"
      {...props}
    />
  );
}
