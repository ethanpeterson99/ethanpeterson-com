"use client";

import { m, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";

type Entry = {
  range: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
};

const entries: Entry[] = [
  {
    range: "Mar 2026 — Present",
    company: "Pickled Court",
    role: "CEO & Co-Owner",
    description:
      "Leading franchise operations and growth strategy for a pickleball court surfacing company with locations across Utah and Florida.",
    tags: ["Franchise Growth", "Operations", "Leadership"],
  },
  {
    range: "Mar 2025 — Present",
    company: "Vibrant Wellness",
    role: "Performance Marketing Manager",
    description:
      "Driving paid media strategy and digital performance marketing across multiple channels.",
    tags: ["Paid Media", "Performance Marketing", "Full-time"],
  },
  {
    range: "Sep 2023 — Mar 2025",
    company: "Leadgenix",
    role: "SEO & Web Development Lead",
    description:
      "Progressed through three roles: SEO Account Manager → UX/UI Designer → Web Dev Project Manager (SEO|CRO). Managed client SEO strategies and web development projects.",
    tags: ["SEO", "UX/UI", "Web Development"],
  },
  {
    range: "Jan 2016 — Present",
    company: "Freshlime Media",
    role: "Freelance Designer & Marketer",
    description:
      "Long-running freelance practice covering brand identity, digital marketing, and graphic design for clients across industries.",
    tags: ["Brand Design", "Freelance", "Digital Marketing"],
  },
  {
    range: "Oct 2021 — Sep 2023",
    company: "Assetworx",
    role: "Graphic & UX/UI Designer",
    description:
      "Freelance design work focused on brand identity and user experience.",
    tags: ["Graphic Design", "UX/UI", "Freelance"],
  },
  {
    range: "Nov 2020 — Sep 2023",
    company: "BYU Broadcasting",
    role: "Sports Marketing Student Manager",
    description:
      "Managed @BYUSportsNation social media strategy and a team of 12 students. Ran digital ad campaigns on Google, Meta, Spotify, and email with $10K+ budgets.",
    tags: ["Social Media", "Digital Ads", "Part-time"],
  },
  {
    range: "Feb 2021 — May 2023",
    company: "BYU AdLab",
    role: "Account Manager & Strategist",
    description:
      "Led advertising campaigns and account strategy for real-world brand partners through BYU's award-winning student ad agency.",
    tags: ["Advertising", "Strategy", "Part-time"],
  },
  {
    range: "Jan 2019 — Nov 2020",
    company: "BYU Continuing Education",
    role: "Media Services Specialist",
    description:
      "Email marketing, Google Analytics, social media content, and digital advertising for BYU's continuing education division.",
    tags: ["Email Marketing", "Analytics", "Marketing"],
  },
];

export function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-[#F4F4F0] dark:bg-[#111111] py-24 lg:py-36 border-b border-line scroll-mt-24"
    >
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
              <h2
                className="font-display tracking-tight leading-[1.02] mt-3"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
              >
                Experience
              </h2>
            </m.div>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <ol ref={listRef} className="relative">
              {/* Background line (static, low opacity) */}
              <span
                aria-hidden
                className="absolute left-[3px] top-2 bottom-2 w-px bg-[#0066FF]/20"
              />
              {/* Drawing line (animated height) */}
              <m.span
                aria-hidden
                style={{ height: lineHeight }}
                className="absolute left-[3px] top-2 w-px bg-[#0066FF] origin-top"
              />

              {entries.map((entry, i) => (
                <TimelineEntry
                  key={entry.company + entry.range}
                  entry={entry}
                  index={i}
                  isLast={i === entries.length - 1}
                />
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TimelineEntry({
  entry,
  index,
  isLast,
}: {
  entry: Entry;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <li
      ref={ref}
      className={`relative pl-8 ${isLast ? "" : "mb-12"} group`}
    >
      {/* Dot */}
      <m.span
        aria-hidden
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{
          duration: 0.45,
          delay: 0.1 + index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#0066FF] transition-transform duration-300 ease-out group-hover:scale-[1.5]"
      />

      <m.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
        transition={{
          duration: 0.7,
          delay: 0.15 + index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        <p className="font-display italic text-[13px] text-[#0066FF] mb-1">
          {entry.range}
        </p>
        <h3 className="text-[#111111] dark:text-[#F0F0EB] font-medium text-[17px] md:text-[19px] leading-snug mb-2">
          {entry.company} <span className="text-text-primary/40">—</span>{" "}
          {entry.role}
        </h3>
        <p className="text-[#555550] dark:text-[#888880] leading-[1.65] text-[15px] max-w-prose mb-3">
          {entry.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border border-[#0066FF]/20 text-[#0066FF]/70 dark:text-[#0066FF]/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </m.div>
    </li>
  );
}
