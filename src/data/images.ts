/**
 * Image registry — the one file to touch when swapping artwork.
 *
 * Every image on the site is referenced by its LOCAL path (`/images/hero.jpg`
 * and friends). Until those files exist, `TEMPORARY_SOURCES` below redirects
 * each path to a free, license-safe construction photo on Unsplash so the site
 * looks real straight away.
 *
 * ─── TODO BEFORE LAUNCH ────────────────────────────────────────────────────
 * 1. Open each Unsplash URL below in a browser (drop the `?...` query string)
 *    and download the full-size photo — or, better, replace it with your own
 *    site photography.
 * 2. Save the files into /public/images using exactly the names in the keys.
 *    Long edge ~2000px, JPEG quality ~80 is plenty — next/image resizes and
 *    re-encodes from there.
 * 3. Delete an entry from TEMPORARY_SOURCES and that image is instantly served
 *    from /public instead. Delete all of them, then also delete the `images`
 *    block in next.config.ts — nothing remote is loaded any more.
 *
 * A handful of Unsplash URLs repeat across entries where two slots genuinely
 * want the same subject (earthworks, reinforcement, the office exterior). Each
 * still has its own local filename, so giving them different real photos later
 * needs no code change.
 *
 * Unsplash photos are free to use commercially without permission or credit
 * (https://unsplash.com/license); attribution is appreciated but not required.
 * ───────────────────────────────────────────────────────────────────────────
 */

/** Local path + the alt text that travels with the image. */
export type SiteImage = {
  /** Path under /public — always the local file, never the remote URL. */
  src: string;
  /** Describes the photo, not the page. Never empty: these are content. */
  alt: string;
};

export const HERO_IMAGE: SiteImage = {
  src: "/images/hero.jpg",
  alt: "Tower cranes standing over a cluster of high-rise buildings under construction.",
};

export const ABOUT_IMAGE: SiteImage = {
  src: "/images/about.jpg",
  alt: "A site engineer in a hi-vis jacket walking a colleague through a set of drawings spread across a site-office table.",
};

/** Backdrop for the dark "how we work" band. */
export const PROCESS_IMAGE: SiteImage = {
  src: "/images/process.jpg",
  alt: "A high-rise frame rising behind tower cranes, shot from below.",
};

/** Head-office exterior — contact masthead and the location plate. */
export const OFFICE_IMAGE: SiteImage = {
  src: "/images/office.jpg",
  alt: "The glass frontage of the head-office building seen from the street.",
};

/** Building under construction — the plate beside "Our Company". */
export const COMPANY_IMAGE: SiteImage = {
  src: "/images/company.jpg",
  alt: "Tower cranes working above a high-rise wrapped in scaffolding and safety netting, with birds wheeling overhead.",
};

/** Site team walking a finished deck — the plate in the QHSE page's HSE policy. */
export const QHSE_IMAGE: SiteImage = {
  src: "/images/qhse.jpg",
  alt: "Seven site staff in hard hats and hi-vis vests on a finished concrete deck, looking over rebar and conduit laid out for the next pour.",
};

const UNSPLASH = "https://images.unsplash.com";
/** Shared query string: format negotiation, sane crop, sensible source size. */
const Q = "?auto=format&fit=crop&w=1600&q=80";

/**
 * TEMPORARY Unsplash stand-ins, keyed by the local path each one covers.
 * Every photo here is a construction or engineering subject.
 */
