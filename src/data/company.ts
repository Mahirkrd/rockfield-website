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
  organisation: { id: "organisation", title: "Organisation" },
  disciplines: { id: "disciplines", title: "Our Disciplines" },
  fleet: { id: "fleet", title: "Our Fleet" },
} as const;

/**
 * "Who We Are — Our Company": the approved profile, section 2, word for word
 * (docs/profile-content.md). The About page's story and the homepage's
 * Who We Are both use exactly this.
 */
export const OUR_COMPANY: string[] = [
  "Rockfield for General Contracting is built on the experience of a team active in the construction sector since 2010. Through work under various business names and contracting engagements, our team developed the expertise and professional relationships that laid the foundation for Rockfield.",
  "We believe successful projects begin with understanding our clients’ priorities. Combining practical expertise, close collaboration, and attention to detail, we translate their requirements into lasting results.",
];

/**
 * The Company page's version: section 2 plus a closing sentence the client
 * wrote for this page.
 */
export const COMPANY_PROFILE: string[] = [
  OUR_COMPANY[0],
  `${OUR_COMPANY[1]} We strive to be a dependable partner, supporting our clients’ ambitions and contributing to the development of the communities we serve.`,
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

/**
 * "Leadership — Our Team": the approved profile, section 14, word for word.
 * Leads the Company page's Organisation section and the About page's
 * leadership block.
 */
export const LEADERSHIP_TEXT =
  "Rockfield is led by an experienced team that combines technical expertise with hands-on delivery. Our people are the foundation of every project we complete.";

/** A support function and the teams behind it. */
export type SupportFunction = { title: string; teams: string };

/**
 * "Organisation structure": the approved profile, section 15. Drawn as the
 * chart on /company#organisation.
 */
export const ORGANISATION = {
  /** The top of the chart, in order. The only roles given the amber accent. */
  leadership: ["CEO", "General Manager"],
  projectManager: "Project Manager",
  departments: ["Civil", "Mechanical", "Electrical", "IT", "Instrumentation"],
  departmentsNote: "Departments, each with its own teams, manpower and machinery",
  support: [
    { title: "HSE", teams: "Safety teams" },
    { title: "Procurement", teams: "Procurement teams" },
    { title: "Engineering", teams: "Surveying dept." },
    { title: "QA/QC", teams: "Quality teams" },
  ] satisfies SupportFunction[],
};

export type Discipline = {
  /** Key for the icon lookup in the Disciplines component. */
  icon: "civil" | "mechanical" | "electrical" | "instrumentation" | "it" | "surveying";
  title: string;
  text: string;
};

/** "Our Disciplines": the approved profile, section 11, word for word. */
export const DISCIPLINES: Discipline[] = [
  {
    icon: "civil",
    title: "Civil Works",
    text: "Construction and civil works delivered by dedicated civil teams, manpower and machinery.",
  },
  {
    icon: "mechanical",
    title: "Mechanical Works",
    text: "Mechanical installation and works with specialised teams and equipment.",
  },
  {
    icon: "electrical",
    title: "Electrical Works",
    text: "Electrical works carried out only by competent, authorised personnel.",
  },
  {
    icon: "instrumentation",
    title: "Instrumentation",
    text: "Instrument teams supporting installation, testing and commissioning.",
  },
  {
    icon: "it",
    title: "IT Systems",
    text: "IT teams supporting project and site technology requirements.",
  },
  {
    icon: "surveying",
    title: "Surveying & Engineering",
    text: "Engineering management with surveying teams for accurate setting-out and design support.",
  },
];

export type FleetRow = {
  equipment: string;
  /**
   * The profile's "Make, model and year" cell, one entry per line: each
   * string is a part of the cell that the profile separates with "; ".
   */
  models: string[];
  qty: number;
};

/** "Our Fleet": the approved profile, section 10. */
export const FLEET: FleetRow[] = [
  {
    equipment: "Excavators",
    models: ["DAEWOO/DOOSAN 300 (2005, 2008), 340 (2009)", "DAEWOO 255 (2 units, 2004)"],
    qty: 5,
  },
  { equipment: "Backhoe loader", models: ["JCB, 2006"], qty: 1 },
  {
    equipment: "Compactors",
    models: ["HAMM steel roller 1991", "BOMAG steel roller 2002", "HAMM sheepfoot 2001"],
    qty: 3,
  },
  { equipment: "Front-end loaders", models: ["Kawasaki 2005", "Volvo L90 2005"], qty: 2 },
  { equipment: "Hiab crane", models: ["Scania 2011, 11 ton"], qty: 1 },
  { equipment: "Fuel tanker", models: ["Mercedes Atego 2007, 14,000 L"], qty: 1 },
  { equipment: "Dump trucks", models: ["Scania 2004", "Mercedes 2003"], qty: 2 },
  { equipment: "Pickups", models: ["Toyota 2014 and 2020", "Mitsubishi 2020"], qty: 3 },
];

/** Units across the fleet — the profile's "18 units". */
export const FLEET_TOTAL = FLEET.reduce((sum, row) => sum + row.qty, 0);
