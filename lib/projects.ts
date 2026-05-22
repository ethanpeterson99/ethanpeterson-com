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
    description: "Full-funnel paid + SEO for a DTC health brand.",
    tag: "Full-time",
    href: "https://vibrant-wellness.com",
  },
  {
    name: "Pickled Court",
    role: "Co-Owner",
    description:
      "Franchise rollout for a pickleball court surfacing company.",
    tag: "Founder",
    href: "https://pickledcourt.com",
  },
  {
    name: "EBP Designs",
    role: "Freelance",
    description:
      "10 years of brand, design, and dev for growth-focused clients.",
    tag: "Since 2016",
  },
  {
    name: "CourtScout",
    role: "Founder",
    description:
      "Geospatial lead-gen for court surfacing contractors, MVP in progress.",
    tag: "Building",
  },
];
