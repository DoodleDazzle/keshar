import { About } from "@/components/About";
import { CtaBanner } from "@/components/CtaBanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { ServicesTeaser } from "@/components/ServicesTeaser";
import { StackMarquee } from "@/components/StackMarquee";
import { StatsMarquee } from "@/components/StatsMarquee";
import { Testimonial } from "@/components/Testimonial";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsPreview />
      <StatsMarquee />
      <StackMarquee />
      <About />
      <ServicesTeaser />
      <Process />
      <CtaBanner />
      <FAQ />
      <Testimonial />
      <Footer />
    </main>
  );
}
