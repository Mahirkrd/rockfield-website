import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { PROCESS_IMAGE } from "@/data/images";
import { Profile } from "@/components/company/Profile";
import { Vision } from "@/components/company/Vision";
import { Mission } from "@/components/company/Mission";
import { Team } from "@/components/company/Team";
import { Clients } from "@/components/company/Clients";

export const metadata: Metadata = {
  title: "Company — Rockfield",
  description:
    "Rockfield for General Contracting Ltd. — our company, vision, mission, team and clients.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A dependable partner, from engineering to handover."
        intro="Who we are, where we are headed, and the people and clients behind every project."
        image={PROCESS_IMAGE}
      />
      <Profile />
      <Vision />
      <Mission />
      <Team />
      <Clients />
      <CtaBand />
    </>
  );
}
