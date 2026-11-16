import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface-2)]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-[17px] font-bold tracking-[-0.02em]">Proofline</p>
            <p className="pretty mt-3 max-w-[34ch] text-[14px] leading-relaxed text-[var(--color-muted)]">
              AI compliance that wins deals. SOC 2, ISO 27001, GDPR and HIPAA —
              without the enterprise price tag.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-[12px] font-medium text-[var(--color-muted)]">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="pl-live-dot absolute inline-flex h-full w-full rounded-full bg-[var(--color-mint)]" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--color-mint)]" />
              </span>
              All systems normal · Upload docs securely
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              ["Questionnaire autofill", "#product"],
              ["Policy generator", "#product"],
              ["Evidence tracker", "#product"],
              ["Vendor portal", "#product"],
              ["Frameworks", "#frameworks"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["How it works", "#how"],
              ["Live demo", "#demo"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
              ["Contact", "#cta"],
            ]}
          />
          <FooterCol
            title="Frameworks"
            links={[
              ["SOC 2 Type II", "#frameworks"],
              ["ISO 27001", "#frameworks"],
              ["GDPR", "#frameworks"],
              ["HIPAA", "#frameworks"],
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-[13px] text-[var(--color-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Proofline. Built for small teams who sell to enterprises.</p>
          <p>Demo site — sample data only. Not legal or audit advice.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <nav aria-label={title}>
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)]">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-[14px] text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-ink)] hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
