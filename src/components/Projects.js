"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Calendar, User, Layers } from "lucide-react";
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
    image: "/med_flex.jpeg",
    timeline: "2025 (4 Weeks)",
    role: "Full-Stack Developer",
    longDescription: "MedFlex is a medical management website. It helps doctors, patients, and administrators connect easily. It includes patient records, appointment scheduling, and admin dashboards.",
    keyFeatures: [
      "Real-time patient check-in and medical history logs.",
      "Interactive doctor scheduling calendars.",
      "Patient accounts with easy access to health charts.",
      "Admin logs to track all system scheduling changes."
    ],
    architecture: "Built with MongoDB, Express, React, and Node.js. It features secure login and fast search for patient records."
  },
  {
    title: "Keen Keeper Friends",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    live: "https://keen-keeper-friends.vercel.app/",
    github: "https://github.com/mdyeamin/NextJs-keen-keeper-friends",
    description: "A collaborative friendship management platform built with Next.js, featuring a clean, interactive UI.",
    image: "/KeenKeeper.jpeg",
    timeline: "2025 (3 Weeks)",
    role: "Frontend Developer",
    longDescription: "Keen Keeper Friends is a website made to organize and show social groups and friendships. It features a clean timeline of group events and social milestones.",
    keyFeatures: [
      "Interactive event timeline with smooth animations.",
      "Friendship lists with custom tags.",
      "Responsive cards showing event info.",
      "Works perfectly in both light and dark themes."
    ],
    architecture: "Built with Next.js, Tailwind CSS, and Framer Motion for clean page loading and smooth animations."
  },
  {
    title: "SkillSphere",
    tech: ["Next.js", "Tailwind CSS", "HeroUI", "BetterAuth", "Framer Motion", "Swiper.js", "MongoDB"],
    live: "https://skill-sphere-xi.vercel.app/",
    github: "https://github.com/mdyeamin/SkillSphere",
    description: "A modern online learning platform featuring course exploration, secure authentication, and a fully responsive UI.",
    image: "/SkillSphere.jpeg",
    timeline: "2025 (4 Weeks)",
    role: "Lead Developer",
    longDescription: "SkillSphere is an online learning platform. It allows students and teachers to explore courses easily. It has secure login, course purchase simulations, and progress tracking.",
    keyFeatures: [
      "Secure user login and account verification.",
      "Interactive course search with video previews.",
      "Lesson progress tracking and dynamic quizzes.",
      "Admin panel for teachers to add and edit courses."
    ],
    architecture: "Built with Next.js 15, BetterAuth, MongoDB, and Framer Motion for page transitions."
  },
  {
    title: "Digital-Workflow",
    tech: ["React", "Tailwind", "DaisyUI", "Framer Motion", "Axios"],
    live: "https://digital-workflow-plum.vercel.app/",
    github: "https://github.com/mdyeamin/Digital-Workflow",
    description: "A comprehensive digital workflow management tool with modern animations and responsive design.",
    image: "/DigiTools.jpeg",
    timeline: "2025 (3 Weeks)",
    role: "Full-Stack Developer",
    longDescription: "Digital-Workflow is a tool to track team projects. It helps team leaders see developer speed, open tasks, and deployment steps.",
    keyFeatures: [
      "Kanban board with simple drag-and-drop tasks.",
      "Work velocity charts using Framer Motion.",
      "Fast API connections with custom error handlers.",
      "Clean interface with light and dark mode toggles."
    ],
    architecture: "Built with React, Tailwind CSS, DaisyUI, and Axios for server connections."
  },
  {
    title: "Code Education",
    tech: ["React", "Context API", "Netlify"],
    live: "https://procodeeducation.netlify.app/",
    github: "https://github.com/mdyeamin/review-website-react",
    description: "An educational platform for coding resources utilizing React Context API for state management.",
    image: "/educatuion.jpeg",
    timeline: "2025 (2 Weeks)",
    role: "Frontend Developer",
    longDescription: "An educational website providing coding resources, tutorial lists, and learning roadmaps. It saves student bookmarks and tutorial history.",
    keyFeatures: [
      "State management using React Context API.",
      "Fast search filters for tutorials.",
      "Bookmark system to save favorite guides.",
      "Fully optimized for fast loading on Netlify."
    ],
    architecture: "Built with React, React Context API, and structured component files."
  }
];

