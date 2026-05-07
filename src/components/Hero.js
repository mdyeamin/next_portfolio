"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    let timeoutId;
    
    const triggerThunder = async () => {
      // Strike sequence: sudden bright flash + background movement + vibration
      await controls.start({
        filter: ["brightness(1)", "brightness(3)", "brightness(1.5)", "brightness(1)"],
        backgroundPosition: ["0% 50%", "100% 100%", "50% 0%", "0% 50%"],
        textShadow: [
          "0 0 0px rgba(255,255,255,0)",
          "0 0 30px rgba(255,255,255,1), 0 0 60px rgba(0,210,255,0.8)",
          "0 0 0px rgba(255,255,255,0)",
        ],
        x: [0, -2, 2, -2, 2, 0],
        transition: { 
          duration: 0.2, 
          times: [0, 0.2, 0.5, 1],
          ease: "easeInOut" 
        }
      });

      // Return to static state
      controls.set({ filter: "brightness(0.8)", x: 0 });

      // Random interval between 3s and 20s
      const nextInterval = Math.random() * (20000 - 3000) + 3000;
      timeoutId = setTimeout(triggerThunder, nextInterval);
    };

    // Initial delay
    timeoutId = setTimeout(triggerThunder, 4000);
    
    return () => clearTimeout(timeoutId);
  }, [controls]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="relative w-40 h-40 md:w-48 md:h-48 mb-8 rounded-full p-1 bg-gradient-to-tr from-primary via-accent to-secondary"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-black/80">
            <Image
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/552505779_2295899874191781_1986940869533248310_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=M61m2zSNIb8Q7kNvwE2SJY0&_nc_oc=AdrFFssWTX9jFynENiDAlKsSstC0Tw0xh4Xmpk2iTQ_8YCu5PUdsMvhF8vNzj2SIyRc&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=HxU3LlPAQrV3yz9j2nI3Zg&_nc_ss=7b2a8&oh=00_Af6q-8ff1BLgzBHgbce2aD0ouq0bZ2c2FjXM6VE6fz_zGQ&oe=6A022E92"
              alt="Md Yeamin Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
        >
          Hi, I&apos;m <span className="text-white">Md</span> <span className="text-gradient">Yeamin</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 md:h-16 mb-6 flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-400">
            I am a
          </h2>
          <motion.h2 
            animate={controls}
            initial={{ backgroundPosition: "0% 50%", filter: "brightness(0.8)" }}
            className="text-2xl md:text-4xl font-extrabold thunder-text"
          >
            MERN Stack Developer
          </motion.h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Building the web of tomorrow with precision and creativity. I turn complex problems into elegant, scalable digital solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="/cv.pdf" 
            download
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative group-hover:text-white transition-colors">Download CV</span>
            <Download size={18} className="relative group-hover:text-white transition-colors group-hover:translate-y-1" />
          </a>
          <a 
            href="#projects" 
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white glass-card rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <span>View My Work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
