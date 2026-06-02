"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Wrench, Database } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Architecture",
    icon: <Code2 className="text-primary" size={20} />,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HeroUI", "Shadcn UI"]
  },
  {
    category: "Backend & Dev",
    icon: <Server className="text-primary" size={20} />,
    skills: ["Node.js", "Express.js", "REST APIs", "Axios", "JWT"]
  },
  {
    category: "Database & Auth",
    icon: <Database className="text-primary" size={20} />,
    skills: ["MongoDB", "BetterAuth"]
  },
  {
    category: "Engineering Tools",
    icon: <Wrench className="text-primary" size={20} />,
    skills: ["Git", "GitHub", "Figma", "NPM"]
  }
];

// Self-measuring modular skill drawer
function SkillGroup({ group, itemVariants }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        // A single line of badges is approx 24-28px high. 
        // If the scrollHeight of all badges wrapped is greater than 30px, there is more than 1 line!
        const isOverflowing = containerRef.current.scrollHeight > 30;
        setHasMore(isOverflowing);
      }
    };

    checkOverflow();
    // Re-verify on window resize for responsive layout changes
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [group.skills]);

  return (
    <motion.div
      variants={itemVariants}
      className="p-6 md:p-7 rounded-none bg-white/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80 flex flex-col items-start relative overflow-hidden transition-all duration-500 ease-out hover:border-stone-400 dark:hover:border-stone-600 group/skill"
    >
      {/* Archival Folder Icon Box */}
      <div className="relative z-10 mb-4 w-10 h-10 flex items-center justify-center rounded-none bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 transition-colors duration-500 group-hover/skill:border-stone-400 dark:group-hover/skill:border-stone-600">
        {group.icon}
      </div>

      <h3 className="text-xs sm:text-sm font-bold font-mono tracking-widest text-stone-900 dark:text-stone-100 uppercase mb-5 border-b border-stone-200/60 dark:border-stone-800/60 pb-2 w-full relative">
        {group.category}
        {/* Subtle dynamic underline accent */}
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stone-950 dark:bg-stone-100 transition-all duration-500 ease-out group-hover/skill:w-8" />
      </h3>

      {/* Technical Registry Index Badges Container */}
      <motion.div 
        ref={containerRef}
        animate={{ height: isExpanded ? "auto" : 28 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`flex flex-wrap gap-1.5 relative z-10 w-full overflow-hidden ${
          isExpanded ? "max-h-[110px] overflow-y-auto pr-1" : ""
        }`}
      >
        {group.skills.map((skill, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-[10px] sm:text-xs font-mono font-bold bg-stone-200/30 dark:bg-stone-900/50 border border-stone-300 dark:border-stone-700/80 rounded-none text-stone-850 dark:text-stone-250 tracking-wider uppercase transition-all duration-300 hover:border-stone-400 dark:hover:border-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Conditional Typewriter Show Toggle */}
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 relative z-10 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-stone-950 dark:hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {isExpanded ? "// SHOW LESS" : "// SHOW MORE"}
        </button>
      )}
    </motion.div>
  );
}

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
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
            [02/04] // THE ENGINE
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-stone-900 dark:text-white mb-4">
            Technical Index
          </h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-xl text-sm md:text-base font-sans leading-relaxed font-light">
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
            <SkillGroup
              key={index}
              group={group}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
