"use client";

import { useMemo, useState } from "react";
import type { GalleryItem, WorkCategorySlug } from "@/data/works";
import { LightboxProvider } from "./LightboxProvider";
import { PhotoGrid } from "./PhotoGrid";

export type PhotoGroup = {
  slug: WorkCategorySlug;
  number: string;
  /** The category's strip name — short enough for a chip. */
  short: string;
  title: string;
  items: GalleryItem[];
};

type Filter = WorkCategorySlug | "all";

/**
 * Every Our Works photo in one justified grid, filtered by category. The
 * groups arrive as props from the server page, so the works data never
 * ships in a client bundle. The lightbox steps through the visible set.
 */
export function AllPhotos({ groups }: { groups: PhotoGroup[] }) {
  const [active, setActive] = useState<Filter>("all");
  const all = useMemo(() => groups.flatMap((group) => group.items), [groups]);
  const current = groups.find((group) => group.slug === active);
  const items = current ? current.items : all;

  const chips: { id: Filter; number?: string; label: string; count: number }[] = [
    { id: "all", label: "All", count: all.length },
    ...groups.map((group) => ({
      id: group.slug,
      number: group.number,
      label: group.short,
      count: group.items.length,
    })),
  ];

  return (
    <>
      {/* Phones: one row that scrolls sideways inside the page gutter, so the
          page itself never scrolls sideways. From sm the chips wrap. */}
      <div
        role="group"
        aria-label="Filter photos by category"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {chips.map((chip) => {
          const on = chip.id === active;
          return (
            <button
              key={chip.id}
              type="button"
              onClick={() => setActive(chip.id)}
              aria-pressed={on}
              className={`flex shrink-0 items-center gap-2 border px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors sm:text-xs ${
                on
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-paper text-grey hover:border-ink hover:text-ink"
              }`}
            >
              {chip.number && (
                <span aria-hidden className={on ? "text-paper/50" : "text-grey/50"}>
                  {chip.number}
                </span>
              )}
              {chip.label}
              <span aria-hidden className={on ? "text-amber" : "text-grey/60"}>
                {chip.count}
              </span>
            </button>
          );
        })}
      </div>

      <p
        aria-live="polite"
        className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-grey"
      >
        {items.length} photos{current && ` · ${current.number} ${current.title}`}
      </p>

      <div className="mt-5 sm:mt-6">
        {/* Keyed on the filter: a fresh viewer for each set */}
        <LightboxProvider key={active} items={items}>
          <PhotoGrid items={items} />
        </LightboxProvider>
      </div>
    </>
  );
}
