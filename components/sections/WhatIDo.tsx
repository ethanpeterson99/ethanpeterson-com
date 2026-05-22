"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const items = [
  {
    n: "01",
    title: "Performance Marketing Systems",
    body: "Paid media, SEO/AEO, CRO, the whole funnel.",
  },
  {
    n: "02",
    title: "AI Agents & Workflows",
    body: "Prompt engineering, lightweight agents that automate research, content, reporting.",
  },
  {
    n: "03",
    title: "Web & Brand",
    body: "10+ years of design and dev work behind the marketing.",
  },
];

export function WhatIDo() {
  return (
    <section className="py-24 lg:py-32 border-b border-text-light/10 dark:border-text-dark/10">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-16 tracking-tight"
        >
          What I actually do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-text-light/10 dark:border-text-dark/15 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="font-display text-2xl text-accent mb-4">
                {item.n}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
