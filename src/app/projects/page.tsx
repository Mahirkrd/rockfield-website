import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { HERO_IMAGE } from "@/data/images";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Projects — Rockfield",
  description:
    "Industrial, commercial, infrastructure, residential and civil projects delivered by Rockfield for General Contracting Ltd.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Projects we're proud of."
        intro="Warehouses, towers, interchanges and flood defences. Filter by discipline to see how the work is put together."
        image={HERO_IMAGE}
      />
      <ProjectGallery />
      <CtaBand />
    </>
  );
}