const TEMPORARY_SOURCES: Record<string, string> = {
  // ── Landmarks ───────────────────────────────────────────────────────────
  // Wide site, tower cranes over high-rise frames
  "/images/hero.jpg": `${UNSPLASH}/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1920&q=80`,
  // Site engineer and colleague over the drawings
  "/images/about.jpg": `${UNSPLASH}/photo-1581092446327-9b52bd1570c2${Q}`,
  // High-rise frame and cranes from below
  "/images/process.jpg": `${UNSPLASH}/photo-1591955506264-3f5a6834570a${Q}`,
  // Glass office frontage
  "/images/office.jpg": `${UNSPLASH}/photo-1554435493-93422e8220c8${Q}`,
  // Scaffolded high-rise under tower cranes
  "/images/company.jpg": `${UNSPLASH}/photo-1429497419816-9ca5cfb4571a${Q}`,
  // Site team in hard hats and hi-vis on a finished deck (same photo as project-1-2)
  "/images/qhse.jpg": `${UNSPLASH}/photo-1541888946425-d81bb19240f5${Q}`,

  // ── Project 1 · Riverside Logistics Hub (Industrial) ────────────────────
  "/images/project-1.jpg": `${UNSPLASH}/photo-1565610222536-ef125c59da2e${Q}`,
  "/images/project-1-2.jpg": `${UNSPLASH}/photo-1541888946425-d81bb19240f5${Q}`,
  "/images/project-1-3.jpg": `${UNSPLASH}/photo-1590069261209-f8e9b8642343${Q}`,
  "/images/project-1-4.jpg": `${UNSPLASH}/photo-1586528116311-ad8dd3c8310d${Q}`,

  // ── Project 2 · Central Business Tower (Commercial) ─────────────────────
  "/images/project-2.jpg": `${UNSPLASH}/photo-1486406146926-c627a92ad1ab${Q}`,
  "/images/project-2-2.jpg": `${UNSPLASH}/photo-1591955506264-3f5a6834570a${Q}`,
  "/images/project-2-3.jpg": `${UNSPLASH}/photo-1541976590-713941681591${Q}`,
  "/images/project-2-4.jpg": `${UNSPLASH}/photo-1554435493-93422e8220c8${Q}`,

  // ── Project 3 · Northgate Interchange (Infrastructure) ──────────────────
  "/images/project-3.jpg": `${UNSPLASH}/photo-1465447142348-e9952c393450${Q}`,
  "/images/project-3-2.jpg": `${UNSPLASH}/photo-1449034446853-66c86144b0ad${Q}`,
  "/images/project-3-3.jpg": `${UNSPLASH}/photo-1517089596392-fb9a9033e05b${Q}`,
  "/images/project-3-4.jpg": `${UNSPLASH}/photo-1494412574643-ff11b0a5c1c3${Q}`,

  // ── Project 4 · Meadowview Residences (Residential) ─────────────────────
  "/images/project-4.jpg": `${UNSPLASH}/photo-1508450859948-4e04fabaa4ea${Q}`,
  "/images/project-4-2.jpg": `${UNSPLASH}/photo-1587582423116-ec07293f0395${Q}`,
  "/images/project-4-3.jpg": `${UNSPLASH}/photo-1516156008625-3a9d6067fab5${Q}`,
  "/images/project-4-4.jpg": `${UNSPLASH}/photo-1574359411659-15573a27fd0c${Q}`,

  // ── Project 5 · Harbor Utilities Upgrade (Civil) ────────────────────────
  "/images/project-5.jpg": `${UNSPLASH}/photo-1504307651254-35680f356dfd${Q}`,
  "/images/project-5-2.jpg": `${UNSPLASH}/photo-1531834685032-c34bf0d84c77${Q}`,
  "/images/project-5-3.jpg": `${UNSPLASH}/photo-1580901369227-308f6f40bdeb${Q}`,
  "/images/project-5-4.jpg": `${UNSPLASH}/photo-1523848309072-c199db53f137${Q}`,

  // ── Project 6 · Summit Retail Park (Commercial) ─────────────────────────
  "/images/project-6.jpg": `${UNSPLASH}/photo-1470075801209-17f9ec0cada6${Q}`,
  "/images/project-6-2.jpg": `${UNSPLASH}/photo-1504328345606-18bbc8c9d7d1${Q}`,
  "/images/project-6-3.jpg": `${UNSPLASH}/photo-1589939705384-5185137a7f0f${Q}`,
  "/images/project-6-4.jpg": `${UNSPLASH}/photo-1487958449943-2429e8be8625${Q}`,

  // ── Services ────────────────────────────────────────────────────────────
  "/images/service-general-contracting.jpg": `${UNSPLASH}/photo-1516216628859-9bccecab13ca${Q}`,
  "/images/service-civil-infrastructure.jpg": `${UNSPLASH}/photo-1517089596392-fb9a9033e05b${Q}`,
  "/images/service-structural-concrete.jpg": `${UNSPLASH}/photo-1531834685032-c34bf0d84c77${Q}`,
  "/images/service-commercial-building.jpg": `${UNSPLASH}/photo-1449157291145-7efd050a4d0e${Q}`,
  "/images/service-renovation-fit-out.jpg": `${UNSPLASH}/photo-1618090584176-7132b9911657${Q}`,
  "/images/service-project-management.jpg": `${UNSPLASH}/photo-1503387762-592deb58ef4e${Q}`,
  "/images/service-roads-highways.jpg": `${UNSPLASH}/photo-1757030689760-3ec8be7326ae${Q}`,
  "/images/service-villa-construction.jpg": `${UNSPLASH}/photo-1580587771525-78b9dba3b914${Q}`,
  "/images/service-oil-gas.jpg": `${UNSPLASH}/photo-1516937941344-00b4e0337589${Q}`,

  // ── Leadership ──────────────────────────────────────────────────────────
  "/images/team-1.jpg": `${UNSPLASH}/photo-1621905252507-b35492cc74b4${Q}`,
  "/images/team-2.jpg": `${UNSPLASH}/photo-1618090584176-7132b9911657${Q}`,
  "/images/team-3.jpg": `${UNSPLASH}/photo-1503387837-b154d5074bd2${Q}`,
  "/images/team-4.jpg": `${UNSPLASH}/photo-1516216628859-9bccecab13ca${Q}`,

  // ── Company page team (own slots, same stand-ins as the leadership) ─────
  "/images/company-team-1.jpg": `${UNSPLASH}/photo-1621905252507-b35492cc74b4${Q}`,
  "/images/company-team-2.jpg": `${UNSPLASH}/photo-1618090584176-7132b9911657${Q}`,
  "/images/company-team-3.jpg": `${UNSPLASH}/photo-1503387837-b154d5074bd2${Q}`,
  "/images/company-team-4.jpg": `${UNSPLASH}/photo-1516216628859-9bccecab13ca${Q}`,
};

/**
 * Resolves a local image path to whatever should actually be loaded today.
 * Falls straight through to the local file once its TEMPORARY_SOURCES entry
 * is removed, so no component ever needs editing to complete the swap.
 */
export function imageSrc(localPath: string): string {
  return TEMPORARY_SOURCES[localPath] ?? localPath;
}
