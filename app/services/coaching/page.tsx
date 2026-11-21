import type { Metadata } from "next";
import { coachingTracks, site } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Executive & C-Suite Leadership Coaching Services | EvoluTioon",
  description:
    "Elevate corporate governance and strategic execution. Discover our premium CliftonStrengths, C-Suite, and Executive coaching frameworks designed for business leaders and founders.",
  alternates: { canonical: `${site.url}/services/coaching` },
  openGraph: {
    title: "Executive & C-Suite Leadership Coaching Services | EvoluTioon",
    description:
      "Elevate corporate governance and strategic execution. Discover our premium CliftonStrengths, C-Suite, and Executive coaching frameworks designed for business leaders and founders.",
    url: `${site.url}/services/coaching`,
    siteName: site.legalName,
    type: "website"
  }
};

export default function CoachingPage() {
  return (
    <>
      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
                Coaching
              </span>
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Leadership &amp; Executive Coaching
            </h1>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
              Premium, confidential coaching frameworks for corporate leaders,
              board-level executives, high-potential talent, and founders —
              designed to elevate governance, strategic execution, and
              sustainable performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="divide-y divide-gold/20 border-t border-gold/25">
          {coachingTracks.map((c, idx) => (
            <Reveal
              key={c.n}
              variant="up"
              delay={idx * 90}
              className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-[100px_1fr_2fr] sm:items-start"
            >
              <span className="font-serif text-2xl text-gold/40">{c.n}</span>
              <h2 className="font-serif text-xl text-ink">{c.title}</h2>
              <p className="text-sm leading-relaxed text-ink/60">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/25 bg-cream-dark py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal variant="left">
              <SectionHeading
                eyebrow="How We Coach"
                title="A trusted sounding board for high-stakes leadership."
              />
            </Reveal>
            <Reveal variant="up" delay={120} className="-mt-8 max-w-lg">
              <p className="text-sm leading-relaxed text-ink/60">
                Every engagement is confidential, evidence-based, and
                structured around measurable outcomes — pairing seasoned
                practitioners with data-driven methodologies like
                CliftonStrengths to turn innate talent into mature leadership
                competence.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={150} duration={600} className="aspect-[4/3] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Executive coaching session"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
