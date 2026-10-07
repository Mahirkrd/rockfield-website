import type { ReactNode } from "react";

export type Stat = {
  value: number;
  decimals: number;
  suffix: string;
  /** Plain text — also used for the screen-reader line. */
  label: string;
  /** Optional rich rendering of the same label. */
  labelNode?: ReactNode;
};

export const STATS: Stat[] = [
  { value: 15, decimals: 0, suffix: "+", label: "Years of team experience" },
  { value: 240, decimals: 0, suffix: "+", label: "Projects delivered" },
  {
    value: 1.2,
    decimals: 1,
    suffix: "M",
    label: "m² Built",
    // `uppercase` would render the SI unit as "M².
    labelNode: (
      <>
        <span className="lowercase">m²</span> Built
      </>
    ),
  },
  { value: 100, decimals: 0, suffix: "%", label: "Safety-first sites" },
];
