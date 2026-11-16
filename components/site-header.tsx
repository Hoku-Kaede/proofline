"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Live demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("proofline-theme");
      const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    } catch {}
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("proofline-theme", next ? "dark" : "light");
    } catch {}
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={`glass mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 ease-out md:px-6 ${
          scrolled ? "shadow-[0_20px_60px_-24px_rgba(12,46,36,0.4)]" : ""
        }`}
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label="Proofline — back to top"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-xl bg-[var(--color-forest)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2.7 4.3 5.6v5.9c0 4.7 3.2 8 7.7 9.8 4.5-1.8 7.7-5.1 7.7-9.8V5.6L12 2.7Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="m8.8 12.1 2.3 2.3 4.2-4.6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[17px] font-bold tracking-[-0.02em]">
            Proofline
            <span className="ml-2 hidden rounded-full border border-[var(--color-line)] px-2 py-0.5 text-[11px] font-semibold tracking-wide text-[var(--color-muted)] sm:inline-block">
              for SMBs
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-semibold text-[var(--color-ink-2)] transition-colors duration-150 hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)] dark:hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            className="pl-press grid size-10 place-items-center rounded-full border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
          >
            <span aria-hidden="true" className="text-[16px] leading-none">{dark ? "☀" : "☾"}</span>
          </button>
          <Link
            href="#demo"
            className="pl-press rounded-full border border-[var(--color-ink)] bg-[var(--color-surface)] px-4 py-2 text-[14px] font-bold text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
          >
            See live demo
          </Link>
          <Link
            href="#cta"
            className="pl-press inline-flex items-center gap-2 rounded-full bg-[var(--color-mint)] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(0,113,227,0.7)] hover:brightness-110"
          >
            Run free autofill
            <ArrowIcon />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            className="pl-press grid size-11 place-items-center rounded-full border border-[var(--color-line-2)] bg-[var(--color-surface)] text-[var(--color-ink)]"
          >
            <span aria-hidden="true" className="text-[18px] leading-none">{dark ? "☀" : "☾"}</span>
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open navigation menu"
            className="pl-press grid size-11 place-items-center rounded-xl border border-[var(--color-line-2)] bg-[var(--color-surface)]"
          >
          <span className="sr-only">Toggle navigation menu</span>
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-[var(--color-ink)] transition-transform duration-200 ease-out ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded bg-[var(--color-ink)] transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-[var(--color-ink)] transition-transform duration-200 ease-out ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="glass mx-auto mt-2 w-full max-w-[1200px] rounded-[24px] px-5 pb-6 pt-3 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-semibold text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="#demo"
              onClick={() => setOpen(false)}
              className="rounded-full border border-[var(--color-ink)] bg-[var(--color-surface)] px-5 py-3 text-center text-[15px] font-bold text-[var(--color-ink)]"
            >
              See live demo
            </Link>
            <Link
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-center text-[15px] font-semibold text-white"
            >
              Run free autofill
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
