"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma, 
  FaNpm, 
  FaJs,
  FaShieldAlt,
  FaExchangeAlt
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiJsonwebtokens, 
  SiAxios
} from "react-icons/si";

// 100% build-safe brand icons list
const skillsData = [
  // Frontend
  {
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E] transition-transform duration-300 group-hover:scale-110" size={32} />,
    category: "frontend"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] transition-transform duration-300 group-hover:scale-110" size={28} />,
    category: "frontend"
  },
  {
    name: "React.js",
    icon: <FaReact className="text-[#61DAFB] animate-[spin_10s_linear_infinite] transition-transform duration-300 group-hover:scale-110" size={32} />,
    category: "frontend"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-stone-900 dark:text-stone-100 transition-transform duration-300 group-hover:scale-110" size={28} />,
    category: "frontend"
  },
  {
    name: "HeroUI",
    icon: (
      <svg className="w-8 h-8 text-[#0072F5] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2L2 9l14 7 14-7-14-7zM2 16l14 7 14-7-14-3.5L2 12.5v3.5zm0 7l14 7 14-7-14-3.5L2 19.5V23z"/>
      </svg>
    ),
    category: "frontend"
  },
  {
    name: "Shadcn UI",
    icon: (
      <svg className="w-7 h-7 text-stone-900 dark:text-stone-100 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="20">
        <path d="M208 40L40 208M208 80L80 208M208 120L120 208M208 160L160 208" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: "frontend"
  },
  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#339933] transition-transform duration-300 group-hover:scale-110" size={32} />,
    category: "backend"
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-stone-850 dark:text-stone-200 transition-transform duration-300 group-hover:scale-110" size={28} />,
    category: "backend"
  },
  {
    name: "REST APIs",
    icon: <FaExchangeAlt className="text-stone-600 dark:text-stone-400 transition-transform duration-300 group-hover:scale-110" size={26} />,
    category: "backend"
  },
  {
    name: "Axios",
    icon: <SiAxios className="text-[#5A29E4] transition-transform duration-300 group-hover:scale-110" size={28} />,
    category: "backend"
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens className="text-[#d63aff] transition-transform duration-300 group-hover:scale-110" size={28} />,
    category: "backend"
  },
  // Database & Auth
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] transition-transform duration-300 group-hover:scale-110" size={30} />,
    category: "database"
  },
  {
    name: "BetterAuth",
    icon: <FaShieldAlt className="text-[#facc15] transition-transform duration-300 group-hover:scale-110" size={28} />,
    category: "database"
  },
  // Tools
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032] transition-transform duration-300 group-hover:scale-110" size={32} />,
    category: "tools"
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-stone-900 dark:text-stone-100 transition-transform duration-300 group-hover:scale-110" size={28} />,
    category: "tools"
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-[#F24E1E] transition-transform duration-300 group-hover:scale-110" size={26} />,
    category: "tools"
  },
  {
    name: "NPM",
    icon: <FaNpm className="text-[#CB3837] transition-transform duration-300 group-hover:scale-110" size={32} />,
    category: "tools"
  }
];

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database & Auth" },
    { id: "tools", label: "Tools" }
  ];

  // Filter skills data
  const filteredSkills = skillsData.filter(
    (skill) => filter === "all" || skill.category === filter
  );

  return (
    <section id="skills" className="py-10 relative bg-transparent select-none">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
            [02/04] // SKILLS
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-stone-900 dark:text-white mb-4">
            Technical Index
          </h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-xl text-sm md:text-base font-sans leading-relaxed font-light">
            A list of technologies and tools I use to build fast, modern web applications.
          </p>
        </motion.div>

        {/* Skill Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 pb-3 border-b border-stone-200 dark:border-stone-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 font-mono text-[10px] sm:text-xs uppercase tracking-wider transition-colors duration-200 rounded-none cursor-pointer border ${
                filter === cat.id
                  ? "bg-primary border-primary text-white dark:text-black font-bold"
                  : "border-stone-250 dark:border-stone-850 bg-stone-100/50 dark:bg-stone-900/20 text-stone-550 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technical Directory Grid (Animated) */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="group p-5 md:p-6 rounded-none bg-white/50 dark:bg-stone-900/20 border border-stone-200/80 dark:border-stone-800/80 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden transition-all duration-300 hover:border-primary dark:hover:border-primary hover:bg-white dark:hover:bg-stone-900/50 hover:shadow-[0_8px_16px_-6px_rgba(0,0,0,0.05)] cursor-default"
              >
                {/* Brand Icon Box */}
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  {skill.icon}
                </div>

                {/* Tech Name */}
                <span className="text-[11px] sm:text-xs font-bold font-mono uppercase tracking-wider text-stone-750 dark:text-stone-200 transition-colors group-hover:text-primary">
                  {skill.name}
                </span>

                {/* Subtle visual corner decoration */}
                <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-stone-200 dark:bg-stone-800 transition-colors group-hover:bg-primary" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
