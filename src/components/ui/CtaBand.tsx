import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-amber text-ink"
    >
      {/* Ink slash — the amber variant would vanish on this background */}
      <div
        aria-hidden
        className="slash-ink pointer-events-none absolute -right-10 -top-10 h-32 w-32 opacity-90 sm:-right-14 sm:-top-14 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:py-24">
        <Reveal>
          <h2
            id="cta-heading"
            className="max-w-xl text-3xl leading-[1.02] sm:text-4xl lg:text-5xl"
          >
            Have a project in mind? Let&rsquo;s build it.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-8 shrink-0 lg:mt-0">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-paper hover:text-ink sm:inline-flex sm:py-3.5"
          >
            Request a quote
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
