import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        bg: "var(--bg)",
        "bg-light": "#FAFAF7",
        "bg-dark": "#0A0A0A",
        surface: "var(--surface)",
        "text-primary": "var(--text)",
        "text-light": "#111111",
        "text-dark": "#F0F0EB",
        muted: "var(--muted)",
        line: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "blob-morph": {
          "0%, 100%": { borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" },
          "33%": { borderRadius: "40% 60% 70% 30% / 60% 40% 60% 40%" },
          "66%": { borderRadius: "55% 45% 30% 70% / 40% 50% 50% 60%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "bg-rotate": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.15)" },
        },
        "bounce-arrow": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "blob-morph": "blob-morph 12s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "bg-rotate": "bg-rotate 22s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "bounce-arrow": "bounce-arrow 1.6s ease-in-out infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
