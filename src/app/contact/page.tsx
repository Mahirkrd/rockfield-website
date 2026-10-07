import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { OFFICE_IMAGE } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeLocation } from "@/components/contact/OfficeLocation";
import { EmailCards } from "@/components/contact/EmailCards";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Rockfield",
  description:
    "Talk to Rockfield for General Contracting Ltd. about your project. Send us the scope and we will come back with a costed proposal.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Tell us about the project."
        intro="Send us the scope, the location and a rough timeline. We will come back with a costed proposal, usually within three working days."
        image={OFFICE_IMAGE}
      />

      {/* Details + form */}
      <section
        id="enquiry"
        aria-labelledby="enquiry-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
          <h2 className="sr-only">Email us</h2>
          <EmailCards surface="paper" />
        </div>

        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <h2
                id="enquiry-heading"
                className="text-2xl leading-tight sm:text-3xl"
              >
                Contact details
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 sm:mt-8">
                <ContactDetails />
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 border border-ink/15 bg-concrete p-5 sm:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
                  Tenders &amp; pre-qualification
                </p>
                <p className="mt-3 text-sm leading-relaxed text-grey">
                  Sending an invitation to tender or a PQQ? Email it to{" "}
                  <a
                    href={CONTACT.emailHref}
                    className="break-words text-ink underline decoration-amber decoration-2 underline-offset-4 transition-colors hover:text-amber"
                  >
                    {CONTACT.email}
                  </a>{" "}
                  with the return date in the subject line and it will reach the
                  estimating team the same day.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240} className="mt-12 lg:col-span-7 lg:mt-0">
            <h2 className="sr-only">Enquiry form</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Where to find us */}
      <section
        id="find-us"
        aria-labelledby="find-us-heading"
        className="bg-concrete"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-grey sm:text-xs">
              <span aria-hidden className="h-px w-6 bg-amber sm:w-10" />
              Find Us
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="find-us-heading"
              className="mt-5 max-w-2xl text-3xl leading-[1.02] sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              Come and see us.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 sm:mt-12">
              <OfficeLocation />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
