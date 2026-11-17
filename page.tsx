import Link from "next/link";
import {
  pillars,
  services,
  stats,
  articles,
  faqs,
  site
} from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const editorialWords = [
  "Learning",
  "Leadership",
  "Foresight",
  "Innovation",
  "Transformation",
  "Futures Thinking",
  "Strategy"
];

const partnerTypes = [
  "Universities",
  "Corporations",
  "Government Institutions",
  "Think Tanks",
  "Development Organizations",
  "Business Schools",
  "Policy Units",
  "Research Councils"
];

const heroStats = [
  { value: 12, suffix: "+", label: "Years of Impact" },
  { value: 500, suffix: "+", label: "Leaders Trained" },
  { value: 50, suffix: "+", label: "Organisations Transformed" },
  { value: 2, suffix: "", label: "Countries Reached" }
];

const heroPoints = [
  { label: "Strategic Foresight" },
  { label: "Capability-Driven Teams" },
  { label: "Measurable Outcomes" },
  { label: "Global Perspective" }
];

function parseStat(value: string) {
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  return { num, suffix };
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-stretch overflow-hidden bg-cream">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-36 sm:px-8 lg:grid-cols-12 lg:pb-0 lg:pt-28">
          <div className="lg:col-span-7">
            <Reveal variant="left" duration={600}>
              <div className="mb-10 flex items-center gap-4">
                <span className="h-px w-16 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
                  {site.legalName}
                </span>
              </div>
              <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[5.2rem]">
                <span className="block">Future-Ready.</span>
                <span className="block">Human-Centered.</span>
                <span className="block">Outcome-Driven.</span>
              </h1>
              <span className="block font-serif text-5xl font-semibold italic leading-[1.05] tracking-tight text-gold sm:text-6xl lg:text-[5.2rem]">
                By Design.
              </span>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <div className="mt-8 h-[2px] w-24 bg-gold" />
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                EvoluTioon is the knowledge firm behind future-ready leaders and
                institutions — turning learning, foresight, and innovation into
                measurable advantage.
              </p>
            </Reveal>

            <Reveal variant="up" delay={280} className="mb-14 mt-10 flex flex-col gap-4 sm:flex-row lg:mb-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-forest px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-gold hover:text-forest"
              >
                Book a Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 border border-gold/60 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-gold hover:text-gold-dark"
              >
                Explore Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </Reveal>

            <Reveal variant="up" delay={380} className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-gold/30 pt-8 sm:grid-cols-4 lg:mb-0">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="font-serif text-3xl text-ink sm:text-4xl"
                  />
                  <p className="mt-2 text-[11px] uppercase leading-snug tracking-[0.12em] text-gold-dark">
                    {s.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal
            variant="scale"
            delay={200}
            duration={600}
            className="relative hidden self-stretch lg:col-span-5 lg:block"
          >
            <div className="absolute inset-y-0 -right-24 left-0">
              <img
                src="https://images.pexels.com/photos/32715519/pexels-photo-32715519.jpeg?w=1200"
                alt="Architectural form representing strategic design"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest-light/55 to-forest/90" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/25" />
            </div>
            <div className="absolute bottom-16 left-10 right-0">
              {heroPoints.map((p, idx) => (
                <Reveal
                  key={p.label}
                  variant="up"
                  delay={500 + idx * 110}
                  className="flex items-center gap-4 border-t border-gold/40 py-4 pr-6"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-[12px] uppercase tracking-[0.22em] text-cream-light">
                    {p.label}
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 h-[6px] w-full bg-gradient-to-r from-gold via-gold-dark to-gold/30" />
      </section>

      {/* Editorial marquee */}
      <div className="overflow-hidden border-y border-gold/30 bg-cream py-6">
        <Marquee
          items={editorialWords.map((w) => (
            <span key={w} className="mx-8 flex items-center gap-8">
              <span className="font-serif text-3xl italic text-ink/70 md:text-4xl">
                {w}
              </span>
              <span className="text-xl text-gold/60">✦</span>
            </span>
          ))}
        />
      </div>

      {/* Who We Are */}
      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left" className="mb-20 max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
              Who We Are
            </span>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Knowledge is our product. Readiness is our promise.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120} className="-mt-16 mb-20 max-w-2xl">
            <p className="text-base leading-relaxed text-ink/70 md:text-lg">
              {site.description}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 border-l border-t border-gold/30 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, idx) => (
              <Reveal
                key={p.n}
                variant="up"
                delay={idx * 90}
                as="div"
                className="group border-b border-r border-gold/30 p-8 transition-colors duration-500 hover:bg-forest lg:p-9"
              >
                <span className="text-outline-gold font-serif text-5xl transition-colors duration-500 group-hover:text-gold group-hover:[-webkit-text-stroke:0px]">
                  {p.n}
                </span>
                <h3 className="mt-8 font-serif text-2xl text-ink transition-colors duration-500 group-hover:text-cream">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55 transition-colors duration-500 group-hover:text-cream/60">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="relative border-t border-gold/25 bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal
            variant="left"
            className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
                What We Do
              </span>
              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-ink md:text-5xl">
                Nine service lines. Zero filler.
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 border-b border-gold/50 pb-2 text-[13px] uppercase tracking-[0.16em] text-gold-dark transition-colors duration-300 hover:border-gold hover:text-ink"
            >
              See All Nine
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-gold/30 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, idx) => (
              <Reveal
                key={s.slug}
                variant="up"
                delay={idx * 90}
                className="group bg-cream p-9 transition-colors duration-500 hover:bg-forest"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    name={s.icon}
                    className="h-6 w-6 text-gold-dark transition-colors duration-500 group-hover:text-gold"
                  />
                  <span className="font-serif text-sm text-gold/60">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl leading-snug text-ink transition-colors duration-500 group-hover:text-cream">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-cream/60">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why EvoluTioon */}
      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal variant="left">
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
                Why EvoluTioon
              </span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
                The way we work is the reason it works.
              </h2>
            </Reveal>
            <Reveal variant="scale" delay={150} duration={600} className="relative mt-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                alt="Leadership session"
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
            </Reveal>
          </div>

          <div className="hairline-gold grid grid-cols-1 gap-px self-start border bg-gold/25 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                icon: "compass",
                title: "Future-Oriented",
                desc: "Preparing people and institutions for tomorrow's challenges before they arrive."
              },
              {
                icon: "handshake",
                title: "Human-Centered",
                desc: "People-first learning and transformation, designed around how humans actually change."
              },
              {
                icon: "feather",
                title: "Evidence-Based",
                desc: "Grounded in research, tested frameworks, and disciplined practical application."
              },
              {
                icon: "target",
                title: "Outcome-Focused",
                desc: "Every engagement designed to create measurable, durable impact."
              }
            ].map((f, idx) => (
              <Reveal
                key={f.title}
                variant="up"
                delay={idx * 90}
                className="bg-cream p-9 transition-colors duration-300 hover:bg-white"
              >
                <Icon name={f.icon} className="h-6 w-6 text-gold-dark" />
                <h3 className="mt-6 font-serif text-2xl text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">
                  {f.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="border-y border-gold/25 bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left" className="mb-14 flex items-center gap-5">
            <span className="h-px w-16 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
              Proof, In Numbers
            </span>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
            {stats.map((s, idx) => {
              const { num, suffix } = parseStat(s.value);
              return (
                <Reveal key={s.label} variant="up" delay={idx * 90}>
                  <CountUp
                    value={num}
                    suffix={suffix}
                    className="font-serif text-6xl text-ink md:text-7xl"
                  />
                  <p className="mt-4 text-[13px] uppercase tracking-[0.14em] text-gold-dark">
                    {s.label}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="up">
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section className="hairline-gold border-t bg-cream py-16">
        <Reveal variant="left" className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
          <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
            Partners &amp; Collaborations
          </span>
        </Reveal>
        <Marquee
          reverse
          items={partnerTypes.map((p) => (
            <span
              key={p}
              className="mx-10 whitespace-nowrap font-serif text-2xl text-ink/30 transition-colors duration-300 hover:text-ink md:text-3xl"
            >
              {p}
            </span>
          ))}
        />
      </section>

      {/* Insights preview */}
      <section className="hairline-gold border-t bg-cream py-28 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal
            variant="left"
            className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
                Insights
              </span>
              <h2 className="mt-5 font-serif text-4xl text-ink md:text-5xl">
                Thought leadership
              </h2>
            </div>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-3 border-b border-gold-dark/40 pb-2 text-[13px] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:text-gold-dark"
            >
              All Insights
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {articles.slice(0, 3).map((a, idx) => (
              <Reveal key={a.slug} as={Link} href={`/insights/${a.slug}`} variant="up" delay={idx * 90} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold-dark">
                  <span>{a.category}</span>
                  <span className="text-gold/40">/</span>
                  <span className="normal-case tracking-normal text-ink/40">
                    {new Date(a.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                  <span className="text-gold/40">/</span>
                  <span className="normal-case tracking-normal text-ink/40">
                    {a.readTime}
                  </span>
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ink transition-colors duration-300 group-hover:text-gold-dark">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">
                  {a.excerpt}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gold/25 bg-cream py-28 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.36em] text-gold-dark">
              Before You Ask
            </span>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Straight answers to fair questions.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={150} className="lg:col-span-8">
            <Faq items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gold/25 bg-cream py-28 text-center md:py-32">
        <Reveal variant="up" className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-4xl leading-tight text-ink md:text-6xl">
            The future favours the{" "}
            <em className="not-italic italic text-gold-dark">prepared</em>.
          </h2>
          <p className="mt-5 text-base text-ink/65 md:text-lg">
            One conversation is all it takes to find out where you stand.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 bg-forest px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-gold hover:text-forest"
          >
            Schedule a Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
