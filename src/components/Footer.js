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
    <footer className="py-8 border-t border-white/5 relative z-10 bg-black/40">
      <div className="container mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-[10px] md:text-xs uppercase tracking-widest font-bold">
          © {currentYear} <span className="text-white">Md Yeamin</span>. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/mdyeamin" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaGithub size={14} />
          </a>
          <a href="https://www.linkedin.com/in/mdyeamin05/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaLinkedin size={14} />
          </a>
          <a href="https://www.facebook.com/mdyeamin.05" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FaFacebook size={14} />
          </a>
          <a href="https://twitter.com/yeamin050" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaTwitter size={14} />
          </a>
        </div>

      </div>

      {/* Sticky Back to Top Arrow */}
      <motion.button 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-primary/10 backdrop-blur-xl border border-white/10 rounded-full text-primary shadow-2xl hover:bg-primary hover:text-white transition-all group shadow-primary/20"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp size={20} />
        </motion.div>
      </motion.button>
    </footer>
  );
}
