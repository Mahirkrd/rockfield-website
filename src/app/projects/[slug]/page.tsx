import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectFigures } from "@/components/projects/ProjectFigures";
import { NextProject } from "@/components/projects/NextProject";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { CtaBand } from "@/components/ui/CtaBand";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) return { title: "Project not found — Rockfield" };

  return {
    title: `${project.title} — Rockfield`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) notFound();

  const services = SERVICES.filter((s) => project.serviceIds.includes(s.id));
  const index = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const more = PROJECTS.filter(
    (p) => p.id !== project.id && p.category === project.category,
  ).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${project.category} · ${project.year}`}
        title={project.title}
        intro={project.summary}
        image={{ src: project.image, alt: project.imageAlt }}
      />

      {/* Image plate + narrative + facts */}
      <section id="overview" aria-labelledby="overview-heading" className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-grey transition-colors hover:text-amber"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All projects
            </Link>
          </Reveal>

          <div className="mt-6">
            <ProjectFigures project={project} />
          </div>

          <div className="mt-10 sm:mt-12 lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal delay={160}>
                <h2 id="overview-heading" className="text-2xl leading-tight sm:text-3xl">
                  Overview
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-5 max-w-2xl space-y-5 text-base leading-relaxed text-grey sm:mt-6 sm:text-lg">
                  {project.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              {/* Scope of works */}
              <Reveal delay={240}>
                <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:mt-12">
                  Scope of works
                </h3>
                <ul className="mt-5 border-t border-ink/15">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-ink/15 py-4 text-sm leading-relaxed sm:text-base"
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
              </Reveal>
            </div>

            {/* Fact panel */}
            <Reveal delay={280} className="mt-10 lg:col-span-5 lg:mt-0">
              <div className="relative overflow-hidden bg-ink text-paper">
                <div
                  aria-hidden
                  className="slash pointer-events-none absolute -right-6 -top-6 h-20 w-20 opacity-90 sm:h-24 sm:w-24"
                />

                <p className="relative border-b border-paper/10 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50 sm:px-6">
                  Project Spec
                </p>

                <dl className="relative">
                  <div className="flex items-baseline justify-between gap-4 border-b border-paper/10 px-5 py-4 sm:px-6 sm:py-5">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-grey sm:text-xs">
                      Location
                    </dt>
                    <dd className="text-right font-display text-sm font-bold uppercase tracking-tight sm:text-base">
                      {project.location}
                    </dd>
                  </div>
                  {project.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 border-b border-paper/10 px-5 py-4 last:border-b-0 sm:px-6 sm:py-5"
                    >
                      <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-grey sm:text-xs">
                        {fact.label}
                      </dt>
                      <dd className="text-right font-display text-sm font-bold uppercase tracking-tight sm:text-base">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Services used */}
              {services.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
                    Services used
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={service.href}
                          className="group flex items-center gap-3 border border-ink/15 px-4 py-3 transition-colors hover:border-ink"
                        >
                          <ServiceIcon
                            id={service.id}
                            className="h-5 w-5 shrink-0 text-amber"
                          />
                          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-grey transition-colors group-hover:text-ink">
                            {service.label}
                          </span>
                          <ArrowRight
                            className="ml-auto h-3.5 w-3.5 shrink-0 text-grey transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* More in the same category */}
      {more.length > 0 && (
        <section
          id="more-projects"
          aria-labelledby="more-heading"
          className="bg-concrete"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
                <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
                More {project.category}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="more-heading"
                className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
              >
                Related work.
              </h2>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {more.map((other, i) => (
                <li key={other.id}>
                  <Reveal delay={120 + i * 70}>
                    <ProjectCard project={other} figure={i + 1} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <NextProject project={next} />

      <CtaBand />
    </>
  );
}
