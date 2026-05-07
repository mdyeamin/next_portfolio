"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {currentYear} Md Yeamin. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}
