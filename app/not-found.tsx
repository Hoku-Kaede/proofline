import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-28 text-center md:px-8">
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-mint)]">
        404
      </p>
      <h1 className="display-balance mt-3 font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight tracking-[-0.02em]">
        This page is not in evidence.
      </h1>
      <p className="pretty mx-auto mt-3 max-w-[46ch] text-[15px] text-[var(--color-muted)]">
        The link may have moved. Head back to the homepage to run your free autofill.
      </p>
      <Link
        href="#top"
        className="pl-press mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-forest)] px-6 py-3 text-[15px] font-semibold text-white"
      >
        Back to homepage
      </Link>
    </section>
  );
}
