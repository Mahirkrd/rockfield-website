"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CATEGORIES, PROJECTS, type Category } from "@/data/projects";

type Filter = "All" | Category;

const FILTERS: Filter[] = ["All", ...CATEGORIES];

export function ProjectGallery() {
  const [active, setActive] = useState<Filter>("All");

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", PROJECTS.length]]);
    for (const category of CATEGORIES) {
      map.set(
        category,
        PROJECTS.filter((p) => p.category === category).length,
      );
    }
    return map;
  }, []);

  const visible = useMemo(
    () =>
      active === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === active),
    [active],
  );

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-concrete"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <h2 id="gallery-heading" className="sr-only">
          Project gallery
        </h2>

        {/* Filters scroll sideways on phones rather than wrapping to three rows */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
        >
          {FILTERS.map((filter) => {
            const isActive = filter === active;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`shrink-0 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors sm:text-xs ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-grey hover:border-ink hover:text-ink"
                }`}
              >
                {filter}
                <span
                  className={isActive ? "text-amber" : "text-grey/60"}
                  aria-hidden
                >
                  {" "}
                  {counts.get(filter)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result count, announced when the filter changes */}
        <p
          aria-live="polite"
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-grey"
        >
          {visible.length} {visible.length === 1 ? "project" : "projects"}
          {active !== "All" && ` in ${active}`}
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {visible.map((project, i) => (
            // Keying on filter + id restarts the reveal when the list changes
            <li key={`${active}-${project.id}`}>
              <Reveal delay={i * 60}>
                <ProjectCard project={project} figure={i + 1} />
              </Reveal>
            </li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="mt-10 text-base text-grey">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
