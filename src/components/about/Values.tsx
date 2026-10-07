import {
  FileCheck,
  Hammer,
  Handshake,
  Leaf,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { VALUES, type Value } from "@/data/about";

const ICONS: Record<Value["icon"], LucideIcon> = {
  integrity: Scale,
  safety: ShieldCheck,
  craft: Hammer,
  accountability: FileCheck,
  partnership: Handshake,
  stewardship: Leaf,
};

export function Values() {
  return (
    <section id="values" aria-labelledby="values-heading" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            What We Stand For
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="values-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            Six things we will not trade away.
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-8">
          {VALUES.map((value, i) => {
            const Icon = ICONS[value.icon];

            return (
              <li key={value.title}>
                <Reveal delay={120 + i * 70}>
                  <div className="border-t border-ink/15 pt-6">
                    <Icon
                      className="h-8 w-8 text-amber"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-lg leading-tight sm:text-xl">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-grey">
                      {value.text}
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
