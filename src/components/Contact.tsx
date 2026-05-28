"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, FileText } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/profile";

/**
 * Contact — Form and direct links section.
 * Uses a dark theme for contrast at the bottom of the page.
 */
export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate form submission for now since Formspree URL isn't provided
    // In production, replace this with actual Formspree endpoint in action attribute
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <SectionWrapper id="contact" dark className="bg-dark-bg border-t border-dark-border">
      <SectionHeading dark subtitle="I'm open to discussing fintech, data analysis, and systems roles.">
        Let&apos;s <span className="text-accent">Connect</span>
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Contact Info & Direct Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-dark-text mb-6">
            Get in touch directly
          </h3>
          <p className="text-dark-muted mb-8 leading-relaxed max-w-md">
            Whether you have a specific role in mind or just want to discuss data and systems in fintech, I'd love to hear from you.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-surface hover:border-accent/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <Mail size={18} className="text-dark-muted group-hover:text-accent transition-colors" />
              </div>
              <div>
                <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-dark-text font-medium">{personalInfo.email}</div>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-surface hover:border-accent/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <Linkedin size={18} className="text-dark-muted group-hover:text-accent transition-colors" />
              </div>
              <div>
                <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider mb-0.5">LinkedIn</div>
                <div className="text-dark-text font-medium">Sree Charan Addala</div>
              </div>
            </a>

            <a
              href="/ATS_Resume.pdf"
              download
              className="flex items-center gap-4 p-4 rounded-xl border border-dark-border bg-dark-surface hover:border-accent/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <FileText size={18} className="text-dark-muted group-hover:text-accent transition-colors" />
              </div>
              <div>
                <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider mb-0.5">Resume</div>
                <div className="text-dark-text font-medium">Download PDF</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5 bg-dark-surface p-6 md:p-8 rounded-2xl border border-dark-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-dark-text">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-dark-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-dark-text">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-dark-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-dark-text">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-dark-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="Role discussion / Networking"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-dark-text">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-dark-border text-dark-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="How can we work together?"
              />
            </div>

            {/* Honeypot field for spam prevention if using Formspree */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-accent text-charcoal font-bold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "idle" && (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Message Sent!"}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
