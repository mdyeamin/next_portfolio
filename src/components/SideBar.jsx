"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, Mail, Layers } from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home size={20} />, href: "#" },
  { name: "About", icon: <User size={20} />, href: "#about" },
  { name: "Skills", icon: <Layers size={20} />, href: "#skills" },
  { name: "Projects", icon: <Code size={20} />, href: "#projects" },
  { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
];

const NavItem = ({ item, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const active = isHovered || isActive;

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = item.href === "#" ? "home" : item.href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center mb-5"
    >
      <a href={item.href} onClick={handleScroll} className="relative z-10 flex items-center cursor-pointer">
        <motion.div
          className={`flex items-center justify-center w-10 h-10 transition-colors duration-300 ${active ? "text-primary" : "text-slate-400 dark:text-white/40"}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.icon}
        </motion.div>
      </a>
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
    <aside className="fixed left-6 top-32 z-50 flex flex-col hidden lg:flex pointer-events-none">
      <div className="pointer-events-auto flex flex-col">
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
