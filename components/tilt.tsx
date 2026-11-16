"use client";

import { useRef } from "react";

/**
 * Apple-style 1:1 tilt — pointer position maps directly to rotation,
 * spring-return via CSS transition on leave. Reduced-motion disables it.
 */
export function Tilt({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const r = wrap.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    inner.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
  };

  const onLeave = () => {
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={wrapRef}
      className="tilt-wrap"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div ref={innerRef} className="tilt">
        {children}
      </div>
    </div>
  );
}
