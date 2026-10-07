import { Reveal } from "@/components/ui/Reveal";

/**
 * A policy's commitments as numbered spec-sheet rows — the project pages'
 * "Scope of works" list, with clause numbers in place of the checkmarks.
 */
export function Commitments({ items }: { items: string[] }) {
  return (
    <>
      <Reveal delay={200}>
        <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:mt-12">
          Our commitments
        </h3>
      </Reveal>

      <ol className="mt-5 border-t border-ink/15">
        {items.map((item, i) => (
          <li key={item} className="border-b border-ink/15">
            <Reveal
              delay={240 + i * 60}
              className="flex items-baseline gap-4 py-5 sm:gap-6"
            >
              <span
                aria-hidden
                className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-amber sm:text-xs"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base leading-relaxed text-ink sm:text-lg">
                {item}
              </span>
            </Reveal>
          </li>
        ))}
      </ol>
    </>
  );
}
