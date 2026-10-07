import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import { SERVICES } from "@/data/services";


export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-concrete"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            What We Do
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="services-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            Full-scope construction services.
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
              <li key={service.id}>
                <Reveal delay={120 + i * 70} className="h-full">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col overflow-hidden border border-ink/10 bg-paper p-6 transition-colors hover:border-ink/25 sm:p-7"
                  >
                    {/* Amber corner-cut, wiped in on hover or keyboard focus */}
                    <span
                      aria-hidden
                      className="absolute right-0 top-0 h-0 w-0 origin-top-right scale-0 border-l-[28px] border-t-[28px] border-l-transparent border-t-amber transition-transform duration-300 ease-out group-hover:scale-100 group-focus-visible:scale-100 sm:border-l-[34px] sm:border-t-[34px]"
                    />

                    {/* Fixed 16:9 plate above the card body — no shift on load */}
                    <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/9] overflow-hidden bg-ink sm:-mx-7 sm:-mt-7">
                      <PlateImage
                        src={service.image}
                        alt={service.imageAlt}
                        sizes="(min-width: 1024px) 368px, (min-width: 640px) 46vw, 92vw"
                        zoom
                      />
                    </div>

                    <span className="flex items-center justify-between">
                      <ServiceIcon
                        id={service.id}
                        className="h-7 w-7 text-ink transition-colors group-hover:text-amber sm:h-8 sm:w-8"
                      />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-grey/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <h3 className="mt-6 text-lg leading-tight sm:text-xl">
                      {service.label}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-grey">
                      {service.description}
                    </p>
                  </Link>
                </Reveal>
              </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
