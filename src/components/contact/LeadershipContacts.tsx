import { ArrowUpRight, Mail, Phone, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { LEADERSHIP_CONTACTS, telHref } from "@/data/contacts";

/**
 * Direct lines to the leadership: one dark spec-sheet plate per role, with
 * the email and phone as full-width tap targets. Roles only — no names.
 */
export function LeadershipContacts() {
  return (
    <section
      id="leadership-contacts"
      aria-labelledby="leadership-contacts-heading"
      className="bg-concrete"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Direct Lines
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="leadership-contacts-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            Leadership Contacts
          </h2>
        </Reveal>

        {/* Stacked until lg: two-up any narrower and "General Manager"
            would have to wrap */}
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {LEADERSHIP_CONTACTS.map((contact, i) => (
            <li key={contact.email}>
              {/* h-full carries the row height down, so both plates match */}
              <Reveal delay={120 + i * 80} className="h-full">
                <article className="relative flex h-full flex-col overflow-hidden bg-ink text-paper">
                  {/* Blueprint grid, fading out toward the contact rows */}
                  <div
                    aria-hidden
                    className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
                  />
                  {/* The signature slash, bled off the top-right corner */}
                  <div
                    aria-hidden
                    className="slash pointer-events-none absolute -right-6 -top-6 h-20 w-20 opacity-90 sm:h-24 sm:w-24"
                  />

                  <p className="relative border-b border-paper/10 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50 sm:px-6">
                    Leadership &middot; {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* Sized so "General Manager" holds one line at every width from 360px */}
                  <h3 className="relative px-5 pb-8 pt-7 text-[1.625rem] leading-none sm:px-6 sm:pb-10 sm:pt-9 sm:text-3xl lg:text-4xl">
                    {contact.role}
                  </h3>

                  <div className="relative mt-auto">
                    <ContactRow
                      icon={Mail}
                      label="Email"
                      role={contact.role}
                      href={`mailto:${contact.email}`}
                      value={contact.email}
                    />
                    <ContactRow
                      icon={Phone}
                      label="Phone"
                      role={contact.role}
                      href={telHref(contact.phone)}
                      value={contact.phone}
                    />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ContactRowProps = {
  icon: LucideIcon;
  label: string;
  /** Read out with the label, so "Email the CEO: …" makes sense out of context. */
  role: string;
  href: string;
  value: string;
};

/** One contact method — the whole row is the link, well over the 44px target. */
function ContactRow({ icon: Icon, label, role, href, value }: ContactRowProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 border-t border-paper/10 px-5 py-4 transition-colors hover:bg-paper/5 focus-visible:-outline-offset-2 sm:px-6 sm:py-5"
    >
      <Icon
        className="h-5 w-5 shrink-0 text-amber"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
          {label}
        </span>
        {/* Heard, not seen — outside the uppercase label so it reads naturally */}
        <span className="sr-only"> the {role}: </span>
        <span className="mt-1 block break-all text-base leading-snug text-paper transition-colors group-hover:text-amber sm:text-lg">
          {value}
        </span>
      </span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-paper/40 transition-[color,translate] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
        aria-hidden="true"
      />
    </a>
  );
}
