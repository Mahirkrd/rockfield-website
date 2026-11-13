# Site photography

Every photo on the site is one of Rockfield's own site photos, in `works/`
— one folder per Our Works category. `docs/works-photos.json` lists every file
with its category, work type, size and whether it is a design visualisation
(a render). There is no stock photography and nothing is loaded from another
host.

## Where each photo is used

- **Our Works pages** (`/works`, `/works/<category>`) show all of them, built
  from `src/data/works.ts`. Each category's cover is chosen there.
- **Every other slot** — the homepage hero and "How we work" band, the
  page mastheads, the About, Company and QHSE plates, the fleet photo — is set
  in `src/data/images.ts`.
- **Service photos** (card, masthead and the "How we work" figure on each
  service page) are set per service in `src/data/services.ts`.

## Rules the code checks

- A slot may only use a file listed in `docs/works-photos.json`.
- A design visualisation (`designRender: true`) is never used where a real
  site photo is implied — only in the Our Works galleries, where it carries a
  "Design visualisation" badge.

Both are checked at build time in `src/data/images.ts`; a wrong path or a
render in a photo slot fails the build.

## Adding photos

Landscape where possible, long edge around 1600px, JPEG quality ~80;
`next/image` resizes and re-encodes from there. Add the file to its category
folder and to `docs/works-photos.json`, then to `src/data/works.ts`.
