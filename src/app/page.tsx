import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <HeroSection />
        <div className="space-y-24">
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
