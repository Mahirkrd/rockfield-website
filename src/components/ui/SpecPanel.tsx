import { STATS } from "@/data/stats";

/**
 * Dark spec-sheet plate. Shared by the homepage About and the About page.
 * Its rows are the same "at a glance" figures as the stat strip.
 */
export function SpecPanel({ title = "Company Spec" }: { title?: string }) {
  return (
    <div className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="slash pointer-events-none absolute -right-6 -top-6 h-20 w-20 opacity-90 sm:h-24 sm:w-24"
      />

      <p className="relative border-b border-paper/10 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50 sm:px-6">
        {title}
      </p>

      <dl className="relative">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex items-baseline justify-between gap-4 border-b border-paper/10 px-5 py-4 last:border-b-0 sm:px-6 sm:py-5"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-grey sm:text-xs">
              {stat.label}
            </dt>
            <dd className="text-right font-display text-sm font-bold uppercase tracking-tight sm:text-base">
              {stat.value}
              {stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
