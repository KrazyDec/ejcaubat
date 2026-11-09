import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Impact } from "@/components/impact";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { InteractiveBackground } from "@/components/interactive-background";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <InteractiveBackground />
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Projects />
        <Impact />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
