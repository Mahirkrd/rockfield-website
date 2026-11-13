import Image from "next/image";
import Link from "next/link";
import {
  categoryPhotoCount,
  workCategoryHref,
  type WorkCategory,
} from "@/data/works";

/**
 * A compact photo tile for an Our Works category — the homepage preview and
 * a service's related works. Uses the category's name from the profile's
 * strip line ("Survey", "Buildings & Fit-out"…) to suit the small format;
 * the full title is the link's accessible name.
 */
export function CategoryTile({
  category,
  sizes,
}: {
  category: WorkCategory;
  /** Rendered width at each breakpoint, from the grid the tile sits in. */
  sizes: string;
}) {
  const count = categoryPhotoCount(category);

  return (
    <Link
      href={workCategoryHref(category.slug)}
      aria-label={`${category.number} ${category.title} — ${count} photos`}
      className="group relative block aspect-square overflow-hidden bg-ink sm:aspect-[3/4]"
    >
      <Image
        src={category.cover.src}
        alt=""
        fill
        sizes={sizes}
        style={{ objectPosition: category.cover.position }}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10"
      />
      <span
        aria-hidden
        className="slash pointer-events-none absolute -right-6 -top-6 h-16 w-16 translate-x-4 -translate-y-4 opacity-0 transition duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:h-20 sm:w-20"
      />

      <span
        aria-hidden
        className="absolute left-3 top-3 font-mono text-[11px] tracking-[0.2em] text-paper/80 sm:left-4 sm:top-4"
      >
        {category.number}
      </span>

      <span aria-hidden className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
        <span className="block font-display text-sm font-bold uppercase leading-tight tracking-tight text-paper sm:text-base">
          {category.short}
        </span>
        <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
          {count} {count === 1 ? "photo" : "photos"}
        </span>
      </span>
    </Link>
  );
}
