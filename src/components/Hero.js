"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Dossier Information (65%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Archival Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 font-mono text-[9px] uppercase tracking-widest text-stone-600 dark:text-stone-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>INDEX // RECORD ACTIVE</span>
            </motion.div>

            {/* Large Editorial Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-normal font-serif-editorial italic tracking-tight mb-4 text-stone-900 dark:text-white"
            >
              Md Yeamin
            </motion.h1>

            {/* Typewriter Tech Sub-specification */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-xs md:text-sm font-bold font-mono tracking-widest text-stone-500 dark:text-stone-400 uppercase">
                FULL STACK DEVELOPER // MERN SPECIALIST
              </h2>
            </motion.div>

            {/* Asymmetric Narrative Quote Box */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-2 border-stone-300 dark:border-stone-700 pl-6 my-6 max-w-xl"
            >
              <p className="font-serif-editorial text-lg md:text-xl text-stone-600 dark:text-stone-400 italic leading-relaxed">
                &ldquo;I formulate highly robust web architectures and craft dynamic, modern interfaces, weaving structured logic with clean, premium design.&rdquo;
              </p>
            </motion.div>

            {/* Editorial CTAs (Sharp Rounded-None Outlines) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto"
            >
              <a 
                href="https://drive.google.com/file/d/1MyfninM4Z17ViJdVtzEXbBpiiiwHeXrH/view?usp=drive_link" 
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[10px] md:text-xs font-bold font-mono tracking-widest uppercase text-stone-50 dark:text-stone-900 bg-stone-900 dark:bg-stone-100 hover:bg-stone-850 dark:hover:bg-stone-200 transition-colors duration-300 rounded-none w-full sm:w-auto shadow-sm"
              >
                <span>Download Dossier</span>
                <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[10px] md:text-xs font-bold font-mono tracking-widest uppercase text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-300 rounded-none w-full sm:w-auto"
              >
                <span>Browse Archive</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Sharp Archival Dossier Portrait Frame (35%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[250px] sm:w-[280px] md:w-[320px] bg-white/50 dark:bg-stone-900/30 border border-stone-200 dark:border-stone-800 p-3 shadow-md rounded-none group/portrait flex flex-col hover:border-stone-400 dark:hover:border-stone-600 transition-colors duration-500"
            >
              {/* Grayscale-to-color interactive shift */}
              <div className="aspect-[4/5] relative overflow-hidden bg-stone-100 dark:bg-stone-950 border border-stone-200/60 dark:border-stone-800/60">
                <Image
                  src="/yeamin.jpg"
                  alt="Md Yeamin Profile Portrait"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale group-hover/portrait:grayscale-0 scale-[1.01] group-hover/portrait:scale-[1.03] transition-all duration-700 ease-out"
                  priority={true}
                  sizes="(max-width: 768px) 250px, (max-width: 1024px) 280px, 320px"
                />
              </div>

              {/* Archival Catalog Directory Directory */}
              <div className="mt-3 pt-2.5 border-t border-stone-200/80 dark:border-stone-800/80 flex justify-between items-center font-mono text-[8px] uppercase tracking-widest text-stone-500 dark:text-stone-500">
                <span>[ENTRY_ID: 994-A]</span>
                <span>LOC: KHULNA, BD</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
