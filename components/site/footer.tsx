import { Building2, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'House Planning',
  '2D Elevations',
  '3D Elevations',
  'Construction',
  'Consultation',
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold">Darshan Civil Works</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              Your trusted partner in designing and building modern, sustainable
              homes. Your trust is our foundation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-background/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+911111100000"
                  className="flex items-center gap-2.5 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +91 11111 00000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@darshancivilworks.com"
                  className="flex items-center gap-2.5 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  info@darshancivilworks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6">
          <p className="text-center text-xs text-background/60">
            &copy; {new Date().getFullYear()} Darshan Civil Works — Civil
            Engineering. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
