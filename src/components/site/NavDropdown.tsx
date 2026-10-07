"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { NavLink } from "@/data/site";

type NavDropdownProps = {
  label: string;
  links: NavLink[];
  /** The current route sits under this menu. */
  active: boolean;
};

/** Grace period before a hover-opened menu shuts, so the pointer can wander. */
const HOVER_CLOSE_DELAY = 150;

/**
 * Desktop disclosure menu: a nav-styled button that drops a panel of links.
 *
 * A mouse opens it by hovering. Touch, pen and keyboard open it with a
 * click (Enter / Space), and ArrowDown / ArrowUp jump straight into the
 * links. Escape, a press outside, or tabbing away closes it.
 */
export function NavDropdown({ label, links, active }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const lastPointer = useRef("");
  const menuId = useId();

  // Close whenever the route changes underneath (back / forward, the logo).
  // Adjusting state during render, as in Header — an effect runs a frame late.
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // While open: a press anywhere outside, or Escape anywhere, closes it.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      // Hand focus back to the trigger if it was inside the menu.
      if (rootRef.current?.contains(document.activeElement)) {
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Never leave a pending hover-close behind.
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  /** Focuses the nth link, wrapping at either end. */
  const focusLink = (n: number) => {
    const items = menuRef.current?.querySelectorAll("a");
    if (items?.length) items[(n + items.length) % items.length].focus();
  };

  const openAndFocus = (n: number) => {
    setOpen(true);
    // The panel only becomes focusable once the open state has painted.
    requestAnimationFrame(() => focusLink(n));
  };

  const onPointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const onPointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = window.setTimeout(
      () => setOpen(false),
      HOVER_CLOSE_DELAY,
    );
  };

  const onTriggerClick = (e: React.MouseEvent) => {
    // Hovering has already opened the menu for a mouse, so its click must not
    // shut it again under the pointer. Keyboard (detail 0), touch and pen
    // toggle as usual.
    const mouse = e.detail > 0 && lastPointer.current === "mouse";
    lastPointer.current = "";
    setOpen((was) => (mouse ? true : !was));
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openAndFocus(e.key === "ArrowDown" ? 0 : -1);
    }
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = Array.from(menuRef.current?.querySelectorAll("a") ?? []);
    const current = items.indexOf(document.activeElement as HTMLAnchorElement);
    let next: number;

    switch (e.key) {
      case "ArrowDown":
        next = current + 1;
        break;
      case "ArrowUp":
        next = current - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = items.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    focusLink(next);
  };

  // Tabbing out past either end closes it. A null relatedTarget is ignored:
  // Safari blurs without one on a mouse press, and presses outside are
  // already handled above.
  const onBlur = (e: React.FocusEvent) => {
    const next = e.relatedTarget as Node | null;
    if (next && !rootRef.current?.contains(next)) setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={onBlur}
      className="relative"
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onPointerDown={(e) => {
          lastPointer.current = e.pointerType;
        }}
        onClick={onTriggerClick}
        onKeyDown={onTriggerKeyDown}
        // No vertical padding, so the label shares the plain links' baseline
        // (their py-2 is inline and adds no height); the `before` box gives
        // back the same 32px hit area.
        className={`group relative inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors before:absolute before:inset-x-0 before:-inset-y-2 ${
          active || open ? "text-ink" : "text-grey hover:text-ink"
        }`}
      >
        {/* The same amber underline as the plain nav links, under the label;
            -bottom-2.25 lands it on their exact pixel row. */}
        <span
          className={`relative after:absolute after:inset-x-0 after:-bottom-2.25 after:h-px after:origin-left after:bg-amber after:transition-transform ${
            active ? "after:scale-x-100" : "after:scale-x-0 group-hover:after:scale-x-100"
          }`}
        >
          {label}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* The top padding bridges the hover gap and drops the panel to the
          header's bottom edge (this 24px row sits centred in the 80px bar).
          `invisible` keeps the closed links out of the tab order. */}
      <div
        className={`absolute -left-5 top-full z-10 pt-7 transition-[opacity,translate,visibility] duration-200 ease-out ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul
          ref={menuRef}
          id={menuId}
          onKeyDown={onMenuKeyDown}
          className="relative w-64 border border-ink/10 bg-paper before:absolute before:-inset-x-px before:-top-px before:h-0.5 before:bg-amber"
        >
          {links.map((link, i) => (
            <li key={link.href} className="border-b border-ink/10 last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-concrete focus-visible:bg-concrete focus-visible:-outline-offset-2"
              >
                <span
                  aria-hidden
                  className="font-mono text-[10px] tracking-[0.2em] text-grey"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                  {link.label}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="ml-auto h-3.5 w-3.5 shrink-0 text-grey transition-[color,translate] group-hover:translate-x-0.5 group-hover:text-amber group-focus-visible:text-amber"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
