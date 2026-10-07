import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { EMAILS } from "@/data/site";

type EmailCardsProps = {
  /** Surface the cards sit on, so their fill contrasts with it. */
  surface?: "paper" | "concrete";
  className?: string;
};

/**
 * The three business inboxes as spec-sheet cards. The whole card is the
 * mailto link, which keeps the tap target far above the 44px minimum.
 */
export function EmailCards({
  surface = "paper",
  className = "",
}: EmailCardsProps) {
  const fill = surface === "paper" ? "bg-concrete" : "bg-paper";

  return (
    <ul
      className={`grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 ${className}`}
    >
      {EMAILS.map((email, i) => (
        <li key={email.address}>
          <Reveal delay={i * 70} className="h-full">
            <a
              href={`mailto:${email.address}`}
              className={`group relative flex h-full min-h-[88px] flex-col justify-between overflow-hidden border p-5 transition-colors sm:min-h-[124px] ${fill} ${
                email.primary
                  ? "border-ink/25 hover:border-amber"
                  : "border-ink/10 hover:border-ink/40"
              }`}
            >
              {/* Amber corner-cut, matching the service cards */}
              <span
                aria-hidden
                className="absolute right-0 top-0 h-0 w-0 origin-top-right scale-0 border-l-[24px] border-t-[24px] border-l-transparent border-t-amber transition-transform duration-300 ease-out group-hover:scale-100 group-focus-visible:scale-100 sm:border-l-[28px] sm:border-t-[28px]"
              />

              <span className="flex items-center gap-3">
                <Mail
                  className={`h-5 w-5 shrink-0 transition-colors ${
                    email.primary
                      ? "text-amber"
                      : "text-grey group-hover:text-amber"
                  }`}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] uppercase leading-tight tracking-[0.18em] text-grey">
                  {email.label}
                </span>
              </span>

              <span className="mt-4 block break-all text-sm leading-snug text-ink transition-colors group-hover:text-amber sm:text-base">
                {email.address}
              </span>
            </a>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
