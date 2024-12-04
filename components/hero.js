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
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              Master Your Keyboard
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Boost your productivity with our comprehensive collection of
              keyboard shortcuts for various applications and platforms.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  href="/search"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Explore Shortcuts
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Keyboard
              variants={keyboardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
