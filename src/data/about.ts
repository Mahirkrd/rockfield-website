/** About-page content. Moves to the database later. */

export type Commitment = {
  /** Key for the icon lookup in the Values component. */
  icon: "safety" | "quality" | "compliance" | "improvement";
  title: string;
  text: string;
};

/**
 * "Our Commitments" — the approved company profile, section 6, word for word
 * (docs/profile-content.md). Rendered by the About page's Values section.
 */
export const COMMITMENTS: { intro: string; items: Commitment[] } = {
  intro:
    "Rockfield delivers high-quality construction and engineering services, with safety, ethics and compliance built into every project.",
  items: [
    {
      icon: "safety",
      title: "Safe workplaces",
      text: "Safe and healthy working conditions for our people, clients and the public.",
    },
    {
      icon: "quality",
      title: "Quality delivery",
      text: "Work done right the first time, to approved drawings and specifications.",
    },
    {
      icon: "compliance",
      title: "Compliance",
      text: "Adherence to Iraqi and Kurdistan Region legislation and contract requirements.",
    },
    {
      icon: "improvement",
      title: "Continuous improvement",
      text: "Regular management review of policies and performance.",
    },
  ],
};
