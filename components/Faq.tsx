"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-gold/30">
      {items.map((item, i) => (
        <div key={item.q} className="border-b border-gold/30">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="group flex w-full items-center justify-between gap-6 py-6 text-left"
          >
            <span className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-gold-dark md:text-2xl">
              {item.q}
            </span>
            <span
              className={`shrink-0 text-2xl leading-none text-gold transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-ink/70 md:text-base">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
