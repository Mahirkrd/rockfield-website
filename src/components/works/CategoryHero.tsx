import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import {
  categoryPhotoCount,
  coverAlt,
  WORKS_HREF,
  type WorkCategory,
} from "@/data/works";

/** Letters in the title's longest word — see the h1 below. */
function longestWord(title: string) {
  return Math.max(...title.split(/\s+/).map((word) => word.length));
}

/**
 * A category's masthead: its cover photo full-bleed, the big mono number,
 * the title and the profile's summary items — plus, where there is more
 * than one, a row of links down to each work type.
 */
export function CategoryHero({ category }: { category: WorkCategory }) {
  const count = categoryPhotoCount(category);
  const types = category.types.length;

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Image
        src={category.cover.src}
        alt={coverAlt(category)}
        fill
        preload
        sizes="100vw"
        style={{ objectPosition: category.cover.position }}
        className="object-cover"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/30"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent"
      />
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="slash pointer-events-none absolute -right-12 -top-16 h-32 w-32 opacity-90 sm:-right-16 sm:h-56 sm:w-56"
      />

      <div className="@container relative mx-auto flex min-h-[540px] max-w-6xl flex-col justify-end px-5 pb-12 pt-24 sm:min-h-[600px] sm:px-8 sm:pb-16 lg:min-h-[640px] lg:pb-20">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 sm:text-xs">
              <li>
                <Link
                  href={WORKS_HREF}
                  className="-my-2 inline-block py-2 transition-colors hover:text-amber"
                >
                  Our Works
                </Link>
              </li>
              <li aria-hidden className="text-amber">
                /
              </li>
              <li aria-current="page" className="text-paper">
                {category.number}
              </li>
            </ol>
          </nav>
        </Reveal>

        <Reveal delay={80}>
          <p
            aria-hidden
            className="mt-6 font-mono text-7xl font-medium leading-none tracking-tight text-paper/90 sm:text-8xl lg:text-9xl"
          >
            {category.number}
          </p>
        </Reveal>

        <Reveal delay={140}>
          {/* 2.4rem on phones, capped so the longest word always fits the
              column (uppercase Archivo Bold runs ~0.68em a letter). */}
          <h1
            style={{ "--longest-word": longestWord(category.title) } as CSSProperties}
            className="mt-4 max-w-4xl text-[length:min(2.4rem,calc(100cqi/(var(--longest-word)*0.68)))] leading-[0.98] sm:text-6xl lg:text-7xl"
          >
            {category.title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          {/* Stacked on phones (no separator stranded at a line start),
              one wrapping row from sm — the category cards' "/" markers */}
          <ul className="mt-6 flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/75 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:text-xs">
            {category.summary.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden className="text-amber">
                  /
                </span>
                {item}
              </li>
            ))}
          </ul>

          {category.callout && (
            <p className="mt-6 max-w-xl border-l-2 border-amber pl-4 text-sm leading-relaxed text-paper/80 sm:text-base">
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                {category.callout.title}
              </span>
              {category.callout.text}
            </p>
          )}

          <p className="mt-8 border-t border-paper/15 pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
            {types} {types === 1 ? "work type" : "work types"} &middot; {count}{" "}
            {count === 1 ? "photo" : "photos"}
          </p>
        </Reveal>

        {types > 1 && (
          <Reveal delay={260}>
            {/* Jump links: one row that scrolls sideways on phones */}
            <nav aria-label="Work types in this category" className="mt-4">
              <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
                {category.types.map((type, i) => (
                  <li key={type.slug} className="shrink-0">
                    <a
                      href={`#${type.slug}`}
                      className="flex items-center gap-2 border border-paper/20 bg-ink/40 px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/80 backdrop-blur-sm transition-colors hover:border-amber hover:text-amber"
                    >
                      <span aria-hidden className="text-paper/40">
                        {category.number}.{i + 1}
                      </span>
                      {type.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        )}
      </div>
    </section>
  );
}
