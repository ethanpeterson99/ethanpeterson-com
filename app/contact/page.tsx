"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

type Status = "idle" | "success";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:ethanpeterson99@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  const words = ["Let’s", "talk."];

  return (
    <main className="pt-32 lg:pt-40 pb-24 min-h-[90vh]">
      <Container>
        <div className="max-w-3xl">
          <h1
            className="font-display tracking-tight leading-[1.2] mb-8"
            style={{ fontSize: "clamp(48px, 9vw, 112px)" }}
          >
            {words.map((w, i) => (
              <span key={i} className={`word-mask block${i === 0 ? " mb-6" : ""}`}>
                <m.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${i === 0 ? "" : "italic text-accent"}`}
                >
                  {w}
                </m.span>
              </span>
            ))}
          </h1>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-primary/65 mb-16 max-w-xl leading-relaxed"
            style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
          >
            Fill out the form and I&apos;ll get back to you within 24 hours.
          </m.p>

          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <m.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-accent/40 bg-accent/5 p-8"
              >
                <p
                  className="font-display"
                  style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
                >
                  Message sent. I&apos;ll be in touch within 24 hours.
                </p>
              </m.div>
            ) : (
              <m.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                <FloatingField
                  label="Name"
                  name="name"
                  type="text"
                  autoComplete="name"
                />
                <FloatingField
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
                <FloatingField
                  label="Message"
                  name="message"
                  type="textarea"
                />

                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    size="lg"
                  >
                    Send message
                    <Arrow />
                  </MagneticButton>
                </div>
              </m.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </main>
  );
}

type FloatingFieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
};

function FloatingField({ label, name, type, autoComplete }: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isFloating = focused || value.length > 0;

  const sharedProps = {
    id: name,
    name,
    required: true,
    autoComplete,
    "aria-label": label,
    value,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => setValue(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className:
      "peer w-full bg-transparent border-0 border-b border-text-primary/20 px-0 py-3 text-base outline-none transition-colors focus:border-accent placeholder:text-transparent",
  } as const;

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-0 origin-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isFloating
            ? "top-0 text-[11px] uppercase tracking-[0.22em] text-accent"
            : "top-3 text-base text-text-primary/55"
        }`}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea {...sharedProps} rows={5} placeholder=" " />
      ) : (
        <input {...sharedProps} type={type} placeholder=" " />
      )}
    </div>
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
