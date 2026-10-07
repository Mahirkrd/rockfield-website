import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsPreview() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-concrete"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Selected Work
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="projects-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            Projects we&rsquo;re proud of.
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PROJECTS.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={120 + i * 70}>
                <ProjectCard project={project} figure={i + 1} />
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200}>
          <Link
            href="/projects"
            className="group mt-10 flex items-center justify-center gap-2 border border-ink px-6 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-paper sm:mt-12 sm:inline-flex sm:py-3.5"
          >
            View all projects
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
