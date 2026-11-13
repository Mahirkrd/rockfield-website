import { Clock, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/data/site";

const DETAILS = [
  {
    icon: Phone,
    label: "Main phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: MapPin,
    label: "Address",
    value: CONTACT.address,
    href: CONTACT.mapsHref,
    /** Leaves the site, so it opens in a new tab. */
    external: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: CONTACT.hours,
  },
];

/** Spec-sheet contact rows. Shared by the homepage section and /contact. */
export function ContactDetails() {
  return (
    <dl className="border-t border-ink/15">
      {DETAILS.map((detail) => {
        const Icon = detail.icon;

        return (
          <div
            key={detail.label}
            className="flex gap-4 border-b border-ink/15 py-5 sm:gap-5 sm:py-6"
          >
            <Icon
              className="mt-0.5 h-5 w-5 shrink-0 text-amber"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-grey">
                {detail.label}
              </dt>
              <dd className="mt-1.5 text-base leading-relaxed">
                {detail.href ? (
                  // Padded out to a 44px tap target; the negative margin
                  // gives the extra height back so the row does not grow.
                  <a
                    href={detail.href}
                    {...(detail.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="-my-2.5 inline-block break-words py-2.5 transition-colors hover:text-amber"
                  >
                    {detail.value}
                    {detail.external && (
                      <span className="sr-only"> (opens in Google Maps)</span>
                    )}
                  </a>
                ) : (
                  <span>{detail.value}</span>
                )}
              </dd>
            </div>
          </div>
        );
      })}
    </dl>
  );
}
