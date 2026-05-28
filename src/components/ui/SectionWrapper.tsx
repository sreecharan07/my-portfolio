"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * SectionWrapper — Consistent section container with padding, max-width,
 * and scroll-reveal animation. Supports dark variant for contrast sections.
 */
interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        ${dark ? "section-dark" : ""}
        ${className}
      `}
      style={{
        paddingTop: "var(--section-padding-y)",
        paddingBottom: "var(--section-padding-y)",
        paddingLeft: "var(--section-padding-x)",
        paddingRight: "var(--section-padding-x)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--max-width)" }}>
        {children}
      </div>
    </motion.section>
  );
}
