import { Reveal } from "@/components/ui/Reveal";
import { Commitments } from "@/components/qhse/Commitments";
import { QHSE_SECTIONS, QUALITY_POLICY } from "@/data/qhse";

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

          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
              {QUALITY_POLICY.intro}
            </p>
          </Reveal>

          <Commitments items={QUALITY_POLICY.commitments} />
        </div>
      </div>
    </section>
  );
}
