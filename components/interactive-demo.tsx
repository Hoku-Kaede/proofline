"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  FileText,
  Link2,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Framework = "soc2" | "iso" | "gdpr" | "hipaa";

type Q = {
  q: string;
  draft: string;
  cites: string[];
  confidence: number;
  gap?: string;
};

const DATA: Record<Framework, { label: string; note: string; rows: Q[] }> = {
  soc2: {
    label: "SOC 2",
    note: "Most requested by B2B SaaS buyers.",
    rows: [
      {
        q: "Do you encrypt data at rest and in transit?",
        draft:
          "Yes. Data is encrypted at rest with AES-256 and in transit with TLS 1.3. Keys are managed via our KMS with 90-day rotation and least-privilege access.",
        cites: ["Access & Encryption Policy v3", "Cloud Config — KMS"],
        confidence: 98,
      },
      {
        q: "How do you handle employee access reviews?",
        draft:
          "Access is provisioned via SSO with MFA. Managers review access quarterly; unused accounts are auto-flagged after 60 days and removed within 7 days.",
        cites: ["Access Control Policy", "Quarterly Review Log"],
        confidence: 94,
      },
      {
        q: "Describe your incident response plan.",
        draft:
          "On detection, the on-call engineer opens a Sev ticket within 15 minutes, pages the security lead, and notifies affected customers within 72 hours per policy.",
        cites: ["Incident Response Playbook"],
        confidence: 89,
        gap: "Add your pen-test date to strengthen this answer.",
      },
      {
        q: "How are backups tested?",
        draft:
          "Backups run daily with 35-day retention. We run a restore drill monthly and log the result; last drill: Oct 2026 — passed.",
        cites: ["Backup & Restore Procedure"],
        confidence: 96,
      },
    ],
  },
  iso: {
    label: "ISO 27001",
    note: "Global enterprise standard.",
    rows: [
      {
        q: "What is your risk assessment process?",
        draft:
          "We assess risks quarterly against assets, threats and vulnerabilities, score impact × likelihood, and track treatments in the risk register owned by leadership.",
        cites: ["Risk Assessment Method v2", "Risk Register 2026"],
        confidence: 92,
      },
      {
        q: "Do you have a documented supplier security policy?",
        draft:
          "Yes. Vendors are tiered by data access, security reviewed annually, and required to complete a lightweight assessment before contract signature.",
        cites: ["Supplier Security Policy"],
        confidence: 90,
      },
      {
        q: "How do you manage secure development?",
        draft:
          "All changes require PR review, SAST in CI, and dependency scanning. Secrets are blocked pre-commit; critical findings block merge.",
        cites: ["Secure SDLC Standard"],
        confidence: 95,
        gap: "Upload your last SAST report to cite it here.",
      },
    ],
  },
  gdpr: {
    label: "GDPR",
    note: "For EU enterprise customers.",
    rows: [
      {
        q: "What is your lawful basis for processing?",
        draft:
          "We process on contract performance and legitimate interest, documented per data category in our Records of Processing Activities (RoPA).",
        cites: ["RoPA — RoPA-2026", "Privacy Notice v4"],
        confidence: 91,
      },
      {
        q: "How do you handle data subject requests?",
        draft:
          "DSARs can be submitted via our privacy portal. Identity is verified within 5 days and requests fulfilled within 30 days, with monthly reporting.",
        cites: ["Privacy Operations SOP"],
        confidence: 93,
      },
      {
        q: "Where is personal data stored?",
        draft:
          "Primary storage is EU (Frankfurt) with no cross-border transfer except SCC-covered subprocessors listed in our DPA addendum.",
        cites: ["Data Flow Map", "Subprocessor List"],
        confidence: 88,
      },
    ],
  },
  hipaa: {
    label: "HIPAA",
    note: "For healthcare-adjacent products.",
    rows: [
      {
        q: "Do you sign BAAs with subprocessors?",
        draft:
          "Yes. All subprocessors with access to ePHI sign our BAA template before onboarding, and are recertified annually. Current list is in the vendor portal.",
        cites: ["BAA Template v2026", "Vendor Register"],
        confidence: 90,
      },
      {
        q: "How is ePHI access restricted?",
        draft:
          "ePHI access is role-based, logged, and reviewed monthly. Workforce training is completed at hire and refreshed annually with attestation tracking.",
        cites: ["Workforce Training Log"],
        confidence: 94,
        gap: "Flag: 2 staff are 20 days overdue on training.",
      },
    ],
  },
};

