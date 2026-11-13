/**
 * QHSE-page content — the approved profile, sections 16 and 17, in its own
 * words (docs/profile-content.md). Where the profile runs a list together in
 * one sentence, each item here is one row on the page; the words are unchanged.
 */

/**
 * The page's sections, in page order. Each `id` is the section's anchor on
 * /qhse and each `title` is its headline. The header's QHSE menu is built
 * from this list, using `menuLabel` where a headline is too long for it.
 */
export const QHSE_SECTIONS = {
  quality: { id: "quality", title: "Quality" },
  hse: {
    id: "hse",
    title: "Health, Safety & Environment",
    menuLabel: "HSE",
  },
  conduct: { id: "code-of-conduct", title: "Code of Conduct" },
} as const;

/**
 * Word for word, always. The system is being aligned with these standards —
 * never describe it, or Rockfield, as "certified".
 */
export const QHSE_STATEMENT =
  "Our QHSE management system is being progressively aligned with ISO 45001, ISO 9001 and ISO 14001.";

export const QUALITY: string[] = [
  "Approved materials, drawings and specifications",
  "Inspection and test records",
  "Control of non-conforming work",
];

export const HEALTH_SAFETY: string[] = [
  "Hazard identification and risk assessment",
  "Permit-to-work",
  "PPE",
  "Toolbox talks",
  "Emergency preparedness",
];

export const ENVIRONMENT: string[] = [
  "Pollution prevention",
  "Waste minimisation",
  "Spill control",
  "Protection of soil, water, air and communities",
];

export type Clause = { title: string; text: string };

export const CODE_OF_CONDUCT: Clause[] = [
  {
    title: "Integrity",
    text: "Zero tolerance for bribery, corruption, kickbacks and improper payments.",
  },
  {
    title: "Respect",
    text: "Equal opportunity, and zero tolerance for harassment, bullying and abuse.",
  },
  {
    title: "Confidentiality",
    text: "Protection of tender, contract, financial and client information.",
  },
  {
    title: "Stop Work Authority",
    text: "Anyone may stop work in a serious danger, with no retaliation.",
  },
];
