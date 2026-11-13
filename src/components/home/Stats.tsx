"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/use-in-view";
import { STATS, STATS_LINE, type Stat } from "@/data/stats";

export function Stats() {
  // One observer for the whole strip so all four figures arrive together.
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  return (
    <section aria-labelledby="stats-heading" className="bg-paper">
      <h2 id="stats-heading" className="sr-only">
        Rockfield at a glance
      </h2>

      {/* gap-px over a tinted background paints the hairline rules */}
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-ink/10 lg:grid-cols-4"
      >
        {STATS.map((stat) => (
          <StatCell key={stat.label} stat={stat} run={inView} />
        ))}
      </div>

      {/* The profile's line under the figures, ruled off below them and
          indented to sit in line with the figures above. */}
      <div className="mx-auto max-w-6xl border-t border-ink/10 px-5 py-6 sm:px-6 sm:py-7 lg:px-8">
        <p className="max-w-3xl text-sm leading-relaxed text-grey sm:text-base">
          {STATS_LINE}
        </p>
      </div>
    </section>
  );
}

function StatCell({ stat, run }: { stat: Stat; run: boolean }) {
  return (
    // A size container, so the figure below can be sized against the cell.
    <div className="@container flex flex-col justify-between bg-paper px-5 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
      {/* Each breakpoint's design size, capped at 19% of the cell's width.
          "Nationwide" runs ~5.2em, so it fits at 19cqi with room to spare.
          Every cell in the strip is the same width, so when the cap applies
          (phones, and four-across from lg) all four figures drop to the same
          size together and still read as one set. */}
      <p className="font-display text-[length:min(2.25rem,19cqi)] font-bold leading-none tracking-tight tabular-nums sm:text-[length:min(3rem,19cqi)] lg:text-[length:min(3.75rem,19cqi)]">
        {/* The visible figure is hidden from assistive tech (it may be
            mid-count); the sr-only line below carries the final value. */}
        <span aria-hidden>
          {stat.countUp ? (
            <CountUp to={Number(stat.value)} run={run} />
          ) : (
            stat.value
          )}
          {stat.suffix && <span className="text-amber">{stat.suffix}</span>}
        </span>
        <span className="sr-only">
          {stat.value}
          {stat.suffix} {stat.label}
        </span>
      </p>
      <p
        aria-hidden
        className="mt-3 font-mono text-[11px] uppercase leading-snug tracking-[0.18em] text-grey sm:mt-4 sm:text-xs"
      >
        {stat.label}
      </p>
    </div>
  );
}

/** Eases a whole number from zero up to `to` once `run` flips true. */
function CountUp({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;

    // Reduced motion just snaps to the final figure on the first frame.
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduced ? 0 : 1400;
    let frame = 0;
    let started: number | null = null;

    const tick = (now: number) => {
      started ??= now;
      const p = duration === 0 ? 1 : Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, to]);

  return n;
}
