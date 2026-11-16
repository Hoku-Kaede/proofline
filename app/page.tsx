import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Check,
  FileText,
  Link2,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { InteractiveDemo } from "@/components/interactive-demo";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaForm } from "@/components/cta-form";
import { Reveal } from "@/components/reveal";

export default function Page() {
  return (
    <div id="top" className="pb-0">
      <Hero />
      <Marquee />
      <Pain />
      <Product />
      <How />
      <Demo />
      <Comparison />
      <PricingSection />
      <Proof />
      <Trust />
      <FaqSection />
      <Cta />
    </div>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-[var(--color-forest)] text-white">
      {/* Flat black — no gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-end justify-between border-b border-white/10 px-5 pb-4 md:px-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">Trust evidence for enterprise deals</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">EST. 2026</span>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-[132px] md:px-8 md:pb-28 md:pt-[156px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex flex-wrap items-center gap-2">
              <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold tracking-wide text-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                <span className="size-1.5 rounded-full bg-[var(--color-lime)]" aria-hidden="true" />
                SOC 2 · ISO 27001 · GDPR · HIPAA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-black shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]">
                ✓ Free autofill trial — no card
              </span>
            </p>

            <Reveal delay={60}>
              <h1
                id="hero-heading"
                className="display-xl mt-6 text-[clamp(3rem,7vw,5.6rem)]"
              >
                Prove you&rsquo;re secure.
                <br />
                <span className="text-[#64d2ff]">Win the deal.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="pretty mt-6 max-w-[58ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
                Enterprise buyers block deals over security reviews. Proofline drafts
                200+ question questionnaires from your own policies in minutes — with
                citations, gap flags and an audit trail. Built for small teams, priced
                for startups.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#demo"
                  className="group pl-press on-dark inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-bold tracking-[-0.01em] text-black shadow-[0_20px_40px_-16px_rgba(0,0,0,0.55)] hover:bg-white/90"
                >
                  Run your first autofill free
                  <ArrowRight className="btn-arrow size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#how"
                  className="group pl-press on-dark inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-semibold text-white hover:border-white/60 hover:bg-white/10"
                >
                  See how it works
                  <span aria-hidden="true" className="text-white/60 transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
                </Link>
              </div>
              <p className="mt-5 text-[13px] text-white/75">
                1 questionnaire free · Uncapped · Export to Excel or send via vendor portal
              </p>
            </Reveal>

            <dl className="mt-10 grid max-w-[560px] grid-cols-3 gap-4 border-t border-white/12 pt-6">
              <HeroStat value="11 days → 3 hrs" label="Avg. review time" />
              <HeroStat value="2,400+" label="Questionnaires drafted" />
              <HeroStat value="$9k" label="Saved vs. consultant" />
            </dl>
          </div>

          <Reveal delay={160}>
            <HeroMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="text-[18px] font-bold tabular-nums tracking-tight md:text-[20px]">{value}</dd>
      <dd className="mt-1 text-[12px] leading-snug text-white/75">{label}</dd>
    </div>
  );
}

function HeroMock() {
  return (
    <div className="relative">
    <div className="overflow-hidden rounded-[28px] border border-white/20 bg-[var(--color-surface)] text-[var(--color-ink)] shadow-[0_28px_60px_-32px_rgba(0,0,0,0.55)]">
      <div className="relative z-[2] p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
            Acme Corp · Vendor review
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-mint-soft)] text-[var(--color-mint)]">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            212 questions
          </span>
        </div>

        <div className="mt-4 space-y-3">
          <MockRow
            n="14"
            q="Do you enforce MFA for all employees?"
            a="Yes — SSO with hardware-key MFA for admin roles, TOTP for all staff. Offboarding completes within 24 hours."
            cite="Access Policy v3"
            conf="98%"
            tone="ok"
          />
          <MockRow
            n="87"
            q="How are subprocessors assessed?"
            a="Tiered by data access, reviewed annually. All with ePHI access sign our BAA before onboarding."
            cite="Supplier Policy"
            conf="91%"
            tone="ok"
          />
          <MockRow
            n="163"
            q="When was your last penetration test?"
            a="Draft from your docs: pen-test report dated Jun 2026 — upload to confirm."
            cite="Gap flagged"
            conf="Gap"
            tone="gap"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--color-line)] pt-4">
          <span className="rounded-full bg-[var(--color-forest)] px-3.5 py-1.5 text-[12px] font-semibold text-white">
            198 drafted
          </span>
          <span className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-[12px] font-semibold text-[var(--color-muted)]">
            11 need review
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-mint)]">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Ready to send
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}

function MockRow({
  n,
  q,
  a,
  cite,
  conf,
  tone,
}: {
  n: string;
  q: string;
  a: string;
  cite: string;
  conf: string;
  tone: "ok" | "gap";
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-2)] p-4">
      <p className="flex items-start gap-2 text-[13.5px] font-semibold leading-snug">
        <span className="mt-0.5 rounded-md bg-[var(--color-forest)] px-1.5 py-0.5 text-[11px] font-bold text-white tabular-nums">
          Q{n}
        </span>
        {q}
      </p>
      <p className="pretty mt-2 text-[13px] leading-relaxed text-[var(--color-ink-2)]">{a}</p>
      <p className="mt-2.5 flex flex-wrap items-center gap-2 text-[11.5px]">
        <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-2 py-1 font-medium text-[var(--color-muted)]">
          <FileText className="size-3" aria-hidden="true" />
          {cite}
        </span>
        <span
          className={`rounded-full px-2 py-1 font-bold tabular-nums ${
            tone === "ok"
              ? "bg-[var(--color-mint-soft)] text-[var(--color-mint)]"
              : "bg-[var(--color-amber-soft)] text-[var(--color-amber)]"
          }`}
        >
          {conf}
        </span>
      </p>
    </div>
  );
}

/* ================= MARQUEE ================= */

const LOGOS = [
  "Northbeam",
  "Lattice & Co.",
  "Arbor Health",
  "FinchPay",
  "Fieldnotes",
  "Commonbase",
  "Harborline",
  "Vantage AI",
];

function Marquee() {
  return (
    <section aria-label="Trusted by operators" className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-7">
      <div className="relative overflow-hidden">
        <div className="pl-marquee-track flex w-max items-center gap-10 pr-10">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-[14px] font-bold tracking-tight text-[var(--color-faint)]"
              aria-hidden={i >= LOGOS.length}
            >
              {name}
              <span className="ml-10 text-[var(--color-line-2)]" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">Sample customer names for illustration.</p>
    </section>
  );
}

/* ================= PAIN ================= */

function Pain() {
  return (
    <section aria-labelledby="pain-heading" className="bg-[var(--color-paper)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
            The problem
          </p>
          <h2 id="pain-heading" className="display-balance mt-3 max-w-[22ch] display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
            Security reviews don&rsquo;t kill product.{" "}
            <em className="italic text-[var(--color-mint)]">They kill deals.</em>
          </h2>
          <p className="pretty mt-4 max-w-[64ch] text-[15.5px] text-[var(--color-muted)] md:text-[16px]">
            You win the demo. Then procurement asks for proof — SOC 2, insurance, a
            200-question form, evidence screenshots. Weeks pass. The champion goes dark.
            Legacy tools cost more than your first hire.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <PainCard
            metric="73%"
            label="of B2B deals stall in security review"
            body="Every extra week is a job at risk, a renewal slipping, a founder context-switching from product to paperwork."
          />
          <PainCard
            metric="200+"
            label="questions in the average questionnaire"
            body="Copy-paste from last time, hunting through Drive folders, guessing at policy versions. Then doing it again for the next buyer."
          />
          <PainCard
            metric="$10k+ /yr"
            label="for legacy compliance suites"
            body="Vanta, Drata and consultants solve this for larger companies. Small teams are priced out — until now."
          />
        </div>
      </div>
    </section>
  );
}

function PainCard({ metric, label, body }: { metric: string; label: string; body: string }) {
  return (
    <Reveal className="h-full">
      <article className="pl-static h-full rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-7">
        <p className="text-[40px] font-bold tabular-nums tracking-[-0.03em] leading-none">{metric}</p>
        <p className="mt-3 text-[15px] font-semibold leading-snug">{label}</p>
        <p className="pretty mt-2 text-[13.5px] leading-relaxed text-[var(--color-muted)]">{body}</p>
      </article>
    </Reveal>
  );
}

/* ================= PRODUCT BENTO ================= */

function Product() {
  return (
    <section id="product" aria-labelledby="product-heading" className="border-y border-[var(--color-line)] bg-[var(--color-surface-2)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
                One workspace, four superpowers
              </p>
              <h2 id="product-heading" className="display-balance mt-3 max-w-[20ch] display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
                Everything between demo and signature, handled.
              </h2>
            </div>
            <p className="pretty max-w-[44ch] text-[15px] text-[var(--color-muted)]">
              Start with the free autofill hook. Grow into policies, evidence and a
              trust portal your buyers actually open.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0} className="lg:col-span-2">
            <FeatureCard
              icon={<Sparkles className="size-5" aria-hidden="true" />}
              title="Questionnaire autofill"
              body="Upload the buyer's form. AI drafts every answer from your policies — with citations, confidence and human approval. Export or send in one click."
              footer="212 questions → 3 hours, not 11 days"
              accent
            />
          </Reveal>
          <Reveal delay={60}>
            <FeatureCard
              icon={<FileText className="size-5" aria-hidden="true" />}
              title="Policy generator"
              body="Access control, incident response, retention — tailored from a 5-minute form. Versioned and auditor-ready."
              footer="12 templates included"
            />
          </Reveal>
          <Reveal delay={120}>
            <FeatureCard
              icon={<BellRing className="size-5" aria-hidden="true" />}
              title="Evidence tracker"
              body="Scheduled reminders, owners and due dates for access reviews, screenshots and drills. Readiness always visible."
              footer="Never miss an audit date"
            />
          </Reveal>
          <Reveal delay={180} className="lg:col-span-2">
            <FeatureCard
              icon={<Link2 className="size-5" aria-hidden="true" />}
              title="Vendor portal"
              body="One link replaces the email thread. Customers check your status, download reports and verify controls without chasing you."
              footer="trust.yourcompany.com/proofline"
            />
          </Reveal>
          <Reveal delay={240} className="lg:col-span-2">
            <div className="h-full rounded-[24px] border border-[var(--color-line)] bg-[var(--color-forest)] p-6 text-white md:p-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-lime)]">
                Built on your stack
              </p>
              <h3 className="mt-3 text-[22px] font-bold tracking-tight">
                Document parsing + retrieval over your files.
              </h3>
              <p className="pretty mt-2 max-w-[52ch] text-[14px] leading-relaxed text-white/70">
                Proofline runs on Next.js and Postgres. Your documents stay scoped to
                your workspace, encrypted, exportable and deletable at any time.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((f) => (
                  <span key={f} className="rounded-full border border-white/20 px-3 py-1 text-[12px] font-semibold text-white/85">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  footer,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  footer: string;
  accent?: boolean;
}) {
  return (
    <article
      className={`pl-static flex h-full flex-col rounded-[28px] border p-6 md:p-7 ${
        accent
          ? "border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_28px_70px_-28px_rgba(12,46,36,0.4),inset_0_1px_0_rgba(255,255,255,0.8)]"
          : "border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_16px_44px_-24px_rgba(12,46,36,0.25)]"
      }`}
    >
      <span className="grid size-12 place-items-center rounded-[18px] bg-[var(--color-forest)] text-[var(--color-lime)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_24px_-12px_rgba(12,46,36,0.6)]">
        {icon}
      </span>
      <h3 className="mt-5 text-[18px] font-bold tracking-tight">{title}</h3>
      <p className="pretty mt-2 flex-1 text-[14px] leading-relaxed text-[var(--color-muted)]">{body}</p>
      <p className="mt-5 border-t border-[var(--color-line)] pt-4 text-[12.5px] font-semibold text-[var(--color-forest)] tabular-nums">
        {footer}
      </p>
    </article>
  );
}

/* ================= HOW ================= */

function How() {
  return (
    <section id="how" aria-labelledby="how-heading" className="bg-[var(--color-paper)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
            How it works
          </p>
          <h2 id="how-heading" className="display-balance mt-3 max-w-[22ch] display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
            From blocked deal to send-ready in one afternoon.
          </h2>
        </Reveal>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          <Step
            n="01"
            icon={<Upload className="size-5" aria-hidden="true" />}
            title="Upload your docs"
            body="Drop in policies, SOPs, screenshots and last audit notes. Proofline indexes them privately — numbers game, no training on your data."
          />
          <Step
            n="02"
            icon={<Sparkles className="size-5" aria-hidden="true" />}
            title="AI drafts every answer"
            body="Upload the buyer's questionnaire. Each answer is written from your files, cited to the source, scored for confidence and flagged where evidence is missing."
          />
          <Step
            n="03"
            icon={<Check className="size-5" aria-hidden="true" />}
            title="Review, assign, send"
            body="Approve in your browser. Gaps become owned tasks with due dates. Export to Excel or share the vendor portal link — done."
          />
        </ol>

        <div id="frameworks" className="mt-14 scroll-mt-28">
          <Reveal>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              One evidence base, four frameworks
            </h3>
            <p className="pretty mt-2 max-w-[62ch] text-[14.5px] text-[var(--color-muted)]">
              Turn on SOC 2 today. When the next buyer asks for ISO, GDPR or HIPAA, your
              controls already map — no re-entry.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Framework label="SOC 2" desc="Start here — most requested by SaaS buyers." readiness={94} starter />
            <Framework label="ISO 27001" desc="Global enterprise standard, same controls." readiness={88} />
            <Framework label="GDPR" desc="For EU customers and data processing." readiness={86} />
            <Framework label="HIPAA" desc="For healthcare-adjacent products." readiness={82} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  icon,
  title,
  body,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Reveal>
      <li className="h-full rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-7">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-bold tabular-nums text-[var(--color-faint)]">{n}</span>
          <span className="grid size-10 place-items-center rounded-xl bg-[var(--color-paper-2)] text-[var(--color-forest)]">
            {icon}
          </span>
        </div>
        <h3 className="mt-5 text-[18px] font-bold tracking-tight">{title}</h3>
        <p className="pretty mt-2 text-[14px] leading-relaxed text-[var(--color-muted)]">{body}</p>
      </li>
    </Reveal>
  );
}

function Framework({
  label,
  desc,
  readiness,
  starter,
}: {
  label: string;
  desc: string;
  readiness: number;
  starter?: boolean;
}) {
  return (
    <Reveal>
      <article className="pl-static h-full rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-[16px] font-bold tracking-tight">{label}</h4>
          {starter && (
            <span className="rounded-full bg-[var(--color-lime)] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-[var(--color-forest)]">
              Start here
            </span>
          )}
        </div>
        <p className="pretty mt-1.5 text-[13px] leading-relaxed text-[var(--color-muted)]">{desc}</p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-[12px] font-semibold">
            <span className="text-[var(--color-muted)]">Readiness</span>
            <span className="tabular-nums">{readiness}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--color-paper-2)]" role="img" aria-label={`${label} readiness ${readiness} percent`}>
            <div className="h-full rounded-full bg-[var(--color-mint)]" style={{ width: `${readiness}%` }} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ================= DEMO ================= */

function Demo() {
  return (
    <section id="demo" aria-labelledby="demo-heading" className="border-y border-[var(--color-line)] bg-[var(--color-surface-2)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-[680px] text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
              Live demo — try it
            </p>
            <h2 id="demo-heading" className="display-balance mt-3 display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
              This is the autofill. <em className="italic text-[var(--color-mint)]">Touch it.</em>
            </h2>
            <p className="pretty mx-auto mt-4 max-w-[56ch] text-[15px] text-[var(--color-muted)] md:text-[16px]">
              Pick a framework and draft answers. Every draft shows its source — the
              same citation system used when you send to a real buyer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <InteractiveDemo />
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col gap-4 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:flex-row md:items-center md:p-7">
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Evidence tracker
                </p>
                <h3 className="mt-1.5 text-[18px] font-bold tracking-tight">
                  Reminders before you miss the audit.
                </h3>
                <p className="pretty mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
                  Access reviews, pen-tests and drills on schedule — with owners. Your
                  readiness score stays current without a spreadsheet.
                </p>
              </div>
              <ul className="shrink-0 space-y-2 text-[13px]" aria-label="Sample evidence items">
                <li className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] px-3 py-2.5">
                  <Check className="size-4 text-[var(--color-mint)]" aria-hidden="true" />
                  Access review — done, logged
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] px-3 py-2.5">
                  <BellRing className="size-4 text-[var(--color-amber)]" aria-hidden="true" />
                  Pen-test — due in 9 days
                </li>
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="flex h-full flex-col gap-4 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-forest)] p-6 text-white md:flex-row md:items-center md:p-7">
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-lime)]">
                  Vendor portal
                </p>
                <h3 className="mt-1.5 text-[18px] font-bold tracking-tight">
                  One link, zero email threads.
                </h3>
                <p className="pretty mt-1.5 text-[13.5px] leading-relaxed text-white/70">
                  Buyers verify status and download reports themselves. You stop
                  answering the same questions by hand.
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-[13px]">
                <p className="font-mono text-[12px] text-[var(--color-lime)] [overflow-wrap:anywhere]">trust.acme.co/proofline</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-white/80">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  SOC 2 Type II · Verified Oct 2026
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPARISON ================= */

function Comparison() {
  return (
    <section aria-labelledby="roi-heading" className="bg-[var(--color-paper)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
              Why it wins the budget
            </p>
            <h2 id="roi-heading" className="display-balance mt-3 display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
              Deals stall for weeks. <em className="italic text-[var(--color-mint)]">The math is easy.</em>
            </h2>
            <p className="pretty mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[var(--color-muted)]">
              A delayed deal costs more than any tool. Proofline pays for itself the
              first time a questionnaire stops blocking revenue.
            </p>
            <ul className="mt-6 space-y-3 text-[14px]">
              {[
                "Recurring revenue — tiered by headcount and frameworks",
                "Hook that converts — free 1-questionnaire autofill trial",
                "Buildable core — parsing, RAG and workflow on Next.js + Postgres",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--color-mint-soft)] text-[var(--color-mint)]">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  <span className="pretty leading-relaxed text-[var(--color-ink-2)]">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="overflow-x-auto rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_20px_60px_-30px_rgba(12,46,36,0.35)]">
              <table className="w-full min-w-[560px] text-left text-[13.5px] md:text-[14px]">
                <caption className="sr-only">Comparison of Proofline with legacy compliance options</caption>
                <thead>
                  <tr className="border-b border-[var(--color-line)] bg-[var(--color-surface-2)] text-[12px] uppercase tracking-wide text-[var(--color-muted)]">
                    <th scope="col" className="px-5 py-4 font-bold">Per review</th>
                    <th scope="col" className="px-5 py-4 font-bold">Consultant</th>
                    <th scope="col" className="px-5 py-4 font-bold">Legacy suite</th>
                    <th scope="col" className="px-5 py-4 font-bold text-[var(--color-forest)]">Proofline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-line)]">
                  <CompareRow label="Time" consultant="3–5 days" legacy="2–4 days" proofline="~3 hours" />
                  <CompareRow label="Cost / yr" consultant="$15–30k" legacy="$10k+" proofline="From $149/mo" />
                  <CompareRow label="Citations" consultant="Manual" legacy="Partial" proofline="Every answer" />
                  <CompareRow label="Vendor portal" consultant="—" legacy="Paid add-on" proofline="Included" />
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CompareRow({
  label,
  consultant,
  legacy,
  proofline,
}: {
  label: string;
  consultant: string;
  legacy: string;
  proofline: string;
}) {
  return (
    <tr>
      <th scope="row" className="px-5 py-4 font-semibold">{label}</th>
      <td className="px-5 py-4 text-[var(--color-muted)] tabular-nums">{consultant}</td>
      <td className="px-5 py-4 text-[var(--color-muted)] tabular-nums">{legacy}</td>
      <td className="px-5 py-4 font-bold text-[var(--color-forest)] tabular-nums">{proofline}</td>
    </tr>
  );
}

/* ================= PRICING ================= */

function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-y border-[var(--color-line)] bg-[var(--color-surface-2)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
              Pricing
            </p>
            <h2 id="pricing-heading" className="display-balance mt-3 display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
              Tiered by headcount. <em className="italic text-[var(--color-mint)]">Not by your ambition.</em>
            </h2>
            <p className="pretty mx-auto mt-4 max-w-[52ch] text-[15px] text-[var(--color-muted)]">
              Start with one framework. Add the rest as deals demand them. Every tier
              includes the free autofill trial.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <Pricing />
        </Reveal>
      </div>
    </section>
  );
}

