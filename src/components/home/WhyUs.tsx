import {
  BadgeCheck,
  CalendarCheck,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const VALUES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Safety first",
    text: "One standard on every site, from the first excavation to the final snag.",
  },
  {
    icon: CalendarCheck,
    title: "On schedule",
    text: "Programmes are resourced before they are promised — then they are held.",
  },
  {
    icon: BadgeCheck,
    title: "Quality assured",
    text: "QA/QC at every stage, with sign-off documented rather than assumed.",
  },
  {
    icon: FileText,
    title: "Transparent reporting",
    text: "Weekly progress, cost and risk reporting you can actually act on.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-heading"
      className="bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Why Rockfield
          </p>
        </Reveal>

        <h2 id="why-heading" className="sr-only">
          Why Rockfield
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-8">
          {VALUES.map((value, i) => {
            const Icon = value.icon;

            return (
              <li key={value.title}>
                <Reveal delay={100 + i * 80}>
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
