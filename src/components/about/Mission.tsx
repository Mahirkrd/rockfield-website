import { Reveal } from "@/components/ui/Reveal";
import { MISSION } from "@/data/about";

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

        <Reveal delay={80}>
          <h2
            id="mission-heading"
            className="mt-5 max-w-4xl text-2xl leading-[1.15] sm:mt-6 sm:text-3xl lg:text-4xl"
          >
            {MISSION.statement}
          </h2>
        </Reveal>

        <dl className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {MISSION.points.map((point, i) => (
            <div key={point.title}>
              <Reveal delay={140 + i * 80}>
                <div className="border-t border-ink/15 pt-5">
                  <dt className="font-display text-lg font-bold uppercase leading-tight tracking-tight sm:text-xl">
                    {point.title}
                  </dt>
                  <dd className="mt-2.5 text-sm leading-relaxed text-grey">
                    {point.text}
                  </dd>
                </div>
              </Reveal>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
