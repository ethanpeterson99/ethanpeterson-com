"use client";

import { m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { MagneticLink } from "@/components/ui/MagneticButton";

const lines: { text: string; italic?: boolean }[] = [
  { text: "I build AI-first" },
  { text: "marketing systems", italic: true },
  { text: "that actually ship." },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const [scrolled, setScrolled] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x: -x * 20, y: -y * 20 });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center pt-28 lg:pt-32 pb-24 border-b border-line overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left — text */}
          <m.div
            style={{ y: textY }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 mb-8 text-[11px] uppercase tracking-[0.22em] text-text-primary/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
              </span>
              Available for projects
            </m.div>

            <h1
              className="font-display tracking-tight"
              style={{
                fontSize: "clamp(40px, 8vw, 88px)",
                lineHeight: 1.02,
              }}
            >
              {lines.map((line, li) => (
                <span
                  key={li}
                  className="block word-mask"
                  aria-label={line.text}
                >
                  {line.text.split(" ").map((word, wi) => {
                    const idx = li * 5 + wi;
                    return (
                      <m.span
                        key={`${li}-${wi}`}
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          duration: 0.9,
                          delay: 0.15 + idx * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`inline-block ${line.italic ? "italic" : ""}`}
                      >
                        {word}
                        {wi < line.text.split(" ").length - 1 ? " " : ""}
                      </m.span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-7 max-w-xl text-text-primary/65 leading-relaxed"
              style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
            >
              Currently doing this at Vibrant Wellness and Pickled Court.
              Ten years building the marketing that converts — now writing the
              agents that run it.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticLink href="/contact" size="lg" variant="primary">
                <span className="relative overflow-hidden">
                  Get in touch
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -inset-x-2 block"
                  />
                </span>
                <Arrow />
              </MagneticLink>
              <MagneticLink href="/#work" size="lg" variant="ghost">
                See the work
              </MagneticLink>
            </m.div>
          </m.div>

          {/* Right — visual */}
          <m.div
            style={{ y: visualY }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div
              className="relative aspect-square w-[260px] sm:w-[320px] lg:w-[380px]"
              style={{
                transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Rotating gradient halo */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full opacity-70 blur-2xl animate-bg-rotate"
                style={{
                  background:
                    "conic-gradient(from 0deg at 50% 50%, rgba(0,102,255,0.45), transparent 30%, rgba(0,102,255,0.25) 60%, transparent 90%, rgba(0,102,255,0.45))",
                }}
              />

              {/* Headshot disc */}
              <m.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full rounded-full overflow-hidden ring-2 ring-[#0066FF]/30 ring-offset-4 ring-offset-bg shadow-[0_30px_80px_-30px_rgba(0,102,255,0.55)]"
              >
                <Image
                  src="/headshot.jpg"
                  alt="Ethan Peterson"
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                  className="object-cover object-top"
                  priority
                />
              </m.div>
            </div>
          </m.div>
        </div>

        {/* Scroll indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-text-primary/45"
        >
          <span>Scroll</span>
          <span className="animate-bounce-arrow">
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <path
                d="M5 1v12m0 0l4-4m-4 4l-4-4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </m.div>
      </Container>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path
        d="M1 7h12m0 0L7 1m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
