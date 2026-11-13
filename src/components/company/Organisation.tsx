import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  COMPANY_SECTIONS,
  LEADERSHIP_TEXT,
  ORGANISATION,
} from "@/data/company";

/** The profile's leadership text, then its organisation structure as a chart. */
export function Organisation() {
  const { id, title } = COMPANY_SECTIONS.organisation;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="bg-concrete">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Leadership
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id={`${id}-heading`}
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey sm:mt-8 sm:text-lg">
            {LEADERSHIP_TEXT}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <OrgChart />
        </Reveal>
      </div>
    </section>
  );
}

/*
 * The chart is nested lists, so assistive tech reads the hierarchy as-is.
 * Every connector is a 1px ink/25 hairline drawn by a pseudo-element.
 *
 * Below md it is an indented tree: a rail runs down 20px in from the left
 * (left-5) and a tick runs from it into each child. A tick sits level with
 * the middle of its box, so those offsets are fixed:
 *   branch node  h-14 (56px) under pt-6 (24px)  →  tick at 52px (3.25rem)
 *   leaf box     38px tall under pt-3 (12px)    →  tick at 31px
 * The last child's rail stops at its tick, which is what closes the tree.
 *
 * From md the top runs down a centred spine, and a bus under the General
 * Manager drops into the two branch columns; each branch keeps its tree.
 */
function OrgChart() {
  const { leadership, projectManager, departments, departmentsNote, support } =
    ORGANISATION;
  const [ceo, gm] = leadership;

  return (
    <figure className="mt-10 sm:mt-12">
      <figcaption className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
        Organisation structure
      </figcaption>

      <ul className="mt-6 md:mx-auto md:mt-8 md:max-w-4xl">
        <li>
          <LeadNode>{ceo}</LeadNode>

          <ul>
            {/* CEO → General Manager */}
            <li className="relative pt-8 before:absolute before:left-5 before:top-0 before:h-8 before:w-px before:bg-ink/25 md:before:left-1/2">
              <LeadNode>{gm}</LeadNode>

              {/* From md: a stem down from the General Manager, then a bus
                  from the centre of one column to the centre of the other
                  (gap-x-10 is 2.5rem, so each centre sits 0.625rem in from
                  the quarter mark). */}
              <ul className="relative md:grid md:grid-cols-2 md:gap-x-10 md:pt-8 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-4 md:before:w-px md:before:bg-ink/25 md:after:absolute md:after:left-[calc(25%-0.625rem)] md:after:right-[calc(25%-0.625rem)] md:after:top-4 md:after:h-px md:after:bg-ink/25">
                <Branch node={<BranchNode>{projectManager}</BranchNode>}>
                  <Leaves>
                    {departments.map((department) => (
                      <Leaf key={department}>
                        <span className="block font-mono text-xs uppercase leading-5 tracking-[0.15em] text-ink">
                          {department}
                        </span>
                      </Leaf>
                    ))}
                  </Leaves>
                  <p className="mt-4 pl-10 text-sm leading-relaxed text-grey">
                    {departmentsNote}.
                  </p>
                </Branch>

                <Branch
                  node={<BranchNode group>Support functions</BranchNode>}
                >
                  <Leaves>
                    {support.map((fn) => (
                      <Leaf key={fn.title}>
                        <span className="block font-mono text-xs uppercase leading-5 tracking-[0.15em] text-ink">
                          {fn.title}
                        </span>
                        <span className="block text-sm leading-5 text-grey">
                          {fn.teams}
                        </span>
                      </Leaf>
                    ))}
                  </Leaves>
                </Branch>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </figure>
  );
}

/** CEO and General Manager: the only boxes with the amber accent. */
function LeadNode({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-14 items-center gap-3 border border-ink/25 bg-paper px-5 sm:max-w-sm md:mx-auto md:w-72 md:max-w-none md:justify-center">
      <span
        aria-hidden
        className="absolute -inset-x-px -top-px h-0.5 bg-amber"
      />
      <span aria-hidden className="h-2 w-2 shrink-0 bg-amber" />
      <span className="font-display text-base font-bold uppercase leading-none tracking-tight sm:text-lg">
        {children}
      </span>
    </div>
  );
}

/**
 * A branch under the General Manager. Below md: a child on the rail, with a
 * tick into its node. From md: a column with a drop from the bus.
 */
function Branch({ node, children }: { node: ReactNode; children: ReactNode }) {
  return (
    <li className="relative pl-10 pt-6 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-ink/25 after:absolute after:left-5 after:top-[3.25rem] after:h-px after:w-5 after:bg-ink/25 last:before:h-[3.25rem] md:pl-0 md:pt-0 md:before:-top-4 md:before:left-1/2 md:before:h-4 md:after:hidden md:last:before:h-4">
      {node}
      {children}
    </li>
  );
}

/** A role (solid box), or a group of functions (dashed box, mono label). */
function BranchNode({
  group = false,
  children,
}: {
  group?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex h-14 items-center bg-paper px-5 sm:max-w-sm md:max-w-none md:justify-center ${
        group ? "border border-dashed border-ink/30" : "border border-ink/15"
      }`}
    >
      <span
        className={
          group
            ? "font-mono text-xs uppercase tracking-[0.18em] text-grey"
            : "font-display text-base font-bold uppercase leading-none tracking-tight sm:text-lg"
        }
      >
        {children}
      </span>
    </div>
  );
}

/** The tree under a branch node: its rail starts 20px in from the node's edge. */
function Leaves({ children }: { children: ReactNode }) {
  return <ul className="sm:max-w-sm md:max-w-none">{children}</ul>;
}

function Leaf({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-10 pt-3 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-ink/25 after:absolute after:left-5 after:top-[31px] after:h-px after:w-5 after:bg-ink/25 last:before:h-[31px]">
      <div className="border border-ink/15 bg-paper px-4 py-2">{children}</div>
    </li>
  );
}
