"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", icon: <Home size={20} />, href: "#" },
  { name: "About", icon: <User size={20} />, href: "#about" },
  { name: "Projects", icon: <Code size={20} />, href: "#projects" },
  { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
];

const NavItem = ({ item, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const expanded = isHovered || isActive;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center mr-4 md:mr-0 mb-0 md:mb-6"
    >
      <Link href={item.href} className="relative z-10 flex items-center">
        <motion.div
          layout
          className={`flex items-center backdrop-blur-md rounded-full shadow-lg overflow-hidden cursor-pointer nav-bubble transition-colors duration-300 border ${isActive ? "bg-primary/20 border-primary/50" : "bg-black/50 border-white/10"}`}
          animate={{
            width: expanded ? "auto" : "48px",
            height: "48px",
            paddingRight: expanded ? "20px" : "0px",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <div className={`w-[48px] h-[48px] flex items-center justify-center shrink-0 transition-colors ${isActive ? "text-primary" : "text-white group-hover:text-primary"}`}>
            {item.icon}
          </div>
          
          <motion.span
            className={`text-sm font-medium whitespace-nowrap ${isActive ? "text-primary" : "text-white"}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: expanded ? 1 : 0, 
              x: expanded ? 0 : -10 
            }}
            transition={{ duration: 0.2 }}
          >
            {item.name}
          </motion.span>
        </motion.div>
      </Link>
    </div>
  );
};

const SideBar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // trigger when section is in the middle of screen
    );

    // Default top section to "home"
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    
    // Also observe the top of the page for "Home" if it doesn't have an id
    const topOfPage = document.querySelector("main");
    if (topOfPage) {
      topOfPage.id = topOfPage.id || "home";
      observer.observe(topOfPage);
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (topOfPage) observer.unobserve(topOfPage);
    };
  }, []);

  return (
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50 flex flex-row md:flex-col pointer-events-none">
      <div className="pointer-events-auto flex flex-row md:flex-col items-center">
        {navItems.map((item) => {
          const sectionId = item.href === "#" || item.href === "/" ? "home" : item.href.substring(1);
          return (
            <NavItem 
              key={item.name} 
              item={item} 
              isActive={activeSection === sectionId} 
            />
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
