import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { EducationSection } from "@/components/sections/education"
import { ExperienceSection } from "@/components/sections/experience"
import { CertificationsSection } from "@/components/sections/certifications"
import { BadgesSection } from "@/components/sections/badges"
import { ProjectsSection } from "@/components/sections/projects"
import { ArticlesSection } from "@/components/sections/articles"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <BadgesSection />
      <ProjectsSection />
      <ArticlesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}