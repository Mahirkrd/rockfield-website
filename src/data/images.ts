/**
 * Image registry: every photo slot outside the Our Works pages, each filled
 * with one of Rockfield's own site photos from /public/images/works/
 * (listed in docs/works-photos.json). Nothing here is stock photography.
 *
 * The photos are spread so that no page shows the same one twice, and no
 * slot repeats a category cover (those appear on the homepage and the
 * service pages already). Service photos live with their service in
 * src/data/services.ts.
 *
 * `position` is a CSS object-position for photos whose subject sits off
 * centre — checked at 360px and 1440px. Every slot, services included, is
 * verified at build time against the works data below: the build fails if a
 * path is not one of the works photos, or is a design visualisation (render)
 * standing in for real work.
 */

import { SERVICES } from "@/data/services";
import { WORK_CATEGORIES } from "@/data/works";

/** Local path + the alt text that travels with the image. */
export type SiteImage = {
  /** Path under /public. */
  src: string;
  /** Describes the photo, not the page. Never empty: these are content. */
  alt: string;
  /** CSS object-position, where the subject sits off centre. */
  position?: string;
};

/** Home hero plate: the line of excavators working a cut. */
export const HERO_IMAGE: SiteImage = {
  src: "/images/works/earthworks/excavation-cut-fill-06.jpg",
  alt: "A line of orange excavators working along a cleared, graded cut beneath a wooded hillside.",
  // The nearest, largest machines sit right of centre; the tall desktop
  // plate keeps them in frame.
  position: "72% 50%",
};

/** Home "How we work" band — texture under a heavy ink veil. */
export const PROCESS_IMAGE: SiteImage = {
  src: "/images/works/concrete-structures/tower-formwork-rebar-02.jpg",
  alt: "Rows of red steel props and yellow beams shoring a tower slab, between concrete columns.",
};

export const SERVICES_HERO_IMAGE: SiteImage = {
  src: "/images/works/concrete-structures/tower-formwork-rebar-04.jpg",
  alt: "A reinforcement mat fixed across a tower slab, with the town and hills beyond.",
};

export const ABOUT_HERO_IMAGE: SiteImage = {
  src: "/images/works/buildings-villas-fitout/plastering-02.jpg",
  alt: "Two workers applying cement plaster to an external wall on a residential site.",
  position: "40% 50%",
};

/** The plate beside "Our Story" on the About page. */
export const ABOUT_STORY_IMAGE: SiteImage = {
  src: "/images/works/buildings-villas-fitout/masonry-05.jpg",
  alt: "A team in hi-vis vests and hard hats laying a blockwork wall inside a building.",
};

export const COMPANY_HERO_IMAGE: SiteImage = {
  src: "/images/works/buildings-villas-fitout/masonry-04.jpg",
  alt: "A worker in a hi-vis vest laying blocks from a raised platform.",
  position: "45% 35%",
};

/** The plate beside "Our Company" on the Company page. */
export const COMPANY_IMAGE: SiteImage = {
  src: "/images/works/buildings-villas-fitout/ceilings-mechanical-01.jpg",
  alt: "A crew on scaffolding fixing a curved gypsum ceiling bulkhead beside a glazed facade.",
  position: "38% 50%",
};

/** Beside the fleet table on the Company page. */
export const FLEET_IMAGE: SiteImage & { caption: string } = {
  src: "/images/works/earthworks/excavation-cut-fill-01.jpg",
  alt: "A line of excavators fitted with hydraulic breakers working a rocky cut on a hillside, raising dust; one cab carries the DAEWOO name.",
  /** The photo's work type in the profile. */
  caption: "Excavation, cut & fill",
};

export const QHSE_HERO_IMAGE: SiteImage = {
  src: "/images/works/road-works/channels-signage-fencing-03.jpg",
  alt: "A Rockfield caution sign — area under construction, watch for moving equipment — beside a site road.",
};

/** The plate in the QHSE page's HSE section. */
export const QHSE_IMAGE: SiteImage = {
  src: "/images/works/road-works/channels-signage-fencing-04.jpg",
  alt: "A Rockfield sign at a site entrance: personal protective equipment must be worn.",
  position: "50% 45%",
};

/** Contact masthead. There is no photo of the office itself, so none is implied. */
export const CONTACT_HERO_IMAGE: SiteImage = {
  src: "/images/works/slopes-drainage/riprap-ditches-02.jpg",
  alt: "An excavator placing stone riprap along a drainage ditch.",
  position: "45% 50%",
};

/* ── Build-time check ─────────────────────────────────────────────────── */

const WORKS_PHOTOS = new Map(
  WORK_CATEGORIES.flatMap((category) =>
    category.types.flatMap((type) => type.photos.map((p) => [p.src, p] as const)),
  ),
);

const SLOTS: Record<string, string> = {
  HERO_IMAGE: HERO_IMAGE.src,
  PROCESS_IMAGE: PROCESS_IMAGE.src,
  SERVICES_HERO_IMAGE: SERVICES_HERO_IMAGE.src,
  ABOUT_HERO_IMAGE: ABOUT_HERO_IMAGE.src,
  ABOUT_STORY_IMAGE: ABOUT_STORY_IMAGE.src,
  COMPANY_HERO_IMAGE: COMPANY_HERO_IMAGE.src,
  COMPANY_IMAGE: COMPANY_IMAGE.src,
  FLEET_IMAGE: FLEET_IMAGE.src,
  QHSE_HERO_IMAGE: QHSE_HERO_IMAGE.src,
  QHSE_IMAGE: QHSE_IMAGE.src,
  CONTACT_HERO_IMAGE: CONTACT_HERO_IMAGE.src,
  ...Object.fromEntries(
    SERVICES.flatMap((service) => [
      [`${service.id} image`, service.image],
      [`${service.id} figure`, service.figure.src],
    ]),
  ),
};

for (const [slot, src] of Object.entries(SLOTS)) {
  const photo = WORKS_PHOTOS.get(src);
  if (!photo) throw new Error(`${slot}: ${src} is not one of the works photos`);
  if (photo.designRender) {
    throw new Error(`${slot}: ${src} is a design visualisation, not a site photo`);
  }
}
