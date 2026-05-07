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
              className="w-[300px] sm:w-[350px] md:w-[450px] glass-card rounded-3xl overflow-hidden flex flex-col shrink-0 hover:-translate-y-2 transition-transform duration-300 pointer-events-none select-none"
            >
              {/* Card Header/Mock Image Area */}
              <div className="h-56 relative overflow-hidden group/image pointer-events-auto">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="group-hover/image:scale-110 transition-transform duration-500 pointer-events-none"
                />
              </div>
              
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow pointer-events-auto">
                <h3 className="text-2xl font-bold text-white mb-3 hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors ml-auto"
                  >
                    <FaGithub size={16} />
                    Source
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
