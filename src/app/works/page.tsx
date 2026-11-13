import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { WorksHero } from "@/components/works/WorksHero";
import { CategoryCard } from "@/components/works/CategoryCard";
import { AllPhotos, type PhotoGroup } from "@/components/works/AllPhotos";
import {
  categoryGallery,
  WORK_CATEGORIES,
  WORK_TYPE_COUNT,
  WORKS_INTRO,
} from "@/data/works";

export const metadata: Metadata = {
  title: "Our Works — Rockfield",
  description: `${WORKS_INTRO.headline} Our Works by category: ${WORKS_INTRO.strip.join(
    " · ",
  )} — Rockfield for General Contracting Ltd.`,
};

export default function WorksPage() {
  const groups: PhotoGroup[] = WORK_CATEGORIES.map((category) => ({
    slug: category.slug,
    number: category.number,
    short: category.short,
    title: category.title,
    items: categoryGallery(category),
  }));

  return (
    <>
      <WorksHero />

      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="bg-concrete"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              {String(WORK_CATEGORIES.length).padStart(2, "0")} categories
              &middot; {WORK_TYPE_COUNT} work types
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="categories-heading"
              className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              Our Works by category
            </h2>
          </Reveal>

          {/* One across on phones, two from sm, four from lg */}
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {WORK_CATEGORIES.map((category, i) => (
              <li key={category.slug}>
                <Reveal delay={100 + (i % 4) * 70} className="h-full">
                  <CategoryCard category={category} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="all-photos"
        aria-labelledby="all-photos-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Gallery
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="all-photos-heading"
              className="mt-5 text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              All photos
            </h2>
          </Reveal>

          <div className="mt-8 sm:mt-10">
            <AllPhotos groups={groups} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
