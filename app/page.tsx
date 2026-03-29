import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
