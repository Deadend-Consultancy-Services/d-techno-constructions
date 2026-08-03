import {
  PencilRuler,
  LayoutTemplate,
  Box,
  HardHat,
  MessageSquareText,
  Ruler,
} from 'lucide-react'

const services = [
  {
    icon: PencilRuler,
    title: 'House Planning',
    description:
      'Thoughtful floor plans and layouts optimized for space, light, and your family’s lifestyle — compliant with local building norms.',
  },
  {
    icon: LayoutTemplate,
    title: '2D Elevations',
    description:
      'Precise, detailed 2D elevation drawings that clearly communicate the front, side, and structural design of your home.',
  },
  {
    icon: Box,
    title: '3D Elevations',
    description:
      'Photorealistic 3D visualizations so you can see and refine your dream home before construction begins.',
  },
  {
    icon: HardHat,
    title: 'Construction Services',
    description:
      'End-to-end, quality-driven construction execution with skilled teams, trusted materials, and on-time delivery.',
  },
  {
    icon: MessageSquareText,
    title: 'Design Consultation',
    description:
      'Expert guidance on materials, budgeting, and design decisions to help you build smart and build once.',
  },
  {
    icon: Ruler,
    title: 'Structural Planning',
    description:
      'Safe, efficient, and durable structural design backed by sound civil engineering practices.',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Our Services
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Everything you need to build your dream house
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Explore our professional services to bring your dream home to life —
          from the first sketch to the final brick.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold text-card-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
