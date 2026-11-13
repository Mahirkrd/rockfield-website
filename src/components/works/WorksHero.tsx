import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import {
  WORK_CATEGORIES,
  WORK_TYPE_COUNT,
  WORKS_HERO_PHOTO,
  WORKS_INTRO,
  WORKS_PHOTO_COUNT,
  workCategoryHref,
} from "@/data/works";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The Our Works masthead: a full-bleed site photo under an ink veil, the
 * profile's eyebrow, headline and strip line (each strip name links to its
 * category), and the size of the record below it.
 */
export function WorksHero() {
  const { eyebrow, headline, strip } = WORKS_INTRO;
  // The last word picks up the amber, as "ground." does on the homepage.
  const cut = headline.lastIndexOf(" ");

  const figures = [
    { value: pad(WORK_CATEGORIES.length), label: "Categories" },
    { value: pad(WORK_TYPE_COUNT), label: "Work types" },
    { value: String(WORKS_PHOTO_COUNT), label: "Photos" },
  ];

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Image
        src={WORKS_HERO_PHOTO.src}
        alt="A wheel loader grading a long earth corridor beside a line of power poles, out towards the horizon."
        fill
        preload
        sizes="100vw"
        className="object-cover object-[60%_65%]"
      />
      {/* Ink from the foot and from the left, where the type sits */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent"
      />
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="slash pointer-events-none absolute -right-12 -top-16 h-32 w-32 opacity-90 sm:-right-16 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
      />

      <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 sm:min-h-[640px] sm:px-8 sm:pb-16 lg:min-h-[700px] lg:pb-20">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[0.95] sm:mt-6 sm:text-6xl lg:text-7xl">
            {headline.slice(0, cut + 1)}
            <span className="text-amber">{headline.slice(cut + 1)}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mt-7 flex max-w-3xl flex-wrap gap-x-2.5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/75 sm:mt-8 sm:text-xs">
            {strip.map((name, i) => (
              <li key={name} className="flex items-center gap-2.5">
                {i > 0 && (
                  <span aria-hidden className="text-amber">
                    &middot;
                  </span>
                )}
                <Link
                  href={workCategoryHref(WORK_CATEGORIES[i].slug)}
                  className="-my-1.5 py-1.5 transition-colors hover:text-amber"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <dl className="mt-10 grid max-w-xl grid-cols-3 border-t border-paper/15 pt-5 sm:mt-12">
            {figures.map((figure) => (
              <div key={figure.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 sm:text-[11px]">
                  {figure.label}
                </dt>
                <dd className="mt-1.5 font-display text-2xl font-bold leading-none tracking-tight tabular-nums sm:text-3xl">
                  {figure.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
