import { Reveal } from "@/components/ui/Reveal";
import { MissionPrinciples } from "@/components/ui/MissionPrinciples";
import { COMPANY_MISSION, COMPANY_SECTIONS } from "@/data/company";

export function Mission() {
  const { id, title } = COMPANY_SECTIONS.mission;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            What Drives Us
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
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink sm:mt-8 sm:text-xl lg:text-2xl lg:leading-snug">
            {COMPANY_MISSION.statement}
          </p>
        </Reveal>

        <MissionPrinciples delay={220} />
      </div>
    </section>
  );
}
