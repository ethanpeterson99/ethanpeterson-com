"use client";

import { m } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "p" | "span" | "div";
  stagger?: number;
  duration?: number;
};

export function TextReveal({
  text,
  className = "",
  as = "p",
  stagger = 0.012,
  duration = 0.6,
}: TextRevealProps) {
  const words = text.split(/(\s+)/);
  const Tag = as;
  return (
    <Tag className={className}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <m.span
            key={i}
            initial={{ opacity: 0.15, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration, delay: i * stagger, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block"
          >
            {w}
          </m.span>
        );
      })}
    </Tag>
  );
}
