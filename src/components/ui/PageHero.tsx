import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { imageSrc } from "@/data/images";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Photograph behind the masthead. Local path under /public plus its alt. */
  image?: { src: string; alt: string };
};

/** Standard dark masthead for every inner page. */
export function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {image && (
        <>
          <Image
            src={imageSrc(image.src)}
            alt={image.alt}
            fill
            sizes="100vw"
            // Top of every inner page, so it is worth fetching immediately.
            preload
            className="object-cover"
          />
          {/* Ink veil: the masthead type is paper-white and must stay legible
              whatever the photograph underneath is doing. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70"
          />
        </>
      )}

      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div
        aria-hidden
        className="slash pointer-events-none absolute -right-12 -top-16 h-32 w-32 opacity-90 sm:-right-16 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-[2.4rem] leading-[0.98] sm:mt-6 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>

        {intro && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
