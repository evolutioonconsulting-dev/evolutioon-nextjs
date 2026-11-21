"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Variant = "left" | "up" | "scale";

const hiddenClasses: Record<Variant, string> = {
  left: "-translate-x-8 opacity-0",
  up: "translate-y-6 opacity-0",
  scale: "scale-95 opacity-0"
};

const shownClasses: Record<Variant, string> = {
  left: "translate-x-0 opacity-100",
  up: "translate-y-0 opacity-100",
  scale: "scale-100 opacity-100"
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 500,
  className = "",
  as: tagName = "div",
  ...rest
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: string;
  [key: string]: any;
}) {
  const Tag = (rest.href ? Link : tagName) as React.ElementType;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${
        visible ? shownClasses[variant] : hiddenClasses[variant]
      } ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
