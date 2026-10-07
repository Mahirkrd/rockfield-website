/**
 * Leadership placeholders. Names are deliberately bracketed, and the photos
 * illustrate each role on site rather than showing the individual — swap both
 * for real portraits before launch. Moves to the database later.
 */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  /** One line on what this person is accountable for. */
  focus: string;
  /** Card photo. Local path under /public — see src/data/images.ts. */
  image: string;
  /** Alt text for `image`. Describes the photo, not the person. */
  imageAlt: string;
};

export const LEADERSHIP: TeamMember[] = [
  {
    id: "managing-director",
    name: "[Full Name]",
    role: "Managing Director",
    focus: "Company strategy, client relationships, and final sign-off on every tender.",
    image: "/images/team-1.jpg",
    imageAlt:
      "A construction worker in a hard hat and safety glasses standing on site.",
  },
  {
    id: "operations-director",
    name: "[Full Name]",
    role: "Operations Director",
    focus: "Site delivery across all live contracts, plant, and crew allocation.",
    image: "/images/team-2.jpg",
    imageAlt:
      "A site worker cutting and fixing timber with a power tool.",
  },
  {
    id: "head-of-engineering",
    name: "[Full Name]",
    role: "Head of Engineering",
    focus: "Design coordination, temporary works, and structural methodology.",
    image: "/images/team-3.jpg",
    imageAlt:
      "Hands working over a technical drawing with a scale rule alongside.",
  },
  {
    id: "hse-manager",
    name: "[Full Name]",
    role: "HSE Manager",
    focus: "Health, safety and environment standards, inductions, and audits.",
    image: "/images/team-4.jpg",
    imageAlt:
      "A team in hard hats and hi-vis working together at height on a structure.",
  },
];
