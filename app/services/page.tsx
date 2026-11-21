import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/data";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Nine service lines, zero filler. Strategic Leadership Development, Strategy & Market Positioning, Startup & Growth Strategy, Corporate Learning, Facilitation, Content Development, Academic Partnerships, Organisational Transformation, and Executive Coaching.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
                Our Services
              </span>
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Nine service lines. Zero filler.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
              Every engagement is scoped to an outcome, staffed by industry
              practitioners, and measured against it. Design thinking is our
              methodology — human-centered by default. If it doesn&apos;t move
              your organisation forward, it isn&apos;t on this list.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-gold/25 bg-gold/25 sm:grid-cols-2">
          {services.map((s, idx) => {
            const isCoaching = s.slug === "coaching";
            const href = isCoaching
              ? "/services/coaching"
              : `/contact?service=${encodeURIComponent(s.title)}`;

            return (
              <Reveal
                key={s.slug}
                href={href}
                variant="up"
                delay={idx * 80}
                className="group flex flex-col justify-between bg-cream p-8 transition-colors duration-500 hover:bg-forest sm:p-10"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <Icon
                      name={s.icon}
                      className="h-7 w-7 text-gold-dark transition-colors duration-500 group-hover:text-gold"
                    />
                    <span className="font-serif text-2xl text-gold/30 transition-colors duration-500 group-hover:text-gold/50">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-ink transition-colors duration-500 group-hover:text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-cream/60">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-dark transition-colors duration-500 group-hover:text-gold">
                  {isCoaching ? "Explore Coaching" : "Enquire"}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="up" delay={services.length * 80}>
          <p className="mt-10 text-sm text-ink/60">
            Beyond these nine service lines, we also design fully{" "}
            <strong className="text-ink">custom solutions</strong> tailored
            around your organisation&apos;s unique needs —{" "}
            <Link href="/contact" className="text-gold-dark underline">
              talk to us
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
