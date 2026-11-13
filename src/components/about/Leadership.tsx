import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_SECTIONS, LEADERSHIP_TEXT } from "@/data/company";

const ORGANISATION_HREF = `/company#${COMPANY_SECTIONS.organisation.id}`;

/**
 * A short leadership block: the profile's section 14 text, pointing on to
 * the full organisation chart on the Company page.
 */
export function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="bg-concrete"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Leadership
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="leadership-heading"
              className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              Our Team
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey sm:mt-8 sm:text-lg lg:mt-0">
              {LEADERSHIP_TEXT}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <Link
              href={ORGANISATION_HREF}
              className="group mt-8 flex items-center justify-center gap-2 border border-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper sm:inline-flex sm:py-3.5"
            >
              View our organisation
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
