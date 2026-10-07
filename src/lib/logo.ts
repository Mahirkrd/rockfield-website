import fs from "node:fs";
import path from "node:path";

import { LOGO_SRC } from "@/components/site/Logo";

const DARK_BG_SRC = "/logo-white.png";

/**
 * Which logo file to use on ink surfaces (footer, mobile menu).
 *
 * The standard artwork carries a white plate, so a light-on-dark version can be
 * dropped in at /public/logo-white.png and it is picked up automatically. Until
 * then this falls back to the one logo we have. Server-side only — the check
 * touches the filesystem, so callers must pass the result into client components.
 */
export function darkSurfaceLogoSrc(): string {
  return fs.existsSync(path.join(process.cwd(), "public", DARK_BG_SRC))
    ? DARK_BG_SRC
    : LOGO_SRC;
}
