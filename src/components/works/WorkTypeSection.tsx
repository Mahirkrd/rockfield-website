import { Reveal } from "@/components/ui/Reveal";
import type { GalleryItem, WorkCategory, WorkType } from "@/data/works";
import { DesignRenderBadge } from "./DesignRenderBadge";
import { PhotoGrid } from "./PhotoGrid";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * One work type on its category page: the profile's points as a spec list
 * beside a justified grid of its photos. The text column stays in view on
 * desktop while the photos scroll past.
 */
export function WorkTypeSection({
  category,
  type,
  position,
  items,
  start,
}: {
  category: WorkCategory;
  type: WorkType;
  /** 1-based place in the category, for the "02.1" index and the tint. */
  position: number;
  /** This type's photos, captioned for the lightbox. */
  items: GalleryItem[];
  /** Where items[0] sits in the category's lightbox sequence. */
  start: number;
}) {
  const headingId = `${type.slug}-heading`;
  const renders = type.photos.filter((photo) => photo.designRender).length;
  const count = type.photos.length;

  return (
    <section
      id={type.slug}
      aria-labelledby={headingId}
      className={position % 2 ? "bg-paper" : "bg-concrete"}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              <span className="text-ink">
                {category.number}.{position}
              </span>
              &middot; {count} {count === 1 ? "photo" : "photos"}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id={headingId}
              className="mt-5 text-2xl leading-[1.05] sm:text-3xl lg:text-[2rem]"
            >
              {type.title}
            </h2>
          </Reveal>

          {renders > 0 && (
            <Reveal delay={120}>
              <p className="mt-5 flex flex-col items-start gap-2 text-sm leading-relaxed text-grey">
                <DesignRenderBadge />
                {renders === count
                  ? "These images are design visualisations (renders), not photographs of completed work."
                  : "Images marked as design visualisations are renders, not photographs of completed work."}
              </p>
            </Reveal>
          )}

          <Reveal delay={160}>
            <ol className="mt-7 border-t border-ink/15">
              {type.points.map((point, i) => (
                <li
                  key={point.title}
                  className="flex items-baseline gap-4 border-b border-ink/15 py-4"
                >
                  <span
                    aria-hidden
                    className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-amber"
                  >
                    {pad(i + 1)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base leading-tight sm:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-grey">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mt-10 lg:col-span-8 lg:mt-0">
          <PhotoGrid items={items} start={start} />
        </div>
      </div>
    </section>
  );
}
