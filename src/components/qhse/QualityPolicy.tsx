import { Reveal } from "@/components/ui/Reveal";
import { ClauseList } from "@/components/qhse/ClauseList";
import { QHSE_SECTIONS, QUALITY } from "@/data/qhse";

/** Quality, from the approved profile's QHSE section. Anchor: #quality. */
export function QualityPolicy() {
  const { id, title } = QHSE_SECTIONS.quality;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Our Standards
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

          <ClauseList items={QUALITY} delay={120} />
        </div>
      </div>
    </section>
  );
}
