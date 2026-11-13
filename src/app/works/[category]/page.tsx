import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/ui/CtaBand";
import { CategoryHero } from "@/components/works/CategoryHero";
import { WorkTypeSection } from "@/components/works/WorkTypeSection";
import { CategoryPager } from "@/components/works/CategoryPager";
import { LightboxProvider } from "@/components/works/LightboxProvider";
import {
  categoryGallery,
  categoryPhotoCount,
  getWorkCategory,
  WORK_CATEGORIES,
} from "@/data/works";

type PageProps = { params: Promise<{ category: string }> };

/** The eight categories are the only pages; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return WORK_CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = getWorkCategory((await params).category);
  if (!category) return { title: "Not found — Rockfield" };

  const count = categoryPhotoCount(category);
  return {
    title: `${category.title} — Our Works — Rockfield`,
    description: `${category.number} · ${category.title}: ${category.summary.join(
      " · ",
    )}. ${count} ${count === 1 ? "photo" : "photos"} from the field — Rockfield for General Contracting Ltd.`,
  };
}

export default async function WorkCategoryPage({ params }: PageProps) {
  const category = getWorkCategory((await params).category);
  if (!category) notFound();

  // The whole category is one lightbox sequence, in page order: swiping on
  // from the last photo of one work type carries into the next.
  const gallery = categoryGallery(category);
  // Where each work type's photos begin in that sequence.
  const starts = category.types.map((_, i) =>
    category.types
      .slice(0, i)
      .reduce((sum, type) => sum + type.photos.length, 0),
  );

  return (
    <>
      <CategoryHero category={category} />

      <LightboxProvider items={gallery}>
        {category.types.map((type, i) => (
          <WorkTypeSection
            key={type.slug}
            category={category}
            type={type}
            position={i + 1}
            items={gallery.slice(starts[i], starts[i] + type.photos.length)}
            start={starts[i]}
          />
        ))}
      </LightboxProvider>

      <CategoryPager category={category} />
      <CtaBand />
    </>
  );
}
