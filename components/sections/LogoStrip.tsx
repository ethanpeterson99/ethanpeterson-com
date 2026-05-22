"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const logos = [
  "Vibrant Wellness",
  "Pickled Court",
  "Leadgenix",
  "BYU AdLab",
  "BYU Broadcasting",
  "Assetworx",
  "LymeDisease.org",
];

export function LogoStrip() {
  return (
    <section className="py-20 lg:py-24 border-b border-text-light/10 dark:border-text-dark/10">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-text-light/50 dark:text-text-dark/50 mb-8 text-center"
        >
          Trusted by
        </motion.p>

        <div className="flex md:flex-wrap md:justify-center gap-3 overflow-x-auto pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="shrink-0 snap-start px-5 py-2.5 rounded-full border border-text-light/10 dark:border-text-dark/15 text-sm font-medium text-text-light/60 dark:text-text-dark/60 whitespace-nowrap hover:text-text-light dark:hover:text-text-dark hover:border-text-light/30 dark:hover:border-text-dark/30 transition-colors"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
