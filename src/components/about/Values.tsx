import {
  BadgeCheck,
  FileCheck,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { COMMITMENTS, type Commitment } from "@/data/about";

// Safety and quality reuse the icons the mission's values use just above.
const ICONS: Record<Commitment["icon"], LucideIcon> = {
  safety: ShieldCheck,
  quality: BadgeCheck,
  compliance: FileCheck,
  improvement: RefreshCw,
};

/** The About page's company commitments. */
export function Values() {
  return (
    <section
      id="commitments"
      aria-labelledby="commitments-heading"
      className="bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            What We Stand For
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="commitments-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            Our Commitments
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
            {COMMITMENTS.intro}
          </p>
        </Reveal>

        {/* Four across from lg, matching Why Rockfield on the homepage */}
        <ul className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-8">
          {COMMITMENTS.items.map((item, i) => {
            const Icon = ICONS[item.icon];

            return (
              <li key={item.title}>
                <Reveal delay={200 + i * 70}>
                  <div className="border-t border-ink/15 pt-6">
                    <Icon
                      className="h-8 w-8 text-amber"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-lg leading-tight sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-grey">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
