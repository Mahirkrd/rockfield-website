import Link from "next/link";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { darkSurfaceLogoSrc } from "@/lib/logo";
import { COMPANY, CONTACT, EMAILS, NAV_LINKS } from "@/data/site";
import { SERVICES } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Signature slash, anchored to the top-right corner */}
      <div
        aria-hidden
        className="slash pointer-events-none absolute -right-12 -top-12 h-40 w-40 opacity-70 sm:h-56 sm:w-56"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {/* Columns stack on phones, pair up on tablets, spread on desktop */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Identity */}
          <div className="lg:col-span-4">
            <Logo src={darkSurfaceLogoSrc()} height={52} />
            <p className="mt-5 font-display text-xl font-bold uppercase leading-tight tracking-tight sm:text-2xl">
              {COMPANY.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              {COMPANY.name} delivers civil, structural and fit-out work at
              scale — on programme, on budget, to spec.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-links" className="lg:col-span-2">
            <h2
              id="footer-links"
              className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-amber"
            >
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="-my-1 inline-block py-1 text-sm text-paper/70 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2
              id="footer-services"
              className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-amber"
            >
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="-my-1 inline-block py-1 text-sm text-paper/70 transition-colors hover:text-amber"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-amber">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-paper/70">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-grey"
                  aria-hidden="true"
                />
                <address className="min-w-0 not-italic leading-relaxed">
                  <a
                    href={CONTACT.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words transition-colors hover:text-amber"
                  >
                    {CONTACT.address}
                    <span className="sr-only"> (opens in Google Maps)</span>
                  </a>
                </address>
              </li>
              {/* All three inboxes, spec-sheet style: mono role, then address */}
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-grey"
                  aria-hidden="true"
                />
                <ul className="min-w-0 flex-1 space-y-2.5">
                  {EMAILS.map((email) => (
                    <li key={email.address}>
                      <a
                        href={`mailto:${email.address}`}
                        className="-my-1.5 flex min-h-[44px] flex-col justify-center py-1.5 transition-colors hover:text-amber"
                      >
                        <span
                          className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                            email.primary ? "text-amber" : "text-grey"
                          }`}
                        >
                          {email.shortLabel}
                        </span>
                        <span className="mt-0.5 break-all">
                          {email.address}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="flex gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-grey"
                  aria-hidden="true"
                />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 border border-paper/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-amber hover:bg-amber hover:text-ink"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {year} {COMPANY.name}
          </p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
