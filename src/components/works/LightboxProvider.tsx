"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { GalleryItem } from "@/data/works";
import { Lightbox } from "./Lightbox";

type LightboxApi = {
  /** Opens the viewer on items[index]; focus returns to `trigger` on close. */
  open: (index: number, trigger?: HTMLElement | null) => void;
};

const LightboxContext = createContext<LightboxApi | null>(null);

/**
 * One viewer for every gallery inside it. `items` is the full sequence the
 * viewer steps through — on a category page, all of that category's photos
 * in page order, so swiping carries on from one work type into the next.
 */
export function LightboxProvider({
  items,
  children,
}: {
  items: GalleryItem[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  // Captured when the viewer opens (not in an effect, which runs twice in
  // development) so focus can go back to the photo that opened it.
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((i: number, trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? null;
    setIndex(i);
  }, []);

  const close = useCallback(() => {
    setIndex(null);
    // After the viewer has gone and the page is no longer inert.
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, []);

  const api = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={api}>
      {children}
      {index !== null && items[index] && (
        <Lightbox
          items={items}
          index={index}
          onIndexChange={setIndex}
          onClose={close}
        />
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox(): LightboxApi {
  const api = useContext(LightboxContext);
  if (!api) throw new Error("useLightbox needs a <LightboxProvider> above it");
  return api;
}
