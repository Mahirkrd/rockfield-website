/**
 * Service catalogue. Moves to the database later.
 *
 * The one-liners are the approved profile's wording (section 7). The longer
 * texts are the site's own, kept general: any specific fact in them — survey
 * method, compaction testing, fleet, finishes, oil & gas scope — comes from
 * the profile (docs/profile-content.md). Add no certification, licence or
 * test claim the profile does not make.
 */

import type { WorkCategorySlug } from "@/data/works";

export type Service = {
  /** Slug — used for the icon lookup and the route. */
  id: string;
  label: string;
  /** One-liner for the homepage cards — the approved profile's wording, section 7. */
  description: string;
  /** Two or three sentences for the services index. */
  summary: string;
  /** Body copy for the detail page. */
  body: string[];
  /** Scope checklist shown on the detail page. */
  included: string[];
  /** Our Works categories shown as this service's related works, in order. */
  works: WorkCategorySlug[];
  /**
   * Card and masthead photo: a real site photo from one of the service's
   * related works categories, never one of their covers (the related-works
   * tiles show those on the same page). Checked in src/data/images.ts.
   */
  image: string;
  /** Alt text for `image`. Describes the photo, not the service. */
  imageAlt: string;
  /** CSS object-position for `image`, where its subject sits off centre. */
  imagePosition?: string;
  /** The "How we work" figure on the detail page — a second, different photo. */
  figure: { src: string; alt: string; position?: string };
  href: string;
};

