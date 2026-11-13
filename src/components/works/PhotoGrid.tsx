"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { GalleryItem } from "@/data/works";
import { DesignRenderBadge } from "./DesignRenderBadge";
import { useLightbox } from "./LightboxProvider";

/**
 * Target row height per breakpoint, in px — must match the --row values
 * below. On phones it is low enough for two 4:3 landscapes to share a row
 * (any taller and each landscape sits alone, stretched to full width).
 */
const ROW = { base: 110, sm: 170, lg: 190 };

/**
 * `sizes` for one tile: a tile's width is its aspect ratio × the row height,
 * stretched by up to ~1.7× when a row is justified, and never wider than its
 * container.
 */
function tileSizes(ratio: number): string {
  const w = (row: number, cap: number) => Math.min(Math.round(ratio * row * 1.7), cap);
  return `(min-width: 1024px) ${w(ROW.lg, 1088)}px, (min-width: 640px) ${w(ROW.sm, 704)}px, ${w(ROW.base, 400)}px`;
}

/**
 * A justified photo grid: every photo at its own aspect ratio, nothing
 * cropped, rows of equal height that fill the width.
 *
 * Each tile's flex-grow and flex-basis are proportional to its aspect ratio,
 * so the space left in a row is shared in proportion too — which keeps every
 * tile in the row the same height. A greedy filler after the last tile stops
 * a short final row from being stretched.
 */
export function PhotoGrid({
  items,
  start = 0,
}: {
  items: GalleryItem[];
  /** Position of items[0] in the surrounding lightbox sequence. */
  start?: number;
}) {
  const { open } = useLightbox();

  return (
    <ul className="flex flex-wrap gap-1.5 [--row:110px] after:grow-[999] after:content-[''] sm:gap-2 sm:[--row:170px] lg:[--row:190px]">
      {items.map((item, i) => {
        const ratio = item.width / item.height;
        const tile: CSSProperties = {
          flexGrow: ratio,
          flexBasis: `calc(var(--row) * ${ratio.toFixed(4)})`,
        };

        return (
          <li key={item.src} style={tile} className="min-w-0">
            <button
              type="button"
              onClick={(e) => open(start + i, e.currentTarget)}
              aria-haspopup="dialog"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
              className="group relative block w-full overflow-hidden bg-ink focus-visible:outline-offset-[-2px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={tileSizes(ratio)}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              {item.designRender && (
                <DesignRenderBadge className="absolute left-2 top-2" />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
