/**
 * Our Works — the approved company profile, sections 8 and 9, word for word
 * (docs/profile-content.md), with every photo in docs/works-photos.json.
 *
 * Generated once from those two files; edit by hand from here on. Photo
 * width/height are each file's real pixel size, which the JSON gets wrong
 * for two photos:
 *   /images/works/survey-engineering/survey-underground-detection-01.jpg: JSON 1600x1199, file 1600x1200
 *   /images/works/slopes-drainage/geotextile-lining-01.jpg: JSON 1600x632, file 1280x720
 *
 * Covers are chosen by hand (landscape, never a design render) and checked
 * below: the build fails if a cover is not one of its category's photos or is
 * a render.
 */

export const WORK_CATEGORY_SLUGS = [
  "survey-engineering",
  "earthworks",
  "road-works",
  "slopes-drainage",
  "pipelines-utilities",
  "concrete-structures",
  "oil-gas",
  "buildings-villas-fitout",
] as const;

export type WorkCategorySlug = (typeof WORK_CATEGORY_SLUGS)[number];

export type WorkPhoto = {
  /** Local path under /public. */
  src: string;
  width: number;
  height: number;
  /** A design visualisation (render), not a photo of finished work. Always badged. */
  designRender: boolean;
};

/** A title — text line from the profile. */
export type WorkPoint = { title: string; text: string };

export type WorkType = {
  /** The profile's subsection slug — the section's anchor on its category page. */
  slug: string;
  title: string;
  points: WorkPoint[];
  photos: WorkPhoto[];
};

export type WorkCategory = {
  /** "01" … "08". */
  number: string;
  slug: WorkCategorySlug;
  title: string;
  /** The category's name in the profile's strip line — for compact tiles. */
  short: string;
  summary: string[];
  callout?: WorkPoint;
  /** One of the category's own photos; `position` is its CSS object-position. */
  cover: WorkPhoto & { position?: string };
  types: WorkType[];
};

/** Section 8: the Our Works intro. */
export const WORKS_INTRO = {
  eyebrow: "Our Works",
  headline: "Built on site. Proven in the field.",
  strip: ["Survey", "Earthworks", "Roads", "Slopes & Drainage", "Pipelines", "Concrete", "Oil & Gas", "Buildings & Fit-out"],
};

type CategorySource = Omit<WorkCategory, "cover"> & {
  cover: { file: string; position?: string };
};

