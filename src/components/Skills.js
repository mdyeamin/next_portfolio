"use client";

import { motion } from "framer-motion";
import { Code2, Server, Wrench, Database } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Code2 className="text-primary mb-4" size={32} />,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "Bootstrap", "Material-UI", "Redux"]
  },
  {
    category: "Backend",
    icon: <Server className="text-secondary mb-4" size={32} />,
    skills: ["Node.js", "Express.js", "Axios", "RESTful APIs"]
  },
  {
    category: "Database & BaaS",
    icon: <Database className="text-accent mb-4" size={32} />,
    skills: ["MongoDB", "Firebase", "Mongoose"]
  },
  {
    category: "Tools & Others",
    icon: <Wrench className="text-primary mb-4" size={32} />,
    skills: ["Git & GitHub", "Figma", "VS Code", "Linux", "NPM", "Postman"]
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
    <section id="skills" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">The</span> <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">Building robust applications with a modern and scalable stack.</p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10"
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
              className="glass-card p-10 rounded-[2.5rem] group hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
            >
              {/* Shimmer/Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-1000"></div>
              
              <div className="relative z-10 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-500">
                {group.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">{group.category}</h3>
              
              <div className="flex flex-wrap justify-center gap-3 relative z-10">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 text-xs font-semibold bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-400 group-hover:border-primary/30 group-hover:text-white group-hover:shadow-[0_0_10px_rgba(0,210,255,0.2)] transition-all duration-300"
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
