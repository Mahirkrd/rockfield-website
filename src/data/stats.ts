/**
 * "Rockfield at a glance" — the approved company profile, section 3, word for
 * word (docs/profile-content.md). The one list behind the stat strip on Home
 * and About and the rows of the Company Spec panel, so they always agree.
 */

export type Stat = {
  /** The figure exactly as the profile gives it, minus any suffix. */
  value: string;
  /** Drawn in amber straight after the value. */
  suffix?: string;
  label: string;
  /**
   * Counts up from zero as the strip scrolls in. Only for a quantity — a
   * year or a place is shown as written.
   */
  countUp?: boolean;
};

export const STATS: Stat[] = [
  { value: "2010", label: "Team active since" },
  { value: "Erbil", label: "Headquarters" },
  { value: "120", suffix: "+", label: "Specialists", countUp: true },
  { value: "Nationwide", label: "Coverage" },
];

/** The line the profile sets under the figures. */
export const STATS_LINE =
  "One contract and one accountable team, from site investigation and earthworks to structure, envelope and fit-out.";
