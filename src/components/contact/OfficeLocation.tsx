import { MapPin, Navigation } from "lucide-react";
import { CONTACT } from "@/data/site";

/** The city, as the address gives it before the "|". */
const CITY = CONTACT.address.split("|")[0].trim();

/**
 * The head-office plate. There is no photograph of the office, so none is
 * shown: instead a blueprint sheet — fine and coarse grid, a dashed site
 * boundary, target rings — marks the location, with the address and the
 * Google Maps link on a card. The box keeps the same fixed ratios as before,
 * so a live map embed could later replace the drawing without moving
 * anything.
 */
export function OfficeLocation() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink/15 bg-ink sm:aspect-[16/9] lg:aspect-[21/9]">
      {/* Fine grid every 16px, a stronger rule every 80px */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(251_250_247/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(251_250_247/0.05)_1px,transparent_1px)] bg-[size:16px_16px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgb(251_250_247/0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(251_250_247/0.1)_1px,transparent_1px)] bg-[size:80px_80px] bg-center"
      />

      {/* The marked point. On phones the address card covers the lower half
          of the plate, so everything centred on the point rides up to 40%. */}
      <div
        aria-hidden
        className="absolute inset-0 -translate-y-[10%] sm:translate-y-0"
      >
        {/* Crosshair rules, edge to edge at any ratio */}
        <span className="absolute inset-y-0 left-1/2 w-px bg-amber/40" />
        <span className="absolute inset-x-0 top-1/2 h-px bg-amber/40" />

        {/* A dashed site boundary and target rings around the point */}
        <svg
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
        >
          <rect
            x="138"
            y="92"
            width="124"
            height="116"
            fill="none"
            stroke="rgb(229 160 39 / 0.45)"
            strokeWidth="1"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          />
          {[24, 48, 78].map((r) => (
            <circle
              key={r}
              cx="200"
              cy="150"
              r={r}
              fill="none"
              stroke="rgb(251 250 247 / 0.14)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* The pin (its tip on the point), with the city as a label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
          <MapPin
            className="h-9 w-9 fill-ink text-amber sm:h-10 sm:w-10"
            strokeWidth={1.5}
          />
          <span className="absolute left-full top-1 ml-2 whitespace-nowrap bg-ink px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
            {CITY}
          </span>
        </div>
      </div>

      <span className="absolute left-0 top-0 bg-amber px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
        Head Office
      </span>

      {/* Address card, along the foot of the plate on the narrowest screens */}
      <div className="absolute inset-x-3 bottom-3 border border-paper/15 bg-ink/90 p-4 backdrop-blur-sm sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-xs sm:p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
          Head Office
        </p>
        {/* Address and the Maps prompt are one link, so there is one tap target */}
        <a
          href={CONTACT.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 block"
        >
          <address className="break-words not-italic text-sm leading-relaxed text-paper/80 transition-colors group-hover:text-amber">
            {CONTACT.address}
          </address>
          <span className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/40 transition-colors group-hover:text-amber">
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            Open in Google Maps
            <span className="sr-only">(opens in a new tab)</span>
          </span>
        </a>
      </div>
    </div>
  );
}
