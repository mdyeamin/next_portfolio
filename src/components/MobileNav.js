"use client";

import { motion } from "framer-motion";
import { Home, User, Code, Mail, Layers } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", icon: <Home size={20} />, href: "#" },
  { name: "About", icon: <User size={20} />, href: "#about" },
  { name: "Skills", icon: <Layers size={20} />, href: "#skills" },
  { name: "Projects", icon: <Code size={20} />, href: "#projects" },
  { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
];

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.tagName === "FOOTER") {
            setIsFooterVisible(entry.isIntersecting);
          } else if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href === "#" ? "home" : href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isFooterVisible ? 100 : 0, 
        opacity: isFooterVisible ? 0 : 1 
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] lg:hidden"
    >
      <nav className="flex items-center gap-2 p-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const sectionId = item.href === "#" ? "home" : item.href.substring(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="relative p-3 rounded-full transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active-pill"
                  className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className={`relative z-10 ${isActive ? "text-primary" : "text-gray-400"}`}>
                {item.icon}
              </div>
            </a>
          );
        })}
      </nav>
    </motion.div>
  );
}
