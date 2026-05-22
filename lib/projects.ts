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
    description:
      "Full-funnel paid media, SEO, and growth systems for a DTC health brand.",
    tag: "Full-time",
    href: "https://vibrantwellness.com",
  },
  {
    name: "Pickled Court",
    role: "CEO",
    description:
      "Leading the brand, marketing, and franchise rollout of a pickleball court surfacing company.",
    tag: "CEO",
    href: "https://pickledcourt.com",
  },
  {
    name: "EBP Designs",
    role: "Freelance",
    description:
      "Brand, design, and digital marketing for growth-focused clients since 2016.",
    tag: "Since 2016",
  },
  {
    name: "LymeDisease.org",
    role: "Digital Marketing",
    description:
      "Volunteer SEO, content strategy, and digital presence for the nation's leading Lyme disease advocacy organization.",
    tag: "Volunteer",
    href: "https://www.lymedisease.org",
  },
];
