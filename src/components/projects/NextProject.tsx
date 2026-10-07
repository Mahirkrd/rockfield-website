import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

/** Full-width link onto the next project in the portfolio, wrapping at the end. */
export function NextProject({ project }: { project: Project }) {
  return (
    <section aria-labelledby="next-project-heading" className="bg-paper">
      <h2 id="next-project-heading" className="sr-only">
        Next project
      </h2>

      <Reveal>
        <Link
          href={`/projects/${project.id}`}
          className="group relative block overflow-hidden border-t border-ink/10 transition-colors hover:bg-concrete"
        >
          {/* Slash slides in from the right edge on hover */}
          <span
            aria-hidden
            className="slash pointer-events-none absolute -right-10 -top-10 hidden h-32 w-32 origin-top-right scale-0 opacity-90 transition-transform duration-300 ease-out group-hover:scale-100 group-focus-visible:scale-100 sm:block"
          />

          <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-16 lg:py-20">
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
                Next project
              </p>
              <p className="mt-3 font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight transition-colors group-hover:text-amber sm:text-4xl lg:text-5xl">
                {project.title}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-grey">
                {project.category} &middot; {project.location} &middot;{" "}
                {project.year}
              </p>
            </div>

            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-ink/20 transition-colors group-hover:border-amber group-hover:bg-amber sm:h-16 sm:w-16">
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
