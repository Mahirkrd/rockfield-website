import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CategoryTile } from "@/components/works/CategoryTile";
import { WORK_CATEGORIES, WORKS_HREF, WORKS_INTRO } from "@/data/works";

/** Homepage preview of Our Works: the eight categories as photo tiles. */
export function WorksPreview() {
  return (
    <section id="works" aria-labelledby="works-heading" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            {WORKS_INTRO.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="works-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            {WORKS_INTRO.headline}
          </h2>
        </Reveal>

        {/* Two across on phones, four from sm */}
        <ul className="mt-10 grid grid-cols-2 gap-2 sm:mt-12 sm:grid-cols-4 sm:gap-3">
          {WORK_CATEGORIES.map((category, i) => (
            <li key={category.slug}>
              <Reveal delay={100 + (i % 4) * 60}>
                <CategoryTile
                  category={category}
                  sizes="(min-width: 1152px) 266px, (min-width: 640px) 23vw, 46vw"
                />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200}>
          <Link
            href={WORKS_HREF}
            className="group mt-10 flex items-center justify-center gap-2 border border-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper sm:mt-12 sm:inline-flex sm:py-3.5"
          >
            View all works
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
