"use client";

import { motion } from "framer-motion";
import { Code2, Server, Wrench, Database } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Code2 className="text-primary" size={24} />,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <Server className="text-secondary" size={24} />,
    skills: ["Node.js", "Express.js", "REST APIs", "Axios"]
  },
  {
    category: "Database & BaaS",
    icon: <Database className="text-accent" size={24} />,
    skills: ["MongoDB", "BetterAuth"]
  },
  {
    category: "Tools & Others",
    icon: <Wrench className="text-primary" size={24} />,
    skills: ["Git", "GitHub", "Figma", "VS Code", "Linux", "NPM"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative bg-black/40">
      <div className="container mx-auto px-5 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 relative inline-block text-white">
            The Arsenal
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent absolute -bottom-2 left-0"
            />
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-4 text-xs md:text-sm mt-4">Building robust applications with a modern and scalable stack.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((group, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 md:p-8 rounded-[1.5rem] group hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center shadow-xl"
            >
              {/* Shimmer/Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-1000"></div>
              
              <div className="relative z-10 mb-5 w-14 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                {group.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-6 relative z-10">{group.category}</h3>
              
              <div className="flex flex-wrap justify-center gap-2 relative z-10">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-[9px] font-bold bg-[#111] border border-white/5 rounded-md text-white group-hover:border-primary/20 transition-all duration-300 uppercase tracking-tighter"
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
