"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";

const vibes: { label: string; size?: "sm" | "md" | "lg" }[] = [
  { label: "Pickleball try-hard", size: "lg" },
  { label: "AI-first marketing wizard", size: "md" },
  { label: "Agent architect", size: "lg" },
  { label: "Prompt poet", size: "sm" },
  { label: "SEO/AEO whisperer", size: "md" },
  { label: "Growth marketing nerd", size: "lg" },
  { label: "Husband & father", size: "sm" },
  { label: "Builder who ships", size: "md" },
  { label: "Operator", size: "md" },
];

const sizeClasses: Record<NonNullable<(typeof vibes)[number]["size"]>, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3 text-[17px] md:text-[19px]",
};

export function TheVibe() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-[#F0F0EB] py-28 lg:py-40">
      {/* Morphing gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl animate-blob-morph"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,102,255,0.6), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,68,204,0.4), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative flex items-end justify-between mb-14 lg:mb-20 gap-8"
        >
          <h2
            className="font-display tracking-tight leading-[1.02]"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
          >
            The <em className="font-display italic text-accent">vibe</em>
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-white/40">
            §04 / Personality
          </span>
        </m.div>

        <ul className="relative flex flex-wrap items-center gap-3 md:gap-4 justify-center md:justify-start">
          {vibes.map((v, i) => (
            <m.li
              key={v.label}
              initial={{ opacity: 0, scale: 0.85, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: Math.random() * 0.5 + (i % 5) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span
                className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-[#0A0A0A] hover:border-white ${
                  sizeClasses[v.size ?? "md"]
                }`}
              >
                {v.label}
              </span>
            </m.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
