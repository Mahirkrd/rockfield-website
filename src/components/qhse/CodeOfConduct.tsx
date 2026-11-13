import { Reveal } from "@/components/ui/Reveal";
import { ClauseList } from "@/components/qhse/ClauseList";
import { CODE_OF_CONDUCT, QHSE_SECTIONS } from "@/data/qhse";

/** The approved profile's Code of Conduct. Anchor: #code-of-conduct. */
export function CodeOfConduct() {
  const { id, title } = QHSE_SECTIONS.conduct;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Our Conduct
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

          <ClauseList items={CODE_OF_CONDUCT} delay={120} />
        </div>
      </div>
    </section>
  );
}
