"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center w-full">
          
          {/* Left Column: Dossier Information (65%) */}
          <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
            
            {/* Archival Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 font-mono text-[9px] uppercase tracking-widest text-stone-600 dark:text-stone-400"
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
              className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-normal font-serif-editorial italic tracking-tight mb-3 md:mb-4 text-stone-900 dark:text-white"
            >
              Md Yeamin
            </motion.h1>
 
            {/* Typewriter Tech Sub-specification */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 md:mb-6"
            >
              <h2 className="text-[10px] sm:text-xs md:text-[11px] lg:text-sm font-bold font-mono tracking-widest text-stone-500 dark:text-stone-400 uppercase">
                FULL STACK DEVELOPER // MERN SPECIALIST
              </h2>
            </motion.div>
 
            {/* Asymmetric Narrative Quote Box */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-2 border-stone-300 dark:border-stone-700 pl-4 md:pl-6 my-4 md:my-6 max-w-xl"
            >
              <p className="font-serif-editorial text-sm sm:text-base md:text-base lg:text-xl text-stone-600 dark:text-stone-400 italic leading-relaxed">
                &ldquo;I formulate highly robust web architectures and craft dynamic, modern interfaces, weaving structured logic with clean, premium design.&rdquo;
              </p>
            </motion.div>
 
            {/* Editorial CTAs (Sharp Rounded-None Outlines) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 md:gap-4 mt-3 md:mt-4 w-full sm:w-auto"
            >
              <a 
                href="https://drive.google.com/file/d/1MyfninM4Z17ViJdVtzEXbBpiiiwHeXrH/view?usp=drive_link" 
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-4 py-3 text-[9px] sm:text-[10px] md:text-[10px] lg:text-xs font-bold font-mono tracking-widest uppercase text-stone-50 dark:text-stone-900 bg-stone-900 dark:bg-stone-100 hover:bg-stone-850 dark:hover:bg-stone-200 transition-colors duration-300 rounded-none w-full sm:w-auto shadow-sm"
              >
                <span>Download CV</span>
                <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center gap-2 px-4 py-3 text-[9px] sm:text-[10px] md:text-[10px] lg:text-xs font-bold font-mono tracking-widest uppercase text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-300 rounded-none w-full sm:w-auto"
              >
                <span>Browse Archive</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
 
          </div>
 
          {/* Right Column: Sharp Japanese Pokémon Card Dossier Frame (35%) */}
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[240px] sm:w-[260px] md:w-[245px] lg:w-[290px] aspect-[2.5/3.5] bg-gradient-to-br from-amber-600 via-yellow-350 to-amber-500 p-[4px] shadow-2xl rounded-xl group/portrait relative overflow-hidden transition-all duration-555 hover:shadow-cyan-500/25 select-none"
              style={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.4), 0 0 25px rgba(6,182,212,0.15)"
              }}
            >
              {/* Inner Card Face Boundary */}
              <div className="w-full h-full bg-stone-50 dark:bg-gradient-to-b dark:from-[#0b1220] dark:via-[#050811] dark:to-[#020408] p-3 flex flex-col justify-between relative overflow-hidden text-stone-900 dark:text-stone-100 rounded-[8px] border border-amber-500/30 dark:border-cyan-500/30 transition-colors duration-500">
                
                {/* Cyber Grid Background */}
                <div 
                  className="absolute inset-0 z-0 pointer-events-none opacity-25 dark:opacity-20 bg-[linear-gradient(rgba(217,119,6,0.06)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(217,119,6,0.06)_1px,_transparent_1px)] dark:bg-[linear-gradient(rgba(6,182,212,0.08)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(6,182,212,0.08)_1px,_transparent_1px)] bg-[size:8px_8px]" 
                />

                {/* Holographic Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/10 dark:via-cyan-400/10 to-transparent dark:to-purple-500/10 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-700 pointer-events-none z-30 mix-blend-overlay" />

                <div className="relative z-10">
                  {/* Card Title & HP Header */}
                  <div className="flex justify-between items-baseline mb-0.5 border-b border-amber-500/20 dark:border-cyan-500/20 pb-0.5">
                    <div className="flex flex-col">
                      <span className="text-[5.5px] font-mono text-amber-600 dark:text-amber-400 tracking-widest leading-none font-bold">LEGENDARY CYBERNETIC</span>
                      <span className="text-[12px] font-black font-mono tracking-wide uppercase text-stone-900 dark:text-cyan-400 leading-none mt-0.5">Md Yeamin</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="text-[7px] font-mono text-amber-650 dark:text-cyan-400 font-bold">HP</span>
                      <span className="text-xs font-black font-mono text-stone-900 dark:text-stone-50 leading-none">9990</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-100 dark:bg-cyan-950 border border-amber-400 dark:border-cyan-400 flex items-center justify-center text-[9px] font-black text-amber-700 dark:text-cyan-400 font-mono shadow-sm">⚡</div>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="text-[6.5px] font-mono text-stone-555 dark:text-stone-400 mb-1 flex justify-between tracking-widest font-bold">
                    <span>LEVEL: ULTIMATE | TYP: DEV / CYBERNETIC</span>
                    <span>STAGE 2</span>
                  </div>

                  {/* Illustration Window (The Vector Picture Container) */}
                  <div className="aspect-[1.35/1] relative overflow-hidden bg-stone-100 dark:bg-stone-950 border border-amber-500/20 dark:border-cyan-500/30 p-0.5 mb-1 shadow-inner">
                    {/* Vintage Dot Grid Vector Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-400 via-transparent to-stone-900 bg-[size:3px_3px] [background-repeat:repeat]" />
                    
                    {/* Holographic linear gloss bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 dark:via-cyan-400/30 to-transparent -translate-x-full group-hover/portrait:translate-x-full transition-transform duration-[1200ms] ease-out z-20" />

                    <Image
                      src="/yeamin.jpg"
                      alt="Md Yeamin Profile Portrait"
                      layout="fill"
                      objectFit="cover"
                      className="grayscale group-hover/portrait:grayscale-0 scale-[1.01] group-hover/portrait:scale-[1.04] transition-all duration-700 ease-out"
                      priority={true}
                      sizes="(max-width: 768px) 250px, (max-width: 1024px) 280px, 320px"
                    />
                  </div>

                  {/* Gold Specs Ribbon */}
                  <div className="bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-500 border-y border-amber-600/40 py-0.5 text-center font-mono text-[6px] text-stone-950 tracking-wider mb-1.5 font-bold shadow-sm">
                    NO. 001 MERN SPECIALIST HT: 5'11" WT: 160 lbs
                  </div>

                  {/* Card Attacks Section */}
                  <div className="flex flex-col gap-1">
                    {/* Attack 1 */}
                    <div className="flex flex-col border-b border-stone-200 dark:border-cyan-500/10 pb-0.5">
                      <div className="flex justify-between items-baseline">
                        <div className="flex items-center gap-1">
                          <span className="text-[6.5px] text-amber-600 dark:text-cyan-400 font-bold">①</span>
                          <span className="text-[8px] font-bold font-mono uppercase tracking-wider text-stone-800 dark:text-stone-200">CODE MATRIX OVERLOAD</span>
                        </div>
                        <span className="text-[8.5px] font-mono text-amber-600 dark:text-cyan-400 font-bold">300x</span>
                      </div>
                      <p className="text-[6.5px] text-stone-600 dark:text-stone-400 font-sans leading-tight pl-2.5 mt-0.5 font-light">
                        Triggers a destructive code storm across the entire digital ecosystem.
                      </p>
                    </div>

                    {/* Attack 2 */}
                    <div className="flex flex-col border-b border-stone-200 dark:border-cyan-500/10 pb-0.5">
                      <div className="flex justify-between items-baseline">
                        <div className="flex items-center gap-1">
                          <span className="text-[6.5px] text-amber-600 dark:text-cyan-400 font-bold">②</span>
                          <span className="text-[8px] font-bold font-mono uppercase tracking-wider text-stone-800 dark:text-stone-200">MERN STACK ALGORITHM</span>
                        </div>
                        <span className="text-[8.5px] font-mono text-amber-600 dark:text-cyan-400 font-bold">600</span>
                      </div>
                      <p className="text-[6.5px] text-stone-600 dark:text-stone-400 font-sans leading-tight pl-2.5 mt-0.5 font-light">
                        Integrates all core architectural nodes to deploy a solid system barrier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Card Bottom: Weakness, Resistance, Retreat Cost */}
                  <div className="grid grid-cols-3 text-center border-t border-stone-200 dark:border-cyan-500/20 pt-1 font-mono text-[6px] text-stone-500 dark:text-stone-400 mt-0.5">
                    <div>
                      <p className="text-[4.5px] text-stone-500 uppercase font-bold">WEAKNESS</p>
                      <p className="font-bold text-amber-700 dark:text-amber-600 mt-0.5">BUGS ×2</p>
                    </div>
                    <div>
                      <p className="text-[4.5px] text-stone-500 uppercase font-bold">RESISTANCE</p>
                      <p className="font-bold text-emerald-600 dark:text-emerald-500 mt-0.5">SPAM -30</p>
                    </div>
                    <div>
                      <p className="text-[4.5px] text-stone-500 uppercase font-bold">RETREAT</p>
                      <p className="mt-0.5 font-bold text-amber-600 dark:text-cyan-400">⚡</p>
                    </div>
                  </div>

                  {/* Collector Details & Holographic Stamp */}
                  <div className="mt-1 pt-1 border-t border-stone-200 dark:border-cyan-500/20 flex justify-between items-center font-mono text-[5.5px] text-stone-500 tracking-wider font-bold">
                    <span>RARITY: ULTIMATE RARE ★</span>
                    <span className="flex items-center gap-0.5">
                      <span className="text-amber-600 dark:text-cyan-500 font-bold">DEV_NEXUS #001/150</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
