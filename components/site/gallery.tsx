const projects = [
  { src: '/gallery-modern-villa.png', title: 'Modern Villa', tag: 'Residential Design' },
  { src: '/gallery-3d-elevation.png', title: '3D Elevation', tag: 'Visualization' },
  { src: '/gallery-2d-plan.png', title: '2D Floor Plan', tag: 'House Planning' },
  { src: '/gallery-duplex.png', title: 'Contemporary Duplex', tag: 'Residential Design' },
  { src: '/gallery-interior.png', title: 'Interior Layout', tag: 'Interior' },
  { src: '/gallery-construction.png', title: 'On-Site Execution', tag: 'Construction' },
]

export function Gallery() {
  return (
    <section id="projects" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Our Work
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Choose the options for your dream house
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A glimpse of the homes and designs we have brought to life for
              families who trusted us with their vision.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <figure
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-background/75">
                  {project.tag}
                </span>
                <p className="mt-0.5 font-serif text-lg font-semibold text-background">
                  {project.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
