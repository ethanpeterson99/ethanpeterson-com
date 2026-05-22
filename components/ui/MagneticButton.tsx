"use client";

import Link from "next/link";
import {
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";

type Variant = "primary" | "outline" | "ghost";

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  strength?: number;
  size?: "md" | "lg";
};

const sizes: Record<NonNullable<Common["size"]>, string> = {
  md: "h-12 px-7 text-[15px]",
  lg: "h-[60px] px-10 text-base md:text-lg",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white border border-accent shadow-[0_10px_30px_-10px_rgba(0,102,255,0.5)] hover:bg-[color:var(--accent-dim)] hover:border-[color:var(--accent-dim)]",
  outline:
    "bg-transparent text-text-primary border border-text-primary/30 hover:bg-accent hover:text-white hover:border-accent",
  ghost:
    "bg-transparent text-text-primary border border-transparent hover:text-accent",
};

function useMagnetic(strength: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(x, y);
    const radius = Math.max(rect.width, rect.height) * 1.1;
    if (dist > radius) {
      setT({ x: 0, y: 0 });
      return;
    }
    setT({ x: (x / radius) * strength, y: (y / radius) * strength });
  };

  const onLeave = () => setT({ x: 0, y: 0 });

  return { ref, t, onMove, onLeave };
}

type LinkProps = Common & { href: string };

export function MagneticLink({
  href,
  children,
  variant = "primary",
  className = "",
  size = "md",
  strength = 18,
}: LinkProps) {
  const { ref, t, onMove, onLeave } = useMagnetic(strength);
  const isExternal = href.startsWith("http");
  const inner = (
    <span
      className="relative z-10 inline-flex items-center justify-center gap-2 transition-transform duration-300"
      style={{ transform: `translate3d(${t.x * 0.5}px, ${t.y * 0.5}px, 0)` }}
    >
      {children}
    </span>
  );
  const cls = `inline-flex relative items-center justify-center rounded-full font-medium overflow-hidden transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${sizes[size]} ${variants[variant]} ${className}`;
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block transition-transform duration-300 will-change-transform"
      style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)` }}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      )}
    </div>
  );
}

type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement>;

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  size = "md",
  strength = 18,
  ...rest
}: ButtonProps) {
  const { ref, t, onMove, onLeave } = useMagnetic(strength);
  const cls = `inline-flex relative items-center justify-center rounded-full font-medium overflow-hidden transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed ${sizes[size]} ${variants[variant]} ${className}`;
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block transition-transform duration-300 will-change-transform"
      style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0)` }}
    >
      <button {...rest} className={cls}>
        <span
          className="relative z-10 inline-flex items-center justify-center gap-2 transition-transform duration-300"
          style={{ transform: `translate3d(${t.x * 0.5}px, ${t.y * 0.5}px, 0)` }}
        >
          {children}
        </span>
      </button>
    </div>
  );
}
