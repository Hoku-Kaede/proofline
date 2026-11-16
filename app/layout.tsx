import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Apple-first stack: on Apple devices this resolves to SF Pro (system-ui),
// on Windows/Android to Inter. Single loaded face, never synthesized.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Proofline — Prove you're secure. Win the deal.",
    template: "%s · Proofline",
  },
  description:
    "AI drafts SOC 2, ISO 27001, GDPR and HIPAA questionnaires from your own docs in minutes. Policies, evidence tracking and a vendor portal in one place — built for small teams, priced for startups.",
  applicationName: "Proofline",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Proofline — Prove you're secure. Win the deal.",
    description:
      "Turn a 200-question security review into a 3-hour task. AI autofill, policy generator, evidence tracker and vendor portal for SMBs.",
    type: "website",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // `lang` set so AT + typography pick correct quotes/hyphenation (better-typography)
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('proofline-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-dvh bg-[var(--color-paper)] font-sans text-[var(--color-ink)] antialiased [font-optical-sizing:auto]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-forest)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
