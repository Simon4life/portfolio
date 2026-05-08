import { Sidebar } from "./components/sidebar"
import { AboutSection } from "./components/about-section"
import { ProjectsSection } from "./components/projects-section"
import { Footer } from "./components/footer"
import { SpotlightCursor } from "./components/spotlight-cursor"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <SpotlightCursor />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main id="content" className="lg:w-1/2 lg:py-24">
            <AboutSection />
            <ProjectsSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