/* ================= PROOF ================= */

function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="bg-[var(--color-paper)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
            From the field
          </p>
          <h2 id="proof-heading" className="display-balance mt-3 max-w-[22ch] display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
            Founders who stopped losing deals to paperwork.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Testimonial
            quote="Our Fortune 500 prospect sat on a 210-question form for six weeks. With Proofline we sent it back in one afternoon — citations and all. Deal closed."
            name="Sarah Kim"
            role="CEO, B2B analytics (32 people)"
          />
          <Testimonial
            quote="I used to pay a consultant $4k per questionnaire. Now the draft is 90% done when I open it. I review, not rewrite."
            name="Marcus Lee"
            role="CTO, fintech infrastructure (48 people)"
          />
          <Testimonial
            quote="The vendor portal ended the email threads. Buyers check our SOC 2 status themselves. My calendar got a day back per week."
            name="Priya Sharma"
            role="Head of Sales, workflow SaaS (75 people)"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <Reveal>
      <figure className="pl-static flex h-full flex-col rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-7">
        <blockquote className="pretty flex-1 text-[15px] font-medium leading-relaxed tracking-[-0.005em]">
          “{quote}”
        </blockquote>
        <figcaption className="mt-6 border-t border-[var(--color-line)] pt-4">
          <p className="text-[14px] font-bold">{name}</p>
          <p className="text-[13px] text-[var(--color-muted)]">{role}</p>
          <p className="mt-2 text-[12px] font-semibold text-[var(--color-faint)]">Sample story for illustration</p>
        </figcaption>
      </figure>
    </Reveal>
  );
}

