
import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"
const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Ogar Simon
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary">
          Frontend Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="flex flex-col gap-5">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`group flex items-center cursor-pointer`}
                >
                  <span
                    className={`mr-4 h-px transition-all ${
                      activeSection === id
                        ? "w-16 bg-foreground"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === id
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            href="https://wwww.github.com/Simon4life"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub (opens in a new tab)"
          >
            <FaGithub className="size-5" />
          </a>
        </li>
        <li>
          <a
            href="https://wwww.linkedin.com/in/ogar-simon-489353203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <FaLinkedin className="size-5" />
          </a>
        </li>
        <li>
          <a
            href="mailto:ogarsimon0000@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <FaMailBulk className="size-5" />
          </a>
        </li>
      </ul>
    </header>
  )
}
