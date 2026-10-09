# Site photography

Drop the real photos in here using these exact filenames. Until a file exists,
the site loads a temporary Unsplash construction photo in its place — see
`src/data/images.ts` for the URL behind each one and the two-step swap.

Landscape, long edge around 2000px, JPEG quality ~80. `next/image` resizes and
re-encodes to WebP from there, so anything larger is wasted bytes in git.
The leadership plates are the exception: those crop to 4:5 portrait.

## Landmarks

| File           | What it shows                          | Used on                          |
| -------------- | -------------------------------------- | -------------------------------- |
| `hero.jpg`     | Wide construction site / tower cranes   | Home hero, Projects + Services + QHSE mastheads |
| `about.jpg`    | Engineers with drawings on site         | About masthead and "Our story"   |
| `process.jpg`  | Structure and cranes (used very dark)   | Home "How we work" background, Company masthead |
| `office.jpg`   | Head-office building exterior           | Contact masthead and location plate |
| `company.jpg`  | Building under construction, cranes     | Company page "Our company" plate |
| `qhse.jpg`     | Site team in hard hats and hi-vis       | QHSE page "HSE policy" plate     |

## Projects

`project-N.jpg` is the cover — it leads the tile, the card and the detail page.
`project-N-2/3/4.jpg` are the three supporting gallery figures beneath it.

| N | Project                  | Subject                              |
| - | ------------------------ | ------------------------------------ |
| 1 | Riverside Logistics Hub  | Industrial — warehouse / logistics    |
| 2 | Central Business Tower   | Commercial — high-rise                |
| 3 | Northgate Interchange    | Infrastructure — roads and bridges    |
| 4 | Meadowview Residences    | Residential — apartment blocks        |
| 5 | Harbor Utilities Upgrade | Civil — utilities and earthworks      |
| 6 | Summit Retail Park       | Commercial — building exterior        |

## Services

One photo per discipline, named by slug:

`service-general-contracting.jpg`, `service-civil-infrastructure.jpg`,
`service-structural-concrete.jpg`, `service-commercial-building.jpg`,
`service-renovation-fit-out.jpg`, `service-project-management.jpg`,
`service-roads-highways.jpg`, `service-villa-construction.jpg`,
`service-oil-gas.jpg`

## Leadership

`team-1.jpg` … `team-4.jpg`, in the order the people appear on the About page
(Managing Director, Operations Director, Head of Engineering, HSE Manager).
Cropped to 4:5 portrait. The stand-ins show the role on site rather than the
individual — replace them with real portraits along with the bracketed names in
`src/data/team.ts`.

## Company team

`company-team-ceo.jpg`, then `company-team-1.jpg` … `company-team-4.jpg`, in
the order the cards appear on the Company page (CEO, General Manager, Projects
& Operations Manager, Technical / Engineering Lead, HSE / Quality Manager).
Same 4:5 crop. These are separate
from the leadership photos above, so each page can be updated on its own; the
names and bios live in `src/data/company.ts`.
