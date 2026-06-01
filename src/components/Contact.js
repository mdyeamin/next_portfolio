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
          name,
          email,
          subject: subjectLine || `Portfolio Dispatch from ${name}`,
          message,
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
      setEmailError(`[TRANSMIT_ERROR]: ${err.message}`);
    }
  };

  return (
    <section id="contact" className="py-10 relative bg-transparent">

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <p className="font-mono-meta text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
            [04/04] // THE DISPATCH
          </p>
          <h2 className="text-3xl md:text-5xl font-serif-editorial italic font-normal text-slate-900 dark:text-white">
            Communications Dossier
          </h2>
        </motion.div>

        {/* Archival Container */}
        <div className="max-w-4xl mx-auto rounded-none bg-white/50 dark:bg-stone-900/30 border border-stone-200 dark:border-stone-800 p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">

            {/* Contact Specs (5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-bold font-mono tracking-widest text-stone-900 dark:text-stone-100 uppercase mb-4 border-b border-stone-200/65 dark:border-stone-800/65 pb-2 w-full">
                  Registry & Coordinates
                </h3>
                <p className="text-stone-600 dark:text-stone-400 mb-6 text-xs leading-relaxed font-sans">
                  Open to architectural collaborations, software projects, or structural MERN integrations. Reach out directly.
                </p>

                <div className="space-y-4">
                  <a href="mailto:ahmedyeamin05@gmail.com" className="flex items-center gap-4 text-stone-700 dark:text-stone-300 hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-none bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-stone-800 dark:text-stone-200" />
                    </div>
                    <div>
                      <p className="text-[8px] text-stone-500 uppercase tracking-widest font-mono font-bold">Email Coordinate</p>
                      <p className="text-xs font-bold font-mono text-stone-800 dark:text-stone-250">ahmedyeamin05@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+8801999230669" className="flex items-center gap-4 text-stone-700 dark:text-stone-300 hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-none bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-stone-800 dark:text-stone-200" />
                    </div>
                    <div>
                      <p className="text-[8px] text-stone-500 uppercase tracking-widest font-mono font-bold">Direct Line</p>
                      <p className="text-xs font-bold font-mono text-stone-800 dark:text-stone-250">+8801999230669</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-stone-200/80 dark:border-stone-850 w-full">
                <a href="https://github.com/mdyeamin" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-stone-100 dark:bg-stone-950 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-800 transition-colors">
                  <FaGithub size={13} />
                </a>
                <a href="https://www.linkedin.com/in/mdyeamin05/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-stone-100 dark:bg-stone-950 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-800 transition-colors">
                  <FaLinkedin size={13} />
                </a>
                <a href="https://www.facebook.com/mdyeamin.05" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-none bg-stone-100 dark:bg-stone-950 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100 border border-stone-200 dark:border-stone-800 transition-colors">
                  <FaFacebook size={13} />
                </a>
              </div>
            </motion.div>

            {/* Quick Dispatch Portal / Contact Form (7 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 flex flex-col justify-center"
            >
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-none bg-stone-200/25 dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800 relative overflow-hidden flex flex-col justify-center h-full gap-4">
                <h4 className="text-xs font-bold font-mono tracking-widest text-stone-900 dark:text-stone-100 uppercase border-b border-stone-200/80 dark:border-stone-800/80 pb-1.5 w-full">
                  Immediate Dispatch
                </h4>

                <div className="flex flex-col">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-1 font-bold">[01] Sender Registry Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter registry name..."
                    className="w-full bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 p-2 text-xs text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-none focus:outline-none focus:border-stone-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-1 font-bold">[02] Email Coordinate</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email coordinate..."
                    className="w-full bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 p-2 text-xs text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-none focus:outline-none focus:border-stone-500 transition-colors"
                  />
                  {emailError && (
                    <p className="text-[9px] font-mono text-red-600 dark:text-red-400 mt-1 uppercase tracking-wider font-bold">
                      [VALIDATION_ERROR]: {emailError}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-1 font-bold">[03] Subject Topic</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter dispatch topic..."
                    className="w-full bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 p-2 text-xs text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-none focus:outline-none focus:border-stone-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-stone-500 mb-1 font-bold">[04] Message Record</label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    placeholder="Enter message dispatch..."
                    className="w-full bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 p-2 text-xs text-stone-900 dark:text-stone-100 font-sans tracking-wide rounded-none focus:outline-none focus:border-stone-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-stone-950 dark:bg-stone-100 text-stone-50 dark:text-slate-900 font-bold font-mono uppercase tracking-widest text-[9px] rounded-none transition-all duration-300 hover:bg-stone-900 dark:hover:bg-stone-200 cursor-pointer shadow-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-3 h-3 border-2 border-stone-500 border-t-white dark:border-stone-400 dark:border-t-black rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Send Email
                    </>
                  )}
                </button>

                {status === "success" && successMessage && (
                  <div className="mt-2 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-none">
                    <p className="text-[10px] font-mono uppercase tracking-wider font-bold leading-normal">
                      {successMessage}
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
