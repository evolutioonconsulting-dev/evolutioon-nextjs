import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { articles } from "@/lib/data";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Featured articles and thought leadership across the future of work, leadership, innovation, geopolitics, sustainability, and emerging technologies.",
  path: "/insights"
});

export default function InsightsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
                Insights
              </span>
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Thinking ahead, written down.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
              Featured articles and thought leadership across the future of
              work, leadership, innovation, geopolitics, sustainability, and
              emerging technologies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal
          href={`/insights/${featured.slug}`}
          variant="scale"
          duration={600}
          className="group mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest2 text-gold-dark">
              {featured.category} · {featured.readTime}
            </div>
            <h2 className="mt-3 font-serif text-3xl text-ink group-hover:text-gold-dark sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/60">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-block border-b border-ink/40 text-xs uppercase tracking-widest2 text-ink group-hover:border-gold group-hover:text-gold-dark">
              Read Article
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {rest.map((a, idx) => (
            <Reveal key={a.slug} href={`/insights/${a.slug}`} variant="up" delay={idx * 90} className="group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest2 text-gold-dark">
                {a.category} · {a.readTime}
              </div>
              <h3 className="mt-2 font-serif text-lg text-ink group-hover:text-gold-dark">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {a.excerpt}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
