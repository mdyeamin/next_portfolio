"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">
          © {currentYear} <span className="text-white font-medium">Md Yeamin</span>. All rights reserved.
        </p>
        
        <div className="flex items-center gap-5">
          <a href="https://github.com/mdyeamin" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mdyeamin05/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="https://www.facebook.com/mdyeamin.05" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FaFacebook size={18} />
          </a>
          <a href="https://twitter.com/yeamin050" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FaTwitter size={18} />
          </a>
        </div>

        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Back to Top</a>
      </div>
    </footer>
  );
}
