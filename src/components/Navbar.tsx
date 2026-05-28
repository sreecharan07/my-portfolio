"use client";

import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/profile";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";

/**
 * Navbar — Sticky navigation with glass blur after scroll.
 * Features: smooth-scroll anchors, active section indicator,
 * mobile hamburger overlay, CTA buttons.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Track scroll position for glass background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Intersection Observer for active section highlighting */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div
        className="mx-auto flex items-center justify-between h-16 md:h-20"
        style={{
          maxWidth: "var(--max-width)",
          paddingLeft: "var(--section-padding-x)",
          paddingRight: "var(--section-padding-x)",
        }}
      >
        {/* Logo / Initials */}
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors"
          aria-label="Home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {personalInfo.initials}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="flex items-center gap-3 ml-6 pl-6 border-l border-border">
            <a
              href="/ATS_Resume.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold bg-accent text-charcoal rounded-full hover:bg-accent-hover transition-colors shadow-sm"
            >
              Let&apos;s Connect
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col h-full p-8">
            <ul className="space-y-2 flex-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block text-2xl font-semibold py-3 transition-colors ${
                      activeSection === link.href
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-6 border-t border-border">
              <a
                href="/ATS_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 text-base font-medium border border-border rounded-full text-foreground hover:bg-surface transition-colors"
                onClick={handleLinkClick}
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 text-base font-semibold bg-accent text-charcoal rounded-full hover:bg-accent-hover transition-colors"
                onClick={handleLinkClick}
              >
                Let&apos;s Connect
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
