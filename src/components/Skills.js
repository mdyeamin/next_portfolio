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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((group, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl group hover:border-primary/30 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -z-10 group-hover:from-primary/10 transition-colors"></div>
              
              {group.icon}
              <h3 className="text-xl font-semibold text-white mb-6">{group.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-white/20 transition-colors"
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
