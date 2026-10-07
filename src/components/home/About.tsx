import { Reveal } from "@/components/ui/Reveal";
import { SpecPanel } from "@/components/ui/SpecPanel";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-ink/10 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-28">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Who We Are
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="about-heading"
              className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              A contracting partner from foundation to finish.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
              <p>
                Rockfield carries a project the whole way — site investigation,
                earthworks, structure, envelope and fit-out — under one
                contract and one accountable team. Nothing is handed between
                strangers, and nothing falls through the gap between trades.
              </p>
              <p>
                We plan conservatively and build to the drawing. Programmes are
                resourced before they are promised, materials are procured
                early, and every site runs to the same safety standard from the
                first excavation to the final snag. That is what makes a
                handover date something a client can build a business around.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Spec panel — a dark plate against the light section */}
        <Reveal delay={240} className="mt-10 lg:col-span-5 lg:mt-0">
          <SpecPanel />
        </Reveal>
      </div>
    </section>
  );
}
