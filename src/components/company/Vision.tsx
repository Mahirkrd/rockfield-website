import { Reveal } from "@/components/ui/Reveal";
import { COMPANY_SECTIONS, COMPANY_VISION } from "@/data/company";

/** The vision statement as a full-width feature: big type on ink. */
export function Vision() {
  const { id, title } = COMPANY_SECTIONS.vision;
  const { statement, highlight } = COMPANY_VISION;
  const at = statement.indexOf(highlight);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative overflow-hidden bg-ink text-paper"
    >
      {/* Blueprint grid, faded out toward the bottom */}
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      {/* The signature slash, bled off the bottom-right corner */}
      <div
        aria-hidden
        className="slash pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 opacity-90 sm:-bottom-16 sm:-right-16 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <Reveal>
          {/* The heading takes the eyebrow's place so the statement can lead */}
          <h2
            id={`${id}-heading`}
            className="flex items-center gap-3 font-mono text-[11px] font-normal tracking-[0.2em] text-amber sm:text-xs"
          >
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            {title}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 max-w-5xl text-balance font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
            {at === -1 ? (
              statement
            ) : (
              <>
                {statement.slice(0, at)}
                <span className="text-amber">{highlight}</span>
                {statement.slice(at + highlight.length)}
              </>
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
