"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in ms. */
  delay?: number;
  className?: string;
};

/** Subtle fade-and-rise as the block enters the viewport. */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`motion-reduce:animate-none motion-reduce:opacity-100 ${
        inView ? "fade-up" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
