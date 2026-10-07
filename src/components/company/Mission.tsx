import { BadgeCheck, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_MISSION, COMPANY_SECTIONS } from "@/data/company";

type Principle = (typeof COMPANY_MISSION.principles)[number];

const ICONS: Record<Principle, LucideIcon> = {
  Quality: BadgeCheck,
  Safety: ShieldCheck,
  Integrity: Scale,
};

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

        {/* The three principles the statement names */}
        <Reveal delay={220}>
          <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:mt-12">
            Guided by
          </h3>
        </Reveal>

        <ul className="mt-5 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {COMPANY_MISSION.principles.map((principle, i) => {
            const Icon = ICONS[principle];

            return (
              <li key={principle}>
                <Reveal delay={260 + i * 80}>
                  <div className="border-t border-ink/15 pt-5">
                    <Icon
                      className="h-7 w-7 text-amber sm:h-8 sm:w-8"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="mt-4 block font-display text-sm font-bold uppercase leading-tight tracking-tight sm:text-lg lg:text-xl">
                      {principle}
                    </span>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
