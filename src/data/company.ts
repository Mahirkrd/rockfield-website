/** Company-page content. Moves to the database later. */

/**
 * The page's sections, in page order. Each `id` is the section's anchor on
 * /company and each `title` is its headline — the header's Company menu is
 * built from this list, so a menu link can never point at a missing section.
 */
export const COMPANY_SECTIONS = {
  profile: { id: "our-company", title: "Our Company" },
  vision: { id: "vision", title: "Our Vision" },
  mission: { id: "mission", title: "Our Mission" },
  team: { id: "team", title: "Our Team" },
  clients: { id: "clients", title: "Our Clients" },
} as const;

export const COMPANY_PROFILE: string[] = [
  "Rockfield for General Contracting is built on the experience of a team active in the construction sector since 2010. Through work under various business names and contracting engagements, our team developed the expertise and professional relationships that laid the foundation for Rockfield.",
  "We believe successful projects begin with understanding our clients’ priorities. Combining practical expertise, close collaboration, and attention to detail, we translate their requirements into lasting results. We strive to be a dependable partner, supporting our clients’ ambitions and contributing to the development of the communities we serve.",
];

export const COMPANY_VISION = {
  statement:
    "To be the most trusted name in general contracting, building lasting confidence through excellence in every project.",
  /** The phrase within `statement` picked out in amber. */
  highlight: "most trusted name",
};

export const COMPANY_MISSION = {
  statement:
    "To deliver integrated contracting solutions for every client and project type, from engineering to handover and beyond, guided by quality, safety, and integrity, to secure enduring client satisfaction.",
  /** The principles the statement names, called out beneath it. */
  principles: ["Quality", "Safety", "Integrity"],
} as const;

export type CompanyTeamMember = {
  id: string;
  /** Bracketed until the real name is confirmed. */
  name: string;
  role: string;
  /** One line on what this person is responsible for. */
  bio: string;
  /** Card photo. Local path under /public — see src/data/images.ts. */
  image: string;
  /** Alt text for `image`. Describes the photo, not the person. */
  imageAlt: string;
};

/**
 * The Company page's team. Names are deliberately bracketed placeholders, and
 * the photos show each role on site rather than the person — swap both before
 * launch. Kept apart from the About page's leadership list (src/data/team.ts),
 * with its own photo slots, so editing one never changes the other.
 */
export const COMPANY_TEAM: { intro: string; members: CompanyTeamMember[] } = {
  intro:
    "Rockfield is led by an experienced team that combines technical expertise with hands-on delivery. Our people are the foundation of every project we complete.",
  members: [
    {
      id: "general-manager",
      name: "[Full Name]",
      role: "General Manager",
      bio: "Leads the company’s overall direction, client relationships, and delivery standards across all projects.",
      image: "/images/company-team-1.jpg",
      imageAlt:
        "A construction worker in a hard hat and safety glasses standing on site.",
    },
    {
      id: "projects-operations-manager",
      name: "[Full Name]",
      role: "Projects & Operations Manager",
      bio: "Oversees project planning, site execution, and day-to-day operations from mobilisation to handover.",
      image: "/images/company-team-2.jpg",
      imageAlt: "A site worker cutting and fixing timber with a power tool.",
    },
    {
      id: "technical-engineering-lead",
      name: "[Full Name]",
      role: "Technical / Engineering Lead",
      bio: "Responsible for engineering, design coordination, and technical quality on every project.",
      image: "/images/company-team-3.jpg",
      imageAlt:
        "Hands working over a technical drawing with a scale rule alongside.",
    },
    {
      id: "hse-quality-manager",
      name: "[Full Name]",
      role: "HSE / Quality Manager",
      bio: "Ensures health, safety, environmental, and quality standards are met across all sites.",
      image: "/images/company-team-4.jpg",
      imageAlt:
        "A team in hard hats and hi-vis working together at height on a structure.",
    },
  ],
};

export type Client = {
  id: string;
  name: string;
};

/**
 * Client roster. Names are deliberately bracketed placeholders — replace each
 * with a real client before launch. Any number of entries works; the grid
 * simply ends on a short row.
 */
export const CLIENTS: Client[] = [
  { id: "client-1", name: "[Client Name]" },
  { id: "client-2", name: "[Client Name]" },
  { id: "client-3", name: "[Client Name]" },
  { id: "client-4", name: "[Client Name]" },
  { id: "client-5", name: "[Client Name]" },
  { id: "client-6", name: "[Client Name]" },
  { id: "client-7", name: "[Client Name]" },
  { id: "client-8", name: "[Client Name]" },
];
