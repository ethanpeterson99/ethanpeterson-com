"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";

const items = [
  {
    n: "01",
    title: "Performance Marketing Systems",
    body: "Paid media, SEO/AEO, CRO — the whole funnel, instrumented and accountable.",
  },
  {
    n: "02",
    title: "AI Agents & Workflows",
    body: "Prompt engineering and lightweight agents that automate research, content, and reporting.",
  },
  {
    n: "03",
    title: "Web & Brand",
    body: "Ten+ years of design and dev — the marketing only works when the surface is good.",
  },
];

export function WhatIDo() {
  return (
    <section
      id="work"
      className="py-24 lg:py-32 border-b border-line scroll-mt-24"
    >
      <Container>
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-14 lg:mb-20 gap-8"
        >
          <h2
            className="font-display tracking-tight leading-[1.02]"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
          >
            What I actually do
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-text-primary/45">
            §01 / Capability
          </span>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => (
            <m.article
              key={item.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative isolate overflow-hidden rounded-2xl border border-line bg-bg p-8 lg:p-10 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_30px_70px_-30px_rgba(0,102,255,0.35)]"
            >
              <span
                aria-hidden
                className="absolute -top-2 -left-1 font-display select-none text-[120px] md:text-[140px] leading-none text-text-primary/[0.06] dark:text-text-dark/[0.08] pointer-events-none"
              >
                {item.n}
              </span>

              <span className="relative block text-[11px] uppercase tracking-[0.22em] text-accent mb-12">
                {item.n}
              </span>

              <h3
                className="relative font-display leading-[1.1] mb-4"
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
              >
                {item.title}
              </h3>

              <p className="relative text-text-primary/65 leading-relaxed text-[15px]">
                {item.body}
              </p>

              <span
                aria-hidden
                className="absolute left-8 right-8 lg:left-10 lg:right-10 bottom-7 h-px bg-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
            </m.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
