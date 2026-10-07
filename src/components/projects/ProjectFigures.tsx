import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import type { Project } from "@/data/projects";

/**
 * Figures for a project: the cover photograph as a lead plate, then the
 * supporting gallery beneath it. Every plate is sized to its final aspect
 * ratio, so nothing moves while the photographs load.
 */
export function ProjectFigures({ project }: { project: Project }) {
  return (
    <div>
      <Reveal delay={80}>
        <Figure
          caption="Site overview"
          index={1}
          category={project.category}
          className="aspect-[4/3] sm:aspect-[16/9]"
          large
          image={{ src: project.image, alt: project.imageAlt }}
        />
      </Reveal>

      {project.gallery.length > 0 && (
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-3">
          {project.gallery.map((figure, i) => (
            <li key={figure.caption}>
              <Reveal delay={120 + i * 70}>
                <Figure
                  caption={figure.caption}
                  index={i + 2}
                  className="aspect-[4/3]"
                  image={{ src: figure.image, alt: figure.imageAlt }}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Figure({
  caption,
  index,
  category,
  className,
  large = false,
  image,
}: {
  caption: string;
  index: number;
  category?: string;
  className: string;
  large?: boolean;
  image: { src: string; alt: string };
}) {
  return (
    <figure className={`relative w-full overflow-hidden bg-ink ${className}`}>
      <PlateImage
        src={image.src}
        alt={image.alt}
        // Lead figure runs the full content column; thumbs are a third of it.
        sizes={
          large
            ? "(min-width: 1152px) 1088px, 92vw"
            : "(min-width: 1024px) 352px, 46vw"
        }
      />

      {category && (
        <span className="absolute left-0 top-0 z-10 bg-amber px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
          {category}
        </span>
      )}

      <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-3 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/70">
        <span className="truncate">{caption}</span>
        {/* On narrow thumbs the number would squeeze the caption to an ellipsis */}
        <span
          aria-hidden
          className={`shrink-0 text-paper/45 ${large ? "" : "hidden sm:inline"}`}
        >
          Fig. {String(index).padStart(2, "0")}
        </span>
      </figcaption>
    </figure>
  );
}
