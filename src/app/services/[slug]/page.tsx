import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PlateImage } from "@/components/ui/PlateImage";
import { CtaBand } from "@/components/ui/CtaBand";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) return { title: "Service not found — Rockfield" };

  return {
    title: `${service.label} — Rockfield`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) notFound();

  const related = PROJECTS.filter((p) => p.serviceIds.includes(service.id));
  const others = SERVICES.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.label}
        intro={service.summary}
        image={{ src: service.image, alt: service.imageAlt }}
      />

      {/* Description + scope checklist */}
      <section
        id="scope"
        aria-labelledby="scope-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-grey transition-colors hover:text-amber"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All services
              </Link>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="scope-heading"
                className="mt-6 flex items-center gap-4 text-2xl leading-tight sm:text-3xl"
              >
                <ServiceIcon
                  id={service.id}
                  className="h-9 w-9 shrink-0 text-amber sm:h-10 sm:w-10"
                />
                How we work
              </h2>
            </Reveal>

            <Reveal delay={120}>
              {/* Fixed 16:9 plate — the space is reserved before it loads */}
              <figure className="relative mt-6 aspect-[16/9] w-full overflow-hidden bg-ink sm:mt-8">
                <PlateImage
                  src={service.image}
                  alt={service.imageAlt}
                  sizes="(min-width: 1024px) 632px, 92vw"
                />
                <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
                  {service.label}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
                {service.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* What's included */}
          <Reveal delay={240} className="mt-10 lg:col-span-5 lg:mt-0">
            <div className="border border-ink/15 bg-concrete">
              <p className="border-b border-ink/15 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:px-6">
                What&rsquo;s included
              </p>
              <ul className="px-5 py-2 sm:px-6">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-ink/10 py-4 text-sm leading-relaxed last:border-b-0 sm:text-base"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section
          id="related-projects"
          aria-labelledby="related-heading"
          className="bg-concrete"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
                <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
                Selected Work
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="related-heading"
                className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
              >
                {service.label} in practice.
              </h2>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {related.map((project, i) => (
                <li key={project.id}>
                  <Reveal delay={120 + i * 70}>
                    <ProjectCard project={project} figure={i + 1} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Other services */}
      <section
        aria-labelledby="other-services-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <h2
            id="other-services-heading"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs"
          >
            Other services
          </h2>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {others.map((other) => (
              <li key={other.id}>
                <Link
                  href={other.href}
                  className="group inline-flex items-center gap-2 border border-ink/15 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-grey transition-colors hover:border-ink hover:text-ink"
                >
                  {other.label}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
