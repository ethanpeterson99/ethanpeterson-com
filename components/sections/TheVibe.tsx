"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";

const vibes: { label: string; size?: "sm" | "md" | "lg"; offsetY: number }[] = [
  { label: "Pickleball try-hard", size: "lg", offsetY: 0 },
  { label: "AI-first marketing wizard", size: "md", offsetY: 28 },
  { label: "Agent architect", size: "lg", offsetY: -12 },
  { label: "Prompt poet", size: "sm", offsetY: 40 },
  { label: "SEO/AEO whisperer", size: "md", offsetY: 8 },
  { label: "Growth marketing nerd", size: "lg", offsetY: -24 },
  { label: "Dad", size: "sm", offsetY: 52 },
  { label: "Builder who ships", size: "md", offsetY: -8 },
  { label: "Operator", size: "md", offsetY: 20 },
];

const sizeClasses: Record<NonNullable<(typeof vibes)[number]["size"]>, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3 text-[17px] md:text-[19px]",
};

const REPEL_RADIUS = 130;
const REPEL_FORCE = 170;
const SPRING_CONFIG = { stiffness: 220, damping: 18, mass: 0.35 };

function ScatterBubble({
  label,
  size,
  index,
  offsetY,
  containerRef,
}: {
  label: string;
  size?: "sm" | "md" | "lg";
  index: number;
  offsetY: number;
  containerRef: React.RefObject<HTMLUListElement | null>;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function onMouseMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < REPEL_RADIUS) {
        const t = 1 - dist / REPEL_RADIUS;
        const force = t * REPEL_FORCE;
        const angle = Math.atan2(dy, dx);
        rawX.set(-Math.cos(angle) * force);
        rawY.set(-Math.sin(angle) * force);
      } else {
        rawX.set(0);
        rawY.set(0);
      }
    }

    function onMouseLeave() {
      rawX.set(0);
      rawY.set(0);
    }

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [containerRef, rawX, rawY]);

  return (
    <m.li
      ref={ref}
      style={{ x, y, marginTop: offsetY }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: (index % 5) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span
        className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md select-none ${
          sizeClasses[size ?? "md"]
        }`}
      >
        {label}
      </span>
    </m.li>
  );
}

export function TheVibe() {
  const containerRef = useRef<HTMLUListElement>(null);

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-[#F0F0EB] py-28 lg:py-40">
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
        </m.div>

        <ul
          ref={containerRef}
          className="relative flex flex-wrap items-start gap-3 md:gap-5 justify-center md:justify-start pb-16"
        >
          {vibes.map((v, i) => (
            <ScatterBubble
              key={v.label}
              label={v.label}
              size={v.size}
              index={i}
              offsetY={v.offsetY}
              containerRef={containerRef}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
