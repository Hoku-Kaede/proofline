"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function CtaForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p role="status" className="mx-auto mt-8 flex max-w-[520px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-4 text-[14px] font-semibold text-white backdrop-blur">
        <Check className="size-4" aria-hidden="true" />
        You&rsquo;re on the list — check your inbox for the autofill link.
      </p>
    );
  }

  return (
    <form
      className="mx-auto mt-8 flex max-w-[520px] flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      aria-label="Get started with Proofline"
    >
      <label htmlFor="cta-email" className="sr-only">
        Work email
      </label>
      <input
        id="cta-email"
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        placeholder="you@company.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-[15px] text-white placeholder:text-white/45 outline-none backdrop-blur transition-colors focus:border-[var(--color-lime)] focus:bg-white/15"
      />
      <button
        type="submit"
        className="pl-press on-dark inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-lime)] px-6 text-[15px] font-bold text-[var(--color-forest)] hover:brightness-105"
      >
        Start free autofill
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}

