import { MapPin, Navigation } from "lucide-react";
import { PlateImage } from "@/components/ui/PlateImage";
import { CONTACT } from "@/data/site";
import { OFFICE_IMAGE } from "@/data/images";

/**
 * The head-office plate: a photograph of the building with the address card
 * over it. This is a picture, not a live map — when the embed is ready, drop
 * an iframe in place of <PlateImage> and the surrounding box will not move,
 * because the aspect ratios are fixed here rather than by the content.
 */
export function OfficeLocation() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink/15 bg-ink sm:aspect-[16/9] lg:aspect-[21/9]">
      <PlateImage
        src={OFFICE_IMAGE.src}
        alt={OFFICE_IMAGE.alt}
        sizes="(min-width: 1152px) 1088px, 92vw"
      />

      {/* Crosshair marking the site position */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="absolute left-1/2 top-1/2 h-24 w-px -translate-x-1/2 -translate-y-1/2 bg-amber/50 sm:h-32" />
        <span className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 bg-amber/50 sm:w-32" />
        <MapPin
          className="relative h-8 w-8 text-amber sm:h-10 sm:w-10"
          strokeWidth={1.5}
        />
      </div>

      <span className="absolute left-0 top-0 bg-amber px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
        Head Office
      </span>

      {/* Address card, stacked under the plate on the narrowest screens */}
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
          </span>
        </a>
      </div>
    </div>
  );
}
