import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Story } from "@/components/sections/Story";
import { TheVibe } from "@/components/sections/TheVibe";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <CurrentlyBuilding />
      <LogoStrip />
      <Story />
      <TheVibe />
      <CTA />
    </main>
  );
}
