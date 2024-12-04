"use client";

import BaseKeyboard from "./base-keyboard";
import { keyMappings } from "./keyboard-data";

export default function MacKeyboard({ activeKeys = [], className, ...props }) {
  return (
    <BaseKeyboard
      activeKeys={activeKeys}
      className={className}
      keyMap={keyMappings.mac}
      keyboardType="mac"
      {...props}
    />
  );
}
