export default function Marquee({
  items,
  reverse = false
}: {
  items: React.ReactNode[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-row overflow-hidden">
      <div
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
