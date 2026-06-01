"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projectsData = [
  {
    title: "MedFlex",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    live: "https://mad-flex.vercel.app",
    github: "https://github.com/mdyeamin/Med_Felx",
    server: "https://github.com/mdyeamin/med-flex-server",
    description: "A comprehensive medical management platform designed to connect doctors, patients, and administrators seamlessly, featuring patient logs, doctor scheduling, and administrative dashboards.",
    image: "/med_flex.jpeg"
  },
  {
    title: "Keen Keeper Friends",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    live: "https://keen-keeper-friends.vercel.app/",
    github: "https://github.com/mdyeamin/NextJs-keen-keeper-friends",
    description: "A collaborative friendship management platform built with Next.js, featuring a clean, interactive UI.",
    image: "/KeenKeeper.jpeg"
  },
  {
    title: "SkillSphere",
    tech: ["Next.js", "Tailwind CSS", "HeroUI", "BetterAuth", "Framer Motion", "Swiper.js", "MongoDB"],
    live: "https://skill-sphere-xi.vercel.app/",
    github: "https://github.com/mdyeamin/SkillSphere",
    description: "A modern online learning platform featuring course exploration, secure authentication, and a fully responsive UI.",
    image: "/SkillSphere.jpeg"
  },
  {
    title: "Digital-Workflow",
    tech: ["React", "Tailwind", "DaisyUI", "Framer Motion", "Axios"],
    live: "https://digital-workflow-plum.vercel.app/",
    github: "https://github.com/mdyeamin/Digital-Workflow",
    description: "A comprehensive digital workflow management tool with modern animations and responsive design.",
    image: "/DigiTools.jpeg"
  },

  {
    title: "Code Education",
    tech: ["React", "Context API", "Netlify"],
    live: "https://procodeeducation.netlify.app/",
    github: "https://github.com/mdyeamin/review-website-react",
    description: "An educational platform for coding resources utilizing React Context API for state management.",
    image: "/educatuion.jpeg"
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
        scrollRef.current.scrollLeft += 0.5; // Premium slow-scanning animation

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

  return (
    <section id="projects" className="py-10 relative overflow-hidden bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-8">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="font-mono-meta text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
            [03/04] // THE ARCHIVE
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-slate-900 dark:text-white mb-4">
            Selected Works
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl text-xs md:text-sm font-sans leading-relaxed">
            A chronological exhibition registry showcasing collaborative systems, custom web utilities, and full-stack software products.
          </p>
        </motion.div>
      </div>

      {/* Interactive Documentary Archival Marquee Slider */}
      <div className="relative w-full py-4">
        <div
          ref={scrollRef}
          className="flex gap-6 px-6 overflow-x-hidden cursor-grab active:cursor-grabbing no-scrollbar touch-pan-y"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseLeave}
          style={{ width: "100%", scrollBehavior: "auto" }}
        >
          {marqueeItems.map((project, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[300px] md:w-[340px] rounded-none bg-white/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80 overflow-hidden flex flex-col shrink-0 transition-all duration-500 ease-out hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.05)] pointer-events-auto group/card"
            >
              {/* Exhibition Media Area (Grayscale to Color Editorial Shift) */}
              <div className="h-36 md:h-44 relative overflow-hidden pointer-events-auto border-b border-stone-200/60 dark:border-stone-800/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="scale-[1.01] group-hover/card:scale-[1.03]  contrast-[1.1] group-hover/card:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
                />

                {/* Minimalist Archive Overlay (Desktop Only) */}
                <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20 bg-stone-950/40 backdrop-blur-[1px]">
                  <div className="flex gap-2 flex-wrap justify-center px-4">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-stone-950 text-stone-50 font-mono text-[9px] uppercase tracking-widest rounded-none shadow-sm flex items-center gap-1.5 hover:bg-stone-900 transition-colors border border-stone-800"
                      >
                        Live <ExternalLink size={10} />
                      </motion.button>
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-stone-100 text-stone-950 font-mono text-[9px] uppercase tracking-widest rounded-none shadow-sm flex items-center gap-1.5 hover:bg-stone-200 transition-colors border border-stone-300"
                      >
                        {project.server ? "Client" : "Code"} <FaGithub size={10} />
                      </motion.button>
                    </a>
                    {project.server && (
                      <a href={project.server} target="_blank" rel="noreferrer">
                        <motion.button
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 bg-stone-100 text-stone-950 font-mono text-[9px] uppercase tracking-widest rounded-none shadow-sm flex items-center gap-1.5 hover:bg-stone-200 transition-colors border border-stone-300"
                        >
                          Server <FaGithub size={10} />
                        </motion.button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 md:p-6 flex flex-col flex-grow pointer-events-auto bg-stone-50/20 dark:bg-stone-900/10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xs md:text-sm font-bold font-mono uppercase tracking-widest text-stone-900 dark:text-stone-100 relative pb-1.5 w-full">
                    {project.title}
                    {/* Architectural indicator line matching index directory headers */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stone-950 dark:bg-stone-100 transition-all duration-500 ease-out group-hover/card:w-12" />
                  </h3>
                </div>

                <p 
                  className="text-stone-600 dark:text-stone-400 mb-5 text-xs leading-relaxed font-sans line-clamp-3"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {project.description}
                </p>

                {/* Technical Registry Index Badges (Single Line Marquee) */}
                <div className="relative overflow-hidden w-full mb-2 py-1 mask-gradient no-scrollbar">
                  <div className="flex gap-2 animate-tech-marquee whitespace-nowrap">
                    {[...project.tech, ...project.tech].map((t, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono uppercase tracking-wider bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 px-2 py-0.5 rounded-none inline-block shrink-0"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile / Tablet Actions */}
                <div className="flex gap-2 mt-4 lg:hidden">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-[1.3] py-2 bg-stone-950 dark:bg-stone-100 text-stone-50 dark:text-stone-950 text-center rounded-none font-mono text-[9px] uppercase tracking-widest flex items-center justify-center gap-1.5">
                    Live <ExternalLink size={10} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-2 bg-transparent text-stone-800 dark:text-stone-200 text-center rounded-none font-mono text-[9px] uppercase tracking-widest border border-stone-300 dark:border-stone-700 flex items-center justify-center gap-1.5">
                    {project.server ? "Client" : "Code"} <FaGithub size={10} />
                  </a>
                  {project.server && (
                    <a href={project.server} target="_blank" rel="noreferrer" className="flex-1 py-2 bg-transparent text-stone-800 dark:text-stone-200 text-center rounded-none font-mono text-[9px] uppercase tracking-widest border border-stone-300 dark:border-stone-700 flex items-center justify-center gap-1.5">
                      Server <FaGithub size={10} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
