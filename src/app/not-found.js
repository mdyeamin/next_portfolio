"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
      {/* Abstract Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full top-[-100px] left-[-100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] bg-accent/20 blur-[100px] rounded-full bottom-[-50px] right-[-50px]"
      />

      <div className="z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-8xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-primary to-accent"
          style={{ textShadow: "0px 10px 30px rgba(0,210,255,0.3)" }}
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Lost in the digital void?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for has vanished into cyberspace. Let&apos;s get you back home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
