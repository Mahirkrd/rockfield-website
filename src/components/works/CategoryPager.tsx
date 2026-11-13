import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  WORK_CATEGORIES,
  WORKS_HREF,
  workCategoryHref,
  type WorkCategory,
} from "@/data/works";

/**
 * Previous / next category, as two dark plates over their cover photos. The
 * run goes 01 → 08 without wrapping; at either end the empty side links
 * back to the overview instead.
 */
export function CategoryPager({ category }: { category: WorkCategory }) {
  const at = WORK_CATEGORIES.findIndex((c) => c.slug === category.slug);
  const prev = WORK_CATEGORIES[at - 1];
  const next = WORK_CATEGORIES[at + 1];

  return (
    <nav aria-label="Other categories" className="bg-ink text-paper">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-paper/10 sm:grid-cols-2">
        <li className="bg-ink">
          {prev ? (
            <PagerLink category={prev} direction="prev" />
          ) : (
            <OverviewLink />
          )}
        </li>
        <li className="bg-ink">
          {next ? (
            <PagerLink category={next} direction="next" />
          ) : (
            <OverviewLink />
          )}
        </li>
      </ul>
    </nav>
  );
}

function PagerLink({
  category,
  direction,
}: {
  category: WorkCategory;
  direction: "prev" | "next";
}) {
  const next = direction === "next";
  const Arrow = next ? ArrowRight : ArrowLeft;

  return (
    <Link
      href={workCategoryHref(category.slug)}
      rel={direction}
      className={`group relative flex min-h-44 flex-col justify-end overflow-hidden px-5 py-8 sm:min-h-56 sm:px-8 sm:py-10 ${
        next ? "sm:items-end sm:text-right" : ""
      }`}
    >
      <Image
        src={category.cover.src}
        alt=""
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        style={{ objectPosition: category.cover.position }}
        className="object-cover opacity-30 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-45"
      />
      <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

      <span className="relative flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
        {!next && <Arrow aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />}
        {next ? "Next category" : "Previous category"}
        {next && <Arrow aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
      </span>
      <span className="relative mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl">
        <span className="font-mono text-base font-medium text-paper/50 sm:text-lg">
          {category.number}{" "}
        </span>
        {category.title}
      </span>
    </Link>
  );
}

function OverviewLink() {
  return (
    <Link
      href={WORKS_HREF}
      className="group flex min-h-44 flex-col justify-end px-5 py-8 sm:min-h-56 sm:px-8 sm:py-10"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
        Our Works
      </span>
      <span className="mt-3 flex items-center gap-3 font-display text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl">
        All categories
        <ArrowRight aria-hidden="true" className="h-6 w-6 text-amber transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
