import { Reveal } from "@/components/ui/Reveal";
import { MissionPrinciples } from "@/components/ui/MissionPrinciples";
import { COMPANY_MISSION } from "@/data/company";

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="bg-concrete"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Our Mission
          </p>
        </Reveal>

        {/* The official mission — one statement site-wide, owned by
            src/data/company.ts and shared with the Company page. */}
        <Reveal delay={80}>
          <h2
            id="mission-heading"
            className="mt-5 max-w-4xl text-2xl leading-[1.15] sm:mt-6 sm:text-3xl lg:text-4xl"
          >
            {COMPANY_MISSION.statement}
          </h2>
        </Reveal>

        <MissionPrinciples delay={140} />
      </div>
    </section>
  );
}
