import { CheckCircle2 } from 'lucide-react'

const values = [
  {
    title: 'Quality',
    description: 'Trusted materials and rigorous standards on every project we deliver.',
  },
  {
    title: 'Efficiency',
    description: 'Streamlined planning and execution that respects your time and budget.',
  },
  {
    title: 'Innovative Design',
    description: 'Modern, sustainable ideas that make your home functional and beautiful.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/about-team.png"
              alt="D TechNo Construction engineers reviewing house plans on site"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card p-5 shadow-lg sm:block">
            <p className="font-serif text-3xl font-semibold text-primary">12+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Years of Trust
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            About Us
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            A foundation built on trust and craftsmanship
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            At Darshan Civil Works, we prioritize quality, efficiency, and
            innovative designs. Whether you&apos;re looking for reliable
            construction solutions or expert advice, we&apos;re here to help you
            turn your dream home into a reality — from the first plan to the
            finished build.
          </p>

          <ul className="mt-8 space-y-5">
            {values.map((value) => (
              <li key={value.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground">{value.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
