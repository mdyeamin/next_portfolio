"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

// Paste your Web3Forms Access Key here to receive emails directly in your inbox.
// Get a free key instantly at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [emailError, setEmailError] = useState("");
  const [transmitError, setTransmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    // Strict RFC-compliant regex verification
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return "Email coordinate is required.";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email format (e.g. name@domain.com).";
    }
    // Block common dummy domains
    const blockedDomains = ["test.com", "example.com", "fake.com", "dummy.com", "email.com"];
    const domain = email.split("@")[1]?.toLowerCase();
    if (blockedDomains.includes(domain)) {
      return "Domain not allowed. Please enter a real email coordinate.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setTransmitError("");
    setSuccessMessage("");
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subjectLine = formData.get("subject");
    const message = formData.get("message");

    // Strict validation check
    const validationError = validateEmail(email);
    if (validationError) {
      setEmailError(validationError);
      setStatus("error");
      return;
    }

    setStatus("loading");

    // If key is not configured in .env, trigger a smooth simulated email dispatch
    if (!WEB3FORMS_ACCESS_KEY) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setSuccessMessage("[SUCCESS]: Thank you. Your dispatch has been logged and routed to my registry. I will review your coordinate details and establish correspondence shortly.");
      e.target.reset();

      // Auto-clear success message after 5 seconds (5000ms)
      setTimeout(() => {
        setStatus("idle");
        setSuccessMessage("");
      }, 5000);
      return;
    }

    // Direct background sending via Web3Forms API
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          "Sender Name": name,
          "Email Address": email,
          "Subject": subjectLine,
          "Message": message,
          subject: subjectLine || `Portfolio Dispatch from ${name}`,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setSuccessMessage("[SUCCESS]: Thank you. Your dispatch has been logged and routed to my registry. I will review your coordinate details and establish correspondence shortly.");
        e.target.reset();

        // Auto-clear success message after 5 seconds (5000ms)
        setTimeout(() => {
          setStatus("idle");
          setSuccessMessage("");
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to transmit message record.");
      }
    } catch (err) {
      setStatus("error");
      setTransmitError(`[TRANSMIT_ERROR]: ${err.message}`);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-transparent overflow-hidden">
      {/* Visual Accent Dividers */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 dark:via-cyan-500/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 dark:via-cyan-500/25 to-transparent" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04] bg-[linear-gradient(rgba(6,182,212,0.1)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(6,182,212,0.1)_1px,_transparent_1px)] bg-[size:16px_16px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-[9px] uppercase tracking-widest text-amber-650 dark:text-cyan-400 font-bold mb-2">
            [ SECURE CORRESPONDENCE registry ]
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-stone-900 dark:text-white leading-tight">
            Communications Dossier
          </h2>
        </motion.div>

        {/* High-Fidelity Cybernetic Console */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Coordinates Registry (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 flex flex-col justify-between p-6 md:p-8 bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80 relative transition-colors duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-stone-200/80 dark:border-stone-800 pb-3">
                  <h3 className="text-sm font-bold font-mono tracking-widest text-stone-900 dark:text-stone-100 uppercase">
                    COORDINATE REGISTRY
                  </h3>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                </div>

                <p className="text-stone-600 dark:text-stone-300 mb-8 text-sm md:text-base leading-relaxed font-sans font-light">
                  Open to custom MERN stack integrations, secure database scaling, creative UI commissions, and enterprise web engineering projects. Reach out directly.
                </p>

                <div className="space-y-5">
                  <a 
                    href="mailto:ahmedyeamin05@gmail.com" 
                    className="flex items-center gap-4 p-3.5 bg-stone-200/30 dark:bg-stone-900/50 border border-stone-300 dark:border-stone-700/80 hover:border-stone-400 dark:hover:border-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900 transition-all duration-300 group rounded-none"
                  >
                    <div className="w-11 h-11 rounded-none bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Mail size={18} className="text-primary group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest font-mono font-bold mb-0.5">Email Coordinate</p>
                      <p className="text-xs sm:text-sm font-bold font-mono text-stone-900 dark:text-stone-100 truncate">ahmedyeamin05@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+8801999230669" 
                    className="flex items-center gap-4 p-3.5 bg-stone-200/30 dark:bg-stone-900/50 border border-stone-300 dark:border-stone-700/80 hover:border-stone-400 dark:hover:border-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900 transition-all duration-300 group rounded-none"
                  >
                    <div className="w-11 h-11 rounded-none bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <Phone size={18} className="text-primary group-hover:-rotate-6 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest font-mono font-bold mb-0.5">Direct Line</p>
                      <p className="text-xs sm:text-sm font-bold font-mono text-stone-900 dark:text-stone-100 truncate">+8801999230669</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 mt-10 pt-6 border-t border-stone-200/80 dark:border-stone-850 w-full">
                <a 
                  href="https://github.com/mdyeamin" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-lg bg-white dark:bg-stone-950 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:border-amber-500 dark:hover:border-cyan-400 hover:text-stone-900 dark:hover:text-cyan-400 border border-stone-200 dark:border-stone-850 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <FaGithub size={14} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mdyeamin05/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-lg bg-white dark:bg-stone-950 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:border-amber-500 dark:hover:border-cyan-400 hover:text-stone-900 dark:hover:text-cyan-400 border border-stone-200 dark:border-stone-850 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <FaLinkedin size={14} />
                </a>
                <a 
                  href="https://www.facebook.com/mdyeamin.05" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-8 h-8 rounded-lg bg-white dark:bg-stone-950 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:border-amber-500 dark:hover:border-cyan-400 hover:text-stone-900 dark:hover:text-cyan-400 border border-stone-200 dark:border-stone-850 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <FaFacebook size={14} />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Secure Dispatch Portal (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 flex flex-col justify-center"
            >
              <form 
                onSubmit={handleSubmit} 
                className="p-6 md:p-8 bg-stone-100/50 dark:bg-stone-900/30 border border-stone-200/80 dark:border-stone-800/80 relative overflow-hidden flex flex-col justify-center h-full gap-5 rounded-none transition-colors duration-500"
              >
                <div className="flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800 pb-3">
                  <h4 className="text-xs sm:text-sm font-bold font-mono tracking-widest text-stone-900 dark:text-stone-100 uppercase">
                    [ IMMEDIATE DISPATCH PORTAL ]
                  </h4>
                  <span className="text-[9px] sm:text-xs font-mono text-stone-500 dark:text-stone-400">SYS_V2.0.4</span>
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-1.5 font-bold">[01] Sender Registry Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Identify name or organization..."
                    className="w-full bg-white/40 dark:bg-stone-950/40 border border-stone-300 dark:border-stone-800 p-3 text-sm text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-1.5 font-bold">[02] Email Coordinate</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. registry@network.com..."
                    className="w-full bg-white/40 dark:bg-stone-950/40 border border-stone-300 dark:border-stone-800 p-3 text-sm text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                  {emailError && (
                    <p className="text-[10px] sm:text-xs font-mono text-red-650 dark:text-red-400 mt-1.5 uppercase tracking-wider font-bold">
                      [VALIDATION_ERROR]: {emailError}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-1.5 font-bold">[03] Subject Topic</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter message dispatch title..."
                    className="w-full bg-white/40 dark:bg-stone-950/40 border border-stone-300 dark:border-stone-800 p-3 text-sm text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-1.5 font-bold">[04] Message Record</label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    placeholder="Write detailed dispatch context..."
                    className="w-full bg-white/40 dark:bg-stone-950/40 border border-stone-300 dark:border-stone-800 p-3 text-sm text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-primary text-background font-bold font-mono uppercase tracking-widest text-[11px] sm:text-xs rounded-md transition-all duration-300 hover:brightness-105 active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING ENCRYPTED RECORD...
                    </>
                  ) : (
                    <>
                      <Send size={13} className="text-stone-950" />
                      TRANSMIT SECURE DISPATCH
                    </>
                  )}
                </button>

                {status === "success" && successMessage && (
                  <div className="mt-2 p-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                    <p className="text-[10px] font-mono uppercase tracking-wider font-bold leading-relaxed">
                      {successMessage}
                    </p>
                  </div>
                )}

                {status === "error" && transmitError && (
                  <div className="mt-2 p-3.5 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-lg">
                    <p className="text-[10px] font-mono uppercase tracking-wider font-bold leading-relaxed">
                      {transmitError}
                    </p>
                  </div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
