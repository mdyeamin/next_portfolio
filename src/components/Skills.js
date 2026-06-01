"use client";

import { motion } from "framer-motion";
import { Code2, Server, Wrench, Database } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Architecture",
    icon: <Code2 className="text-primary" size={20} />,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & Systems",
    icon: <Server className="text-primary" size={20} />,
    skills: ["Node.js", "Express.js", "REST APIs", "Axios"]
  },
  {
    category: "Database & Auth",
    icon: <Database className="text-primary" size={20} />,
    skills: ["MongoDB", "BetterAuth"]
  },
  {
    category: "Engineering Tools",
    icon: <Wrench className="text-primary" size={20} />,
    skills: ["Git", "GitHub", "Figma", "VS Code", "Linux", "NPM"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="py-10 relative bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="font-mono-meta text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
            [02/04] // THE ENGINE
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-slate-900 dark:text-white mb-4">
            Technical Index
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl text-xs md:text-sm font-sans leading-relaxed">
            A precise directory of the languages, frameworks, and system utilities formulated to build high-performance, robust architectures.
          </p>
        </motion.div>

        {/* Technical Directory Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((group, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-6 md:p-8 rounded-md bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/60 dark:border-stone-800/60 flex flex-col items-start relative overflow-hidden"
            >
              {/* Archival Folder Header */}
              <div className="relative z-10 mb-5 w-10 h-10 flex items-center justify-center rounded-md bg-stone-200/40 dark:bg-stone-800/40 border border-stone-300/40 dark:border-stone-700/40">
                {group.icon}
              </div>
              
              <h3 className="text-xs font-bold font-mono-meta tracking-wider text-slate-900 dark:text-white uppercase mb-6 border-b border-stone-200 dark:border-stone-800 pb-2 w-full">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 text-[9px] font-bold font-mono-meta bg-stone-200/30 dark:bg-stone-900/40 border border-stone-200/60 dark:border-stone-800/60 rounded-md text-stone-600 dark:text-stone-300 tracking-wider uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
