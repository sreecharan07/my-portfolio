"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { metrics } from "@/data/profile";

/**
 * MetricsBar — Horizontal impact metrics strip after the About section.
 * Large accent-colored numbers with count-up animation.
 * Gives recruiters proof before they reach the full experience section.
 */
export default function MetricsBar() {
  return (
    <section
      className="section-dark relative overflow-hidden"
      style={{
        paddingTop: "clamp(3rem, 5vw, 5rem)",
        paddingBottom: "clamp(3rem, 5vw, 5rem)",
        paddingLeft: "var(--section-padding-x)",
        paddingRight: "var(--section-padding-x)",
      }}
    >
      {/* Subtle gold accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 relative z-10"
        style={{ maxWidth: "var(--max-width)" }}
      >
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold font-heading text-accent">
              <CountUp end={metric.value} suffix={metric.suffix} />
            </div>
            <p className="mt-2 text-sm text-dark-muted leading-snug">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