/* ================= TRUST ================= */

function Trust() {
  return (
    <section aria-labelledby="trust-heading" className="border-t border-[var(--color-line)] bg-[var(--color-surface-2)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
              How the AI stays honest
            </p>
            <h2 id="trust-heading" className="display-balance mt-3 display-lg text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.02em]">
              Every answer shows its <em className="italic text-[var(--color-mint)]">receipt.</em>
            </h2>
            <p className="pretty mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[var(--color-muted)]">
              Proofline is retrieval over your own files — not a model guessing. If it
              cannot find evidence, it says so and assigns the gap.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Citations on every draft",
                "Confidence + gap flags",
                "Human approval before send",
                "Export / delete anytime",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3.5 text-[13.5px] font-medium leading-snug">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_-30px_rgba(12,46,36,0.35)] md:p-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                Go-to-market, starting with SOC 2
              </p>
              <h3 className="mt-2 text-[20px] font-bold tracking-tight">
                Sell to founders blocked by enterprise prospects.
              </h3>
              <ol className="mt-5 space-y-4">
                {[
                  { t: "Hook", b: "Free questionnaire autofill — instant value on the buyer's own form." },
                  { t: "Expand", b: "Policies and evidence tracker when the audit lands; vendor portal when buyers multiply." },
                  { t: "Grow", b: "Add ISO, GDPR and HIPAA from the same evidence base as deals get regulated." },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-forest)] text-[12px] font-bold text-white tabular-nums">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[14px] font-bold">{s.t}</p>
                      <p className="pretty text-[13.5px] leading-relaxed text-[var(--color-muted)]">{s.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 rounded-2xl bg-[var(--color-surface-2)] border border-[var(--color-line)] px-4 py-3.5 text-[12.5px] leading-relaxed text-[var(--color-muted)]">
                Proofline helps you prepare and respond. It does not replace an
                auditor, consultant or legal advice for certification.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */

function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-[var(--color-paper)]">
      <div className="mx-auto w-full max-w-[900px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">FAQ</p>
            <h2 id="faq-heading" className="display-balance mt-3 display-lg text-[clamp(2rem,4.5vw,3rem)] leading-[1.08] tracking-[-0.02em]">
              Straight answers, <em className="italic text-[var(--color-mint)]">no fine print.</em>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <Faq />
        </Reveal>
      </div>
    </section>
  );
}

/* ================= CTA ================= */

function Cta() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="px-5 pb-16 md:px-8 md:pb-24">
      <Reveal>
        <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[32px] border border-white/15 bg-[var(--color-forest)] px-6 py-14 text-center text-white md:px-12 md:py-20">
          <div className="relative z-[2] mx-auto max-w-[640px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-lime)]">
              Your next enterprise deal is waiting on this
            </p>
            <h2 id="cta-heading" className="display-balance mt-4 display-lg text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.02em]">
              Run the autofill. <em className="italic text-[var(--color-lime)]">Ship the proof.</em>
            </h2>
            <p className="pretty mx-auto mt-4 max-w-[50ch] text-[15px] leading-relaxed text-white/70 md:text-[16px]">
              Upload your policies and the buyer's questionnaire. Get review-ready
              answers with citations — free for your first questionnaire.
            </p>

            <CtaForm />
            <p className="mt-4 text-[12.5px] text-white/75">
              No card required · 1 questionnaire uncapped · Cancel anytime
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}



