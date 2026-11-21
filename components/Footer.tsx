import Link from "next/link";
import { site } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

const solutions = [
  "Strategic Leadership Development",
  "Strategy & Market Positioning",
  "Executive Coaching",
  "Corporate Learning",
  "Transformation"
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream-light">
      <div className="gold-rule" />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-gold/15 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-xl font-serif text-3xl leading-tight md:text-4xl">
          Ready when you are.{" "}
          <em className="text-gold not-italic italic">
            The future isn&apos;t waiting.
          </em>
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 self-start bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-forest transition-colors duration-300 hover:bg-cream-light md:self-auto"
        >
          Start the Conversation
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-6">
            <img src="/logo.png" alt={site.legalName} className="h-[138px] w-auto object-contain" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream-light/60">
            The knowledge firm for future-ready leaders, institutions, and
            governments. Learning, foresight, innovation, and transformation —
            built to earn their keep.
          </p>
        </div>

        <div>
          <h4 className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream-light/70 transition-colors duration-300 hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">
            Solutions
          </h4>
          <ul className="space-y-3">
            {solutions.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-cream-light/70 transition-colors duration-300 hover:text-gold"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">
            Connect
          </h4>
          <ul className="space-y-4 text-sm text-cream-light/70">
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all transition-colors duration-300 hover:text-gold"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition-colors duration-300 hover:text-gold"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream-light/40 sm:flex-row sm:px-8">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-gold">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
