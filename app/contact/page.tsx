"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="py-24 lg:py-32 min-h-[80vh]">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
            Let&apos;s talk
          </h1>
          <p className="text-lg md:text-xl text-text-light/70 dark:text-text-dark/70 mb-12 leading-relaxed">
            Fill out the form and I&apos;ll get back to you within 24 hours.
          </p>

          {status === "success" ? (
            <div className="rounded-2xl border border-accent/40 bg-accent/5 p-8">
              <p className="font-display text-2xl md:text-3xl">
                Message sent. I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <Field
                label="Name"
                name="name"
                type="text"
                required
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-xl border border-text-light/15 dark:border-text-dark/20 bg-transparent px-4 py-3 text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, type, required, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-text-light/15 dark:border-text-dark/20 bg-transparent px-4 py-3 text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
      />
    </div>
  );
}
