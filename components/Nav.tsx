"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

export function Nav() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  const links = [
    { href: "/#work", label: "Work" },
    { href: "/#story", label: "Story" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[90] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 text-[#111111] dark:text-[#F0F0EB] ${
          scrolled
            ? "backdrop-blur-xl bg-[#FAFAF7]/90 dark:bg-[#0A0A0A]/80 border-b border-line"
            : "backdrop-blur-0 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Home"
            className="group relative font-display text-3xl leading-none"
          >
            <span className="relative inline-block">
              EP
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100" />
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[13px] uppercase tracking-[0.18em] text-[#111111] dark:text-[#F0F0EB] opacity-80 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle isDark={isDark} mounted={mounted} onToggle={toggleTheme} />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle isDark={isDark} mounted={mounted} onToggle={toggleTheme} />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative h-10 w-10 flex items-center justify-center"
            >
              <span
                className={`absolute block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-px w-6 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] bg-bg md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-8 pt-24 pb-12">
              <ul className="space-y-5">
                {links.map((l, i) => (
                  <m.li
                    key={l.href}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-5xl tracking-tight leading-none"
                    >
                      {l.label}
                    </Link>
                  </m.li>
                ))}
              </ul>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em] text-text-primary/55"
              >
                <span>Available for projects</span>
                <span>ethan@pickledcourt.com</span>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ThemeToggle({
  isDark,
  mounted,
  onToggle,
}: {
  isDark: boolean;
  mounted: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="relative h-9 w-9 rounded-full border border-line flex items-center justify-center overflow-hidden hover:border-accent/50 transition-colors"
    >
      {mounted ? (
        <span className="relative block h-4 w-4">
          <span
            className="absolute inset-0 rounded-full bg-current transition-all duration-500"
            style={{
              clipPath: isDark
                ? "circle(50% at 65% 35%)"
                : "circle(50% at 50% 50%)",
              transform: isDark ? "scale(0.85)" : "scale(0.7)",
            }}
          />
        </span>
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  );
}
