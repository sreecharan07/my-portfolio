"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, TrendingUp, Layers, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutCopy, valueCards } from "@/data/profile";

/**
 * About — Career story section. Two-column layout with profile image left,
 * narrative paragraphs right, and 4 value cards below.
 * Tells why Sree's mixed background is useful for fintech/data roles.
 */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  chart: BarChart3,
  trending: TrendingUp,
  layers: Layers,
  zap: Zap,
};

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface/40">
      <SectionHeading>
        About <span className="text-accent">Me</span>
      </SectionHeading>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left: profile image + quote */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col items-center lg:items-start"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
            <Image
              src="/picture_1.jpeg"
              alt="Sree Charan Addala — Fintech Data & Systems Analyst"
              fill
              className="object-cover"
              priority
            />
          </div>
          <blockquote className="mt-6 text-lg italic text-text-secondary border-l-3 border-accent pl-4 max-w-xs">
            &ldquo;Connecting data, systems, and business decisions.&rdquo;
          </blockquote>
        </motion.div>

        {/* Right: narrative paragraphs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3 space-y-5"
        >
          {aboutCopy.map((paragraph, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Value Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 md:mt-20">
        {valueCards.map((card, i) => {
          const Icon = iconMap[card.icon] || BarChart3;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl border border-border bg-background hover:border-accent/40 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
