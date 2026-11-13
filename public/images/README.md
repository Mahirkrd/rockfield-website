# Site photography

Drop the real photos in here using these exact filenames. Until a file exists,
the site loads a temporary Unsplash construction photo in its place — see
`src/data/images.ts` for the URL behind each one and the two-step swap.

Landscape, long edge around 2000px, JPEG quality ~80. `next/image` resizes and
re-encodes to WebP from there, so anything larger is wasted bytes in git.

## Landmarks

| File           | What it shows                          | Used on                          |
| -------------- | -------------------------------------- | -------------------------------- |
| `hero.jpg`     | Wide construction site / tower cranes   | Home hero, Services + QHSE mastheads |
| `about.jpg`    | Engineers with drawings on site         | About masthead and "Our story"   |
| `process.jpg`  | Structure and cranes (used very dark)   | Home "How we work" background, Company masthead |
| `office.jpg`   | Head-office building exterior           | Contact masthead and location plate |
| `company.jpg`  | Building under construction, cranes     | Company page "Our company" plate |
| `qhse.jpg`     | Site team in hard hats and hi-vis       | QHSE page "HSE" plate            |

## Services

One photo per discipline, named by slug:

`service-general-contracting.jpg`, `service-civil-infrastructure.jpg`,
`service-structural-concrete.jpg`, `service-commercial-building.jpg`,
`service-renovation-fit-out.jpg`, `service-project-management.jpg`,
`service-roads-highways.jpg`, `service-villa-construction.jpg`,
`service-oil-gas.jpg`

## Works photography

`works/` holds the real project photos from the approved company profile, one
folder per work category. `docs/works-photos.json` lists every file with its
category, work type and size. These are served straight from here and need no
entry in `src/data/images.ts`'s temporary list.

All of them appear on the Our Works pages (`/works` and `/works/<category>`),
built from `src/data/works.ts`. The fleet table on the Company page also uses
`works/earthworks/excavation-cut-fill-01.jpg` (`FLEET_IMAGE` in
`src/data/images.ts`).
