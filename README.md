# Proofline

Landing page for Proofline — an AI compliance copilot that helps small teams win enterprise deals.

The pitch: you win the demo, then procurement asks for proof. SOC 2, a 200-question security questionnaire, evidence screenshots — and the deal stalls. Proofline drafts questionnaire answers from your own policies and evidence, with citations, confidence scores and gap flags. Nothing is auto-submitted; a human approves every answer.

This repository is the marketing site for that product.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start
npm run typecheck
```

## Sections

`app/page.tsx` composes the page from one function per section:

Hero · Marquee · Pain · Product · How it works · Interactive demo · Comparison · Pricing · Proof · Trust · FAQ · Call to action

## Stack

Next.js 16 (App Router) · React 19 · Tailwind v4 · lucide-react · TypeScript

## Structure

```
app/
  layout.tsx        Root layout, metadata, fonts
  page.tsx          The landing page, section by section
  globals.css       Design tokens and base styles
  not-found.tsx
components/
  interactive-demo.tsx   Questionnaire demo widget
  pricing.tsx            Plans and comparison
  faq.tsx                Accordion
  cta-form.tsx           Lead capture
  reveal.tsx             Scroll-in reveal wrapper
  tilt.tsx               Pointer tilt effect
  site-header.tsx        Nav
  site-footer.tsx        Footer
public/               Logos and icons
```

## Notes

- All statistics and customer claims on the page are sample marketing copy for the concept, not verified results.
- Proofline is not a legal or audit service. It gets a team audit-ready; auditors still certify.
