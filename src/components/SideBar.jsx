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
  const expanded = isHovered || isActive;

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
      className="relative flex items-center mb-6"
    >
      <a href={item.href} onClick={handleScroll} className="relative z-10 flex items-center cursor-pointer">
        <motion.div
          layout
          className={`flex items-center rounded-full overflow-hidden nav-bubble transition-colors duration-300 border ${expanded ? "border-primary/50 bg-transparent" : "border-transparent bg-transparent"}`}
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
          <div className={`w-[48px] h-[48px] flex items-center justify-center shrink-0 transition-colors ${expanded ? "text-primary" : "text-gray-400"}`}>
            {item.icon}
          </div>
          
          <motion.span
            className={`text-sm font-medium whitespace-nowrap ${expanded ? "text-primary" : "text-gray-400"}`}
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
