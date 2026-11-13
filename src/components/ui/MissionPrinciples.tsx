import { BadgeCheck, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_MISSION } from "@/data/company";

type Principle = (typeof COMPANY_MISSION.principles)[number];

const ICONS: Record<Principle, LucideIcon> = {
  Quality: BadgeCheck,
  Safety: ShieldCheck,
  Integrity: Scale,
};

/**
 * The three values the mission names — Quality · Safety · Integrity — set
 * out beneath the statement. Shared by the Company and About mission
 * sections. `delay` is when the label reveals; the values follow it.
 */
export function MissionPrinciples({ delay = 0 }: { delay?: number }) {
  return (
    <>
      <Reveal delay={delay}>
        <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:mt-12">
          Guided by
        </h3>
      </Reveal>

      <ul className="mt-5 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {COMPANY_MISSION.principles.map((principle, i) => {
          const Icon = ICONS[principle];

          return (
            <li key={principle}>
              <Reveal delay={delay + 40 + i * 80}>
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
    </>
  );
}
