"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projectsData = [
  {
    title: "Keen Keeper Friends",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    live: "https://keen-keeper-friends.vercel.app/",
    github: "https://github.com/mdyeamin/NextJs-keen-keeper-friends",
    description: "A collaborative friendship management platform built with Next.js, featuring a clean, interactive UI.",
    image: "/project_mockup.png"
  },
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

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-5 md:px-12 relative z-10 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 relative inline-block text-white">
            Featured Creations
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent absolute -bottom-2 left-0"
            />
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-4 text-xs md:text-sm mt-4 px-4">
            A collection of my recent web development projects and experiments, designed for performance and user experience.
          </p>
        </motion.div>
      </div>

      {/* Interactive Marquee Slider */}
      <div className="relative w-full py-6">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 px-5 overflow-x-hidden cursor-grab active:cursor-grabbing no-scrollbar touch-pan-y"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ width: "100%", scrollBehavior: "auto" }}
        >
          {marqueeItems.map((project, index) => (
            <div
              key={index}
              className="w-[240px] sm:w-[280px] md:w-[320px] glass-card rounded-[1.5rem] overflow-hidden flex flex-col shrink-0 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 pointer-events-auto group/card border-white/5 hover:border-primary/30"
            >
              {/* Card Header/Mock Image Area */}
              <div className="h-32 md:h-44 relative overflow-hidden pointer-events-auto">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover/card:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-40 transition-opacity duration-500"></div>
                
                {/* Hover Details Button Overlay (Desktop Only) */}
                <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20">
                  <div className="flex gap-2">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white text-black font-bold rounded-full shadow-2xl transition-all flex items-center gap-2 hover:bg-primary hover:text-white text-[10px]"
                      >
                        Live <ExternalLink size={12} />
                      </motion.button>
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-black/50 backdrop-blur-md text-white font-bold rounded-full shadow-2xl border border-white/10 transition-all flex items-center gap-2 hover:bg-white hover:text-black text-[10px]"
                      >
                        Code <FaGithub size={12} />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-4 md:p-6 flex flex-col flex-grow pointer-events-auto bg-gradient-to-b from-transparent to-black/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm md:text-lg font-bold text-white group-hover/card:text-primary transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-4 flex-grow text-[10px] md:text-[12px] leading-relaxed line-clamp-2 group-hover/card:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4 md:mb-0">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[7px] md:text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Mobile/Tablet Action Buttons (Consolidated Row) */}
                <div className="flex gap-2 mt-4 lg:hidden">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-[2] py-2 bg-primary text-white text-center rounded-lg font-bold text-[9px] flex items-center justify-center gap-1 shadow-lg shadow-primary/20">
                    Live <ExternalLink size={10} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-2 bg-white/5 text-white text-center rounded-lg font-bold text-[9px] border border-white/10 flex items-center justify-center gap-1">
                    Code <FaGithub size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
