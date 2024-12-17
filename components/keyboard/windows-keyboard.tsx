"use client";

import BaseKeyboard from "./base-keyboard";

interface WindowsKeyboardProps {
  activeKeys?: string[];
  className?: string;
  [key: string]: any;
}

export default function WindowsKeyboard({
  activeKeys = [],
  className,
  ...props
}: WindowsKeyboardProps) {
  return (
    <BaseKeyboard
      activeKeys={activeKeys}
      className={className}
      keyboardType="windows"
      {...props}
    />
  );
}
