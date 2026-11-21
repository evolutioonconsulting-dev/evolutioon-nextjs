import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-28 text-center">
      <span className="font-serif text-6xl text-gold/40">404</span>
      <h1 className="mt-4 font-serif text-3xl text-ink">
        This page hasn&apos;t been written yet.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
        The page you&apos;re looking for may have moved, or never existed.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-forest px-7 py-3.5 text-xs uppercase tracking-widest2 text-cream hover:bg-forest-light"
      >
        Back to Home →
      </Link>
    </section>
  );
}
