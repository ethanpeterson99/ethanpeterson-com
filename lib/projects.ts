export type Project = {
  name: string;
  role: string;
  description: string;
  tag: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Vibrant Wellness",
    role: "Performance Marketing Manager",
    description: "Performance and Growth Marketing for a B2B2C health brand.",
    tag: "Full-time",
    href: "https://vibrant-wellness.com",
  },
  {
    name: "Pickled Court",
    role: "CEO & Co-Owner",
    description:
      "Franchise rollout for a pickleball court surfacing company.",
    tag: "Co-Owner",
    href: "https://pickledcourt.com",
  },
  {
    name: "Freshlime Media",
    role: "Freelance",
    description:
      "10 years of brand, design, and dev for growth-focused clients.",
    tag: "Since 2016",
    href: "https://freshlimemedia.com",
  },
];
