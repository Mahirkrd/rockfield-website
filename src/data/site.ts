/** Site-wide content. Moves to the database later. */

import { COMPANY_SECTIONS } from "@/data/company";
import { LEADERSHIP_CONTACTS } from "@/data/contacts";
import { QHSE_SECTIONS } from "@/data/qhse";

export type NavLink = { href: string; label: string };

export type NavItem = NavLink & {
  /** Present on items that open a menu of links instead of linking through. */
  children?: NavLink[];
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

type PageSections = Record<
  string,
  { id: string; title: string; menuLabel?: string }
>;

/** A header menu with one link per section of a page, straight to its anchor. */
function sectionMenu(
  href: string,
  label: string,
  sections: PageSections,
): NavItem {
  return {
    href,
    label,
    children: Object.values(sections).map((section) => ({
      href: `${href}#${section.id}`,
      label: section.menuLabel ?? section.title,
    })),
  };
}

/**
 * The header's navigation: NAV_LINKS with two section menus slotted in —
 * Company after Home, QHSE after Projects. The footer keeps the flat list.
 */
export const HEADER_NAV: NavItem[] = NAV_LINKS.flatMap((link) => {
  if (link.href === "/") {
    return [link, sectionMenu("/company", "Company", COMPANY_SECTIONS)];
  }
  if (link.href === "/projects") {
    return [link, sectionMenu("/qhse", "QHSE", QHSE_SECTIONS)];
  }
  return [link];
});

/** Head office, exactly as supplied. Rendered as one line that wraps. */
const ADDRESS = "Erbil | 100m Road, Naz Naz, Opposite Pavilion, F4/A2";

/**
 * No main switchboard number yet — the direct lines are the leadership
 * contacts in src/data/contacts.ts.
 */
export const CONTACT = {
  address: ADDRESS,
  /** Google Maps search for the address (the pipe becomes a comma for the query). */
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS.replace(" | ", ", "),
  )}`,
  /** Mirrors the primary entry in EMAILS below. */
  email: "info@rockfield-co.com",
  emailHref: "mailto:info@rockfield-co.com",
  hours: "Sun – Thu, 08:00 – 17:00",
} as const;

export type EmailContact = {
  /** Role this inbox belongs to. */
  label: string;
  /** Short form for tight spaces such as the footer column. */
  shortLabel: string;
  address: string;
  /** The general inbox — listed first and given the accent treatment. */
  primary?: boolean;
};

/**
 * Business inboxes. Primary first; every surface renders them in this order.
 * The leadership inboxes come straight from src/data/contacts.ts, so each
 * role and address is written once and shown the same way everywhere.
 */
export const EMAILS: EmailContact[] = [
  {
    label: "General Inquiries",
    shortLabel: "General",
    address: "info@rockfield-co.com",
    primary: true,
  },
  ...LEADERSHIP_CONTACTS.map((contact) => ({
    label: contact.role,
    shortLabel: contact.role,
    address: contact.email,
  })),
];

export const COMPANY = {
  name: "Rockfield for General Contracting Ltd.",
  shortName: "Rockfield",
  tagline: "Built on solid ground.",
} as const;

/** Company facts shown in the About spec panel. */
export const COMPANY_SPEC: { label: string; value: string }[] = [
  { label: "Team active since", value: "2010" },
  { label: "Headquarters", value: "Erbil" },
  { label: "Team", value: "120+ specialists" },
  { label: "Coverage", value: "Nationwide" },
];
