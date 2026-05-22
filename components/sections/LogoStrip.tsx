import { Container } from "@/components/ui/Container";

const logos = [
  "Vibrant Wellness",
  "Pickled Court",
  "Leadgenix",
  "BYU AdLab",
  "BYU Broadcasting",
  "Assetworx",
  "LymeDisease.org",
];

export function LogoStrip() {
  return (
    <section className="py-20 lg:py-24 border-b border-line">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.28em] text-text-primary/50 mb-10 text-center">
          Trusted by
        </p>
      </Container>

      {/* Desktop: marquee */}
      <div className="hidden md:block group mask-fade-x overflow-hidden">
        <div
          className="flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused]"
          aria-hidden="false"
        >
          <LogoRow />
          <LogoRow aria-hidden />
        </div>
      </div>

      {/* Mobile: touch scroll */}
      <div className="md:hidden">
        <Container>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 snap-x snap-mandatory">
            {logos.map((l) => (
              <LogoPill key={l} label={l} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

function LogoRow({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean } = {}) {
  return (
    <ul
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {logos.map((l) => (
        <li key={l}>
          <LogoPill label={l} />
        </li>
      ))}
    </ul>
  );
}

function LogoPill({ label }: { label: string }) {
  return (
    <span className="shrink-0 snap-start whitespace-nowrap rounded-full bg-[#111111] text-[#F0F0EB] dark:bg-[#F0F0EB] dark:text-[#111111] px-5 py-2.5 text-[13px] font-medium tracking-tight transition-colors">
      {label}
    </span>
  );
}
