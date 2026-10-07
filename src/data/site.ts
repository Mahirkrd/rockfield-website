/** Site-wide content. Moves to the database later. */

import { COMPANY_SECTIONS } from "@/data/company";
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

/** Phone and address are still placeholders — replace before launch. */
export const CONTACT = {
  addressLines: ["Building 00, Street 000", "Industrial Area", "City, Country"],
  phone: "+000 0000 0000",
  phoneHref: "tel:+00000000000",
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

/** Business inboxes. Primary first; every surface renders them in this order. */
export const EMAILS: EmailContact[] = [
  {
    label: "General Inquiries",
    shortLabel: "General",
    address: "info@rockfield-co.com",
    primary: true,
  },
  {
    label: "General Manager",
    shortLabel: "Manager",
    address: "h.a@rockfield-co.com",
  },
  {
    label: "Projects / Operations",
    shortLabel: "Projects",
    address: "s.m@rockfield-co.com",
  },
];

export const COMPANY = {
  name: "Rockfield for General Contracting Ltd.",
  shortName: "Rockfield",
  tagline: "Built on solid ground.",
} as const;

/** Company facts shown in the About spec panel. Replace [City] before launch. */
export const COMPANY_SPEC: { label: string; value: string }[] = [
  { label: "Team active since", value: "2010" },
  { label: "Headquarters", value: "[City]" },
  { label: "Team", value: "120+ specialists" },
  { label: "Coverage", value: "Nationwide" },
];
