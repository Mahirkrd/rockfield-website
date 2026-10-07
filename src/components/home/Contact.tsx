import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { EmailCards } from "@/components/contact/EmailCards";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
            <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
            Get In Touch
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2
            id="contact-heading"
            className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            Tell us about the project.
          </h2>
        </Reveal>

        <EmailCards surface="paper" className="mt-10 sm:mt-12" />

        <div className="mt-10 sm:mt-12 lg:mt-16 lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Details — spec-sheet rows */}
          <Reveal delay={160} className="lg:col-span-5">
            <ContactDetails />

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-grey">
              Send us the scope and we will come back with a costed proposal,
              usually within three working days.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={240} className="mt-10 lg:col-span-7 lg:mt-0">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