// Project Card Component
function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="w-[260px] sm:w-[300px] md:w-[340px] rounded-none bg-white dark:bg-stone-900/30 border border-stone-300 dark:border-stone-800/80 overflow-hidden flex flex-col shrink-0 transition-all duration-500 ease-out hover:border-stone-450 dark:hover:border-stone-600 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.05)] pointer-events-auto group/card">
      
      {/* Visual Image Area */}
      <div 
        onClick={() => onOpenDetails(project)}
        className="h-36 md:h-44 relative overflow-hidden pointer-events-auto border-b border-stone-300 dark:border-stone-800/60 cursor-pointer"
      >
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="scale-[1.01] group-hover/card:scale-[1.03] contrast-[1.1] transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
        />

        {/* Backdrop Overlay */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20 bg-stone-950/40 backdrop-blur-[1px]">
          <span className="px-4 py-2 bg-stone-950 text-stone-50 font-mono text-[9px] uppercase tracking-widest rounded-none border border-stone-850 hover:bg-stone-900 transition-colors">
            // VIEW DETAILS
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 md:p-6 flex flex-col flex-grow pointer-events-auto bg-stone-50/20 dark:bg-stone-900/10">
        <div className="flex justify-between items-start mb-3">
          <h3 
            onClick={() => onOpenDetails(project)}
            className="text-sm md:text-base font-bold font-mono uppercase tracking-widest text-stone-900 dark:text-stone-100 relative pb-1.5 w-full cursor-pointer hover:text-primary dark:hover:text-primary transition-colors"
          >
            {project.title}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-stone-950 dark:bg-stone-100 transition-all duration-500 ease-out group-hover/card:w-12" />
          </h3>
        </div>

        {/* Clamped Description */}
        <div className="mb-4 flex-grow flex flex-col justify-start">
          <p className="text-stone-700 dark:text-stone-200 text-xs sm:text-sm leading-relaxed font-sans font-light line-clamp-2">
            {project.description}
          </p>
          <button
            onClick={() => onOpenDetails(project)}
            className="mt-3 text-[10px] font-mono font-bold uppercase tracking-widest text-primary hover:text-stone-950 dark:hover:text-white transition-colors duration-300 text-left cursor-pointer w-fit"
          >
            // VIEW DETAILS
          </button>
        </div>

        {/* Tech Badges */}
        <div className="relative overflow-hidden w-full mb-1 py-1.5 no-scrollbar select-none">
          <div className="flex gap-2 animate-tech-marquee whitespace-nowrap">
            {[...project.tech, ...project.tech].map((t, i) => (
              <span
                key={i}
                className="text-[9px] font-mono uppercase tracking-wider bg-stone-100 dark:bg-stone-900/70 text-stone-600 dark:text-stone-400 border border-stone-250 dark:border-stone-800 px-2 py-1 rounded-none inline-block shrink-0"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="flex gap-2 mt-4 lg:hidden">
          <button 
            onClick={() => onOpenDetails(project)}
            className="w-full py-2 bg-stone-950 dark:bg-stone-100 text-stone-50 dark:text-stone-950 text-center rounded-none font-mono text-[9px] uppercase tracking-widest flex items-center justify-center gap-1.5"
          >
            Project Details <ExternalLink size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

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

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
            [03/04] // PROJECTS
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-stone-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-stone-600 dark:text-stone-300 max-w-xl text-sm md:text-base font-sans leading-relaxed font-light">
            A list of projects I have built, including web applications, tools, and full-stack websites.
          </p>
        </motion.div>
      </div>

      {/* Marquee Slider */}
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
            <ProjectCard 
              key={index}
              project={project}
              motion={motion}
              onOpenDetails={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-stone-950/70 backdrop-blur-md"
            />
            
            {/* Modal Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-850 shadow-2xl flex flex-col z-50 rounded-none overflow-hidden max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 shrink-0 select-none">
                <div>
                  <span className="text-[10px] font-mono font-bold text-primary tracking-widest uppercase">
                    // PROJECT DETAILS
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif-editorial italic font-normal text-stone-900 dark:text-white mt-0.5">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-250 dark:border-stone-850 bg-stone-100/50 dark:bg-stone-950/40 text-stone-700 dark:text-stone-300 font-mono text-[10px] uppercase tracking-wider transition-colors hover:bg-stone-200 dark:hover:bg-stone-900 select-none cursor-pointer"
                >
                  <span>Close</span>
                  <X size={10} />
                </button>
              </div>

              {/* Scrollable Contents */}
              <div className="flex-grow overflow-y-auto no-scrollbar p-6 md:p-8 space-y-8">
                
                {/* Visual Banner */}
                <div className="w-full h-48 sm:h-72 md:h-[400px] relative border border-stone-250 dark:border-stone-800/80 overflow-hidden bg-stone-100">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    layout="fill"
                    objectFit="cover"
                    className="contrast-[1.05]"
                  />
                </div>

                {/* Narrative Layout Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Milestones and Features */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-stone-900 dark:text-stone-100 uppercase tracking-widest mb-3 pb-1.5 border-b border-stone-200 dark:border-stone-800">
                        // Project Overview
                      </h4>
                      <p className="text-sm md:text-base text-stone-700 dark:text-stone-300 font-sans leading-relaxed font-light">
                        {activeProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold text-stone-900 dark:text-stone-100 uppercase tracking-widest mb-3 pb-1.5 border-b border-stone-200 dark:border-stone-800">
                        // Key Features
                      </h4>
                      <ul className="space-y-3">
                        {activeProject.keyFeatures?.map((feat, idx) => (
                          <li 
                            key={idx} 
                            className="text-xs md:text-sm text-stone-600 dark:text-stone-300 font-sans leading-relaxed flex items-start gap-2.5 p-3 bg-stone-50 dark:bg-stone-900/30 border border-stone-200/60 dark:border-stone-800/60"
                          >
                            <span className="text-primary font-mono font-bold mt-0.5 shrink-0">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specifications Card */}
                  <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-0">
                    
                    <div className="bg-stone-50/50 dark:bg-stone-900/20 border border-stone-200 dark:border-stone-800 p-5 md:p-6 space-y-5">
                      
                      <div className="space-y-4">
                        {/* Timeline */}
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-stone-200/50 dark:bg-stone-800/50 border border-stone-250 dark:border-stone-750 flex items-center justify-center shrink-0">
                            <Calendar className="text-primary" size={14} />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono text-stone-400 uppercase tracking-wider">Date</p>
                            <p className="text-xs font-bold font-mono uppercase text-stone-900 dark:text-stone-100">{activeProject.timeline}</p>
                          </div>
                        </div>

                        {/* Developer Role */}
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-stone-200/50 dark:bg-stone-800/50 border border-stone-250 dark:border-stone-750 flex items-center justify-center shrink-0">
                            <User className="text-primary" size={14} />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono text-stone-400 uppercase tracking-wider">My Role</p>
                            <p className="text-xs font-bold font-mono uppercase text-stone-900 dark:text-stone-100">{activeProject.role}</p>
                          </div>
                        </div>

                        {/* Engineering Highlights */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-stone-200/50 dark:bg-stone-800/50 border border-stone-250 dark:border-stone-750 flex items-center justify-center shrink-0 mt-0.5">
                            <Layers className="text-primary" size={14} />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono text-stone-400 uppercase tracking-wider">Technologies Used</p>
                            <p className="text-[11px] leading-relaxed text-stone-700 dark:text-stone-300 font-sans font-light mt-0.5">{activeProject.architecture}</p>
                          </div>
                        </div>
                      </div>

                      {/* Direct Actions */}
                      <div className="flex flex-col gap-2 pt-4 border-t border-stone-200 dark:border-stone-850">
                        <a 
                          href={activeProject.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full py-2.5 bg-stone-950 dark:bg-stone-100 text-stone-50 dark:text-stone-950 text-center font-mono text-[10px] uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-black transition-colors rounded-none flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Launch Live Site</span>
                          <ExternalLink size={12} />
                        </a>
                        
                        <a 
                          href={activeProject.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full py-2.5 bg-transparent border border-stone-300 dark:border-stone-750 text-stone-750 dark:text-stone-300 text-center font-mono text-[10px] uppercase tracking-widest hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors rounded-none flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>{activeProject.server ? "Client Repository" : "Source Code"}</span>
                          <FaGithub size={12} />
                        </a>

                        {activeProject.server && (
                          <a 
                            href={activeProject.server} 
                            target="_blank" 
                            rel="noreferrer"
                            className="w-full py-2.5 bg-transparent border border-stone-300 dark:border-stone-750 text-stone-750 dark:text-stone-300 text-center font-mono text-[10px] uppercase tracking-widest hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors rounded-none flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Server Repository</span>
                            <FaGithub size={12} />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
