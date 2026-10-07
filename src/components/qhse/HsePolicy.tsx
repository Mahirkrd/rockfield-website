import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import { Commitments } from "@/components/qhse/Commitments";
import { QHSE_IMAGE } from "@/data/images";
import { HSE_POLICY, QHSE_SECTIONS } from "@/data/qhse";

export function HsePolicy() {
  const { id, title } = QHSE_SECTIONS.hse;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-concrete">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Our Responsibility
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id={`${id}-heading`}
              className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              {title}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
              {HSE_POLICY.intro}
            </p>
          </Reveal>

          <Reveal delay={200}>
            {/* Fixed ratios — 4:3 on phones, 16:9 from sm — so the plate holds
                its size while the photo loads */}
            <figure className="relative mt-10 aspect-[4/3] w-full overflow-hidden bg-ink sm:mt-12 sm:aspect-[16/9]">
              <PlateImage
                src={QHSE_IMAGE.src}
                alt={QHSE_IMAGE.alt}
                sizes="(min-width: 832px) 768px, 92vw"
              />
              <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
                On site &middot; Fig. 01
              </figcaption>
            </figure>
          </Reveal>

          <Commitments items={HSE_POLICY.commitments} />
        </div>
      </div>
    </section>
  );
}
