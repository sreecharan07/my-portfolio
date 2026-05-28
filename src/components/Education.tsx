"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications } from "@/data/profile";

/**
 * Education — Displays degrees and certifications. Uses cards for main
 * education and a pill list for certifications.
 */
export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-surface/30 border-y border-border/50">
      <SectionHeading subtitle="The academic foundation supporting my analytical and business capabilities.">
        Education & <span className="text-accent">Certifications</span>
      </SectionHeading>

      <div className="space-y-12">
        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col h-full relative overflow-hidden"
            >
              {/* Type Badge */}
              <div className="absolute top-0 right-0 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-bl-lg">
                {edu.type}
              </div>

              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-4 text-text-secondary">
                <GraduationCap size={20} />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-1 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-accent mb-2">
                {edu.institution}
              </p>
              
              {edu.field && (
                <p className="text-sm text-foreground mb-2">{edu.field}</p>
              )}
              
              <div className="text-xs text-text-secondary mb-4 pb-4 border-b border-border">
                {edu.dates}
              </div>
              
              <p className="text-sm text-text-secondary leading-relaxed mt-auto italic">
                {edu.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-accent" size={20} />
            <h3 className="text-lg font-bold text-foreground">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-text-secondary font-medium shadow-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
