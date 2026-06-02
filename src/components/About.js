"use client";
import { motion } from "framer-motion";
import { BookOpen, MapPin, Calendar, Briefcase, ExternalLink } from "lucide-react";
import GitHubCalendar from "./GitHubCalendar";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="py-10 relative bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
            [01/04] // THE BIOGRAPHY
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-stone-900 dark:text-white">
            Dossier & Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Narrative Journey Block */}
          <motion.div
            className="lg:col-span-7 p-6 md:p-8 rounded-none bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-normal font-serif-editorial italic mb-6 flex items-center gap-3 text-stone-900 dark:text-stone-50 border-b border-stone-200 dark:border-stone-800 pb-3">
              <Briefcase className="text-primary" size={18} />
              Professional Narrative
            </h3>
            <div className="space-y-5 text-stone-850 dark:text-stone-200 text-base md:text-lg leading-relaxed font-sans font-light">
              <p>
                I am a passionate <strong className="text-stone-950 dark:text-white font-bold">Full Stack Web Developer</strong> with a focus on building clean, responsive, and high-performance web applications. I love the process of turning a complex problem into a simple and elegant digital solution.
              </p>
              <p>
                Currently, I am specializing in the <strong className="text-stone-950 dark:text-white font-bold">MERN Stack</strong> (MongoDB, Express.js, React, Node.js). I have a deep interest in front-end aesthetics, which led me to master Tailwind CSS and modern UI engines to create beautiful, accessible, and user-friendly interfaces.
              </p>
            </div>
          </motion.div>

          {/* Quick Specifications & Chronicles */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="p-4 rounded-none bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-none bg-stone-200/30 dark:bg-stone-800/30 flex items-center justify-center shrink-0 border border-stone-300/40 dark:border-stone-700/40">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-500 font-bold uppercase tracking-wider font-mono">Location</p>
                  <p className="text-stone-900 dark:text-stone-100 font-bold text-sm uppercase font-mono">Bangladesh</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="p-4 rounded-none bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-none bg-stone-200/30 dark:bg-stone-800/30 flex items-center justify-center shrink-0 border border-stone-300/40 dark:border-stone-700/40">
                  <Calendar className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-500 font-bold uppercase tracking-wider font-mono">Experience</p>
                  <p className="text-stone-900 dark:text-stone-100 font-bold text-sm uppercase font-mono">1 Year+</p>
                </div>
              </motion.div>
            </div>

            {/* Academic Archive Card */}
            <motion.div variants={itemVariants} className="p-6 md:p-8 rounded-none bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80">
              <h3 className="text-xl font-normal font-serif-editorial italic mb-8 flex items-center gap-3 text-stone-900 dark:text-stone-50 border-b border-stone-200 dark:border-stone-800 pb-3">
                <BookOpen className="text-primary" size={18} />
                Academic Chronicles
              </h3>
              <div className="relative pl-6 border-l border-stone-200 dark:border-stone-800 space-y-8 font-sans">
                {/* School 1 */}
                <div className="relative">
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[31px] top-1.5 ring-4 ring-background"></div>
                  <h4 className="text-stone-900 dark:text-stone-100 font-bold text-base uppercase tracking-wide">Khulna Polytechnic Institute</h4>
                  <p className="text-primary font-serif-editorial italic text-sm mt-1">Diploma in Engineering</p>
                  <p className="text-stone-600 dark:text-stone-400 font-mono text-xs uppercase mt-1.5">2025 - Present</p>
                </div>

                {/* School 2 */}
                <div className="relative">
                  <div className="absolute w-2.5 h-2.5 bg-stone-400 dark:bg-stone-700 rounded-full -left-[31px] top-1.5 ring-4 ring-background"></div>
                  <h4 className="text-stone-900 dark:text-stone-100 font-bold text-base uppercase tracking-wide">Gazirchat Uttar M.U Islamia Alim Madrasah</h4>
                  <p className="text-stone-600 dark:text-stone-400 font-mono text-xs uppercase mt-1.5">May 2020 - 2025</p>
                </div>

                {/* School 3 */}
                <div className="relative">
                  <div className="absolute w-2.5 h-2.5 bg-stone-400 dark:bg-stone-700 rounded-full -left-[31px] top-1.5 ring-4 ring-background"></div>
                  <h4 className="text-stone-900 dark:text-stone-100 font-bold text-base uppercase tracking-wide">Darul Quran Qawmi Madrasah</h4>
                  <p className="text-stone-600 dark:text-stone-400 font-mono text-xs uppercase mt-1.5">2014 - 2020</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Professional GitHub Activity Contributions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 p-6 md:p-8 rounded-none bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80"
        >
          <div className="border-b border-stone-200 dark:border-stone-800 pb-4 mb-6">
            <h3 className="text-lg md:text-xl font-normal font-serif-editorial italic text-stone-900 dark:text-stone-50">
              GitHub Contributions
            </h3>
          </div>


          <GitHubCalendar username="mdyeamin" />
        </motion.div>

      </div>
    </section>
  );
}
