import { buildMetadata } from "@/lib/metadata";
import { pillars, site } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "About",
  description:
    "EvoluTioon Strategic Group Private Limited is a knowledge firm with one job: making people and institutions ready for what's next — through learning, leadership, foresight, innovation, and transformation.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
                About Evolutioon
              </span>
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Built for complexity. Designed for better futures.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
              {site.legalName} is a knowledge firm with one job: making people
              and institutions ready for what&apos;s next — through learning,
              leadership, foresight, innovation, and transformation, anchored
              in Industry 5.0 standards and governance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal variant="scale" duration={600} className="aspect-[4/5] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Architectural form representing strategic clarity"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div className="flex flex-col justify-center gap-12">
            <Reveal variant="up">
              <span className="font-serif text-3xl text-gold/40">01</span>
              <h2 className="mt-2 font-serif text-2xl text-ink">Our Mission</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/60">
                To enable individuals and organisations to thrive in
                complexity and shape better futures — through learning that
                transforms, leadership that adapts, and strategy that
                anticipates.
              </p>
            </Reveal>
            <Reveal variant="up" delay={120} className="border-t border-ink/10 pt-12">
              <span className="font-serif text-3xl text-gold/40">02</span>
              <h2 className="mt-2 font-serif text-2xl text-ink">Our Vision</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/60">
                A future-ready society built on learning, innovation, and
                conscious leadership — where institutions don&apos;t merely
                respond to change, they shape it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-cream-dark py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <SectionHeading eyebrow="What Defines Us" title="Six pillars. One purpose." />
          </Reveal>
          <div className="-mt-4 grid grid-cols-1 border-l border-t border-gold/30 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, idx) => (
              <Reveal
                key={p.n}
                variant="up"
                delay={idx * 90}
                className="group border-b border-r border-gold/30 bg-cream-dark p-8 transition-colors duration-500 hover:bg-forest lg:p-9"
              >
                <span className="font-serif text-3xl text-gold/50 transition-colors duration-500 group-hover:text-gold">
                  {p.n}
                </span>
                <h3 className="mt-6 font-serif text-xl text-ink transition-colors duration-500 group-hover:text-cream">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-cream/60">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal variant="left">
              <SectionHeading
                eyebrow="International Collaborations"
                title="Global by practice, not just by aspiration."
              />
            </Reveal>
            <Reveal variant="up" delay={120} className="-mt-8">
              <p className="text-sm leading-relaxed text-ink/60">
                EvoluTioon delivered leadership and capability interventions
                for a South African manufacturing company in collaboration
                with <strong className="text-ink">Henley Business School</strong> —
                pairing institutional academic rigour with on-ground execution
                across geographies.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                These engagements reflect how we work internationally: through
                knowledge partnerships with globally respected institutions,
                applied to real operating environments — from manufacturing
                floors to boardrooms.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["South Africa · Manufacturing", "Henley Business School", "Knowledge Partnership"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-gold/30 px-3 py-1.5 text-xs uppercase tracking-wide text-ink/60"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={150} duration={600} className="aspect-[4/3] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Cross-border collaboration meeting"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
