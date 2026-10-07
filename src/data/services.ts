/** Service catalogue. Moves to the database later. */

export type Service = {
  /** Slug — used for the icon lookup, the route, and project cross-linking. */
  id: string;
  label: string;
  /** One-liner for the homepage cards. */
  description: string;
  /** Two or three sentences for the services index. */
  summary: string;
  /** Body copy for the detail page. */
  body: string[];
  /** Scope checklist shown on the detail page. */
  included: string[];
  /** Card and detail-page photo. Local path under /public — see src/data/images.ts. */
  image: string;
  /** Alt text for `image`. Describes the photo, not the service. */
  imageAlt: string;
  href: string;
};

export const SERVICES: Service[] = [
  {
    id: "general-contracting",
    label: "General Contracting",
    description: "End-to-end project delivery, from site prep to handover.",
    summary:
      "We take the whole build under one contract — programme, procurement, trades and handover. One team is accountable from the first site visit to the final signature, so nothing falls into the gap between packages.",
    body: [
      "As principal contractor we carry the programme, the budget and the risk. That means we price the job properly at tender rather than discovering it on site, and it means the people who quoted the work are the people who run it.",
      "Our own supervisors run the site and our own plant does the heavy lifting, supplemented by subcontractors we have worked with for years. Coordination happens in our office, not in the client's inbox.",
      "You get a single point of contact, a single programme, and one party to hold responsible on handover day.",
    ],
    included: [
      "Tender pricing and buildability review",
      "Programme development and resource planning",
      "Procurement and subcontractor management",
      "Site supervision and daily progress records",
      "QA/QC inspection and snag close-out",
      "As-built documentation and handover pack",
    ],
    image: "/images/service-general-contracting.jpg",
    imageAlt:
      "A site team in hard hats and hi-vis working together at height on a structure.",
  },
  {
    id: "civil-infrastructure",
    label: "Civil & Infrastructure",
    description: "Roads, drainage, utilities, and earthworks.",
    summary:
      "Bulk earthworks, roads, drainage and buried services — the work that everything else depends on. We survey before we dig and we set out to tolerance, because civil errors are the most expensive ones to correct.",
    body: [
      "Civil work is unforgiving: levels, falls and cover depths are either right or they are dug up again. We start with a topographic survey and a proper temporary works design, then set out from established control points.",
      "Our plant fleet handles bulk excavation, cut and fill, and compaction to specified density, with in-situ testing recorded as we go. Drainage and ducting are surveyed and photographed before backfill, so what is buried is documented.",
      "We coordinate directly with utility authorities on diversions and connections, and we plan traffic management so the surrounding roads keep working while we do.",
    ],
    included: [
      "Topographic survey and setting out",
      "Bulk earthworks, cut and fill, compaction testing",
      "Road formation, sub-base, kerbing and surfacing",
      "Storm and foul drainage networks",
      "Utility ducting, chambers and authority connections",
      "Traffic management and temporary works",
    ],
    image: "/images/service-civil-infrastructure.jpg",
    imageAlt:
      "Excavators and dozers cutting and grading a new road alignment, seen from the air.",
  },
  {
    id: "structural-concrete",
    label: "Structural & Concrete",
    description: "Foundations, RC frames, and steel erection.",
    summary:
      "Foundations, reinforced concrete frames and structural steel, built to the engineer's drawing and verified as we go. Formwork, rebar and pour sequencing are planned before the first truck arrives.",
    body: [
      "Structure is where tolerance discipline pays for itself. We plan pour sequences, construction joints and formwork striking times against the design, and we agree them with the engineer before we start rather than after a problem appears.",
      "Reinforcement is checked and signed off before every pour. Concrete arrives to an approved mix design with cube tests taken on site, and pours are supervised through to finishing and curing.",
      "Where the frame is steel, we handle setting-out, holding-down bolts and erection with certified riggers, and we coordinate the interface between steel and concrete so neither trade waits on the other.",
    ],
    included: [
      "Pad, strip, raft and piled foundation caps",
      "Reinforced concrete columns, slabs and cores",
      "Formwork design, striking and re-shoring",
      "Rebar fixing with pre-pour inspection sign-off",
      "Concrete supply, testing, finishing and curing",
      "Structural steel erection and connections",
    ],
    image: "/images/service-structural-concrete.jpg",
    imageAlt:
      "Workers tying tall reinforcement cages for concrete columns.",
  },
  {
    id: "commercial-building",
    label: "Commercial Building",
    description: "Offices, retail, warehouses, and mixed-use.",
    summary:
      "Offices, retail units, warehouses and mixed-use developments taken from substructure to a building that can be occupied — envelope, services, finishes and statutory sign-off included.",
    body: [
      "Commercial buildings are judged on the date they open, so we build the programme backwards from occupation and protect the critical path: envelope closed, services energised, finishes clean.",
      "We coordinate the mechanical and electrical packages alongside the fabric rather than after it, which is what keeps ceilings from being opened twice and keeps commissioning off the critical path.",
      "Phased handovers are normal for us. Where a tenant needs early access to one floor or one unit, we plan the separation, the temporary services and the safe access to make it happen.",
    ],
    included: [
      "Substructure through to weathertight envelope",
      "Cladding, roofing, glazing and external works",
      "MEP first fix, second fix and commissioning",
      "Internal partitions, ceilings and finishes",
      "Fire, life-safety and statutory compliance",
      "Phased or sectional handover on request",
    ],
    image: "/images/service-commercial-building.jpg",
    imageAlt:
      "Office towers converging overhead, seen looking straight up from street level.",
  },
  {
    id: "renovation-fit-out",
    label: "Renovation & Fit-out",
    description: "Refurbishment, interiors, and upgrades.",
    summary:
      "Refurbishment, interior fit-out and building upgrades — including in premises that have to stay open. We survey what is actually there before pricing what to do with it.",
    body: [
      "Existing buildings hide surprises, so we start with an intrusive survey and a condition report rather than an optimistic assumption. Pricing a refurbishment off a drawing alone is how variations pile up later.",
      "Where the building stays in use, we work in phases and out of hours, with dust and noise containment, protected access routes and clear separation between the live areas and the works.",
      "Fit-out is where finish quality is visible from a metre away, so benchmark areas are agreed and signed off before the rest of the floor follows.",
    ],
    included: [
      "Condition survey and intrusive investigation",
      "Strip-out, asbestos coordination and disposal",
      "Structural alterations and openings",
      "Partitions, ceilings, joinery and floor finishes",
      "Services upgrades and re-commissioning",
      "Out-of-hours phasing for occupied premises",
    ],
    image: "/images/service-renovation-fit-out.jpg",
    imageAlt:
      "A worker cutting and fixing timber during the fit-out of an interior.",
  },
  {
    id: "project-management",
    label: "Project Management",
    description: "Planning, procurement, QA/QC, and supervision.",
    summary:
      "Client-side management for projects we are not building ourselves — programme, procurement, quality and cost control, run by people who have held the trowel as well as the schedule.",
    body: [
      "Not every client needs us to build the job. Some need someone credible on their side of the table, reading the programme properly and asking the contractor the questions they would rather not be asked.",
      "We set up the reporting from day one: a baseline programme, a cost plan, a risk register and a fixed weekly report, so problems surface while they are still cheap to fix.",
      "On site, our inspectors witness the work that matters — reinforcement before pours, services before they are covered, finishes before they are signed off — and record it.",
    ],
    included: [
      "Baseline programme and critical path analysis",
      "Tender documentation and contractor selection",
      "Cost planning, valuations and variation control",
      "Risk register and mitigation tracking",
      "QA/QC inspection and witness hold points",
      "Weekly progress, cost and risk reporting",
    ],
    image: "/images/service-project-management.jpg",
    imageAlt:
      "A project manager marking up a set of construction drawings at a desk.",
  },
  {
    id: "roads-highways",
    label: "Roads & Highways",
    description:
      "Road construction, paving, and highway infrastructure built to last under heavy use.",
    summary:
      "We build and upgrade roads, highways, and access routes engineered to last under heavy use — from earthworks and sub-base through to asphalt and concrete paving, drainage, and markings.",
    body: [
      "Every road project starts with the ground beneath it. We assess site conditions, plan the works around access and traffic, and build up each layer to specification before the surface goes down. Our teams coordinate earthworks, paving, and drainage as one sequence, so the finished route performs and drains as it should from day one.",
    ],
    included: [
      "Earthworks, grading, and sub-base preparation",
      "Asphalt and concrete paving",
      "Drainage, kerbs, and road markings",
      "Access roads and site infrastructure",
    ],
    image: "/images/service-roads-highways.jpg",
    imageAlt:
      "A paving crew in hard hats and hi-vis laying fresh asphalt at night, beside a painted give-way marking.",
  },
  {
    id: "villa-construction",
    label: "Villa Construction",
    description:
      "Private villas and residential builds delivered with precision and a high-quality finish.",
    summary:
      "We construct private villas from foundation to handover, pairing structural integrity with refined finishes — each home built to its own design, with finishes and services coordinated throughout.",
    body: [
      "We treat each villa as a single accountable build, from setting out the foundations to the final handover walk-through. One team coordinates the structure, finishes, and building services, keeping the client informed at each milestone. Close attention to detail and tight quality checks mean the finished home matches the design and the standard agreed at the outset.",
    ],
    included: [
      "Full structural and architectural construction",
      "High-quality interior and exterior finishes",
      "Coordination of MEP (mechanical, electrical, plumbing)",
      "Landscaping and external works",
    ],
    image: "/images/service-villa-construction.jpg",
    imageAlt:
      "A modern two-storey villa with white render, timber-clad volumes and full-height glazing, behind an infinity pool and lawn.",
  },
  {
    id: "oil-gas",
    label: "Oil & Gas",
    description:
      "Civil and construction support for oil, gas, and energy sector facilities.",
    summary:
      "We provide civil and construction support for the oil, gas, and energy sectors, delivering foundations, structures, and infrastructure to strict standards in demanding operational environments.",
    body: [
      "Industrial and energy sites leave no room for shortcuts. We plan each scope around the site's safety and operational requirements, mobilise experienced civil teams, and work to the sector's documentation and quality standards throughout. Our methods are built for demanding environments, where reliability and compliance matter as much as the finished structure.",
    ],
    included: [
      "Civil works for industrial and energy facilities",
      "Foundations, structures, and site infrastructure",
      "Compliance with sector safety and quality standards",
      "Support for operational and maintenance projects",
    ],
    image: "/images/service-oil-gas.jpg",
    imageAlt:
      "A refinery's distillation columns, stacks and pipe racks under a heavy grey sky.",
  },
].map((service) => ({ ...service, href: `/services/${service.id}` }));
