import Link from "next/link";
import { PlateImage } from "@/components/ui/PlateImage";
import type { Project } from "@/data/projects";

/** Project tile with its photograph and hover zoom. */
export function ProjectCard({
  project,
  figure,
}: {
  project: Project;
  /** Number shown in the plate corner, 1-based. */
  figure: number;
}) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      {/* Fixed 4:3 box: the space is reserved before the photo arrives */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <PlateImage
          src={project.image}
          alt={project.imageAlt}
          // Three-up at lg, two-up at sm, full width on a phone.
          sizes="(min-width: 1024px) 352px, (min-width: 640px) 46vw, 92vw"
          zoom
        />

        <span className="absolute left-0 top-0 bg-amber px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
          {project.category}
        </span>

        <span
          aria-hidden
          className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50"
        >
          Fig. {String(figure).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-4 text-lg leading-tight transition-colors group-hover:text-amber sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-grey">
        {project.location} &middot; {project.year}
      </p>
    </Link>
  );
}
