"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-6 overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Curated Profile Frame (Editorial Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 rounded-full"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden relative">
            <Image
              src='/yeamin.jpg'
              alt="Md Yeamin Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full grayscale contrast-110 brightness-95"
              priority={true}
              sizes="(max-width: 768px) 144px, 176px"
            />
          </div>
        </motion.div>

        {/* Documentary Record Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/60 font-mono-meta"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 dark:text-stone-400">
            RECORD // ACTIVE STATUS
          </span>
        </motion.div>

        {/* Narrative Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal font-serif-editorial italic tracking-tight mb-4 text-slate-900 dark:text-white"
        >
          Md Yeamin
        </motion.h1>

        {/* Technical Sub-spec Typewriter Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xs md:text-sm font-bold font-mono-meta tracking-widest text-stone-500 dark:text-stone-400 uppercase">
            MERN STACK ARCHITECT // SOFTWARE ENGINEER
          </h2>
        </motion.div>

        {/* Literary/Editorial Story Statement */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl font-serif-editorial text-lg md:text-2xl text-stone-600 dark:text-stone-400 italic mb-10 leading-relaxed px-4"
        >
          &ldquo;I formulate highly robust web architectures and craft dynamic, modern interfaces, weaving structured logic with clean aesthetic design.&rdquo;
        </motion.p>

        {/* High-Contrast Archival CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row gap-4 px-4"
        >
          <a 
            href="https://drive.google.com/file/d/1MyfninM4Z17ViJdVtzEXbBpiiiwHeXrH/view?usp=drive_link" 
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-bold font-mono-meta tracking-wider uppercase text-slate-50 dark:text-slate-900 bg-slate-900 dark:bg-slate-100 rounded-md overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shadow-md shadow-black/5 hover:shadow-primary/10"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span>Download Dossier</span>
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a 
            href="#projects" 
            className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-bold font-mono-meta tracking-wider uppercase text-slate-800 dark:text-white border border-stone-300 dark:border-stone-700 bg-transparent rounded-md hover:bg-stone-100 dark:hover:bg-stone-900 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <span>Browse Works</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
