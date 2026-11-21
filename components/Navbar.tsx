"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Insights", href: "/insights" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gold/20 bg-forest/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt={site.legalName}
            className="h-[62px] w-auto object-contain sm:h-[75px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`text-[12px] uppercase tracking-[0.13em] transition-colors duration-300 ${
                    active ? "text-gold" : "text-cream-light hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute left-0 top-full hidden pt-4 group-hover:block">
                    <div className="min-w-[280px] border border-gold/25 bg-forest py-2 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                      <Link
                        href="/services"
                        className="block px-5 py-3 text-[12px] uppercase tracking-[0.13em] text-cream-light/80 transition-colors duration-300 hover:bg-forest-light hover:text-gold"
                      >
                        All Services
                      </Link>
                      <Link
                        href="/services/coaching"
                        className="block px-5 py-3 text-[12px] uppercase tracking-[0.13em] text-cream-light/80 transition-colors duration-300 hover:bg-forest-light hover:text-gold"
                      >
                        Leadership &amp; Executive Coaching
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-forest transition-colors duration-300 hover:bg-forest hover:text-gold md:inline-flex"
          >
            Schedule a Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
          <button
            className="p-2 text-cream-light lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold/15 bg-forest px-6 pb-6 pt-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm uppercase tracking-[0.13em] text-cream-light/85 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest"
          >
            Schedule a Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
