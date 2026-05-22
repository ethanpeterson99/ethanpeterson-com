"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MagneticLink } from "@/components/ui/MagneticButton";

export function CTA() {
  return (
    <section className="py-28 lg:py-40">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[11px] uppercase tracking-[0.22em] text-text-primary/45">
            §05 / Next
          </span>

          <h2
            className="font-display tracking-tight leading-[1.0] mt-4 mb-8 max-w-4xl"
            style={{ fontSize: "clamp(44px, 9vw, 112px)" }}
          >
            Want to{" "}
            <em className="font-display italic text-accent">build</em>{" "}
            something?
          </h2>

          <p
            className="text-text-primary/65 max-w-2xl mb-14 leading-relaxed"
            style={{ fontSize: "clamp(15px, 2vw, 19px)" }}
          >
            I&apos;m selective about what I take on, but if it&apos;s
            interesting and you move fast, let&apos;s talk.
          </p>

          <MagneticLink href="/contact" variant="outline" size="lg">
            Get in touch
            <Arrow />
          </MagneticLink>

          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-20 mb-10 h-px bg-text-primary/15 origin-left"
          />

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px]">
            <SocialLink
              href="https://www.linkedin.com/in/ethanbpeterson/"
              icon={<LinkedInIcon />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/ethanpeterson99"
              icon={<GitHubIcon />}
              label="GitHub"
            />
            <SocialLink
              href="https://x.com/ethanbpeterson"
              icon={<XIcon />}
              label="Twitter"
            />
            <SocialLink
              href="mailto:ethan@pickledcourt.com"
              icon={<MailIcon />}
              label="Email"
            />
          </div>
        </m.div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-2.5 text-text-primary/70 hover:text-accent transition-colors"
    >
      <span className="inline-flex h-4 w-4 items-center justify-center">{icon}</span>
      <span className="link-underline uppercase tracking-[0.2em] text-[11px]">
        {label}
      </span>
    </a>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7h12m0 0L7 1m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.11-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.62-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7L12 14 2 7" />
    </svg>
  );
}
