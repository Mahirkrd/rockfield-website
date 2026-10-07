import Image from "next/image";
import Link from "next/link";

/** Intrinsic pixel size of the artwork in /public — fixes the aspect ratio. */
const INTRINSIC_WIDTH = 1686;
const INTRINSIC_HEIGHT = 470;
const RATIO = INTRINSIC_WIDTH / INTRINSIC_HEIGHT;

export const LOGO_SRC = "/logo.png";

type LogoProps = {
  /** Artwork to render. Dark surfaces pass the light-on-dark file when it exists. */
  src?: string;
  /** Rendered height in px; the width follows from the artwork's ratio. */
  height?: number;
  /** Preload the header copy — it sits above the fold on every route. */
  preload?: boolean;
  className?: string;
};

/**
 * The company logo, straight from the uploaded file. Never redraw it in code:
 * swapping the artwork in /public is the only way it should ever change.
 */
export function Logo({
  src = LOGO_SRC,
  height = 40,
  preload = false,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={src}
        alt="Rockfield for General Contracting Ltd."
        width={Math.round(height * RATIO)}
        height={height}
        preload={preload}
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
