"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  const keyboardVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
    initial: {
      scale: 1,
      rotate: -5,
    },
    animate: {
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative bg-page-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl md:text-6xl">
              Master Your Keyboard
            </h1>
            <p className="mt-3 text-text-secondary sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
              Boost your productivity with our comprehensive collection of
              keyboard shortcuts for various applications and platforms.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href="/search"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-highlight hover:bg-highlight/90 transition-colors"
              >
                Explore Shortcuts
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Keyboard visualization component */}
          </div>
        </div>
      </div>
    </div>
  );
}
