import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh">
      {/* Hero — laid out for 375px first, then widened. */}
      <section className="relative overflow-hidden bg-ink text-paper">
        {/* Diagonal amber slash: the logo motif, bled off the corner. */}
        <div
          aria-hidden
          className="slash pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-90 sm:-right-10 sm:h-64 sm:w-64"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
          {/* The supplied PNG has a solid light background, so it sits on a
              paper plate rather than being knocked out of the dark hero.
              Swap in a transparent SVG when one is available. */}
          <div className="inline-block bg-paper px-4 py-3 sm:px-5 sm:py-4">
            <Image
              src="/rockfield.png"
              alt="Rockfield for General Contracting Ltd."
              width={1686}
              height={403}
              priority
              className="h-7 w-auto sm:h-9"
            />
          </div>

          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-amber sm:text-xs">
            Est. — General Contracting
          </p>

          <h1 className="mt-4 text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Built on
            <br />
            solid ground
          </h1>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-paper/70 sm:text-lg">
            Rockfield for General Contracting Ltd. delivers civil, structural
            and fit-out work at scale — on programme, on budget, to spec.
          </p>

          <a
            href="#spec"
            className="mt-10 inline-block border border-amber bg-amber px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-amber"
          >
            View capabilities
          </a>
        </div>
      </section>

      {/* Spec-sheet strip — confirms tokens, fonts and hairlines render. */}
      <section id="spec" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="text-2xl sm:text-3xl">Design system online</h2>

        <dl className="mt-8 grid grid-cols-1 gap-px border border-grey/25 bg-grey/25 sm:grid-cols-3">
          {[
            { k: "01", t: "Archivo", d: "Headlines, uppercase" },
            { k: "02", t: "Inter", d: "Body copy" },
            { k: "03", t: "IBM Plex Mono", d: "Technical labels" },
          ].map((row) => (
            <div key={row.k} className="bg-paper p-5 sm:p-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
                {row.k} / {row.d}
              </dt>
              <dd className="mt-2 font-display text-lg font-bold uppercase">
                {row.t}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.15em]">
          <li className="border border-ink/15 bg-ink px-3 py-2 text-paper">Ink</li>
          <li className="border border-ink/15 bg-amber px-3 py-2 text-ink">Amber</li>
          <li className="border border-ink/15 bg-concrete px-3 py-2">Concrete</li>
          <li className="border border-ink/15 bg-paper px-3 py-2">Paper</li>
          <li className="border border-ink/15 bg-grey px-3 py-2 text-paper">Grey</li>
        </ul>
      </section>
    </main>
  );
}
