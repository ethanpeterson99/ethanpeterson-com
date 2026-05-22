"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headshotY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 border-b border-text-light/10 dark:border-text-dark/10"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0 }}
              className="font-display text-5xl md:text-6xl lg:text-[64px] leading-[1.05] tracking-tight text-balance"
            >
              I&apos;m Ethan. I build AI-first marketing systems that actually
              ship — and the agents that run them.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-text-light/70 dark:text-text-dark/70 max-w-xl"
            >
              Currently doing this at Vibrant Wellness and Pickled Court.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10"
            >
              <ButtonLink href="/contact">Get in touch</ButtonLink>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-5"
            >
              <a
                href="https://www.linkedin.com/in/ethanbpeterson/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-light/60 dark:text-text-dark/60 hover:text-accent transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/ethanpeterson99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-light/60 dark:text-text-dark/60 hover:text-accent transition-colors"
              >
                <GitHubIcon />
              </a>
            </motion.div>
          </div>

          <motion.div
            style={{ y: headshotY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-text-light/10 to-text-light/5 dark:from-text-dark/10 dark:to-text-dark/5 shadow-2xl ring-1 ring-text-light/10 dark:ring-text-dark/10 overflow-hidden flex items-center justify-center">
                <span className="font-display text-7xl text-text-light/30 dark:text-text-dark/30">
                  EP
                </span>
              </div>
              <div className="absolute -inset-4 -z-10 rounded-full bg-accent/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.11-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.62-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}
