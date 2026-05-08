import { Badge } from "@radix-ui/themes"
import { LuArrowUpRight } from "react-icons/lu";
const projects = [
  {
    title: "Devlinks",
    description:
      "A social media links sharing platform for developers. Users can create a personalized profile with links to their GitHub, LinkedIn, portfolio, and other social media.",
    url: "#",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB",],
  },
  {
    title: "Kanban task manager",
    description:
      "A task management platform that helps users organize their various task in to categories of To Do, In Progress, and Done. Users can create multiple boards for different projects, add tasks with due dates and labels.",
    url: "#",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Fly News",
    description:
      "A news summarization tool that uses gemini flash model to generate concise summaries of news articles. Users can input a news article URL and receive a summary of the key points in the article.",
    url: "#",
    technologies: ["React", "tailwind css", "gemini"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ol className="group/list flex flex-col gap-2">
          {projects.map((project) => (
            <li key={project.title} className="group">
              <a
                href={project.url}
                className="relative flex flex-col gap-4 rounded-lg p-4 transition-all lg:p-6 hover:bg-card/80 group-hover:opacity-100 group-[:hover]:opacity-60 hover:!opacity-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="z-10 flex flex-col gap-2">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span className="inline-flex items-baseline gap-1 text-base group-hover/list:group-hover:text-primary transition-colors">
                      {project.title}
                      <LuArrowUpRight className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge
                          variant="secondary"
                          className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
