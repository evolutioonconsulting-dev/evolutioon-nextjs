import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Team",
  description:
    "EvoluTioon Strategic Group operates through a structured ecosystem of employees, consultants, and trainers — selected for domain depth and execution credibility.",
  path: "/team"
});

const pillars = [
  {
    n: "01",
    title: "Industry-Driven Practitioners",
    desc: "Not generic advisors. Our people bring domain depth earned inside the industries they now advise — so counsel is grounded in operating reality, not theory."
  },
  {
    n: "02",
    title: "Execution-Focused Engagements",
    desc: "Outcome-driven by design. Every engagement is structured around measurable results, with accountability for delivery — not just recommendations."
  },
  {
    n: "03",
    title: "Continuous Upskilling",
    desc: "Aligned to global standards. Our practitioners are continuously certified and upskilled against international benchmarks, keeping our delivery at the frontier."
  },
  {
    n: "04",
    title: "Capability, Certification & Accountability",
    desc: "The core of our delivery model. A structured ecosystem of employees, consultants, and trainers — selected for domain depth and execution credibility."
  }
];

const model = [
  {
    title: "Capability",
    desc: "Domain depth, proven in industry — the entry ticket to our ecosystem."
  },
  {
    title: "Certification",
    desc: "Continuous certification against global standards keeps our practice at the frontier."
  },
  {
    title: "Accountability",
    desc: "Ownership of outcomes, engagement after engagement — measured, reported, delivered."
  }
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
                Our People
              </span>
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Capability-Driven Leadership.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
              EvoluTioon Strategic Group Private Limited operates through a
              structured ecosystem of employees, consultants, and trainers —
              selected for domain depth and execution credibility.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal variant="left">
          <SectionHeading
            eyebrow="What Defines Our Team"
            title="Practitioners first. Advisors second."
          />
        </Reveal>
        <Reveal variant="up" delay={120} className="-mt-8 mb-12 max-w-2xl">
          <p className="text-sm leading-relaxed text-ink/60">
            We don&apos;t staff engagements with generalists. We assemble teams
            around the problem — matching industry-aligned practitioners to the
            sector, the stakes, and the standard of execution the work demands.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-gold/25 bg-gold/25 sm:grid-cols-2">
          {pillars.map((p, idx) => (
            <Reveal key={p.n} variant="up" delay={idx * 90} className="bg-cream p-8 sm:p-10">
              <span className="font-serif text-2xl text-gold/40">{p.n}</span>
              <h3 className="mt-2 font-serif text-xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/25 bg-cream-dark py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal variant="left">
              <SectionHeading
                eyebrow="Our Delivery Model"
                title="Capability. Certification. Accountability."
              />
            </Reveal>
            <Reveal variant="up" delay={120} className="-mt-8 mb-10 max-w-lg">
              <p className="text-sm leading-relaxed text-ink/60">
                Three commitments form the core of how we deliver — a quality
                system, not a slogan. It is why clients trust us with work
                where the outcome matters more than the workshop.
              </p>
            </Reveal>
            <Reveal
              variant="scale"
              delay={200}
              duration={600}
              className="aspect-[4/3] w-full overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
          <div className="divide-y divide-gold/20 border-t border-gold/25">
            {model.map((m, idx) => (
              <Reveal key={m.title} variant="up" delay={idx * 90} className="py-6">
                <h3 className="font-serif text-lg text-ink">{m.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/60">
                  {m.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8">
        <Reveal variant="up">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-forest px-7 py-3.5 text-xs uppercase tracking-widest2 text-cream hover:bg-forest-light"
          >
            Work With Our Team →
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
