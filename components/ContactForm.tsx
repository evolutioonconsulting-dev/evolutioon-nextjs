"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { coachingTracks } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceInterest = searchParams.get("service") || "";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 10)
      next.message = "Tell us a little more — at least 10 characters.";

    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center border border-gold/30 bg-white p-10 text-center shadow-xl shadow-forest/5 sm:p-16">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-gold">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="mt-7 font-serif text-2xl text-ink sm:text-3xl">
          Message received.
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
          Thank you for reaching out to {""}EvoluTioon Strategic Group. A
          member of our team will review your enquiry and respond within
          one to two business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center gap-2 border border-gold/50 px-6 py-3 text-[12px] uppercase tracking-[0.16em] text-gold-dark transition-colors duration-300 hover:border-gold hover:bg-forest hover:text-gold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 shadow-xl shadow-forest/5 sm:p-10">
      {serviceInterest && (
        <div className="flex items-center gap-3 border border-gold/30 bg-cream px-5 py-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold-dark">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <p className="text-sm text-ink/70">
            Enquiring about{" "}
            <strong className="text-ink">{serviceInterest}</strong>
          </p>
          <input type="hidden" name="serviceInterest" value={serviceInterest} />
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" required error={errors.name}>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            className="input"
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            name="email"
            type="email"
            placeholder="you@organisation.com"
            className="input"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Organisation">
          <input
            name="organisation"
            type="text"
            placeholder="Company / Institution"
            className="input"
          />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" placeholder="+91 ..." className="input" />
        </Field>
      </div>

      <Field label="Coaching Interest (optional)">
        <select name="coachingInterest" className="input" defaultValue="">
          <option value="" disabled>
            Select a coaching category (if applicable)
          </option>
          {coachingTracks.map((c) => (
            <option key={c.n} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" required error={errors.message}>
        <textarea
          name="message"
          rows={5}
          defaultValue={
            serviceInterest
              ? `Hi, I'd like to learn more about ${serviceInterest}.`
              : ""
          }
          placeholder="Tell us about your challenge or opportunity…"
          className="input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-3 bg-forest px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-gold hover:text-forest disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        )}
      </button>

      {status === "error" && (
        <div className="flex items-start gap-3 border border-red-700/30 bg-red-50 px-5 py-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-red-700">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
          <p className="text-sm leading-relaxed text-red-800">
            Something went wrong sending your message. Please try again, or
            email us directly.
          </p>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest2 text-gold-dark">
        {label} {required && "*"}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
    </label>
  );
}
