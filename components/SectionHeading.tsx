export default function SectionHeading({
  eyebrow,
  title,
  cta
}: {
  eyebrow: string;
  title: React.ReactNode;
  cta?: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs uppercase tracking-widest2 text-gold-dark">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      </div>
      {cta}
    </div>
  );
}
