import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { PlateImage } from "@/components/ui/PlateImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { SERVICES } from "@/data/services";
import { HERO_IMAGE } from "@/data/images";

export const metadata: Metadata = {
  title: "Services — Rockfield",
  description:
    "Civil, structural, commercial, fit-out and project management services from Rockfield for General Contracting Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Full-scope construction services."
        intro="Nine disciplines, one contractor. Take a package or take the whole build — the accountability is the same either way."
        image={HERO_IMAGE}
      />

      <section
        id="all-services"
        aria-labelledby="all-services-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <h2 id="all-services-heading" className="sr-only">
            All services
          </h2>

          <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
            {SERVICES.map((service, i) => (
              <li key={service.id}>
                <Reveal delay={80 + i * 70} className="h-full">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col overflow-hidden border border-ink/10 bg-concrete p-6 transition-colors hover:border-ink/25 sm:p-8"
                  >
                    {/* Amber corner-cut, wiped in on hover or keyboard focus */}
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 h-0 w-0 origin-top-right scale-0 border-l-[28px] border-t-[28px] border-l-transparent border-t-amber transition-transform duration-300 ease-out group-hover:scale-100 group-focus-visible:scale-100 sm:border-l-[34px] sm:border-t-[34px]"
                    />

                    {/* Fixed 16:9 plate above the card body — no shift on load */}
                    <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/9] overflow-hidden bg-ink sm:-mx-8 sm:-mt-8 sm:mb-8">
                      <PlateImage
                        src={service.image}
                        alt={service.imageAlt}
                        sizes="(min-width: 1024px) 568px, 92vw"
                        zoom
                      />
                    </div>

                    <span className="flex items-center justify-between">
                      <ServiceIcon
                        id={service.id}
                        className="h-8 w-8 text-ink transition-colors group-hover:text-amber"
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-grey/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <h3 className="mt-6 text-xl leading-tight sm:text-2xl">
                      {service.label}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-grey sm:text-base">
                      {service.summary}
                    </p>

                    {/* First three scope items, as a taste of the detail page */}
                    <ul className="mt-5 space-y-1.5 border-t border-ink/10 pt-5">
                      {service.included.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-grey"
                        >
                          <span aria-hidden className="text-amber">
                            /
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink">
                      View service
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
