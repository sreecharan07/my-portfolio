"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/profile";

/**
 * Experience — Card-based vertical timeline showing roles, achievements,
 * and skill tags. Metrics highlighted with gold accent.
 */
export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading subtitle="Relevant proof through roles, responsibilities, technical tools, and measurable outcomes.">
        <span className="text-accent">Experience</span>
      </SectionHeading>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-8 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-sm hidden md:block" />

              {/* Experience Card */}
              <div className="group p-6 md:p-8 rounded-xl border border-border bg-background hover:border-accent/40 hover:shadow-lg transition-all">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-medium text-accent mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-text-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.dates}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Positioning Label */}
                <p className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent inline-block mb-4">
                  {exp.label}
                </p>

                {/* Description */}
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievement Bullets — metrics highlighted */}
                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: bullet.replace(
                            /(\d+[–\-]?\d*%?)/g,
                            '<strong class="text-foreground font-semibold">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface text-text-secondary border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
