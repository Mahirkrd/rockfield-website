/** QHSE-page content. Moves to the database later. */

/**
 * The page's sections, in page order. Each `id` is the section's anchor on
 * /qhse and each `title` is its headline. The header's QHSE menu is built
 * from this list, using `menuLabel` where a headline is too long for it.
 */
export const QHSE_SECTIONS = {
  quality: { id: "quality", title: "Quality Policy" },
  hse: {
    id: "hse",
    title: "Health, Safety & Environment Policy",
    menuLabel: "HSE Policy",
  },
} as const;

export type Policy = {
  intro: string;
  /** Numbered on the page, in this order. */
  commitments: string[];
};

export const QUALITY_POLICY: Policy = {
  intro:
    "Rockfield is committed to delivering work that meets or exceeds the expectations of our clients and the requirements of every project. We achieve this through disciplined planning, clear standards, and continuous improvement across all our operations.",
  commitments: [
    "Deliver every project to agreed specifications, codes, and standards.",
    "Plan and review each stage to prevent defects before they occur.",
    "Work only with qualified teams and approved suppliers and materials.",
    "Measure performance and act on lessons learned to improve continuously.",
    "Hold every member of our team accountable for the quality of their work.",
  ],
};

export const HSE_POLICY: Policy = {
  intro:
    "Rockfield is committed to protecting the health and safety of everyone involved in our projects and to minimising our impact on the environment. We believe all incidents are preventable, and we work to the principle that no task is so urgent that it cannot be done safely.",
  commitments: [
    "Provide a safe working environment and the training to maintain it.",
    "Identify, assess, and control risks before work begins.",
    "Comply with all applicable health, safety, and environmental regulations.",
    "Supply and enforce the use of appropriate protective equipment.",
    "Prevent pollution and manage waste responsibly on every site.",
    "Review our performance regularly and improve our standards over time.",
  ],
};
