import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { HERO_IMAGE } from "@/data/images";
import { QualityPolicy } from "@/components/qhse/QualityPolicy";
import { HsePolicy } from "@/components/qhse/HsePolicy";

export const metadata: Metadata = {
  title: "QHSE — Rockfield",
  description:
    "Quality, health, safety and environment at Rockfield for General Contracting Ltd. — our Quality Policy and HSE Policy.",
};

export default function QhsePage() {
  return (
    <>
      <PageHero
        eyebrow="QHSE"
        title="Quality, Health, Safety & Environment"
        intro="Quality and safety are not departments at Rockfield — they are how we work. Every project is delivered to defined standards, with the wellbeing of our people and the protection of the environment built into each stage."
        image={HERO_IMAGE}
      />
      <QualityPolicy />
      <HsePolicy />
      <CtaBand />
    </>
  );
}
