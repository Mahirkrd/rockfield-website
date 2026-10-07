"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Logo, LOGO_SRC } from "./Logo";
import { NavDropdown } from "./NavDropdown";
import { CONTACT, HEADER_NAV, type NavLink } from "@/data/site";

type HeaderProps = {
  /** Artwork for the ink-backed mobile panel, resolved on the server. */
  darkLogoSrc?: string;
};

export function Header({ darkLogoSrc = LOGO_SRC }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /** Href of the mobile-menu group currently expanded, if any. */
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Solidify the bar once the page has moved at all.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the panel whenever the route changes. Adjusting state during
  // render is the sanctioned pattern here — an effect would run a frame late.
  const [navPath, setNavPath] = useState(pathname);
  if (pathname !== navPath) {
    setNavPath(pathname);
    setOpen(false);
  }

  // While the panel is open: lock the page, trap Escape, move focus into it.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };
    document.addEventListener("keydown", onKey);

    // Make the panel a real modal: everything behind it goes inert, which
    // both hides it from assistive tech and keeps Tab inside the panel.
    const behind = [
      barRef.current,
      document.getElementById("main"),
      document.querySelector("body > footer"),
    ].filter(Boolean) as Element[];
    behind.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      behind.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // The menu opens with the current page's group already expanded, if any.
  const openMenu = () => {
    setExpanded(
      HEADER_NAV.find((link) => link.children && isActive(link.href))?.href ??
        null,
    );
    setOpen(true);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink/10 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
          : "border-transparent bg-concrete"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
      >
        Skip to content
      </a>

      <div
        ref={barRef}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-20"
      >
        <Logo height={40} preload />

        {/* Desktop navigation. Spacing tightens below xl so all seven items
            keep clear of the logo and the quote button at 1024px. */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {HEADER_NAV.map((link) => (
              <li key={link.href}>
                {link.children ? (
                  <NavDropdown
                    label={link.label}
                    links={link.children}
                    active={isActive(link.href)}
                  />
                ) : (
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`relative py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-amber after:transition-transform hover:after:scale-x-100 ${
                      isActive(link.href)
                        ? "text-ink after:scale-x-100"
                        : "text-grey hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-amber hover:text-ink lg:inline-flex"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          {/* Hamburger — 44px touch target, hidden once the desktop nav appears */}
          <button
            ref={toggleRef}
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-amber lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Full-screen mobile panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-50 h-dvh flex-col bg-ink text-paper lg:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        {/* The slash motif, bled off the top-right corner */}
        <div
          aria-hidden
          className="slash pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 opacity-70"
        />

        <div className="relative flex h-16 shrink-0 items-center justify-between px-5">
          <Logo src={darkLogoSrc} height={40} />
          <button
            ref={closeRef}
            type="button"
            onClick={() => {
              setOpen(false);
              requestAnimationFrame(() => toggleRef.current?.focus());
            }}
            aria-label="Close menu"
            className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center text-paper transition-colors hover:text-amber"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="relative flex-1 overflow-y-auto px-5 pb-8 pt-4"
        >
          <ul className="border-t border-paper/10">
            {HEADER_NAV.map((link, i) => (
              <li key={link.href} className="border-b border-paper/10">
                {link.children ? (
                  <MobileNavGroup
                    label={link.label}
                    links={link.children}
                    index={i}
                    animate={open}
                    active={isActive(link.href)}
                    expanded={expanded === link.href}
                    onToggle={() =>
                      setExpanded(expanded === link.href ? null : link.href)
                    }
                    onNavigate={() => setOpen(false)}
                  />
                ) : (
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    style={open ? { animationDelay: `${60 + i * 45}ms` } : undefined}
                    className={`fade-up flex items-baseline gap-4 py-5 font-display text-3xl font-bold uppercase tracking-tight transition-colors sm:text-4xl ${
                      isActive(link.href) ? "text-amber" : "hover:text-amber"
                    }`}
                  >
                    <span className="font-mono text-[11px] tracking-[0.2em] text-grey">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-between bg-amber px-5 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          {/* Both rows are full-width 44px targets for thumbs */}
          <div className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-paper/60">
            <a
              href={CONTACT.phoneHref}
              className="flex min-h-[44px] items-center transition-colors hover:text-amber"
            >
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="flex min-h-[44px] items-center normal-case transition-colors hover:text-amber"
            >
              {CONTACT.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

type MobileNavGroupProps = {
  label: string;
  links: NavLink[];
  /** Position in the menu — drives the row number and the entrance stagger. */
  index: number;
  /** The panel is showing, so the entrance animation should run. */
  animate: boolean;
  active: boolean;
  expanded: boolean;
  onToggle: () => void;
  /** Called when one of the group's links is followed. */
  onNavigate: () => void;
};

/** A mobile-menu row that expands in place to list its links. */
function MobileNavGroup({
  label,
  links,
  index,
  animate,
  active,
  expanded,
  onToggle,
  onNavigate,
}: MobileNavGroupProps) {
  const panelId = useId();

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={panelId}
        style={animate ? { animationDelay: `${60 + index * 45}ms` } : undefined}
        className={`fade-up flex w-full items-baseline gap-4 py-5 text-left font-display text-3xl font-bold uppercase tracking-tight transition-colors sm:text-4xl ${
          active ? "text-amber" : "hover:text-amber"
        }`}
      >
        <span className="font-mono text-[11px] tracking-[0.2em] text-grey">
          {String(index + 1).padStart(2, "0")}
        </span>
        {label}
        <ChevronDown
          aria-hidden="true"
          className={`ml-auto h-6 w-6 shrink-0 self-center text-grey transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Grows from zero height. `invisible` keeps the collapsed links out of
          the tab order and away from screen readers. */}
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-[visibility] duration-300 ${
            expanded ? "visible" : "invisible"
          }`}
        >
          {/* Indented past the row number (2.1rem), in line with the label */}
          <ul className="pb-5 pl-[2.1rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="flex min-h-[44px] items-center gap-3 font-display text-lg font-bold uppercase tracking-tight text-paper/70 transition-colors hover:text-amber focus-visible:-outline-offset-2"
                >
                  <span aria-hidden className="text-amber">
                    /
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
