"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/use-in-view";
import { STATS, type Stat } from "@/data/stats";

export function Stats() {
  // One observer for the whole strip so all four numbers run together.
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  return (
    <section aria-labelledby="stats-heading" className="bg-paper">
      <h2 id="stats-heading" className="sr-only">
        Rockfield by the numbers
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
    </section>
  );
}

function StatCell({ stat, run }: { stat: Stat; run: boolean }) {
  const shown = useCountUp(stat.value, stat.decimals, run);

  return (
    <div className="flex flex-col justify-between bg-paper px-5 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
      <p className="font-display text-4xl font-bold leading-none tracking-tight tabular-nums sm:text-5xl lg:text-6xl">
        {/* The ticking value is hidden from assistive tech; the sr-only line
            below carries the final figure instead. */}
        <span aria-hidden>
          {shown}
          <span className="text-amber">{stat.suffix}</span>
        </span>
        <span className="sr-only">
          {stat.value.toFixed(stat.decimals)}
          {stat.suffix} {stat.label}
        </span>
      </p>
      <p
        aria-hidden
        className="mt-3 font-mono text-[11px] uppercase leading-snug tracking-[0.18em] text-grey sm:mt-4 sm:text-xs"
      >
        {stat.labelNode ?? stat.label}
      </p>
    </div>
  );
}

/** Eases from zero to `target` once `run` flips true. */
function useCountUp(target: number, decimals: number, run: boolean) {
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
      setN(target * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, target]);

  return n.toFixed(decimals);
}
