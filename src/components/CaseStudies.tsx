"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies, CaseStudyCategory } from "@/data/profile";

/**
 * CaseStudies — Work-derived case studies instead of fake projects.
 * Features: category filtering, dark section contrast, hover card effects.
 */
const categories: CaseStudyCategory[] = [
  "All",
  "Data Analytics",
  "SQL",
  "Automation",
  "Systems",
  "Business Operations",
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<CaseStudyCategory>("All");

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.filters.includes(activeCategory));

  return (
    <SectionWrapper id="projects" dark className="bg-dark-bg relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="relative z-10">
        <SectionHeading dark subtitle="Work-derived case studies showcasing how I connect data and systems to business outcomes.">
          Selected <span className="text-accent">Work</span>
        </SectionHeading>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-charcoal shadow-sm"
                  : "bg-dark-surface border border-dark-border text-dark-muted hover:text-dark-text hover:border-dark-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-dark-surface border border-dark-border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-colors h-full"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">
                    {study.category}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-text mb-4 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-dark-muted text-sm leading-relaxed mb-6">
                    {study.summary}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-xs text-dark-text font-semibold uppercase tracking-wider mb-1">Problem</h4>
                      <p className="text-sm text-dark-muted">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs text-dark-text font-semibold uppercase tracking-wider mb-1">Solution</h4>
                      <p className="text-sm text-dark-muted">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-dark-border">
                  <div className="mb-4">
                    <h4 className="text-xs text-dark-text font-semibold uppercase tracking-wider mb-2">Impact</h4>
                    <ul className="space-y-1">
                      {study.impact.map((item, i) => (
                        <li key={i} className="text-sm text-dark-muted flex items-start gap-2">
                          <span className="text-accent mt-1">✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <span key={tool} className="text-xs px-2 py-1 bg-black/30 text-dark-muted rounded-md border border-dark-border">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Resume CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="/ATS_Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-dark-text hover:text-accent font-medium transition-colors group"
          >
            See full project details in resume
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
