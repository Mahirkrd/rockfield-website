import { Reveal } from "@/components/ui/Reveal";
import { PlateImage } from "@/components/ui/PlateImage";
import { FLEET_IMAGE } from "@/data/images";
import {
  COMPANY_SECTIONS,
  FLEET,
  FLEET_TOTAL,
  type FleetRow,
} from "@/data/company";

/**
 * The profile's fleet list as a dark spec sheet: a real excavation photo
 * beside a table from md up, and one compact card per row on phones.
 */
export function Fleet() {
  const { id, title } = COMPANY_SECTIONS.fleet;

  return (
    // overflow-clip, not overflow-hidden: hidden would make the section a
    // scroll container and stop the photo from sticking to the viewport.
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative overflow-clip bg-ink text-paper"
    >
      {/* Blueprint grid, faded out toward the bottom */}
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Plant &amp; Equipment
          </p>
        </Reveal>

        <Reveal delay={80}>
          {/* Two unbreakable halves: on a phone the count drops to its own
              line instead of stranding the "·" */}
          <h2
            id={`${id}-heading`}
            className="mt-5 max-w-3xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            <span className="whitespace-nowrap">{title}</span>{" "}
            <span className="whitespace-nowrap text-amber">
              &middot; {FLEET_TOTAL} units
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-12 lg:grid lg:grid-cols-12 lg:gap-12">
          {/* From lg the photo stays in view beside the longer table. */}
          <Reveal
            delay={160}
            className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start"
          >
            {/* 4:3 — the photo's own ratio — except on tablets, where a 16:9
                band keeps the table close. The machines sit low in the frame,
                so that crop keeps the lower part. A tall plate is avoided on
                purpose: it would show this landscape shot mostly as sky. */}
            <figure className="relative aspect-[4/3] w-full overflow-hidden border border-paper/15 bg-ink sm:aspect-[16/9] lg:aspect-[4/3]">
              <PlateImage
                src={FLEET_IMAGE.src}
                alt={FLEET_IMAGE.alt}
                sizes="(min-width: 1024px) 40vw, 92vw"
                objectPosition="45% 75%"
              />
              <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
                {FLEET_IMAGE.caption} &middot; Fig. 01
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={240} className="mt-10 lg:col-span-7 lg:mt-0">
            <FleetTable />
            <FleetCards />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** One "Make, model and year" cell: each part of it on its own line. */
function Models({ row }: { row: FleetRow }) {
  return row.models.map((model) => (
    <span key={model} className="block">
      {model}
    </span>
  ));
}

/** md and up: a real table, with the quantities totalled in the footer. */
function FleetTable() {
  return (
    <table className="hidden w-full border-collapse text-left md:table">
      <caption className="sr-only">
        Fleet: equipment, make, model and year, and quantity
      </caption>
      <thead>
        <tr className="border-b border-paper/20">
          <th
            scope="col"
            className="pb-3 pr-6 font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-paper/50"
          >
            Equipment
          </th>
          <th
            scope="col"
            className="pb-3 pr-6 font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-paper/50"
          >
            Make, model and year
          </th>
          <th
            scope="col"
            className="pb-3 text-right font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-paper/50"
          >
            Qty
          </th>
        </tr>
      </thead>

      <tbody>
        {FLEET.map((row) => (
          <tr key={row.equipment} className="border-b border-paper/10 align-top">
            <th
              scope="row"
              className="py-4 pr-6 font-display text-sm font-bold uppercase leading-snug tracking-tight"
            >
              {row.equipment}
            </th>
            <td className="py-4 pr-6 text-sm leading-relaxed text-paper/70">
              <Models row={row} />
            </td>
            <td className="py-4 text-right font-display text-lg font-bold leading-snug tabular-nums">
              {row.qty}
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <th
            scope="row"
            colSpan={2}
            className="pt-5 font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-paper/50"
          >
            Total units
          </th>
          <td className="pt-5 text-right font-display text-2xl font-bold tabular-nums text-amber">
            {FLEET_TOTAL}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

/** Phones: each row as a compact card, then the total. */
function FleetCards() {
  return (
    <div className="md:hidden">
      <ul className="space-y-3">
        {FLEET.map((row) => (
          <li key={row.equipment} className="border border-paper/10 p-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base leading-snug">{row.equipment}</h3>
              <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
                Qty{" "}
                <span className="font-display text-lg font-bold tracking-tight text-paper tabular-nums">
                  {row.qty}
                </span>
              </p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">
              <span className="sr-only">Make, model and year: </span>
              <Models row={row} />
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-5 flex items-baseline justify-between border-t border-paper/20 pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
          Total units
        </span>
        <span className="font-display text-2xl font-bold tabular-nums text-amber">
          {FLEET_TOTAL}
        </span>
      </p>
    </div>
  );
}
