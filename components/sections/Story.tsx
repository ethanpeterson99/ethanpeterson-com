"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/ui/TextReveal";

const paragraphs = [
  "It started at BYU AdLab, where I learned that marketing was really just applied psychology with a spreadsheet. I ran real campaigns for real clients and realized I was better at this than most people with 10 more years of experience.",
  "From there I went independent. Under EBP Designs I worked with 30+ brands over 10 years — startups, agencies, nonprofits. You learn a lot when you're accountable for results and there's no one else to blame.",
  "Leadgenix taught me SEO and CRO at scale. I managed six-figure monthly ad budgets, ran link acquisition campaigns, and built reporting systems before “AI workflows” was a buzzword.",
  "Now I'm operating at two companies simultaneously — building the marketing engine at Vibrant Wellness while co-owning Pickled Court and rolling out a franchise. I also build the AI agents that make both possible.",
];

export function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-surface py-24 lg:py-36 border-b border-line scroll-mt-24"
    >
      {/* Rotated background label */}
      <span
        aria-hidden
        className="pointer-events-none hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2 font-display select-none text-text-primary/[0.06]"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg) translateX(50%)",
          fontSize: "clamp(160px, 22vw, 280px)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        STORY
      </span>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <m.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-28"
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-text-primary/45">
                §03 / Origins
              </span>
              <h2
                className="font-display tracking-tight leading-[1.02] mt-3"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                The story
              </h2>
            </m.div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5 max-w-2xl">
            {paragraphs.map((p, i) => (
              <div key={i} className="mb-10 last:mb-0">
                {i > 0 && (
                  <m.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block h-px w-full mb-10 bg-text-primary/15 origin-left"
                  />
                )}
                <TextReveal
                  text={p}
                  className="text-text-primary/80 leading-[1.7] text-[clamp(15px,1.6vw,18px)]"
                  stagger={0.012}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
