"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projectsData = [
  {
    title: "SkillSphere",
    tech: ["Next.js", "Tailwind CSS", "HeroUI", "BetterAuth", "Framer Motion", "Swiper.js", "MongoDB"],
    live: "https://skill-sphere-xi.vercel.app/",
    github: "https://github.com/mdyeamin/SkillSphere",
    description: "A modern online learning platform featuring course exploration, secure authentication, and a fully responsive UI.",
    image: "/project_mockup.png"
  },
  {
    title: "Digital-Workflow",
    tech: ["React", "Tailwind", "DaisyUI", "Framer Motion", "Axios"],
    live: "https://digital-workflow-plum.vercel.app/",
    github: "https://github.com/mdyeamin/Digital-Workflow",
    description: "A comprehensive digital workflow management tool with modern animations and responsive design.",
    image: "/project_mockup.png"
  },
  {
    title: "Travel Curios",
    tech: ["MERN Stack", "Firebase", "Node.js", "MongoDB"],
    live: "https://travel-curiosity.web.app/",
    github: "https://github.com/mdyeamin/tourism-or-delivery-website-client-side",
    description: "A full-stack tourism and delivery service platform with secure authentication and database integration.",
    image: "/project_mockup.png"
  },
  {
    title: "Health Sense",
    tech: ["React", "Firebase Auth", "Bootstrap"],
    live: "https://health-sense-d3b2a.web.app/",
    github: "https://github.com/mdyeamin/-healthcare-react-firebase",
    description: "Healthcare application focusing on user authentication and a clean, accessible UI built with Bootstrap.",
    image: "/project_mockup.png"
  },
  {
    title: "Code Education",
    tech: ["React", "Context API", "Netlify"],
    live: "https://procodeeducation.netlify.app/",
    github: "https://github.com/mdyeamin/review-website-react",
    description: "An educational platform for coding resources utilizing React Context API for state management.",
    image: "/project_mockup.png"
  }
];

export default function Projects() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate array for seamless looping
  const marqueeItems = [...projectsData, ...projectsData, ...projectsData, ...projectsData];

  useEffect(() => {
    let animationFrameId;
    const scroll = () => {
      if (scrollRef.current && !isHovered && !isDragging) {
        scrollRef.current.scrollLeft += 0.5; // Very slow, premium speed
        
        // Reset scroll position for seamless loop
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 2)) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span> <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">A collection of my recent web development projects and experiments.</p>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* Interactive Marquee Slider */}
      <div className="relative w-full py-10">
        <div
          ref={scrollRef}
          className="flex gap-8 px-4 overflow-x-hidden cursor-grab active:cursor-grabbing no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ width: "100%", scrollBehavior: "auto" }}
        >
          {marqueeItems.map((project, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] md:w-[400px] glass-card rounded-[2rem] overflow-hidden flex flex-col shrink-0 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 pointer-events-auto group/card border-white/5 hover:border-primary/30"
            >
              {/* Card Header/Mock Image Area */}
              <div className="h-56 relative overflow-hidden pointer-events-auto">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover/card:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-40 transition-opacity duration-500"></div>
                
                {/* Hover Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2.5 bg-white text-black font-bold rounded-full shadow-2xl transform translate-y-8 group-hover/card:translate-y-0 transition-transform duration-500 flex items-center gap-2 hover:bg-primary hover:text-white text-sm"
                    >
                      View Project <ExternalLink size={16} />
                    </motion.button>
                  </a>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow pointer-events-auto bg-gradient-to-b from-transparent to-black/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover/card:text-primary transition-colors">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={22} />
                  </a>
                </div>
                
                <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed line-clamp-2 group-hover/card:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
