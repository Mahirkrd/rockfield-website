/**
 * Project portfolio — six projects. Every entry is placeholder content: names,
 * clients, districts and figures are invented and must be replaced before
 * launch. Moves to the database later.
 */

export const CATEGORIES = [
  "Industrial",
  "Commercial",
  "Infrastructure",
  "Residential",
  "Civil",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: string;
  title: string;
  category: Category;
  location: string;
  year: string;
  /** One line for cards and the detail intro. */
  summary: string;
  /** Card and lead-figure photo. Local path under /public — see src/data/images.ts. */
  image: string;
  /** Alt text for `image`. Describes the photo, not the project. */
  imageAlt: string;
  /** Detail page body copy. */
  body: string[];
  /** Spec-panel rows on the detail page. */
  facts: { label: string; value: string }[];
  /** What the contract covered. */
  scope: string[];
  /** Supporting figures on the detail page. The cover `image` leads the set. */
  gallery: { caption: string; image: string; imageAlt: string }[];
  /** Service ids this project drew on — powers cross-linking both ways. */
  serviceIds: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "riverside-logistics-hub",
    title: "Riverside Logistics Hub",
    category: "Industrial",
    location: "Riverside District",
    year: "2024",
    summary:
      "A 42,000 m² distribution warehouse with a reinforced slab rated for heavy racking, delivered from bare ground to operational in fourteen months.",
    image: "/images/project-1.jpg",
    imageAlt:
      "The interior of a large steel-framed industrial hall, its floor cleared and roof structure exposed.",
    body: [
      "The site was a former aggregate yard with two metres of uncontrolled fill across most of its footprint. We stripped, tested and re-engineered the ground before a single foundation was set, which added three weeks at the front of the programme and removed a settlement risk that would have followed the building for decades.",
      "The warehouse slab was the critical element: laser-screeded, power-floated and cured to a flatness tolerance the client's racking supplier could sign off without remedial grinding. Dock levellers, sprinkler tanks and the office block ran as parallel packages so the building was weathertight before the first winter.",
    ],
    facts: [
      { label: "Client", value: "[Client Name]" },
      { label: "Value", value: "[Contract Value]" },
      { label: "Duration", value: "14 months" },
      { label: "Floor area", value: "42,000 m²" },
    ],
    scope: [
      "Ground remediation and re-engineered fill",
      "Pad foundations and laser-screeded warehouse slab",
      "Portal frame erection and cladding envelope",
      "Two-storey office fit-out and external works",
    ],
    gallery: [
      {
        caption: "Slab pour",
        image: "/images/project-1-2.jpg",
        imageAlt:
          "Aerial view of a reinforced slab being laid, with a line of site staff walking the finished section.",
      },
      {
        caption: "Portal frame",
        image: "/images/project-1-3.jpg",
        imageAlt:
          "A steel portal frame picked out against a dark sky, its bracing forming a lattice.",
      },
      {
        caption: "Racking install",
        image: "/images/project-1-4.jpg",
        imageAlt:
          "The interior of a completed distribution warehouse with pallet racking running the length of the floor.",
      },
    ],
    serviceIds: [
      "general-contracting",
      "structural-concrete",
      "commercial-building",
    ],
  },
  {
    id: "central-business-tower",
    title: "Central Business Tower",
    category: "Commercial",
    location: "Central District",
    year: "2023",
    summary:
      "An eighteen-storey office tower with a reinforced concrete core, handed over floor by floor so early tenants could occupy while the upper levels finished.",
    image: "/images/project-2.jpg",
    imageAlt:
      "Glass and steel office towers seen looking up from street level.",
    body: [
      "The core was slipformed ahead of the floor plates, which set the pace for everything above ground. Working to a seven-day floor cycle meant formwork, rebar and pour sequencing had to be planned as one operation rather than three trades taking turns.",
      "Sectional handover was written into the contract from the start. We separated services floor by floor, provided temporary fire and lift strategies for the occupied levels, and kept construction traffic isolated from tenant access throughout.",
    ],
    facts: [
      { label: "Client", value: "[Client Name]" },
      { label: "Value", value: "[Contract Value]" },
      { label: "Duration", value: "26 months" },
      { label: "Storeys", value: "18 above ground" },
    ],
    scope: [
      "Piled foundations and three-level basement",
      "Slipformed RC core and post-tensioned floor plates",
      "Unitised curtain wall envelope",
      "Sectional handover with live tenant floors",
    ],
    gallery: [
      {
        caption: "Frame and cranes",
        image: "/images/project-2-2.jpg",
        imageAlt:
          "A high-rise concrete frame under construction with two tower cranes above it.",
      },
      {
        caption: "Curtain wall",
        image: "/images/project-2-3.jpg",
        imageAlt:
          "The curtain-wall facade of a tower seen looking straight up its corner.",
      },
      {
        caption: "Completed elevation",
        image: "/images/project-2-4.jpg",
        imageAlt:
          "The finished glass elevation of an office building at street level.",
      },
    ],
    serviceIds: [
      "commercial-building",
      "structural-concrete",
      "general-contracting",
    ],
  },
  {
    id: "northgate-interchange",
    title: "Northgate Interchange",
    category: "Infrastructure",
    location: "Northgate",
    year: "2023",
    summary:
      "A grade-separated road interchange built under live traffic, with the carriageway kept open in both directions for the full duration.",
    image: "/images/project-3.jpg",
    imageAlt:
      "Aerial view of a multi-level road interchange, slip roads looping over the main carriageways.",
    body: [
      "Nothing about this job was harder than keeping the road working. The traffic management plan was rewritten four times before we broke ground, and every switch was executed overnight with the layout restored before the morning peak.",
      "The bridge deck was cast in situ on falsework over a closed lane, with the pours scheduled for the quietest hours of the week. Utility diversions ran ahead of the main works so no service strike could stop the programme.",
    ],
    facts: [
      { label: "Client", value: "[Authority Name]" },
      { label: "Value", value: "[Contract Value]" },
      { label: "Duration", value: "22 months" },
      { label: "Structures", value: "1 bridge, 4 retaining walls" },
    ],
    scope: [
      "Phased traffic management under live conditions",
      "Utility diversions and authority coordination",
      "In-situ bridge deck and reinforced earth walls",
      "Carriageway construction, drainage and surfacing",
    ],
    gallery: [
      {
        caption: "Bridge structure",
        image: "/images/project-3-2.jpg",
        imageAlt:
          "A long-span road bridge carrying a carriageway across open water at dusk.",
      },
      {
        caption: "Earthworks",
        image: "/images/project-3-3.jpg",
        imageAlt:
          "Excavators and dozers cutting and grading a new road alignment, seen from the air.",
      },
      {
        caption: "Freight corridor",
        image: "/images/project-3-4.jpg",
        imageAlt:
          "An aerial view of a freight terminal and the road network serving it.",
      },
    ],
    serviceIds: [
      "civil-infrastructure",
      "structural-concrete",
      "project-management",
    ],
  },
  {
    id: "meadowview-residences",
    title: "Meadowview Residences",
    category: "Residential",
    location: "Meadowview",
    year: "2022",
    summary:
      "Ninety-six apartments across four blocks, with a repeating unit layout that let us industrialise the finishing trades.",
    image: "/images/project-4.jpg",
    imageAlt:
      "A multi-storey residential block under construction, its frame and scaffolding open to the sky.",
    body: [
      "Repetition is the advantage on residential work, so we invested in getting one apartment exactly right as a benchmark before releasing the rest. The finish standard was agreed on site rather than argued over drawings.",
      "Blocks were sequenced a floor apart so the same crews moved continuously between them. Kitchens and bathrooms were pre-ordered against the programme, which kept a long-lead item from becoming the reason for a late handover.",
    ],
    facts: [
      { label: "Client", value: "[Client Name]" },
      { label: "Value", value: "[Contract Value]" },
      { label: "Duration", value: "19 months" },
      { label: "Units", value: "96 apartments" },
    ],
    scope: [
      "Raft foundations and RC frame to four blocks",
      "Envelope, roofing and balcony systems",
      "Full internal fit-out with benchmark sign-off",
      "Landscaping, parking and external works",
    ],
    gallery: [
      {
        caption: "Frame carpentry",
        image: "/images/project-4-2.jpg",
        imageAlt:
          "A carpenter working along the top of a timber frame against an open sky.",
      },
      {
        caption: "Site aerial",
        image: "/images/project-4-3.jpg",
        imageAlt:
          "An aerial view of a completed residential development, roofs and streets laid out in blocks.",
      },
      {
        caption: "External finishes",
        image: "/images/project-4-4.jpg",
        imageAlt:
          "Two workers on ladders finishing the external elevation of a building.",
      },
    ],
    serviceIds: [
      "general-contracting",
      "structural-concrete",
      "renovation-fit-out",
    ],
  },
  {
    id: "harbor-utilities-upgrade",
    title: "Harbor Utilities Upgrade",
    category: "Civil",
    location: "Harbor Quarter",
    year: "2022",
    summary:
      "Replacement of ageing water, power and drainage networks beneath a working harbour district, executed in nine phases without closing a single business.",
    image: "/images/project-5.jpg",
    imageAlt:
      "Site workers laying reinforcement, ducting and coiled cable across an open concrete deck.",
    body: [
      "The existing records were decades out of date, so we surveyed and proved every run before excavating. What we found underground differed from the drawings often enough that trial holes paid for themselves several times over.",
      "Each phase was limited to a single street, opened and reinstated within a fixed window agreed with the businesses on it. Pedestrian access was maintained continuously, and deliveries were re-routed rather than suspended.",
    ],
    facts: [
      { label: "Client", value: "[Authority Name]" },
      { label: "Value", value: "[Contract Value]" },
      { label: "Duration", value: "16 months" },
      { label: "Network", value: "6.4 km of services" },
    ],
    scope: [
      "Utility survey, trial holes and record verification",
      "Water main and foul drainage replacement",
      "HV and LV ducting with new chambers",
      "Phased reinstatement and surfacing",
    ],
    gallery: [
      {
        caption: "Reinforcement cages",
        image: "/images/project-5-2.jpg",
        imageAlt:
          "Workers tying tall reinforcement cages for columns on an open site.",
      },
      {
        caption: "Excavation",
        image: "/images/project-5-3.jpg",
        imageAlt:
          "A tracked excavator working across broken rock and spoil.",
      },
      {
        caption: "Bulk earthworks",
        image: "/images/project-5-4.jpg",
        imageAlt:
          "Heavy plant moving material across a large excavation in staged benches.",
      },
    ],
    serviceIds: ["civil-infrastructure", "project-management"],
  },
  {
    id: "summit-retail-park",
    title: "Summit Retail Park",
    category: "Commercial",
    location: "Summit Park",
    year: "2021",
    summary:
      "Twelve retail units and a food court delivered as shells, then fitted out to eleven different tenant specifications on a single overlapping programme.",
    image: "/images/project-6.jpg",
    imageAlt:
      "The glass and stone exterior of a completed commercial building at street level.",
    body: [
      "The shells were straightforward; the fit-outs were not. Eleven tenants meant eleven design teams, eleven sets of requirements and one shared set of services, so coordination was the whole job.",
      "We ran a single tenant-coordination schedule and held weekly interface meetings, which is why the units opened together rather than trickling into occupation over six months.",
    ],
    facts: [
      { label: "Client", value: "[Client Name]" },
      { label: "Value", value: "[Contract Value]" },
      { label: "Duration", value: "15 months" },
      { label: "Units", value: "12 retail, 1 food court" },
    ],
    scope: [
      "Steel frame shells with service capping-off",
      "Shared MEP infrastructure and substation",
      "Eleven tenant fit-outs under one programme",
      "Car parking, signage and external works",
    ],
    gallery: [
      {
        caption: "Steel erection",
        image: "/images/project-6-2.jpg",
        imageAlt:
          "A welder working on a steel connection, sparks throwing off the joint.",
      },
      {
        caption: "Fit-out works",
        image: "/images/project-6-3.jpg",
        imageAlt:
          "A worker in protective equipment cutting timber inside a steel-framed unit.",
      },
      {
        caption: "Frontage",
        image: "/images/project-6-4.jpg",
        imageAlt:
          "The completed exterior of a modern commercial building against a bright sky.",
      },
    ],
    serviceIds: [
      "commercial-building",
      "renovation-fit-out",
      "general-contracting",
    ],
  },
];
