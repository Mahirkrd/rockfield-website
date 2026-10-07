import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ABOUT_IMAGE } from "@/data/images";
import { Story } from "@/components/about/Story";
import { Mission } from "@/components/about/Mission";
import { Values } from "@/components/about/Values";
import { Leadership } from "@/components/about/Leadership";
import { Stats } from "@/components/home/Stats";

export const metadata: Metadata = {
  title: "About — Rockfield",
  description:
    "Rockfield for General Contracting Ltd. — our story, mission, values and leadership. Built on solid ground.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A contractor built to be relied on."
        intro="A team with fifteen years of civil, structural and fit-out experience, accountable from first survey to final handover."
        image={ABOUT_IMAGE}
      />
      <Story />
      <Mission />
      <Values />
      <Leadership />
      <Stats />
    </>
  );
}
