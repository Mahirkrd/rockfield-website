/** Site-wide content. Moves to the database later. */

import { COMPANY_SECTIONS } from "@/data/company";
import { LEADERSHIP_CONTACTS, telHref } from "@/data/contacts";
import { QHSE_SECTIONS } from "@/data/qhse";
import {
  WORK_CATEGORIES,
  WORKS_HREF,
  workCategoryHref,
} from "@/data/works";

export type NavLink = { href: string; label: string };

export type NavItem = NavLink & {
  /** Present on items that open a menu of links instead of linking through. */
  children?: NavLink[];
  /**
   * A page that sits above the children, linked once at the foot of the
   * menu (so the children keep their own 01, 02… numbering).
   */
  overview?: NavLink;
  /** The desktop panel needs extra width for long labels. */
  wide?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: WORKS_HREF, label: "Our Works" },
  { href: "/contact", label: "Contact" },
];

/**
 * Our Works: one link per category page, numbered 01–08 like the
 * categories themselves, and the overview at the foot.
 */
function worksMenu(link: NavLink): NavItem {
  return {
    ...link,
    children: WORK_CATEGORIES.map((category) => ({
      href: workCategoryHref(category.slug),
      label: category.title,
    })),
    overview: { href: WORKS_HREF, label: "All works" },
    wide: true,
  };
}

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
 * The header's navigation: NAV_LINKS with Our Works opened into a menu of
 * its categories, and two section menus slotted in — Company after Home,
 * QHSE after Our Works. The footer keeps the flat list.
 */
export const HEADER_NAV: NavItem[] = NAV_LINKS.flatMap((link) => {
  if (link.href === "/") {
    return [link, sectionMenu("/company", "Company", COMPANY_SECTIONS)];
  }
  if (link.href === WORKS_HREF) {
    return [worksMenu(link), sectionMenu("/qhse", "QHSE", QHSE_SECTIONS)];
  }
  return [link];
});

/** Head office, exactly as supplied. Rendered as one line that wraps. */
const ADDRESS = "Erbil | 100m Road, Naz Naz, Opposite Pavilion, F4/A2";

/**
 * Main phone, exactly as the approved profile gives it. It is the same number
 * as the General Manager's direct line in src/data/contacts.ts.
 */
const PHONE = "+964 751 490 4043";

/**
 * Head-office details from the approved profile (docs/profile-content.md,
 * section 18). The leadership's direct lines live in src/data/contacts.ts.
 */
export const CONTACT = {
  address: ADDRESS,
  /** Google Maps search for the address (the pipe becomes a comma for the query). */
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS.replace(" | ", ", "),
  )}`,
  /** Display form, spaced for reading. */
  phone: PHONE,
  /** tel:+9647514904043 */
  phoneHref: telHref(PHONE),
  /** Mirrors the primary entry in EMAILS below. */
  email: "info@rockfield-co.com",
  emailHref: "mailto:info@rockfield-co.com",
  hours: "Sun – Thu, 08:00 – 17:00",
} as const;

/**
 * The invitation to get in touch. Deliberately promises no response time —
 * the profile does not commit to one.
 */
export const ENQUIRY_LINE =
  "Send us your enquiry and our team will get back to you.";

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
  /** The approved profile's cover line, as written (no full stop). */
  coverLine: "General contracting built on quality, safety and integrity",
} as const;
