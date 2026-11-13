import { Reveal } from "@/components/ui/Reveal";
import type { Clause } from "@/data/qhse";

type ClauseListProps = {
  /** Small mono heading over the list. Leave it out when the section's own
      headline already says what the list is. */
  label?: string;
  /** Plain rows, or titled rows (a heading with its line beneath). */
  items: string[] | Clause[];
  /** When the label reveals; the rows follow on from it. */
  delay?: number;
};

/**
 * Numbered spec-sheet rows — the project pages' "Scope of works" list, with
 * clause numbers in place of the checkmarks.
 */
export function ClauseList({ label, items, delay = 200 }: ClauseListProps) {
  return (
    <>
      {label && (
        <Reveal delay={delay}>
          <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:mt-12">
            {label}
          </h3>
        </Reveal>
      )}

      <ol className={`border-t border-ink/15 ${label ? "mt-5" : "mt-10 sm:mt-12"}`}>
        {items.map((item, i) => {
          const clause = typeof item === "string" ? { text: item } : item;

          return (
            <li key={clause.text} className="border-b border-ink/15">
              <Reveal
                delay={delay + 40 + i * 60}
                className="flex items-baseline gap-4 py-5 sm:gap-6"
              >
                <span
                  aria-hidden
                  className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-amber sm:text-xs"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {"title" in clause ? (
                  <div className="min-w-0">
                    <h3 className="text-lg leading-tight sm:text-xl">
                      {clause.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-grey">
                      {clause.text}
                    </p>
                  </div>
                ) : (
                  <span className="text-base leading-relaxed text-ink sm:text-lg">
                    {clause.text}
                  </span>
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>
    </>
  );
}
