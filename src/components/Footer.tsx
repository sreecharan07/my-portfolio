import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, navLinks } from "@/data/profile";

/**
 * Footer — Minimal clean footer with copyright and links.
 * Dark theme matching the Contact section.
 */
export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12 relative z-10">
      <div 
        className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
        style={{
          maxWidth: "var(--max-width)",
          paddingLeft: "var(--section-padding-x)",
          paddingRight: "var(--section-padding-x)",
        }}
      >
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-dark-text mb-1 tracking-tight font-heading">
            {personalInfo.name}
          </h3>
          <p className="text-dark-muted text-sm mb-4">
            {personalInfo.role}
          </p>
          <p className="text-dark-muted/60 text-xs">
            © {new Date().getFullYear()} All Rights Reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          {/* Section links */}
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-dark-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-dark-muted hover:text-accent hover:border-accent/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-dark-muted hover:text-accent hover:border-accent/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-dark-muted hover:text-accent hover:border-accent/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}