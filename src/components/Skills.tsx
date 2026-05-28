"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories, primarySkills, skillProof } from "@/data/profile";

/**
 * Skills — Visualizes technical and business skills grouped by category.
 * Primary skills are highlighted. Includes hover tooltips for proof.
 */
export default function Skills() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <SectionWrapper id="skills" className="bg-background">
      <SectionHeading subtitle="Technical depth meets business context. Here are the tools and areas I focus on.">
        Core <span className="text-accent">Skills</span>
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left: Primary Skills Highlights */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Primary Focus Areas
          </h3>
          <div className="flex flex-wrap gap-3">
            {primarySkills.map((skill) => (
              <div
                key={skill}
                className="relative group inline-block"
                onMouseEnter={() => setActiveTooltip(skill)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border rounded-lg text-foreground font-medium cursor-default hover:border-accent hover:shadow-sm transition-all">
                  {skill}
                  {skillProof[skill] && (
                    <Info size={14} className="text-text-secondary group-hover:text-accent transition-colors" />
                  )}
                </div>
                
                {/* Tooltip */}
                <AnimatePresence>
                  {activeTooltip === skill && skillProof[skill] && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-charcoal text-dark-text text-sm rounded-lg shadow-xl pointer-events-none"
                    >
                      <div className="relative">
                        {skillProof[skill]}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-charcoal" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <p className="text-text-secondary text-sm mt-6 leading-relaxed">
            Hover over the primary skills to see how I've applied them in real business scenarios.
          </p>
        </div>

        {/* Right: Skill Categories */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                <h4 className="text-base font-bold text-foreground border-b border-border pb-2">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-text-secondary text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
