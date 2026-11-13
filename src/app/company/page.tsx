import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { PROCESS_IMAGE } from "@/data/images";
import { Profile } from "@/components/company/Profile";
import { Vision } from "@/components/company/Vision";
import { Mission } from "@/components/company/Mission";
import { Organisation } from "@/components/company/Organisation";
import { Disciplines } from "@/components/company/Disciplines";
import { Fleet } from "@/components/company/Fleet";

export const metadata: Metadata = {
  title: "Company — Rockfield",
  description:
    "Rockfield for General Contracting Ltd. — our company, vision, mission, organisation, disciplines and fleet.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A dependable partner, from engineering to handover."
        intro="Who we are, where we are headed, and the organisation, disciplines and fleet behind our work."
        image={PROCESS_IMAGE}
      />
      <Profile />
      <Vision />
      <Mission />
      <Organisation />
      <Disciplines />
      <Fleet />
      <CtaBand />
    </>
  );
}
