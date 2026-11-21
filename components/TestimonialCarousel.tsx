"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";

export default function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <div className="mx-auto max-w-4xl text-center">
      <span className="font-serif text-8xl leading-none text-gold">&ldquo;</span>
      <blockquote className="-mt-6 font-serif text-2xl leading-snug text-ink md:text-[2rem]">
        {t.quote}
      </blockquote>
      <div className="mt-9">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
          {t.name}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-gold-dark">
          {t.org}
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          aria-label="Previous testimonial"
          onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
          className="hairline-gold border p-3 text-ink transition-colors duration-300 hover:bg-forest hover:text-gold"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                idx === i ? "bg-gold" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => setI((i + 1) % testimonials.length)}
          className="hairline-gold border p-3 text-ink transition-colors duration-300 hover:bg-forest hover:text-gold"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
