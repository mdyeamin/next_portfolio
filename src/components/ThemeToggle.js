"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 w-10 h-10 opacity-0" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-transparent border-0 outline-none select-none cursor-pointer text-stone-850 dark:text-stone-150 hover:text-stone-950 dark:hover:text-white transition-colors duration-300"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle visual theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
            className="flex items-center justify-center text-stone-300 hover:text-white"
          >
            <Moon size={20} className="fill-stone-300/10" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
            className="flex items-center justify-center text-stone-700 hover:text-stone-950"
          >
            <Sun size={20} className="fill-stone-700/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
