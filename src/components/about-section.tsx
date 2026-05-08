export function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="leading-relaxed text-muted-foreground">
          {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
        </p>
        <p className="leading-relaxed text-muted-foreground">
          {"I've had the opportunity to develop software across a variety of settings for organizations ranging from early-stage startups to large enterprises. My expertise lies in frontend development, with a particular focus on React and TypeScript"}
        </p>
        <p className="leading-relaxed text-muted-foreground">
          {"I enjoy building side projects alot."}
        </p>
      </div>
    </section>
  )
}
