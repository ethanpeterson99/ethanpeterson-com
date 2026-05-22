"use client";

import { useEffect, useRef } from "react";

const DOT_SIZE = 8;
const RING_SIZE = 40;
const RING_HOVER = 60;
const RING_TEXT = 80;
const EASE = 0.18;

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: mouse.x, y: mouse.y };
    let ringSize = RING_SIZE;
    let targetRingSize = RING_SIZE;
    let dotOpacity = 1;
    let targetDotOpacity = 1;
    let labelOpacity = 0;
    let targetLabelOpacity = 0;
    let squish = 1;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        ringPos.x = mouse.x;
        ringPos.y = mouse.y;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        visible = true;
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      visible = false;
    };

    const onMouseDown = () => {
      squish = 0.8;
    };
    const onMouseUp = () => {
      squish = 1;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a, button, [role='button'], input, textarea, label");
      const textTrigger = t.closest(".cursor-text");
      if (textTrigger) {
        targetRingSize = RING_TEXT;
        targetDotOpacity = 0;
        targetLabelOpacity = 1;
      } else if (interactive) {
        targetRingSize = RING_HOVER;
        targetDotOpacity = 0;
        targetLabelOpacity = 0;
      } else {
        targetRingSize = RING_SIZE;
        targetDotOpacity = 1;
        targetLabelOpacity = 0;
      }
    };

    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * EASE;
      ringPos.y += (mouse.y - ringPos.y) * EASE;
      ringSize += (targetRingSize - ringSize) * 0.2;
      dotOpacity += (targetDotOpacity - dotOpacity) * 0.25;
      labelOpacity += (targetLabelOpacity - labelOpacity) * 0.25;

      dot.style.transform = `translate3d(${mouse.x - DOT_SIZE / 2}px, ${
        mouse.y - DOT_SIZE / 2
      }px, 0)`;
      dot.style.opacity = String(visible ? dotOpacity : 0);

      ring.style.transform = `translate3d(${ringPos.x - ringSize / 2}px, ${
        ringPos.y - ringSize / 2
      }px, 0) scale(${squish})`;
      ring.style.width = `${ringSize}px`;
      ring.style.height = `${ringSize}px`;
      label.style.opacity = String(labelOpacity);

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[110] hidden rounded-full border-[1.5px] border-accent opacity-0 mix-blend-difference md:block"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          transition: "border-color 0.2s ease",
        }}
      >
        <span
          ref={labelRef}
          className="absolute inset-0 flex items-center justify-center text-[10px] font-medium uppercase tracking-widest text-accent"
          style={{ opacity: 0 }}
        >
          View
        </span>
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[111] hidden rounded-full bg-accent opacity-0 md:block"
        style={{ width: DOT_SIZE, height: DOT_SIZE }}
      />
    </>
  );
}
