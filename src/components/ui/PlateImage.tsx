import Image from "next/image";
import { imageSrc } from "@/data/images";

/** How hard the ink veil sits on the photo. */
const OVERLAYS = {
  /** Keeps corner ticks and figure numbers legible over a busy photo. */
  subtle: "bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10",
  /** Headline-over-photo strength. */
  strong: "bg-gradient-to-t from-ink/85 via-ink/55 to-ink/40",
  none: "",
} as const;

type PlateImageProps = {
  /** Local path under /public — resolved through the registry in src/data/images.ts. */
  src: string;
  alt: string;
  /** Rendered width at each breakpoint, so the browser picks the right srcset entry. */
  sizes: string;
  /** Only for the one above-the-fold hero image; everything else stays lazy. */
  preload?: boolean;
  overlay?: keyof typeof OVERLAYS;
  /** Slow zoom when an ancestor `.group` is hovered. */
  zoom?: boolean;
};

/**
 * The photo layer of a spec-sheet plate: a `fill` image plus the ink veil and
 * the faint blueprint grid that keep the house style on top of real
 * photography.
 *
 * The parent must be positioned and carry a fixed aspect ratio (every plate on
 * the site already does) — that reserves the space before the bytes arrive, so
 * loading an image never shifts the layout.
 */
export function PlateImage({
  src,
  alt,
  sizes,
  preload = false,
  overlay = "subtle",
  zoom = false,
}: PlateImageProps) {
  return (
    <>
      <Image
        src={imageSrc(src)}
        alt={alt}
        fill
        sizes={sizes}
        // `preload` replaces the deprecated `priority` prop in Next 16.
        preload={preload}
        className={`object-cover ${
          zoom
            ? "transition-transform duration-500 ease-out group-hover:scale-110"
            : ""
        }`}
      />

      {overlay !== "none" && (
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${OVERLAYS[overlay]}`}
        />
      )}

      {/* The blueprint grid stays, now riding on top of the photograph. */}
      <span
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 opacity-70"
      />
    </>
  );
}
