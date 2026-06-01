"use client";

import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center shadow-lg cursor-pointer outline-none select-none text-foreground hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle visual theme"
    >
      {/* Decorative pulse ring when hovering */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/30 opacity-0"
        whileHover={{ scale: 1.3, opacity: [0, 0.4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
      />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-primary flex items-center justify-center"
          >
            <Moon size={22} className="fill-primary/10" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-amber-500 flex items-center justify-center"
          >
            <Sun size={22} className="fill-amber-500/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
