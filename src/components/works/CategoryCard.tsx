import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  categoryPhotoCount,
  coverAlt,
  workCategoryHref,
  type WorkCategory,
} from "@/data/works";

/**
 * An Our Works category on the overview: cover photo with a big mono number,
 * then the title, the profile's summary items and the photo count. On hover
 * or keyboard focus the photo zooms a touch and an amber slash wipes in.
 */
export function CategoryCard({ category }: { category: WorkCategory }) {
  const count = categoryPhotoCount(category);

  return (
    <Link
      href={workCategoryHref(category.slug)}
      className="group flex h-full flex-col border border-ink/10 bg-paper transition-colors hover:border-ink/30 focus-visible:border-ink"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <Image
          src={category.cover.src}
          alt={coverAlt(category)}
          fill
          sizes="(min-width: 1024px) 272px, (min-width: 640px) 46vw, 92vw"
          style={{ objectPosition: category.cover.position }}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
        />
        {/* Ink rising from the foot, so the number reads on any photo */}
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent"
        />
        <span
          aria-hidden
          className="slash pointer-events-none absolute -right-7 -top-7 h-24 w-24 translate-x-5 -translate-y-5 opacity-0 transition duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
        />
        <span
          aria-hidden
          className="absolute bottom-3 left-4 font-mono text-5xl font-medium leading-none tracking-tight text-paper sm:bottom-4 sm:text-6xl"
        >
          {category.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg leading-tight sm:text-xl">{category.title}</h3>

        <ul className="mt-4 space-y-1.5">
          {category.summary.map((item) => (
            <li
              key={item}
              className="flex gap-2 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-grey"
            >
              <span aria-hidden className="text-amber">
                /
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <span className="flex items-center justify-between border-t border-ink/10 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
            {count} {count === 1 ? "photo" : "photos"}
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
