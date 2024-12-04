"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Key = ({ keyCode, label, isActive = false }) => {
  return (
    <motion.div
      className={`border rounded p-2 text-center ${
        isActive ? "bg-blue-500 text-white" : "bg-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.div>
  );
};

export default function KeyboardVisualizer() {
  const [activeKeys, setActiveKeys] = useState([]);

  return (
    <div className="keyboard-container">
      {/* Keyboard layout implementation */}
      <div className="grid grid-cols-12 gap-1">
        <Key keyCode="Escape" label="Esc" />
        {/* Add more keys... */}
      </div>
    </div>
  );
}
