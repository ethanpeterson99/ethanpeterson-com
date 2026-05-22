"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

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

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-light/70 dark:bg-bg-dark/70 border-b border-text-light/10 dark:border-text-dark/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-3xl leading-none hover:text-accent transition-colors"
          aria-label="Home"
        >
          EP
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-text-light/5 dark:hover:bg-text-dark/5 transition-colors"
          >
            {mounted ? (
              isDark ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )
            ) : (
              <span className="block w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}
