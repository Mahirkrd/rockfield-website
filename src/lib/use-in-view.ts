"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element first scrolls into view, then disconnects.
 * Falls back to "visible" where IntersectionObserver is unavailable so
 * content is never left hidden.
 */
export function useInView<T extends HTMLElement>(
  { threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = {},
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
