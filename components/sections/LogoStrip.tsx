import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

const logos: Logo[] = [
  { name: "Vibrant Wellness", src: "/logos/vibrant-wellness.svg", width: 180, height: 30 },
  { name: "Pickled Court", src: "/logos/pickled-court.svg", width: 170, height: 30 },
  { name: "Leadgenix", src: "/logos/leadgenix.svg", width: 150, height: 30 },
  { name: "BYU AdLab", src: "/logos/byu-adlab.svg", width: 150, height: 30 },
  { name: "BYU Broadcasting", src: "/logos/byu-broadcasting.svg", width: 200, height: 30 },
  { name: "Assetworx", src: "/logos/assetworx.svg", width: 150, height: 30 },
  { name: "LymeDisease.org", src: "/logos/lymedisease.svg", width: 200, height: 30 },
];

export function LogoStrip() {
  return (
    <section className="py-20 lg:py-24 border-b border-line">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.28em] text-text-primary/50 mb-12 text-center">
          Trusted by
        </p>
      </Container>

      <div
        className="group relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="logo-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
}

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {logos.map((logo) => (
        <li
          key={logo.name}
          className="mx-8 lg:mx-12 flex items-center justify-center"
          style={{ width: 120, height: 40 }}
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className="logo-img max-w-[120px] max-h-[40px] w-auto h-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            unoptimized
          />
        </li>
      ))}
    </ul>
  );
}
