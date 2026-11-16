"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How does questionnaire autofill actually work?",
    a: "Upload your policies, SOPs and evidence once. Our retrieval system (RAG) searches those files for each question in a client's 200+ question form and drafts an answer with citations to the source doc. Low-confidence answers and gaps are flagged so a human still approves everything before it is sent.",
  },
  {
    q: "Does this replace an auditor or consultant?",
    a: "No — and it is not legal or audit advice. Proofline gets you 80% of the way to audit-ready: drafted answers, tailored policies and collected evidence. You still need an auditor for SOC 2 / ISO certification, but you arrive prepared instead of starting from a blank page.",
  },
  {
    q: "How is this different from Vanta or Drata?",
    a: "Legacy tools charge $10k+ per year and are built for larger teams. Proofline is built for 5–250 person companies: tiered by headcount and frameworks, with a free autofill trial, a policy generator from a 5-minute form, and a vendor portal your customers actually use.",
  },
  {
    q: "What frameworks do you support first?",
    a: "SOC 2 is our starting point because it is the most requested by B2B SaaS buyers. ISO 27001, GDPR and HIPAA share the same evidence base — turn one on and your controls map across all four without re-entering anything.",
  },
  {
    q: "Is my data used to train AI models?",
    a: "No. Your files are encrypted in transit and at rest, scoped to your workspace, and never used to train models. You can export or delete everything at any time. The vendor portal link shows status — it does not expose raw documents to anyone you do not invite.",
  },
  {
    q: "What happens if the AI gets an answer wrong?",
    a: "That is why every answer cites its source and shows a confidence score. Reviewers see the draft next to the doc, can edit in one click, and gaps get an owner and due date in the evidence tracker. Nothing is auto-submitted.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="divide-y divide-[var(--color-line)] overflow-hidden rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)]">
      {FAQS.map((f, i) => {
        const open = openIdx === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                className="pl-press flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[15px] font-semibold tracking-tight md:px-7"
              >
                {f.q}
                <span
                  aria-hidden="true"
                  className={`grid size-8 shrink-0 place-items-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[18px] leading-none transition-transform duration-200 ease-out ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!open}
              className="px-5 pb-6 md:px-7"
            >
              <p className="pretty max-w-[68ch] text-[14.5px] leading-relaxed text-[var(--color-muted)]">
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