const FRAMEWORKS: Framework[] = ["soc2", "iso", "gdpr", "hipaa"];

export function InteractiveDemo() {
  const [framework, setFramework] = useState<Framework>("soc2");
  const [visibleCount, setVisibleCount] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [done, setDone] = useState(false);

  const rows = useMemo(() => DATA[framework].rows, [framework]);
  const progress = rows.length ? Math.round((visibleCount / rows.length) * 100) : 0;

  useEffect(() => {
    setVisibleCount(0);
    setDone(false);
    setGenerating(false);
  }, [framework]);

  const runAuto = () => {
    if (generating) return;
    setDone(false);
    setGenerating(true);
    setVisibleCount(0);
    // Progressive reveal — staggered 350ms per row (marketing tier, explanation purpose)
    rows.forEach((_, i) => {
      window.setTimeout(() => {
        setVisibleCount(i + 1);
        if (i === rows.length - 1) {
          window.setTimeout(() => {
            setGenerating(false);
            setDone(true);
          }, 250);
        }
      }, 350 * (i + 1));
    });
  };

  const reset = () => {
    setVisibleCount(0);
    setDone(false);
    setGenerating(false);
  };

  return (
    <div className="overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_40px_90px_-32px_rgba(12,46,36,0.45),inset_0_1px_0_rgba(255,255,255,0.9)]">
      {/* window chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-[var(--color-line)] bg-[var(--color-surface-2)] px-4 py-3 md:px-6">
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="flex gap-1.5">
            <i className="size-2.5 rounded-full bg-[#e8b4a8]" />
            <i className="size-2.5 rounded-full bg-[#e9d08a]" />
            <i className="size-2.5 rounded-full bg-[#a8d8bc]" />
          </span>
          <span className="text-[12px] font-medium text-[var(--color-muted)]">
            proofline.app · questionnaire / Acme Corp vendor review (212 questions)
          </span>
        </div>
        <span className="hidden items-center gap-2 rounded-full bg-[var(--color-mint-soft)] text-[var(--color-mint)] sm:inline-flex">
          <ShieldCheck className="size-3.5" aria-hidden="true" />
          RAG over your docs
        </span>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr]">
        {/* left rail */}
        <div className="border-b border-[var(--color-line)] bg-[var(--color-surface-2)] p-4 lg:border-b-0 lg:border-r lg:p-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
            Framework
          </p>
          <div role="group" aria-label="Choose framework" className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
            {FRAMEWORKS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={framework === f}
                onClick={() => setFramework(f)}
                className={`pl-press rounded-xl border px-3.5 py-2.5 text-left text-[14px] font-semibold transition-colors duration-150 ${
                  framework === f
                    ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-white"
                    : "border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:border-[var(--color-line-2)] hover:text-[var(--color-ink)]"
                }`}
              >
                {DATA[f].label}
                <span className={`block text-[12px] font-normal ${framework === f ? "text-white/70" : "text-[var(--color-faint)]"}`}>
                  {DATA[f].note}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Readiness
            </p>
            <p className="mt-1 text-[28px] font-bold tabular-nums tracking-tight" aria-live="polite">
              {visibleCount === 0 ? "—" : `${Math.min(94, 42 + visibleCount * 13)}%`}
            </p>
            <div
              role="progressbar"
              aria-valuenow={visibleCount === 0 ? 42 : Math.min(94, 42 + visibleCount * 13)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="SOC 2 readiness estimate"
              className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--color-paper-2)]"
            >
              <div
                className="h-full rounded-full bg-[var(--color-mint)] transition-[width] duration-500 ease-out"
                style={{ width: `${visibleCount === 0 ? 42 : Math.min(94, 42 + visibleCount * 13)}%` }}
              />
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-[var(--color-faint)]">
              Sample estimate. Your score updates as evidence is added.
            </p>
          </div>

          <div className="mt-4">
            {visibleCount === 0 && !generating ? (
              <button
                type="button"
                onClick={runAuto}
                className="pl-press inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-forest)] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[var(--color-forest-2)]"
              >
                <Sparkles className="size-4" aria-hidden="true" />
                Draft answers with AI
              </button>
            ) : (
              <button
                type="button"
                onClick={reset}
                className="pl-press inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-line-2)] bg-[var(--color-surface)] px-5 py-3 text-[14px] font-semibold hover:border-[var(--color-ink)]"
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                {generating ? "Drafting…" : "Run again"}
              </button>
            )}
            <p className="mt-3 text-center text-[12px] leading-relaxed text-[var(--color-faint)]">
              Free trial hook — no card. 1 questionnaire, uncapped.
            </p>
          </div>
        </div>

        {/* main */}
        <div className="p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-[17px] font-bold tracking-tight">
                Answers drafted from your policies
              </h3>
              <p className="text-[13px] text-[var(--color-muted)]">
                Every draft cites the exact doc it came from. You approve before sending.
              </p>
            </div>
            <p className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[12px] font-semibold tabular-nums text-[var(--color-muted)]" aria-live="polite">
              {visibleCount}/{rows.length} drafted · {progress}%
            </p>
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--color-paper-2)]" aria-hidden="true">
            <div
              className="h-full rounded-full bg-[var(--color-forest)] transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div aria-live="polite" className="mt-5 space-y-3">
            {visibleCount === 0 && (
              <div className="rounded-2xl border border-dashed border-[var(--color-line-2)] bg-[var(--color-surface-2)] px-5 py-10 text-center">
                <p className="text-[15px] font-semibold">No answers yet</p>
                <p className="mx-auto mt-1 max-w-[42ch] text-[13px] leading-relaxed text-[var(--color-muted)]">
                  Upload your policies, then hit “Draft answers with AI”. Proofline reads
                  your files and writes review-ready responses with citations.
                </p>
                <button
                  type="button"
                  onClick={runAuto}
                  className="pl-press mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-forest)] px-5 py-2.5 text-[14px] font-semibold text-white"
                >
                  Run the demo
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            )}

            {rows.slice(0, visibleCount).map((r, i) => (
              <article
                key={`${framework}-${i}`}
                className="pl-row-in rounded-[20px] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 shadow-[0_12px_32px_-18px_rgba(12,46,36,0.3)] md:p-5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[var(--color-mint-soft)] text-[var(--color-mint)] tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold leading-snug">{r.q}</p>
                    <p className="pretty mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-ink-2)]">
                      {r.draft}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {r.cites.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-muted)]"
                        >
                          <FileText className="size-3" aria-hidden="true" />
                          {c}
                        </span>
                      ))}
                      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-mint-soft)] text-[var(--color-mint)] tabular-nums">
                        <Check className="size-3" aria-hidden="true" />
                        {r.confidence}% match
                      </span>
                      {r.gap && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-amber-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--color-amber)]">
                          <AlertTriangle className="size-3" aria-hidden="true" />
                          {r.gap}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {done && (
            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-[var(--color-mint-soft)] bg-[var(--color-mint-soft)]/50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13.5px] leading-relaxed text-[var(--color-ink)]">
                <strong>Review-ready.</strong> 1 gap flagged — assign an owner, then export
                to Excel or send via vendor portal. No email thread required.
              </p>
              <a
                href="#cta"
                className="pl-press inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--color-forest)] px-5 py-2.5 text-[13px] font-semibold text-white"
              >
                <Link2 className="size-4" aria-hidden="true" />
                Try on your questionnaire
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



