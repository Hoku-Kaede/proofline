"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

/**
 * Scroll reveal — transform + opacity only (animate skill).
 * Purely presentational: content is readable without JS / motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { ["--pl-delay" as string]: `${delay}ms` };
  const Tag = as as "div";

  return (
    <Tag
      // @ts-expect-error dynamic tag ref
      ref={ref}
      style={style}
      className={`pl-reveal ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
