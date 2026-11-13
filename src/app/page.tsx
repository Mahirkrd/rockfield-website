import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";
import { WorksPreview } from "@/components/home/WorksPreview";
import { CtaBand } from "@/components/ui/CtaBand";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <WorksPreview />
      <CtaBand />
      <Contact />
    </>
  );
}
