import { buildMetadata } from "@/lib/metadata";
import { events } from "@/lib/data";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Events",
  description:
    "Masterclasses, foresight labs, innovation sprints, and faculty development programs — designed for leaders and institutions preparing for the future.",
  path: "/events"
});

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString("en-US", { day: "2-digit" }),
    month: d.toLocaleDateString("en-US", { month: "short", year: "numeric" }).toUpperCase()
  };
}

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <section className="bg-forest-gradient pb-20 pt-36 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="left">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
                Events
              </span>
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">
              Learning experiences, live and in person.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
              Masterclasses, foresight labs, innovation sprints, and faculty
              development programs — designed for leaders and institutions
              preparing for the future.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal variant="left" className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-dark">
          <span>📅</span> Upcoming
        </Reveal>
        <div className="divide-y divide-gold/20 border-t border-gold/25">
          {upcoming.map((e, idx) => {
            const { day, month } = formatDate(e.date);
            return (
              <Reveal
                key={e.slug}
                variant="up"
                delay={idx * 90}
                className="grid grid-cols-1 items-center gap-6 py-10 sm:grid-cols-[100px_1fr_auto]"
              >
                <div>
                  <div className="font-serif text-3xl text-ink">{day}</div>
                  <div className="text-xs uppercase tracking-widest2 text-ink/50">
                    {month}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest2 text-gold-dark">
                    {e.category}
                  </div>
                  <h3 className="mt-1 font-serif text-xl text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                    {e.desc}
                  </p>
                  <div className="mt-2 text-xs text-ink/50">📍 {e.location}</div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-forest px-6 py-3 text-xs uppercase tracking-widest2 text-cream hover:bg-forest-light"
                >
                  Register Interest →
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="left" className="mb-6 mt-20 text-xs uppercase tracking-widest2 text-ink/40">
          Past Engagements
        </Reveal>
        <div className="divide-y divide-gold/20 border-t border-gold/25">
          {past.map((e, idx) => {
            const { day, month } = formatDate(e.date);
            return (
              <Reveal
                key={e.slug}
                variant="up"
                delay={idx * 90}
                className="grid grid-cols-1 items-center gap-6 py-10 opacity-70 sm:grid-cols-[100px_1fr_auto]"
              >
                <div>
                  <div className="font-serif text-3xl text-ink">{day}</div>
                  <div className="text-xs uppercase tracking-widest2 text-ink/50">
                    {month}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest2 text-gold-dark">
                    {e.category}
                  </div>
                  <h3 className="mt-1 font-serif text-xl text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">
                    {e.desc}
                  </p>
                  <div className="mt-2 text-xs text-ink/50">📍 {e.location}</div>
                </div>
                <span className="inline-flex items-center justify-center border border-ink/15 px-6 py-3 text-xs uppercase tracking-widest2 text-ink/40">
                  Completed
                </span>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
