import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { HERO_IMAGE } from "@/data/images";
import { QHSE_STATEMENT } from "@/data/qhse";
import { QualityPolicy } from "@/components/qhse/QualityPolicy";
import { HsePolicy } from "@/components/qhse/HsePolicy";
import { CodeOfConduct } from "@/components/qhse/CodeOfConduct";

export const metadata: Metadata = {
  title: "QHSE — Rockfield",
  description:
    "Quality, health, safety and environment at Rockfield for General Contracting Ltd. — our QHSE management system and Code of Conduct.",
};

export default function QhsePage() {
  return (
    <>
      <PageHero
        eyebrow="QHSE"
        title="Quality, Health, Safety & Environment"
        intro={QHSE_STATEMENT}
        image={HERO_IMAGE}
      />
      <QualityPolicy />
      <HsePolicy />
      <CodeOfConduct />
      <CtaBand />
    </>
  );
}
