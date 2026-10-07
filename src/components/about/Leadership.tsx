import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import { LEADERSHIP } from "@/data/team";

export function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="bg-concrete"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Leadership
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="leadership-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            The people accountable for the work.
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {LEADERSHIP.map((member, i) => (
            <li key={member.id}>
              <Reveal delay={120 + i * 70}>
                <article className="h-full border border-ink/10 bg-paper">
                  {/* Fixed 4:5 plate — reserved before the photo arrives */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                    <PlateImage
                      src={member.image}
                      alt={member.imageAlt}
                      sizes="(min-width: 1024px) 264px, (min-width: 640px) 46vw, 92vw"
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
                      {member.focus}
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
