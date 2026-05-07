"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-5 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 relative inline-block text-white">
            Get In Touch
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent absolute -bottom-2 left-0"
            />
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-6 text-xs md:text-sm">
                I&apos;m always open to connecting with fellow developers or potential collaborators.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:ahmedyeamin05@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Email</p>
                    <p className="text-sm font-medium">ahmedyeamin05@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+8801999230669" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={16} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Phone</p>
                    <p className="text-sm font-medium">+8801999230669</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                <a href="https://github.com/mdyeamin" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-500 hover:bg-white/10 hover:text-white transition-all shadow-lg hover:shadow-primary/20">
                  <FaGithub size={14} />
                </a>
                <a href="https://www.linkedin.com/in/mdyeamin05/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#0077b5] hover:text-white transition-all shadow-lg hover:shadow-blue-500/20">
                  <FaLinkedin size={14} />
                </a>
                <a href="https://www.facebook.com/mdyeamin.05" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#1877f2] hover:text-white transition-all shadow-lg hover:shadow-blue-600/20">
                  <FaFacebook size={14} />
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
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-2xl rounded-full group-hover:bg-accent/10 transition-colors duration-700"></div>
                <h4 className="text-lg font-bold text-white mb-2">Build something?</h4>
                <p className="text-gray-400 text-xs mb-6">Drop me an email directly. I reply fast.</p>
                <a 
                  href="mailto:ahmedyeamin05@gmail.com"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-black font-bold rounded-lg text-xs hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all active:scale-95"
                >
                  <Send size={14} />
                  Send Email
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
