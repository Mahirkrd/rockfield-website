import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import { COMPANY_IMAGE } from "@/data/images";
import { COMPANY_PROFILE, COMPANY_SECTIONS } from "@/data/company";

export function Profile() {
  const { id, title } = COMPANY_SECTIONS.profile;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Who We Are
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
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
              {COMPANY_PROFILE.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-10 lg:col-span-5 lg:mt-0">
          {/* A fixed 4:3 plate on phones and tablets, so nothing shifts while
              the photo loads; from lg it runs the full height of the copy. */}
          <figure className="relative aspect-[4/3] w-full overflow-hidden bg-ink lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <PlateImage
              src={COMPANY_IMAGE.src}
              alt={COMPANY_IMAGE.alt}
              sizes="(min-width: 1024px) 40vw, 92vw"
            />
            <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
              On site &middot; Fig. 01
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
