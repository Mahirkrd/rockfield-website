import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_IMAGE, imageSrc } from "@/data/images";

const STEPS = [
  {
    n: "01",
    title: "Consultation & Estimate",
    text: "We walk the site, scope the work, and return a fully costed proposal.",
  },
  {
    n: "02",
    title: "Design & Planning",
    text: "Drawings, method statements, and a programme resourced before it is promised.",
  },
  {
    n: "03",
    title: "Groundwork & Build",
    text: "Earthworks, structure and envelope, executed to the approved drawing.",
  },
  {
    n: "04",
    title: "Inspection & Handover",
    text: "QA/QC sign-off, snagging closed out, and a documented handover.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <Image
        src={imageSrc(PROCESS_IMAGE.src)}
        alt={PROCESS_IMAGE.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Held right down: this is texture behind the steps, not a picture to
          read, and every word over it is paper-white. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-ink/90"
      />

      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            How We Work
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="process-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            From first call to final handover.
          </h2>
        </Reveal>

        {/* Vertical on phones, four across from lg up */}
        <ol className="mt-10 sm:mt-14 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => {
            const last = i === STEPS.length - 1;

            return (
              <li key={step.n}>
                <Reveal delay={120 + i * 90}>
                  <div className="relative flex gap-5 pb-10 last:pb-0 lg:block lg:pb-0">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-paper/20 font-mono text-xs tracking-[0.15em] text-amber lg:h-12 lg:w-12 lg:text-sm">
                      {step.n}
                    </span>

                    {/* Angled amber connector — down the gutter on mobile,
                        across the grid gap on desktop. */}
                    {!last && (
                      <>
                        <svg
                          aria-hidden
                          viewBox="0 0 44 100"
                          preserveAspectRatio="none"
                          className="absolute left-0 top-14 h-[calc(100%-3.5rem)] w-11 text-amber/45 lg:hidden"
                        >
                          <line
                            x1="26"
                            y1="0"
                            x2="18"
                            y2="100"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="3 4"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                        <svg
                          aria-hidden
                          viewBox="0 0 32 24"
                          preserveAspectRatio="none"
                          className="absolute left-14 top-6 hidden h-6 w-[calc(100%-1.5rem)] text-amber/45 lg:block"
                        >
                          <line
                            x1="0"
                            y1="20"
                            x2="32"
                            y2="4"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="3 4"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </>
                    )}

                    <div className="lg:mt-6">
                      <h3 className="text-lg leading-tight sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-paper/60">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
