/** About-page content. Moves to the database later. */

import { COMPANY_MISSION } from "@/data/company";

export const STORY: string[] = [
  "The team behind Rockfield started out in 2010 with a single site crew, a borrowed excavator, and a refusal to hand back work we would not sign our own name to. The first contracts, taken on under various business names, were small — foundations, retaining walls, access roads — but they were finished on the day we said they would be, and that reputation did the selling for us.",
  "Fifteen years on, that experience is what Rockfield is built on. The company runs civil, structural, commercial and fit-out work across the country, with our own plant, our own supervisors, and long-standing subcontractors we have grown alongside. What has not changed is the way a job is run: one accountable team from first survey to final handover.",
  "We have deliberately grown at the pace we could staff properly. Every crew that steps onto a Rockfield site has been inducted to the same standard, and every programme we commit to has been resourced before it is signed.",
];

export const MISSION = {
  /** The official mission, owned by the Company page — one statement site-wide. */
  statement: COMPANY_MISSION.statement,
  points: [
    {
      title: "Predictable delivery",
      text: "A date we give is a date we have already resourced, not one we hope to meet.",
    },
    {
      title: "One accountable team",
      text: "The people who price the job are the people who run it and hand it over.",
    },
    {
      title: "Built to last",
      text: "Specification is a floor, not a target. We build for the second owner too.",
    },
  ],
};

export type Value = {
  /** Key for the icon lookup in the Values component. */
  icon: "integrity" | "safety" | "craft" | "accountability" | "partnership" | "stewardship";
  title: string;
  text: string;
};

export const VALUES: Value[] = [
  {
    icon: "integrity",
    title: "Integrity",
    text: "We price honestly and we report honestly, including when the news is bad.",
  },
  {
    icon: "safety",
    title: "Safety without exception",
    text: "One standard on every site. No programme is worth an injury.",
  },
  {
    icon: "craft",
    title: "Craftsmanship",
    text: "Work is finished to the drawing, not to whatever the deadline allows.",
  },
  {
    icon: "accountability",
    title: "Accountability",
    text: "Defects are ours to close out. We do not hand a problem to the client.",
  },
  {
    icon: "partnership",
    title: "Partnership",
    text: "Clients, consultants and subcontractors are on the same side of the table.",
  },
  {
    icon: "stewardship",
    title: "Stewardship",
    text: "Materials, waste and neighbours are all managed, not merely tolerated.",
  },
];
