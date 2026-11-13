/**
 * Marks a design visualisation (a render), so it is never taken for a
 * photo of finished work. Shown on every render, in grids and the lightbox.
 * Below sm it tightens (no dot, less tracking) so "VISUALISATION" still fits
 * a square thumbnail on a 360px phone; it wraps onto two lines if it must.
 */
export function DesignRenderBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex max-w-[calc(100%-1rem)] items-center gap-1.5 bg-ink/85 px-1.5 py-1 font-mono text-[9px] uppercase leading-tight tracking-[0.08em] text-paper backdrop-blur-sm sm:px-2 sm:text-[10px] sm:tracking-[0.14em] ${className}`}
    >
      <span aria-hidden className="hidden h-1.5 w-1.5 shrink-0 bg-amber sm:block" />
      Design visualisation
    </span>
  );
}
