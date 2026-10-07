import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import { HERO_IMAGE } from "@/data/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* Blueprint grid, faded out toward the bottom so it never fights the copy */}
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      {/* The signature slash, bled off the top-right corner */}
      <div
        aria-hidden
        className="slash pointer-events-none absolute -right-12 -top-16 h-32 w-32 opacity-90 sm:-right-16 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:grid lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              {/* The category drops on phones so the badge stays on one line */}
              <span>
                <span className="hidden sm:inline">General Contracting &middot; </span>
                Team Experience Since 2010
              </span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[2.6rem] leading-[0.92] sm:mt-6 sm:text-6xl lg:text-7xl">
              Built on{" "}
              <br />
              solid <span className="text-amber">ground.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/70 sm:text-lg">
              We build civil, structural and fit-out works at scale — delivered
              on programme, on budget and to specification, on every site we
              hand over.
            </p>
          </Reveal>

          {/* Buttons: stacked and full-width on phones, inline from sm up */}
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-amber px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-paper sm:py-3.5"
              >
                Request a quote
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 border border-paper/25 px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:border-amber hover:text-amber sm:py-3.5"
              >
                View our work
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Lead photograph, held in the spec-sheet plate with corner ticks */}
        <Reveal delay={320} className="mt-12 lg:col-span-5 lg:mt-0">
          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden border border-paper/15 bg-ink lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <PlateImage
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              // Right-hand column above lg, full-bleed below it.
              sizes="(min-width: 1024px) 40vw, 100vw"
              // The one image on the site worth loading before it is scrolled to.
              preload
              // Darkened so the ticks, the slash and the figure number — all
              // paper-white — stay readable whatever the photo is doing.
              overlay="strong"
            />
            <CornerTicks />
            <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
              Fig. 01
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CornerTicks() {
  const corner = "absolute h-3 w-3 border-amber";
  return (
    <span aria-hidden>
      <span className={`${corner} left-0 top-0 border-l border-t`} />
      <span className={`${corner} right-0 top-0 border-r border-t`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </span>
  );
}
