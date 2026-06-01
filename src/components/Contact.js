"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-10 relative bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <p className="font-mono-meta text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
            [04/04] // THE DISPATCH
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-slate-900 dark:text-white">
            Communications Dossier
          </h2>
        </motion.div>

        {/* Archival Container */}
        <div className="max-w-3xl mx-auto rounded-md bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/60 dark:border-stone-800/60 p-6 md:p-10 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Contact Specs */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-bold font-mono-meta tracking-wider text-slate-900 dark:text-white uppercase mb-4 border-b border-stone-200 dark:border-stone-800 pb-2 w-full">
                  Registry & Coordinates
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-6 text-xs leading-relaxed font-sans">
                  Open to architectural collaborations, software projects, or structural consultations. Reach out directly.
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:ahmedyeamin05@gmail.com" className="flex items-center gap-4 text-stone-700 dark:text-stone-300 hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-md bg-stone-200/40 dark:bg-stone-850/40 border border-stone-300/40 dark:border-stone-700/40 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-stone-800 dark:text-stone-200" />
                    </div>
                    <div>
                      <p className="text-[8px] text-stone-500 dark:text-stone-500 uppercase tracking-widest font-mono-meta font-bold">Email Coordinate</p>
                      <p className="text-xs font-bold font-mono-meta text-stone-800 dark:text-stone-250">ahmedyeamin05@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="tel:+8801999230669" className="flex items-center gap-4 text-stone-700 dark:text-stone-300 hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-md bg-stone-200/40 dark:bg-stone-850/40 border border-stone-300/40 dark:border-stone-700/40 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-stone-800 dark:text-stone-200" />
                    </div>
                    <div>
                      <p className="text-[8px] text-stone-500 dark:text-stone-500 uppercase tracking-widest font-mono-meta font-bold">Direct Line</p>
                      <p className="text-xs font-bold font-mono-meta text-stone-800 dark:text-stone-250">+8801999230669</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-stone-200 dark:border-stone-850 w-full">
                <a href="https://github.com/mdyeamin" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-stone-200/40 dark:bg-stone-800/40 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-300/40 dark:hover:bg-stone-700/45 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-300/40 dark:border-stone-700/40 transition-colors">
                  <FaGithub size={13} />
                </a>
                <a href="https://www.linkedin.com/in/mdyeamin05/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-stone-200/40 dark:bg-stone-800/40 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-300/40 dark:hover:bg-stone-700/45 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-300/40 dark:border-stone-700/40 transition-colors">
                  <FaLinkedin size={13} />
                </a>
                <a href="https://www.facebook.com/mdyeamin.05" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-stone-200/40 dark:bg-stone-800/40 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-300/40 dark:hover:bg-stone-700/45 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-300/40 dark:border-stone-700/40 transition-colors">
                  <FaFacebook size={13} />
                </a>
              </div>
            </motion.div>

            {/* Quick Dispatch Portal */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="p-6 md:p-8 rounded-md bg-stone-200/25 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800 relative overflow-hidden flex flex-col justify-center h-full">
                <h4 className="text-sm font-bold font-mono-meta tracking-wider text-slate-900 dark:text-white uppercase mb-2">
                  Immediate Dispatch
                </h4>
                <p className="text-stone-500 dark:text-stone-400 text-xs mb-6 font-sans leading-relaxed">
                  Transmit an automated email route directly. Response latency is low.
                </p>
                <a 
                  href="mailto:ahmedyeamin05@gmail.com"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 font-bold font-mono-meta uppercase tracking-wider text-[10px] rounded-md transition-all active:scale-[0.98] shadow-md hover:bg-slate-800 dark:hover:bg-slate-200"
                >
                  <Send size={12} />
                  Transmit Email
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
