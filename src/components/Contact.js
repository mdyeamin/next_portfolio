"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In</span> <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8">
                I&apos;m always open to connecting with fellow developers, tech enthusiasts, or potential collaborators. Let&apos;s build something amazing together!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:ahmedyeamin05@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">ahmedyeamin05@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+8801999230669" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+8801999230669</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin size={20} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-8 border-t border-white/10">
                <a href="https://github.com/mdyeamin" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all shadow-lg hover:shadow-primary/20">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/mdyeamin05/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all shadow-lg hover:shadow-blue-500/20">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://www.facebook.com/mdyeamin.05" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#1877f2] hover:text-white transition-all shadow-lg hover:shadow-blue-600/20">
                  <FaFacebook size={18} />
                </a>
                <a href="https://twitter.com/yeamin050" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-white/10">
                  <FaTwitter size={18} />
                </a>
              </div>
            </motion.div>

            {/* Quick Form/CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/20 blur-3xl rounded-full group-hover:bg-accent/20 transition-colors duration-700"></div>
                <h4 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h4>
                <p className="text-gray-400 text-base mb-8">Drop me an email directly. I reply fast.</p>
                <a 
                  href="mailto:ahmedyeamin05@gmail.com"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all active:scale-95"
                >
                  <Send size={18} />
                  Send an Email
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
