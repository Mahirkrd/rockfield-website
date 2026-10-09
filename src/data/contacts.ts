/**
 * Leadership contacts — the one place these roles and inboxes are written.
 * They render as the cards on /contact and also feed the matching email
 * cards (EMAILS in src/data/site.ts), so the two can never disagree.
 * Roles only — no names, by design.
 */

export type LeadershipContact = {
  role: string;
  email: string;
  /** Display form, spaced for reading. The tel: link is derived from it. */
  phone: string;
};

export const LEADERSHIP_CONTACTS: LeadershipContact[] = [
  {
    role: "CEO",
    email: "h.a@rockfield-co.com",
    phone: "+964 751 470 1579",
  },
  {
    role: "General Manager",
    email: "s.m@rockfield-co.com",
    phone: "+964 751 490 4043",
  },
];

/** Click-to-call href for a display number: keeps only the digits and the +. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
