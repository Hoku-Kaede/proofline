"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  headcount: string;
  monthly: number;
  yearly: number;
  blurb: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    headcount: "1–25 people",
    monthly: 149,
    yearly: 119,
    blurb: "For your first SOC 2 push and one enterprise deal.",
    cta: "Start free autofill",
    features: [
      "1 framework (SOC 2)",
      "Unlimited questionnaires",
      "Policy generator — 12 templates",
      "Evidence reminders + tracker",
      "Vendor portal (1 link)",
      "Email support",
    ],
  },
  {
    name: "Growth",
    headcount: "26–150 people",
    monthly: 399,
    yearly: 319,
    blurb: "For teams living in security reviews year-round.",
    cta: "Start free autofill",
    featured: true,
    features: [
      "Up to 4 frameworks (SOC 2 · ISO · GDPR · HIPAA)",
      "Everything in Starter",
      "AI drafts with citations + gap flags",
      "Vendor risk questionnaires (inbound)",
      "Slack + SSO + audit log",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    headcount: "151–500 people",
    monthly: 899,
    yearly: 719,
    blurb: "For multi-entity and regulated customers.",
    cta: "Talk to us",
    features: [
      "Everything in Growth",
      "Multi-entity + custom data residency",
      "Custom policy drafting",
      "Security review SLA + dedicated CSM",
      "DPA / BAA workflows",
      "Annual auditor handoff pack",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className={`text-[14px] font-semibold ${!yearly ? "text-[var(--color-ink)]" : "text-[var(--color-faint)]"}`}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={yearly}
          aria-label="Toggle yearly billing"
          onClick={() => setYearly((v) => !v)}
          className="pl-press relative h-8 w-14 rounded-full bg-[var(--color-forest)]"
        >
          <span
            aria-hidden="true"
            className={`absolute top-1 size-6 rounded-full bg-[var(--color-surface)] shadow transition-transform duration-200 ease-out ${
              yearly ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`text-[14px] font-semibold ${yearly ? "text-[var(--color-ink)]" : "text-[var(--color-faint)]"}`}>
          Yearly
          <span className="ml-2 rounded-full bg-[var(--color-lime)] px-2 py-0.5 text-[11px] font-bold text-[var(--color-forest)]">
            Save 20%
          </span>
        </span>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {TIERS.map((t) => (
          <article
            key={t.name}
            aria-label={`${t.name} plan`}
            className={`pl-static relative flex flex-col rounded-[24px] border p-6 md:p-7 ${
              t.featured
                ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-white shadow-[0_24px_60px_-24px_rgba(12,46,36,0.7)]"
                : "border-[var(--color-line)] bg-[var(--color-surface)]"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-lime)] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-forest)]">
                Most popular
              </span>
            )}
            <h3 className="text-[15px] font-bold tracking-tight">{t.name}</h3>
            <p className={`mt-1 text-[13px] ${t.featured ? "text-white/70" : "text-[var(--color-muted)]"}`}>
              {t.headcount}
            </p>
            <p className="mt-5 flex items-baseline gap-1.5">
              <span className="text-[42px] font-bold tabular-nums tracking-[-0.03em] leading-none">
                ${yearly ? t.yearly : t.monthly}
              </span>
              <span className={`text-[13px] ${t.featured ? "text-white/70" : "text-[var(--color-faint)]"}`}>
                / mo
              </span>
            </p>
            <p className={`mt-2 text-[12px] ${t.featured ? "text-white/60" : "text-[var(--color-faint)]"}`}>
              {yearly ? "Billed annually." : "Billed monthly. Cancel anytime."}
            </p>
            <p className={`mt-3 text-[14px] leading-relaxed ${t.featured ? "text-white/85" : "text-[var(--color-muted)]"}`}>
              {t.blurb}
            </p>
            <a
              href="#cta"
              className={`pl-press mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-[14px] font-semibold ${
                t.featured
                  ? "bg-[var(--color-lime)] text-[var(--color-forest)] hover:brightness-105"
                  : "border border-[var(--color-line-2)] bg-[var(--color-surface-2)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
              }`}
            >
              {t.cta}
            </a>
            <ul className="mt-7 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                  <span
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                      t.featured ? "bg-white/15 text-[var(--color-lime)]" : "bg-[var(--color-mint-soft)] text-[var(--color-mint)]"
                    }`}
                  >
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-[13px] text-[var(--color-muted)]">
        Compared to <strong>$10k+/yr</strong> for legacy compliance suites — plus consultant fees per questionnaire.
      </p>
    </div>
  );
}



