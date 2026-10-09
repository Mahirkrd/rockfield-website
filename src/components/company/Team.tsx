import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import { COMPANY_SECTIONS, COMPANY_TEAM } from "@/data/company";

/**
 * The Company page's own team list (src/data/company.ts), in the same card
 * as the About page's Leadership section.
 */
export function Team() {
  const { id, title } = COMPANY_SECTIONS.team;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-concrete">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Leadership
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

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
            {COMPANY_TEAM.intro}
          </p>
        </Reveal>

        {/* Three across from lg, two from sm, one on phones. A short last row
            centres itself, so five cards read as a deliberate 3 + 2 (and
            2 + 2 + 1 on tablets) instead of leaving an orphan. */}
        <ul className="mt-10 flex flex-wrap justify-center gap-6 sm:mt-12 sm:gap-5 lg:gap-6">
          {COMPANY_TEAM.members.map((member, i) => (
            <li
              key={member.id}
              className="w-full sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_3rem)/3)]"
            >
              {/* h-full carries the row height down to the card, so a role
                  that wraps to two lines doesn't leave a ragged row */}
              <Reveal delay={120 + i * 70} className="h-full">
                <article className="h-full border border-ink/10 bg-paper">
                  {/* Fixed 4:5 plate — reserved before the photo arrives */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                    <PlateImage
                      src={member.image}
                      alt={member.imageAlt}
                      sizes="(min-width: 1024px) 350px, (min-width: 640px) 46vw, 92vw"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg leading-tight">{member.name}</h3>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-grey">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
