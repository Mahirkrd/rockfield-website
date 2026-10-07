import { Reveal } from "@/components/ui/Reveal";
import { SpecPanel } from "@/components/ui/SpecPanel";
import { PlateImage } from "@/components/ui/PlateImage";
import { ABOUT_IMAGE } from "@/data/images";
import { STORY } from "@/data/about";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Our Story
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="story-heading"
              className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              Built on fifteen years of team experience.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
              {STORY.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 lg:col-span-5 lg:mt-0">
          <Reveal delay={240}>
            {/* Fixed 4:3 box — the plate holds its size while the photo loads */}
            <figure className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
              <PlateImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                sizes="(min-width: 1024px) 40vw, 92vw"
              />
              <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
                On site &middot; Fig. 01
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={320} className="mt-5 sm:mt-6">
            <SpecPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
