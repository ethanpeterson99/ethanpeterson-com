"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const paragraphs = [
  "It started at BYU AdLab, where I learned that marketing was really just applied psychology with a spreadsheet. I ran real campaigns for real clients and realized I was better at this than most people with 10 more years of experience.",
  "From there I went independent. Under EBP Designs I've worked with 30+ brands over 10 years — startups, agencies, nonprofits. You learn a lot when you're accountable for results and there's no one else to blame.",
  "Leadgenix taught me SEO and CRO at scale. I was managing six-figure monthly ad budgets, running link acquisition campaigns, and building reporting systems before “AI workflows” was a buzzword.",
  "Now I'm operating at two companies simultaneously — building the marketing engine at Vibrant Wellness while co-owning Pickled Court and rolling out a franchise. I also build the AI agents that make both possible.",
];

export function Story() {
  return (
    <section className="py-24 lg:py-32 border-b border-text-light/10 dark:border-text-dark/10">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 tracking-tight"
        >
          The story
        </motion.h2>

        <div className="max-w-3xl space-y-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-lg md:text-xl leading-[1.7] text-text-light/80 dark:text-text-dark/80"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </Container>
    </section>
  );
}
