"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { hero } from "@/data/profile";

/**
 * Hero — Full-viewport landing section. Positions Sree for fintech/data roles
 * within 10 seconds per PRD. Large editorial typography, floating skill tags,
 * and supporting stats.
 */
export default function Hero() {
  /* Stagger animation variants */
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const tagVariant: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center relative"
      style={{
        paddingTop: "6rem",
        paddingBottom: "var(--section-padding-y)",
        paddingLeft: "var(--section-padding-x)",
        paddingRight: "var(--section-padding-x)",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full"
        style={{ maxWidth: "var(--max-width)" }}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-accent text-sm font-medium tracking-wide">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* Main Heading — 64-96px desktop per PRD */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.08] text-foreground max-w-5xl"
        >
          {hero.heading}
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          variants={fadeUp}
          className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl"
        >
          {hero.intro}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-charcoal font-semibold rounded-full hover:bg-accent-hover transition-all shadow-md hover:shadow-lg"
          >
            {hero.primaryCta}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="/ATS_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-surface transition-colors"
          >
            <Download size={16} />
            {hero.secondaryCta}
          </a>
        </motion.div>

        {/* Floating Skill Tags */}
        <motion.div
          variants={fadeUp}
          className="mt-12 md:mt-16 flex flex-wrap gap-2.5"
        >
          {hero.floatingTags.map((tag, i) => (
            <motion.span
              key={tag}
              variants={tagVariant}
              custom={i}
              className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-surface/60 text-text-secondary hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Supporting Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-border"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-accent font-heading">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-secondary leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