const SOURCE: CategorySource[] = [
  {
    number: "01",
    slug: "survey-engineering",
    title: "Survey & Engineering",
    short: "Survey",
    summary: ["Differential GPS survey", "Underground detection"],
    cover: { file: "survey-underground-detection-01.jpg" },
    types: [
      {
        slug: "survey-underground-detection",
        title: "Surveying & underground detection",
        points: [
          { title: "Differential GPS survey", text: "Survey control and setting-out by differential GPS on site." },
          { title: "Underground detection", text: "Cable and pipe locating before any excavation starts." },
          { title: "Accurate from day one", text: "Surveying teams support design, setting-out and as-built checks." },
        ],
        photos: [
          { src: "/images/works/survey-engineering/survey-underground-detection-01.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/survey-engineering/survey-underground-detection-02.jpg", width: 1200, height: 1600, designRender: false },
        ],
      },
    ],
  },
  {
    number: "02",
    slug: "earthworks",
    title: "Earthworks",
    short: "Earthworks",
    summary: ["Excavation, cut & fill", "Backfill & compaction", "Right of way construction"],
    // 06, the line of excavators, is the homepage hero instead.
    cover: { file: "excavation-cut-fill-04.jpg" },
    types: [
      {
        slug: "excavation-cut-fill",
        title: "Excavation, cut & fill",
        points: [
          { title: "Cutting & filling", text: "Excavators, loaders and dump trucks shape the formation to level." },
          { title: "Backfill & compaction", text: "Backfill is compacted in layers and verified by field compaction testing." },
          { title: "Own fleet", text: "Plant works under our own supervision. See the fleet list for details." },
        ],
        photos: [
          { src: "/images/works/earthworks/excavation-cut-fill-01.jpg", width: 1100, height: 823, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-02.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-03.jpg", width: 1100, height: 619, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-04.jpg", width: 1100, height: 619, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-05.jpg", width: 1024, height: 768, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-06.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-07.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-08.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-09.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/earthworks/excavation-cut-fill-10.jpg", width: 1100, height: 825, designRender: false },
        ],
      },
      {
        slug: "right-of-way",
        title: "Right of way construction",
        points: [
          { title: "Corridor formation", text: "Road corridor cleared, cut and graded to the design alignment." },
          { title: "Heavy plant", text: "Dozers, graders and rollers work the formation under our supervision." },
        ],
        photos: [
          { src: "/images/works/earthworks/right-of-way-01.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/earthworks/right-of-way-02.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/earthworks/right-of-way-03.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/earthworks/right-of-way-04.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/earthworks/right-of-way-05.jpg", width: 1100, height: 619, designRender: false },
          { src: "/images/works/earthworks/right-of-way-06.jpg", width: 1600, height: 900, designRender: false },
        ],
      },
    ],
  },
  {
    number: "03",
    slug: "road-works",
    title: "Road Works",
    short: "Roads",
    summary: ["Road construction & double dressing", "Asphalt cutting & paving", "Concrete channels, signage & fencing"],
    cover: { file: "asphalt-cutting-paving-02.jpg" },
    types: [
      {
        slug: "road-construction",
        title: "Road construction & double dressing",
        points: [
          { title: "Road construction", text: "Formation, base layers and compaction with our own roller fleet." },
          { title: "Double dressing", text: "Two-course surface treatment: binder sprayed, aggregate chips rolled in, twice." },
          { title: "Compaction", text: "HAMM and BOMAG steel rollers plus a HAMM sheepfoot roller." },
        ],
        photos: [
          { src: "/images/works/road-works/road-construction-01.jpg", width: 1600, height: 428, designRender: false },
        ],
      },
      {
        slug: "asphalt-cutting-paving",
        title: "Asphalt cutting & paving",
        points: [
          { title: "Asphalt cutting", text: "Clean cut lines in existing roads using a cutter machine." },
          { title: "Asphalt paving", text: "Asphalt surfacing laid and rolled on road sections." },
          { title: "Protected works", text: "Cones and barrier tape keep the public clear of open works." },
        ],
        photos: [
          { src: "/images/works/road-works/asphalt-cutting-paving-01.jpg", width: 1025, height: 1254, designRender: false },
          { src: "/images/works/road-works/asphalt-cutting-paving-02.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/road-works/asphalt-cutting-paving-03.jpg", width: 962, height: 480, designRender: false },
          { src: "/images/works/road-works/asphalt-cutting-paving-04.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/road-works/asphalt-cutting-paving-05.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/road-works/asphalt-cutting-paving-06.jpg", width: 619, height: 1100, designRender: false },
        ],
      },
      {
        slug: "channels-signage-fencing",
        title: "Concrete channels, signage & fencing",
        points: [
          { title: "Concrete kerbs & channels", text: "Concrete channels and kerbs cast beside the carriageway." },
          { title: "Marker posts & safety signs", text: "Warning and PPE signs installed on posts at work areas." },
          { title: "Site fencing", text: "Fence installation to secure and protect the works area." },
        ],
        photos: [
          { src: "/images/works/road-works/channels-signage-fencing-01.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/road-works/channels-signage-fencing-02.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/road-works/channels-signage-fencing-03.jpg", width: 1100, height: 1100, designRender: false },
          { src: "/images/works/road-works/channels-signage-fencing-04.jpg", width: 1100, height: 1100, designRender: false },
          { src: "/images/works/road-works/channels-signage-fencing-05.jpg", width: 1100, height: 1100, designRender: false },
          { src: "/images/works/road-works/channels-signage-fencing-06.jpg", width: 1100, height: 1100, designRender: false },
        ],
      },
    ],
  },
  {
    number: "04",
    slug: "slopes-drainage",
    title: "Slopes & Drainage",
    short: "Slopes & Drainage",
    summary: ["Hill reslope & gabion walls", "Riprap & drainage ditches", "Geotextile, lining & rock shield"],
    cover: { file: "reslope-gabion-04.jpg" },
    types: [
      {
        slug: "reslope-gabion",
        title: "Slope remediation & gabion walls",
        points: [
          { title: "Re-slope & re-scale", text: "Hillsides cut back and scaled to the design slope for a stable corridor." },
          { title: "Gabion wall construction", text: "Stepped gabion walls built to retain cut slopes and structures." },
          { title: "Heavy fleet", text: "Excavators and loaders from our own fleet work the face." },
        ],
        photos: [
          { src: "/images/works/slopes-drainage/reslope-gabion-01.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/reslope-gabion-02.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/reslope-gabion-03.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/reslope-gabion-04.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/reslope-gabion-05.jpg", width: 915, height: 620, designRender: false },
          { src: "/images/works/slopes-drainage/reslope-gabion-06.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/reslope-gabion-07.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/reslope-gabion-08.jpg", width: 1100, height: 618, designRender: false },
        ],
      },
      {
        slug: "riprap-ditches",
        title: "Riprap & drainage ditches",
        points: [
          { title: "Geotextile & riprap", text: "Geotextile laid under stone riprap to resist erosion." },
          { title: "Re-slope side ditches", text: "Side ditches re-sloped and stone-lined to carry runoff clear of the road." },
        ],
        photos: [
          { src: "/images/works/slopes-drainage/riprap-ditches-01.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/riprap-ditches-02.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/riprap-ditches-03.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/slopes-drainage/riprap-ditches-04.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/slopes-drainage/riprap-ditches-05.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/riprap-ditches-06.jpg", width: 1100, height: 825, designRender: false },
        ],
      },
      {
        slug: "geotextile-lining",
        title: "Geotextile, lining & rock shield",
        points: [
          { title: "Geotextile & rock shield", text: "Geotextile and rock-shield protection installed around buried pipelines." },
          { title: "Waste water construction", text: "Geotextile and liner laid and compacted in waste water ponds." },
        ],
        photos: [
          { src: "/images/works/slopes-drainage/geotextile-lining-01.jpg", width: 1280, height: 720, designRender: false },
          { src: "/images/works/slopes-drainage/geotextile-lining-02.jpg", width: 1600, height: 693, designRender: false },
          { src: "/images/works/slopes-drainage/geotextile-lining-03.jpg", width: 1325, height: 996, designRender: false },
          { src: "/images/works/slopes-drainage/geotextile-lining-04.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/slopes-drainage/geotextile-lining-05.jpg", width: 1100, height: 825, designRender: false },
        ],
      },
    ],
  },
  {
    number: "05",
    slug: "pipelines-utilities",
    title: "Pipelines & Utilities",
    short: "Pipelines",
    summary: ["Trench excavation", "Polyethylene water pipe", "Hydrostatic testing & manholes"],
    cover: { file: "trench-excavation-06.jpg" },
    types: [
      {
        slug: "trench-excavation",
        title: "Trench excavation",
        points: [
          { title: "Utility & drainage trenches", text: "Open trenches cut to line and depth for utilities and drainage." },
          { title: "Live roads", text: "Trenches along live roads, protected with cones and barrier tape." },
        ],
        photos: [
          { src: "/images/works/pipelines-utilities/trench-excavation-01.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/trench-excavation-02.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/trench-excavation-03.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/trench-excavation-04.jpg", width: 505, height: 900, designRender: false },
          { src: "/images/works/pipelines-utilities/trench-excavation-05.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/trench-excavation-06.jpg", width: 1218, height: 873, designRender: false },
        ],
      },
      {
        slug: "pe-water-pipe",
        title: "Polyethylene water pipe installation",
        points: [
          { title: "Laying", text: "Polyethylene water pipe laid in the trench to line and level." },
          { title: "Welding", text: "Pipe lengths welded to form continuous water mains." },
          { title: "Along the corridor", text: "Installation runs beside live roads and across open ground." },
        ],
        photos: [
          { src: "/images/works/pipelines-utilities/pe-water-pipe-01.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/pe-water-pipe-02.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/pe-water-pipe-03.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/pe-water-pipe-04.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/pe-water-pipe-05.jpg", width: 619, height: 1100, designRender: false },
        ],
      },
      {
        slug: "joints-hydrostatic-test",
        title: "Joint connection & hydrostatic test",
        points: [
          { title: "Valves & joint connection", text: "Valves, tees and fittings connected along the water line." },
          { title: "Hydrostatic test", text: "Completed lines are pressure-tested before acceptance." },
        ],
        photos: [
          { src: "/images/works/pipelines-utilities/joints-hydrostatic-test-01.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/joints-hydrostatic-test-02.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/joints-hydrostatic-test-03.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/joints-hydrostatic-test-04.jpg", width: 791, height: 1325, designRender: false },
          { src: "/images/works/pipelines-utilities/joints-hydrostatic-test-05.jpg", width: 792, height: 1412, designRender: false },
        ],
      },
      {
        slug: "manholes",
        title: "Manhole construction",
        points: [
          { title: "Formwork & concrete", text: "Chambers cast in timber formwork and finished to drawing." },
          { title: "Protective coating", text: "Chamber walls coated before backfilling." },
          { title: "Cover slabs", text: "Cover slabs with access openings fitted on each manhole." },
        ],
        photos: [
          { src: "/images/works/pipelines-utilities/manholes-01.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/manholes-02.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/manholes-03.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/manholes-04.jpg", width: 619, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/manholes-05.jpg", width: 618, height: 1100, designRender: false },
          { src: "/images/works/pipelines-utilities/manholes-06.jpg", width: 619, height: 1100, designRender: false },
        ],
      },
    ],
  },
  {
    number: "06",
    slug: "concrete-structures",
    title: "Concrete & Structures",
    short: "Concrete",
    summary: ["Concrete works", "Formwork & rebar", "Tower formwork"],
    cover: { file: "tower-formwork-rebar-01.jpg" },
    types: [
      {
        slug: "concrete-formwork-rebar",
        title: "Concrete, formwork & reinforcement",
        points: [
          { title: "Concrete works", text: "Slab pours finished with power trowels, plus channels and kerbs." },
          { title: "Formwork", text: "Timber and steel formwork for walls, set out and braced on site." },
          { title: "Rebar installation", text: "Reinforcement fixed to drawing before every pour." },
        ],
        photos: [
          { src: "/images/works/concrete-structures/concrete-formwork-rebar-01.jpg", width: 1600, height: 839, designRender: false },
          { src: "/images/works/concrete-structures/concrete-formwork-rebar-02.jpg", width: 921, height: 708, designRender: false },
          { src: "/images/works/concrete-structures/concrete-formwork-rebar-03.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/concrete-structures/concrete-formwork-rebar-04.jpg", width: 1100, height: 619, designRender: false },
          { src: "/images/works/concrete-structures/concrete-formwork-rebar-05.jpg", width: 1600, height: 900, designRender: false },
        ],
      },
      {
        slug: "tower-formwork-rebar",
        title: "Tower formwork & rebar",
        points: [
          { title: "Slab formwork & shoring", text: "Formwork and propping set out for tall tower slabs." },
          { title: "Rebar for towers", text: "Reinforcement installed to drawing before each tower pour." },
        ],
        photos: [
          { src: "/images/works/concrete-structures/tower-formwork-rebar-01.jpg", width: 1600, height: 900, designRender: false },
          { src: "/images/works/concrete-structures/tower-formwork-rebar-02.jpg", width: 1600, height: 900, designRender: false },
          { src: "/images/works/concrete-structures/tower-formwork-rebar-03.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/concrete-structures/tower-formwork-rebar-04.jpg", width: 1600, height: 1200, designRender: false },
        ],
      },
    ],
  },
  {
    number: "07",
    slug: "oil-gas",
    title: "Oil & Gas",
    short: "Oil & Gas",
    summary: ["Oil pit ladders", "Crude pipeline backfill"],
    callout: { title: "Energy sector", text: "Civil and construction support for energy sector facilities." },
    cover: { file: "oil-gas-support-02.jpg", position: "50% 40%" },
    types: [
      {
        slug: "oil-gas-support",
        title: "Oil & gas facility support",
        points: [
          { title: "Oil pit ladders", text: "New caged access ladders fabricated and installed in oil pits." },
          { title: "Crude pipeline backfill", text: "Stone bedding and backfill around a crude pipeline, rolled in layers." },
        ],
        photos: [
          { src: "/images/works/oil-gas/oil-gas-support-01.jpg", width: 1200, height: 1600, designRender: false },
          { src: "/images/works/oil-gas/oil-gas-support-02.jpg", width: 1200, height: 1600, designRender: false },
        ],
      },
    ],
  },
  {
    number: "08",
    slug: "buildings-villas-fitout",
    title: "Buildings, Villas & Fit-out",
    short: "Buildings & Fit-out",
    summary: ["Villa construction & design", "Masonry & plastering", "Flooring, facades & ceilings"],
    cover: { file: "villa-construction-03.jpg" },
    types: [
      {
        slug: "villa-construction",
        title: "Villa construction",
        points: [
          { title: "From bare land to handover", text: "House construction services, start to finish." },
          { title: "Design & supervision", text: "Villas designed, built and supervised by one team." },
          { title: "Villa finishing", text: "Finishing works for a 1,500 m² villa in Green Land, Massif Road." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/villa-construction-01.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/buildings-villas-fitout/villa-construction-02.jpg", width: 1050, height: 947, designRender: false },
          { src: "/images/works/buildings-villas-fitout/villa-construction-03.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/villa-construction-04.jpg", width: 1100, height: 825, designRender: false },
        ],
      },
      {
        slug: "villa-facade-design",
        title: "Villa & facade design",
        points: [
          { title: "Design, drawings & supervision", text: "Villas designed, drawn and supervised through to completion." },
          { title: "Facade design", text: "Facade design and full drawing sets for buildings and villas." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/villa-facade-design-01.jpg", width: 1100, height: 764, designRender: true },
          { src: "/images/works/buildings-villas-fitout/villa-facade-design-02.jpg", width: 1203, height: 1203, designRender: true },
          { src: "/images/works/buildings-villas-fitout/villa-facade-design-03.jpg", width: 1100, height: 656, designRender: true },
          { src: "/images/works/buildings-villas-fitout/villa-facade-design-04.jpg", width: 1100, height: 1100, designRender: true },
          { src: "/images/works/buildings-villas-fitout/villa-facade-design-05.jpg", width: 1100, height: 761, designRender: true },
          { src: "/images/works/buildings-villas-fitout/villa-facade-design-06.jpg", width: 1447, height: 1440, designRender: true },
        ],
      },
      {
        slug: "interior-design",
        title: "Interior design concepts",
        points: [
          { title: "Interior design", text: "Interior concepts and drawing sets for villas and offices." },
          { title: "From concept to finish", text: "Designs carried through to finishing works on site." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/interior-design-01.jpg", width: 1100, height: 1068, designRender: true },
          { src: "/images/works/buildings-villas-fitout/interior-design-02.jpg", width: 1096, height: 996, designRender: true },
          { src: "/images/works/buildings-villas-fitout/interior-design-03.jpg", width: 1600, height: 1064, designRender: true },
          { src: "/images/works/buildings-villas-fitout/interior-design-04.jpg", width: 1100, height: 830, designRender: true },
        ],
      },
      {
        slug: "masonry",
        title: "Masonry: block & brick",
        points: [
          { title: "Block & brick masonry", text: "Block and brick walls built to drawing for villas and commercial buildings." },
          { title: "Ready for plastering", text: "Masonry prepared for cement and gypsum plastering." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/masonry-01.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/buildings-villas-fitout/masonry-02.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/masonry-03.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/masonry-04.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/masonry-05.jpg", width: 1100, height: 619, designRender: false },
        ],
      },
      {
        slug: "plastering",
        title: "Plastering: cement & gypsum",
        points: [
          { title: "Cement plastering", text: "Internal and external walls plastered and finished to line." },
          { title: "Gypsum plastering", text: "Smooth gypsum plaster and moulded wall panels for interiors." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/plastering-01.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/buildings-villas-fitout/plastering-02.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/plastering-03.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/plastering-04.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/plastering-05.jpg", width: 1100, height: 825, designRender: false },
        ],
      },
      {
        slug: "flooring-stairs-stone",
        title: "Flooring, stairs & stone finishes",
        points: [
          { title: "Ceramic, marble & porcelain", text: "Floor and wall finishes installed to pattern and level." },
          { title: "Stairs", text: "Stair treads and risers finished in stone and board." },
          { title: "External paving", text: "Stone-paved walkways around completed buildings." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/flooring-stairs-stone-01.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/buildings-villas-fitout/flooring-stairs-stone-02.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/flooring-stairs-stone-03.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/flooring-stairs-stone-04.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/flooring-stairs-stone-05.jpg", width: 1100, height: 619, designRender: false },
        ],
      },
      {
        slug: "painting-facades-rehab",
        title: "Painting, facades & rehabilitation",
        points: [
          { title: "Interior finishing", text: "Painting and wall finishes completed room by room." },
          { title: "Building rehabilitation", text: "Painting and rehabilitation of an old building, worked from an access platform." },
          { title: "Facades", text: "Cladding, glazing and facade finishing for commercial buildings." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/painting-facades-rehab-01.jpg", width: 1100, height: 825, designRender: false },
          { src: "/images/works/buildings-villas-fitout/painting-facades-rehab-02.jpg", width: 1100, height: 712, designRender: false },
          { src: "/images/works/buildings-villas-fitout/painting-facades-rehab-03.jpg", width: 825, height: 1100, designRender: false },
          { src: "/images/works/buildings-villas-fitout/painting-facades-rehab-04.jpg", width: 919, height: 1251, designRender: false },
          { src: "/images/works/buildings-villas-fitout/painting-facades-rehab-05.jpg", width: 1100, height: 619, designRender: false },
          { src: "/images/works/buildings-villas-fitout/painting-facades-rehab-06.jpg", width: 1100, height: 521, designRender: false },
        ],
      },
      {
        slug: "ceilings-mechanical",
        title: "Gypsum ceilings & mechanical works",
        points: [
          { title: "Gypsum ceilings", text: "Supply and installation of gypsum board ceilings for a showroom in Erbil." },
          { title: "Ceiling detailing", text: "Curved bulkheads and board lining installed to the design." },
          { title: "Duct installation", text: "Mechanical duct installation for a restaurant in Erbil." },
        ],
        photos: [
          { src: "/images/works/buildings-villas-fitout/ceilings-mechanical-01.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/buildings-villas-fitout/ceilings-mechanical-02.jpg", width: 1600, height: 1200, designRender: false },
          { src: "/images/works/buildings-villas-fitout/ceilings-mechanical-03.jpg", width: 1600, height: 880, designRender: false },
          { src: "/images/works/buildings-villas-fitout/ceilings-mechanical-04.jpg", width: 1600, height: 1200, designRender: false },
        ],
      },
    ],
  },
];

export const WORK_CATEGORIES: WorkCategory[] = SOURCE.map((category) => {
  const photo = category.types
    .flatMap((type) => type.photos)
    .find((p) => p.src.endsWith(`/${category.cover.file}`));
  if (!photo) {
    throw new Error(`Cover ${category.cover.file} is not a photo of ${category.slug}`);
  }
  if (photo.designRender) {
    throw new Error(`The cover for ${category.slug} is a design render`);
  }
  return { ...category, cover: { ...photo, position: category.cover.position } };
});

export const WORKS_HREF = "/works";

export function workCategoryHref(slug: WorkCategorySlug): string {
  return `${WORKS_HREF}/${slug}`;
}

export function getWorkCategory(slug: string): WorkCategory | undefined {
  return WORK_CATEGORIES.find((category) => category.slug === slug);
}

export function categoryPhotoCount(category: WorkCategory): number {
  return category.types.reduce((sum, type) => sum + type.photos.length, 0);
}

export const WORKS_PHOTO_COUNT = WORK_CATEGORIES.reduce(
  (sum, category) => sum + categoryPhotoCount(category),
  0,
);

export const WORK_TYPE_COUNT = WORK_CATEGORIES.reduce(
  (sum, category) => sum + category.types.length,
  0,
);

/** Background of the /works masthead: a long graded corridor, from Earthworks. */
export const WORKS_HERO_PHOTO: WorkPhoto = {
  src: "/images/works/earthworks/right-of-way-06.jpg",
  width: 1600,
  height: 900,
  designRender: false,
};

/** A photo ready for a gallery and the lightbox: what it is and where it sits. */
export type GalleryItem = WorkPhoto & {
  alt: string;
  /** The work type the photo belongs to. */
  typeTitle: string;
  categoryTitle: string;
  categoryNumber: string;
  categorySlug: WorkCategorySlug;
};

/** A category's photos in page order, captioned for the lightbox. */
export function categoryGallery(category: WorkCategory): GalleryItem[] {
  return category.types.flatMap((type) =>
    type.photos.map((photo, i) => ({
      ...photo,
      alt: `${type.title}, ${category.title} — ${
        photo.designRender ? "design visualisation" : "site photo"
      } ${i + 1} of ${type.photos.length}`,
      typeTitle: type.title,
      categoryTitle: category.title,
      categoryNumber: category.number,
      categorySlug: category.slug,
    })),
  );
}

/** Alt text for a category's cover: the gallery caption of that photo. */
export function coverAlt(category: WorkCategory): string {
  return (
    categoryGallery(category).find((item) => item.src === category.cover.src)
      ?.alt ?? category.title
  );
}
