"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/works";
import { DesignRenderBadge } from "./DesignRenderBadge";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

const SLIDE_MS = 320;
const EASE = "cubic-bezier(0.2, 0.7, 0.3, 1)";
/** How far a press must travel before it counts as a drag (and picks an axis). */
const DRAG_SLOP = 8;

const pad = (n: number) => String(n).padStart(2, "0");

type Gesture = {
  id: number;
  x: number;
  y: number;
  t: number;
  axis: "x" | "y" | null;
};

/**
 * Full-screen photo viewer.
 *
 * The track holds three slides — previous, current, next — so neighbours are
 * already loaded and a swipe can follow the finger. While dragging, the
 * offset is written straight to the track's style (no React render per
 * move); React only re-renders when the index changes. Slides are keyed by
 * photo, so after a slide the outgoing images are reused, not reloaded.
 *
 * Phones: swipe sideways to move, swipe down (or the X) to close.
 * Desktop: arrow keys, Escape, Home / End, and the on-screen arrows.
 * Everything behind the viewer is made inert while it is open, which both
 * hides it from assistive tech and keeps Tab inside the dialog.
 */
export function Lightbox({ items, index, onIndexChange, onClose }: LightboxProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reducedRef = useRef(false);
  /** The index a slide is animating towards; null when nothing is in flight. */
  const pendingRef = useRef<number | null>(null);
  const fallbackRef = useRef<number | undefined>(undefined);
  const gestureRef = useRef<Gesture | null>(null);

  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  /**
   * Positions the track. `xPct` picks the slide (-100 is the current one);
   * `dx` / `dy` add the finger's offset. Dragging down also fades the backdrop.
   */
  const place = useCallback((xPct: number, dx = 0, dy = 0, animate = false) => {
    const track = trackRef.current;
    const backdrop = backdropRef.current;
    if (!track || !backdrop) return;
    const timing = animate && !reducedRef.current ? `${SLIDE_MS}ms ${EASE}` : "";
    track.style.transition = timing ? `transform ${timing}` : "none";
    track.style.transform = `translate3d(calc(${xPct}% + ${dx}px), ${dy}px, 0)`;
    backdrop.style.transition = timing ? `opacity ${timing}` : "none";
    backdrop.style.opacity = String(Math.max(0.4, 1 - dy / 450));
  }, []);

  /** Lands an in-flight slide on its photo. */
  const settle = useCallback(() => {
    window.clearTimeout(fallbackRef.current);
    const target = pendingRef.current;
    pendingRef.current = null;
    if (target !== null) onIndexChange(target);
  }, [onIndexChange]);

  const go = useCallback(
    (step: 1 | -1) => {
      if (pendingRef.current !== null) return;
      const target = index + step;
      if (target < 0 || target >= items.length) {
        place(-100, 0, 0, true);
        return;
      }
      if (reducedRef.current) {
        onIndexChange(target);
        return;
      }
      pendingRef.current = target;
      place(step === 1 ? -200 : 0, 0, 0, true);
      // transitionend is the signal; this only covers a missed one.
      fallbackRef.current = window.setTimeout(settle, SLIDE_MS + 150);
    },
    [index, items.length, onIndexChange, place, settle],
  );

  const jump = useCallback(
    (target: number) => {
      if (pendingRef.current === null && target !== index) onIndexChange(target);
    },
    [index, onIndexChange],
  );

  // Each new photo starts centred, before paint (the slides were just reordered).
  useLayoutEffect(() => {
    place(-100);
  }, [index, place]);

  // While open: lock the page, make everything behind inert, focus Close.
  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const body = document.body;
    const before = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    // Keep the page from shifting sideways when its scrollbar disappears.
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const root = rootRef.current;
    const behind = Array.from(body.children).filter(
      (el) => el !== root && !el.hasAttribute("inert"),
    );
    behind.forEach((el) => el.setAttribute("inert", ""));
    closeRef.current?.focus();

    return () => {
      body.style.overflow = before.overflow;
      body.style.paddingRight = before.paddingRight;
      behind.forEach((el) => el.removeAttribute("inert"));
      window.clearTimeout(fallbackRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Tab wraps between the viewer's own controls. (Inert already keeps
      // the page out; this also stops focus leaving for the browser's UI.)
      if (e.key === "Tab") {
        const root = rootRef.current;
        if (!root) return;
        const controls = Array.from(
          root.querySelectorAll<HTMLElement>("button:not([disabled])"),
        ).filter((el) => el.getClientRects().length > 0);
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        const active = document.activeElement;
        const outside = !root.contains(active);
        if (e.shiftKey && (active === first || outside)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (active === last || outside)) {
          e.preventDefault();
          first.focus();
        }
        return;
      }

      const actions: Record<string, () => void> = {
        Escape: onClose,
        ArrowRight: () => go(1),
        ArrowLeft: () => go(-1),
        Home: () => jump(0),
        End: () => jump(items.length - 1),
      };
      const action = actions[e.key];
      if (!action) return;
      e.preventDefault();
      action();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, jump, onClose, items.length]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (pendingRef.current !== null) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    gestureRef.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      t: performance.now(),
      axis: null,
    };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const g = gestureRef.current;
    if (!g || g.id !== e.pointerId) return;
    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;

    if (!g.axis) {
      if (Math.hypot(dx, dy) < DRAG_SLOP) return;
      g.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      e.currentTarget.setPointerCapture(e.pointerId);
    }

    if (g.axis === "x") {
      // Past either end the photo resists, then springs back.
      const blocked = (dx > 0 && !hasPrev) || (dx < 0 && !hasNext);
      place(-100, blocked ? dx / 3 : dx);
    } else {
      place(-100, 0, Math.max(0, dy));
    }
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const g = gestureRef.current;
    gestureRef.current = null;
    if (!g || g.id !== e.pointerId || !g.axis) return;

    const dx = e.clientX - g.x;
    const dy = e.clientY - g.y;
    const elapsed = Math.max(1, performance.now() - g.t);

    if (g.axis === "x") {
      // Far enough, or flicked: a fifth of the width (at most 100px), or fast.
      const width = e.currentTarget.clientWidth;
      const far =
        Math.abs(dx) > Math.min(100, width * 0.2) || Math.abs(dx) / elapsed > 0.5;
      if (far && dx < 0 && hasNext) go(1);
      else if (far && dx > 0 && hasPrev) go(-1);
      else place(-100, 0, 0, true);
    } else if (dy > 110 || (dy > 30 && dy / elapsed > 0.6)) {
      onClose();
    } else {
      place(-100, 0, 0, true);
    }
  };

  const onPointerCancel = () => {
    gestureRef.current = null;
    place(-100, 0, 0, true);
  };

  const slots = [index - 1, index, index + 1];

  return createPortal(
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[70] flex flex-col text-paper"
    >
      <div ref={backdropRef} aria-hidden className="absolute inset-0 bg-ink" />

      {/* Counter and close */}
      <div className="relative flex h-16 shrink-0 items-center justify-between pl-5 pr-2.5 sm:pl-8 sm:pr-5">
        <p className="font-mono text-xs tracking-[0.2em] text-paper/60">
          <span className="text-paper">{pad(index + 1)}</span> /{" "}
          {pad(items.length)}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="inline-flex h-11 w-11 items-center justify-center text-paper transition-colors hover:text-amber"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Stage. touch-none hands every touch to the gesture code. */}
      <div
        className="relative min-h-0 flex-1 touch-none select-none overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          onTransitionEnd={(e) => {
            if (e.target === e.currentTarget && e.propertyName === "transform") {
              settle();
            }
          }}
        >
          {slots.map((i, slot) => {
            const photo = items[i];
            return (
              <div
                key={photo ? photo.src : `empty-${slot}`}
                aria-hidden={slot !== 1}
                className="relative h-full w-full shrink-0 px-2 sm:px-6 md:px-20"
              >
                {photo && (
                  <div className="relative h-full w-full">
                    <Image
                      src={photo.src}
                      alt={slot === 1 ? photo.alt : ""}
                      fill
                      sizes="100vw"
                      loading="eager"
                      draggable={false}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* On-screen arrows from md; phones swipe */}
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={!hasPrev}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-paper/20 bg-ink/60 text-paper transition-colors hover:border-amber hover:text-amber disabled:pointer-events-none disabled:opacity-25 md:flex"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={!hasNext}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-paper/20 bg-ink/60 text-paper transition-colors hover:border-amber hover:text-amber disabled:pointer-events-none disabled:opacity-25 md:flex"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Caption: category, work type, and the render badge where it applies */}
      <div className="relative flex shrink-0 flex-col gap-3 px-5 pb-6 pt-4 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:pb-8">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
            {item.categoryNumber} &middot; {item.categoryTitle}
          </p>
          <p className="mt-1.5 font-display text-lg font-bold uppercase leading-tight tracking-tight sm:text-xl">
            {item.typeTitle}
          </p>
        </div>
        {item.designRender && <DesignRenderBadge className="self-start sm:self-auto" />}
      </div>

      <p className="sr-only" aria-live="polite">
        {`Photo ${index + 1} of ${items.length}: ${item.typeTitle}${
          item.designRender ? ", design visualisation" : ""
        }`}
      </p>
    </div>,
    document.body,
  );
}
