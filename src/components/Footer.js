"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-stone-200/40 dark:border-stone-850/40 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Monospaced Archive Copy Credit */}
        <p className="text-stone-500 dark:text-stone-500 text-[9px] uppercase tracking-widest font-mono-meta">
          © {currentYear} <span className="text-stone-800 dark:text-stone-200 font-bold">Md Yeamin</span> // ARCHIVE INDEX.
        </p>
        
        {/* Social Channels */}
        <div className="flex items-center gap-5">
          <a href="https://github.com/mdyeamin" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            <FaGithub size={13} />
          </a>
          <a href="https://www.linkedin.com/in/mdyeamin05/" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            <FaLinkedin size={13} />
          </a>
          <a href="https://www.facebook.com/mdyeamin.05" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            <FaFacebook size={13} />
          </a>
          <a href="https://twitter.com/yeamin050" target="_blank" rel="noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors">
            <FaTwitter size={13} />
          </a>
        </div>

      </div>

      {/* Structured Back to Top (Editorial Style) */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-stone-100/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200 dark:border-stone-800 rounded-md text-stone-800 dark:text-stone-200 shadow-md hover:bg-stone-200 dark:hover:bg-stone-800 transition-all group"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp size={16} />
        </motion.div>
      </motion.button>
    </footer>
  );
}
