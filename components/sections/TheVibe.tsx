"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const vibes = [
  "Pickleball try-hard",
  "AI-first marketing wizard",
  "Agent architect/babysitter",
  "Prompt poet",
  "SEO/AEO whisperer",
  "Growth marketing nerd",
  "Dad of 3",
  "Builder who ships",
];

export function TheVibe() {
  return (
    <section className="py-24 lg:py-32 bg-text-light/[0.03] dark:bg-text-dark/[0.03] border-b border-text-light/10 dark:border-text-dark/10">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-10 tracking-tight"
        >
          The vibe
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-text-light/85 dark:text-text-dark/85 max-w-5xl"
        >
          {vibes.map((vibe, i) => (
            <span key={vibe}>
              {vibe}
              {i < vibes.length - 1 && (
                <span className="text-accent not-italic mx-3">·</span>
              )}
            </span>
          ))}
        </motion.p>
      </Container>
    </section>
  );
}
