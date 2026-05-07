"use client";

import { motion } from "framer-motion";
import { BookOpen, MapPin, Calendar, Briefcase } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span> <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Description */}
          <motion.div 
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
              <Briefcase className="text-primary" />
              Professional Journey
            </h3>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a passionate <strong className="text-gray-200">Full Stack Web Developer</strong> with a focus on building clean, responsive, and high-performance web applications. I love the process of turning a complex problem into a simple and elegant digital solution.
              </p>
              <p>
                Currently, I am specializing in the <strong className="text-gray-200">MERN Stack</strong> (MongoDB, Express.js, React, Node.js). I have a deep interest in front-end aesthetics, which led me to master Tailwind CSS and daisyUI to create modern and user-friendly interfaces.
              </p>
              <p>
                Beyond coding, I am an enthusiast of modern design trends and constantly exploring new tools to improve the user experience. I believe in continuous learning and am always looking for opportunities to collaborate on impactful projects.
              </p>
            </div>
          </motion.div>

          {/* Quick Facts & Education */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                <p className="text-white font-medium">Bangladesh</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Calendar className="text-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium mb-1">Experience</p>
                <p className="text-white font-medium">Since 2026</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl mt-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
                <BookOpen className="text-accent" />
                Education
              </h3>
              
              <div className="relative pl-6 border-l border-white/10 space-y-8">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[29px] top-1.5 ring-4 ring-background"></div>
                  <h4 className="text-white font-medium text-lg">Khulna Polytechnic Institute</h4>
                  <p className="text-primary text-sm mt-1">Diploma in Engineering</p>
                </div>
                
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[29px] top-1.5 ring-4 ring-background"></div>
                  <h4 className="text-white font-medium text-lg">Gazirchat Uttar M.U Islamia Alim Madrasah</h4>
                  <p className="text-gray-400 text-sm mt-1">May 2020 - 2025</p>
                </div>

                <div className="relative">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[29px] top-1.5 ring-4 ring-background"></div>
                  <h4 className="text-white font-medium text-lg">Darul Quran Qawmi Madrasah</h4>
                  <p className="text-gray-400 text-sm mt-1">2014 - 2020</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
