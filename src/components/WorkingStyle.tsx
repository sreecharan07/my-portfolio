"use client";

import { motion } from "framer-motion";
import { Target, Cpu, MessageCircle, Repeat } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { workingStyle } from "@/data/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  cpu: Cpu,
  messageCircle: MessageCircle,
  repeat: Repeat,
};

/**
 * WorkingStyle — 4 cards highlighting approach to work.
 * Shows that Sree is not just a ticket-taker, but thinks about business value.
 */
export default function WorkingStyle() {
  return (
    <SectionWrapper className="bg-background">
      <SectionHeading subtitle="My approach to solving problems isn't just technical—it's focused on business value and system reliability.">
        How I <span className="text-accent">Work</span>
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workingStyle.map((style, i) => {
          const Icon = iconMap[style.icon] || Target;
          return (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-5 p-6 md:p-8 bg-surface/50 border border-border rounded-2xl hover:bg-surface hover:border-accent/30 transition-colors"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {style.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {style.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
