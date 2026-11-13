import {
  Cog,
  Construction,
  DraftingCompass,
  Gauge,
  Server,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_SECTIONS, DISCIPLINES, type Discipline } from "@/data/company";

const ICONS: Record<Discipline["icon"], LucideIcon> = {
  civil: Construction,
  mechanical: Cog,
  electrical: Zap,
  instrumentation: Gauge,
  it: Server,
  surveying: DraftingCompass,
};

/** The profile's six disciplines, as spec-sheet cards. */
export function Disciplines() {
  const { id, title } = COMPANY_SECTIONS.disciplines;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Capabilities
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

        {/* One across on phones, two from sm, three from lg — the service
            cards' grid, without the photo plates */}
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINES.map((discipline, i) => {
            const Icon = ICONS[discipline.icon];

            return (
              <li key={discipline.title}>
                <Reveal delay={120 + i * 70} className="h-full">
                  <article className="flex h-full flex-col border border-ink/10 bg-concrete p-6 sm:p-7">
                    <span className="flex items-center justify-between">
                      <Icon
                        className="h-8 w-8 text-amber"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span
                        aria-hidden
                        className="font-mono text-[10px] uppercase tracking-[0.2em] text-grey/60"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <h3 className="mt-6 text-lg leading-tight sm:text-xl">
                      {discipline.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-grey">
                      {discipline.text}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
