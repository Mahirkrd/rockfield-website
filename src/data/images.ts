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

/** Site team walking a finished deck — the plate in the QHSE page's HSE section. */
export const QHSE_IMAGE: SiteImage = {
  src: "/images/qhse.jpg",
  alt: "Seven site staff in hard hats and hi-vis vests on a finished concrete deck, looking over rebar and conduit laid out for the next pour.",
};

/**
 * Real site photography from the company profile (docs/works-photos.json) —
 * served straight from /public, so it never needs a TEMPORARY_SOURCES entry.
 * Beside the fleet table on /company#fleet.
 */
export const FLEET_IMAGE: SiteImage & { caption: string } = {
  src: "/images/works/earthworks/excavation-cut-fill-01.jpg",
  alt: "A line of excavators fitted with hydraulic breakers working a rocky cut on a hillside, raising dust; one cab carries the DAEWOO name.",
  /** The photo's work type in the profile. */
  caption: "Excavation, cut & fill",
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
  // Site team in hard hats and hi-vis on a finished deck
  "/images/qhse.jpg": `${UNSPLASH}/photo-1541888946425-d81bb19240f5${Q}`,

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
};

/**
 * Resolves a local image path to whatever should actually be loaded today.
 * Falls straight through to the local file once its TEMPORARY_SOURCES entry
 * is removed, so no component ever needs editing to complete the swap.
 */
export function imageSrc(localPath: string): string {
  return TEMPORARY_SOURCES[localPath] ?? localPath;
}
