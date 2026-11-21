import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/data";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Whether you're exploring a leadership programme, a foresight engagement, or an institutional partnership — we'd love to hear from you.",
  path: "/contact"
});

const contactLines = [
  {
    href: (v: string) => `mailto:${v}`,
    value: site.email,
    icon: (
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    )
  },
  {
    href: (v: string) => `tel:${v.replace(/\s/g, "")}`,
    value: site.phone,
    icon: (
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    )
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
                Contact
              </span>
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Let&apos;s build the future together.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr]">
          <Reveal variant="left">
            <h2 className="font-serif text-2xl text-ink">Speak with us</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
              Whether you&apos;re exploring a leadership programme, a
              foresight engagement, or an institutional partnership —
              we&apos;d love to hear from you.
            </p>
            <ul className="mt-10 space-y-5 text-sm text-ink/75">
              {contactLines.map((c) => (
                <li key={c.value}>
                  <a
                    href={c.href(c.value)}
                    className="group flex items-center gap-4 transition-colors duration-300 hover:text-gold-dark"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 text-gold-dark transition-colors duration-300 group-hover:border-gold group-hover:bg-forest group-hover:text-gold">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {c.icon}
                      </svg>
                    </span>
                    {c.value}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 transition-colors duration-300 hover:text-gold-dark"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 text-gold-dark transition-colors duration-300 group-hover:border-gold group-hover:bg-forest group-hover:text-gold">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 transition-colors duration-300 hover:text-gold-dark"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 text-gold-dark transition-colors duration-300 group-hover:border-gold group-hover:bg-forest group-hover:text-gold">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </span>
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 text-gold-dark">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                {site.location}
              </li>
            </ul>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
