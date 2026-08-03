import { ArrowRight, ShieldCheck } from 'lucide-react'

const stats = [
  { value: '150+', label: 'Homes Designed' },
  { value: '12+', label: 'Years Experience' },
  { value: '100%', label: 'Client Focused' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-home.png"
          alt="Modern residential home designed and built by Darshan Civil Works"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/30" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 py-24 md:px-6 md:py-36">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-background backdrop-blur-sm">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Trusted Civil Engineering Partner
        </span>

        <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight text-background md:text-6xl">
          Building modern, sustainable homes with precision and care
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-background/80 md:text-lg">
          Darshan Civil Works is your trusted partner in designing and building
          modern homes. We specialize in house planning, 2D and 3D elevations,
          and complete construction services tailored to your needs.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Our Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-background/30 bg-background/10 px-6 py-3 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            Request a Consultation
          </a>
        </div>

        <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-background/20 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-serif text-3xl font-semibold text-background">{stat.value}</dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-background/70">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
