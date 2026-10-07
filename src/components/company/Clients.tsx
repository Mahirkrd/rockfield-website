import { Reveal } from "@/components/ui/Reveal";
import { CLIENTS, COMPANY_SECTIONS } from "@/data/company";

export function Clients() {
  const { id, title } = COMPANY_SECTIONS.clients;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Who We Build For
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

        {/* Client register: hairline-ruled cells, two across on phones and
            four from lg. Each cell draws its own right and bottom rule, so a
            short final row stays tidy. */}
        <ul className="mt-10 grid grid-cols-2 border-l border-t border-ink/10 sm:mt-12 lg:grid-cols-4">
          {CLIENTS.map((client, i) => (
            <li key={client.id} className="border-b border-r border-ink/10">
              <Reveal
                delay={120 + i * 60}
                className="relative flex aspect-[3/2] items-center justify-center px-4 text-center"
              >
                <span
                  aria-hidden
                  className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.2em] text-grey/60"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-bold uppercase leading-tight tracking-tight text-grey sm:text-base">
                  {client.name}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