export const SERVICES: Service[] = ([
  {
    id: "general-contracting",
    label: "General Contracting",
    description: "End-to-end project delivery, from site prep to handover.",
    summary:
      "We take the whole build under one contract — programme, procurement, trades and handover. One team is accountable from the first site visit to the final signature, so nothing falls into the gap between packages.",
    body: [
      "As principal contractor we carry the programme, the budget and the risk. We walk the site, scope the work and return a fully costed proposal, and the programme is resourced before it is promised.",
      "Our own supervisors run the site and our own fleet does the heavy lifting. Coordination happens in our office, not in the client's inbox.",
      "You get a single point of contact, a single programme, and one party to hold responsible on handover day.",
    ],
    included: [
      "Consultation, site walk and costed proposal",
      "Programme development and resource planning",
      "Procurement and subcontractor management",
      "Site supervision and weekly progress reporting",
      "QA/QC inspection and snag close-out",
      "As-built checks and documented handover",
    ],
    works: ["earthworks", "concrete-structures", "buildings-villas-fitout"],
    image: "/images/works/buildings-villas-fitout/painting-facades-rehab-06.jpg",
    imageAlt:
      "A two-storey commercial building with a glazed front, scaffolding still up along its facade.",
    figure: {
      src: "/images/works/concrete-structures/concrete-formwork-rebar-03.jpg",
      alt: "Braced timber and steel formwork for a concrete wall, beside its reinforcement cage.",
    },
  },
  {
    id: "civil-infrastructure",
    label: "Civil & Infrastructure",
    description: "Roads, drainage, utilities and earthworks.",
    summary:
      "Bulk earthworks, roads, drainage and buried services — the work that everything else depends on. We survey before we dig and we set out to tolerance, because civil errors are the most expensive ones to correct.",
    body: [
      "Civil work is unforgiving: levels, falls and cover depths are either right or they are dug up again. Survey control and setting-out are done by differential GPS, and buried cables and pipes are located before any excavation starts.",
      "Our own fleet handles excavation, cut and fill. Backfill is compacted in layers and verified by field compaction testing.",
      "Where trenches run along live roads, the works are protected with cones and barrier tape to keep the public clear.",
    ],
    included: [
      "Differential GPS survey and setting-out",
      "Excavation, cut and fill, backfill and compaction",
      "Road formation, base layers, kerbs and surfacing",
      "Drainage trenches, side ditches and manholes",
      "Polyethylene water pipe installation",
      "Re-sloping, gabion walls and riprap",
    ],
    works: ["earthworks", "road-works", "slopes-drainage", "pipelines-utilities"],
    image: "/images/works/slopes-drainage/riprap-ditches-01.jpg",
    imageAlt:
      "An excavator moving large stone for riprap across a drainage channel.",
    imagePosition: "60% 50%",
    figure: {
      src: "/images/works/slopes-drainage/geotextile-lining-01.jpg",
      alt: "A buried pipeline in a trench, wrapped in geotextile rock shield, with an excavator beyond.",
    },
  },
  {
    id: "structural-concrete",
    label: "Structural & Concrete",
    description: "Foundations, RC frames and steel erection.",
    summary:
      "Foundations, reinforced concrete frames and structural steel, built to the engineer's drawing and verified as we go. Formwork, rebar and pour sequencing are planned before the first truck arrives.",
    body: [
      "Structure is where tolerance discipline pays for itself. We plan pour sequences, construction joints and formwork striking times against the design, and we agree them with the engineer before we start rather than after a problem appears.",
      "Reinforcement is fixed to drawing and checked before every pour. Concrete is placed to the approved drawings and specifications, slabs are finished with power trowels, and pours are supervised through to curing.",
      "Where the frame is steel, we handle setting-out, holding-down bolts and erection, and we coordinate the interface between steel and concrete so neither trade waits on the other.",
    ],
    included: [
      "Pad, strip and raft foundations",
      "Reinforced concrete columns, slabs and cores",
      "Timber and steel formwork, shoring and propping",
      "Rebar fixing to drawing, checked before every pour",
      "Concrete pours, power-trowel finishing and curing",
      "Structural steel erection and connections",
    ],
    works: ["concrete-structures"],
    image: "/images/works/concrete-structures/concrete-formwork-rebar-01.jpg",
    imageAlt:
      "Operators finishing a fresh concrete slab with power trowels, between rows of starter bars.",
    figure: {
      src: "/images/works/concrete-structures/concrete-formwork-rebar-05.jpg",
      alt: "A large reinforcement mat fixed across a slab, ready for its pour.",
    },
  },
  {
    id: "commercial-building",
    label: "Commercial Building",
    description: "Offices, retail, warehouses and mixed-use.",
    summary:
      "Offices, retail units, warehouses and mixed-use developments taken from substructure to a building that can be occupied — envelope, services and finishes included.",
    body: [
      "Commercial buildings are judged on the date they open, so we build the programme backwards from occupation and protect the critical path: envelope closed, services energised, finishes clean.",
      "We coordinate the mechanical and electrical packages alongside the fabric rather than after it, which is what keeps ceilings from being opened twice and keeps commissioning off the critical path.",
      "Finishing runs through masonry, plastering, gypsum ceilings, flooring and painting inside, with cladding, glazing and facade finishing outside.",
    ],
    included: [
      "Substructure through to weathertight envelope",
      "Cladding, glazing and facade finishing",
      "Mechanical and electrical installation and commissioning",
      "Masonry, partitions, ceilings and finishes",
      "QA/QC inspection and documented handover",
    ],
    works: ["buildings-villas-fitout", "concrete-structures"],
    image: "/images/works/buildings-villas-fitout/painting-facades-rehab-05.jpg",
    imageAlt:
      "A worker fixing facade panels at first-floor level of a glazed commercial building.",
    figure: {
      src: "/images/works/buildings-villas-fitout/ceilings-mechanical-04.jpg",
      alt: "Galvanised ductwork being installed on the roof of a commercial building.",
    },
  },
  {
    id: "renovation-fit-out",
    label: "Renovation & Fit-out",
    description: "Refurbishment, interiors and upgrades.",
    summary:
      "Refurbishment, interior fit-out and building upgrades. We survey what is actually there before pricing what to do with it.",
    body: [
      "Existing buildings hide surprises, so we walk the site and scope the work before we price it, rather than relying on an optimistic assumption. Pricing a refurbishment off a drawing alone is how variations pile up later.",
      "Our teams carry the work through to finish: masonry, cement and gypsum plastering, gypsum board ceilings, flooring, painting and mechanical duct installation.",
      "Fit-out is where finish quality is visible from a metre away, so finishes are checked against the approved drawings and specifications before handover.",
    ],
    included: [
      "Site walk, survey and scoping",
      "Strip-out and disposal",
      "Structural alterations and openings",
      "Partitions, gypsum ceilings and floor finishes",
      "Painting, plastering and building rehabilitation",
      "Mechanical and electrical upgrades",
    ],
    works: ["buildings-villas-fitout"],
    image: "/images/works/buildings-villas-fitout/plastering-05.jpg",
    imageAlt:
      "An interior wall finished with moulded gypsum panels, a worker completing the skirting.",
    figure: {
      src: "/images/works/buildings-villas-fitout/painting-facades-rehab-02.jpg",
      alt: "A painter on a stepladder finishing the ceiling line of a bright, empty interior.",
    },
  },
  {
    id: "project-management",
    label: "Project Management",
    description: "Planning, procurement, QA/QC and supervision.",
    summary:
      "Programme, procurement, quality and cost control, and site supervision — run by people who have held the trowel as well as the schedule.",
    body: [
      "Good project management starts before anyone is on site. Drawings and method statements are prepared up front, the programme is resourced before it is promised, and procurement runs through our own procurement team.",
      "We set up the reporting from day one: a baseline programme, a cost plan, a risk register and a fixed weekly report, so problems surface while they are still cheap to fix.",
      "On site, our QA/QC teams witness the work that matters — reinforcement before pours, services before they are covered, finishes before they are signed off — and record it.",
    ],
    included: [
      "Baseline programme and critical path analysis",
      "Procurement of approved materials",
      "Cost planning, valuations and variation control",
      "Risk register and mitigation tracking",
      "QA/QC inspection and witness hold points",
      "Weekly progress, cost and risk reporting",
    ],
    works: ["survey-engineering"],
    image: "/images/works/survey-engineering/survey-underground-detection-02.jpg",
    imageAlt:
      "A surveyor in a hard hat and coveralls on site beside a GPS base station on its tripod.",
    // Portrait photo: his head sits ~32% down, so this keeps head and torso
    // in both the 16:9 card and the wider masthead band.
    imagePosition: "50% 38%",
    figure: {
      src: "/images/works/pipelines-utilities/joints-hydrostatic-test-03.jpg",
      alt: "A pressure gauge fitted to a water main for its hydrostatic test.",
      position: "50% 40%",
    },
  },
  {
    id: "roads-highways",
    label: "Roads & Highways",
    description: "Road construction, paving and highway infrastructure.",
    summary:
      "We build and upgrade roads, highways and access routes — from earthworks and base layers through to asphalt paving, double dressing, kerbs and channels, signage and fencing.",
    body: [
      "Every road project starts with the ground beneath it. The corridor is cleared, cut and graded to the design alignment, then the formation and base layers are built up and compacted with our own roller fleet before the surface goes down. Open works are protected with cones and barrier tape to keep the public clear.",
    ],
    included: [
      "Corridor clearing, grading and formation",
      "Base layers and compaction",
      "Asphalt cutting and paving, and double dressing",
      "Concrete kerbs and channels, safety signs and site fencing",
    ],
    works: ["road-works", "earthworks", "slopes-drainage"],
    image: "/images/works/earthworks/right-of-way-03.jpg",
    imageAlt:
      "A wheel loader working a newly graded road corridor between hills.",
    figure: {
      src: "/images/works/road-works/asphalt-cutting-paving-03.jpg",
      alt: "A compact machine fitted with an asphalt cutter working on an existing road.",
    },
  },
  {
    id: "villa-construction",
    label: "Villa Construction",
    description:
      "Private villas and residential builds with a high-quality finish.",
    summary:
      "We construct private villas from bare land to handover — designed, built and supervised by one team, with finishes and services coordinated throughout.",
    body: [
      "We treat each villa as a single accountable build, from setting out the foundations to the final handover. One team carries the design, drawings and supervision through structure, masonry, plastering, flooring and finishing works, keeping the client informed at each milestone.",
    ],
    included: [
      "Villa, facade and interior design and drawings",
      "Full structural and architectural construction",
      "High-quality interior and exterior finishes",
      "Coordination of mechanical and electrical works",
      "External paving and works",
    ],
    works: ["buildings-villas-fitout"],
    image: "/images/works/buildings-villas-fitout/villa-construction-02.jpg",
    imageAlt:
      "A surveyor's level on its tripod in front of a two-storey villa under construction.",
    figure: {
      src: "/images/works/buildings-villas-fitout/villa-construction-04.jpg",
      alt: "Two workers finishing the ceiling of a villa interior.",
    },
  },
  {
    id: "oil-gas",
    label: "Oil & Gas",
    description:
      "Civil and construction support for energy sector facilities.",
    summary:
      "We provide civil and construction support for energy sector facilities, planned around each site's safety and operational requirements.",
    body: [
      "Industrial and energy sites leave no room for shortcuts. We plan each scope around the site's safety and operational requirements and mobilise our own civil teams and plant. Our work in the sector includes new caged access ladders fabricated and installed in oil pits, and stone bedding and backfill around a crude pipeline, rolled in layers.",
    ],
    included: [
      "Civil works for energy sector facilities",
      "Pipeline bedding and backfill",
      "Access ladders fabricated and installed",
      "Work planned around site safety requirements",
    ],
    works: ["oil-gas", "pipelines-utilities"],
    image: "/images/works/pipelines-utilities/trench-excavation-02.jpg",
    imageAlt:
      "A long pipeline trench with lengths of pipe strung along its edge and an excavator at work beyond.",
    imagePosition: "50% 40%",
    figure: {
      src: "/images/works/oil-gas/oil-gas-support-01.jpg",
      alt: "A new caged access ladder fixed to the concrete wall of an oil pit.",
      position: "50% 8%",
    },
  },
] satisfies Omit<Service, "href">[]).map((service) => ({
  ...service,
  href: `/services/${service.id}`,
}));
