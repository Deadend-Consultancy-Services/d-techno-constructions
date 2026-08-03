'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

const details = [
  { icon: Phone, label: 'Call Us', value: '+91 11111 00000', href: 'tel:+911111100000' },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@darshancivilworks.com',
    href: 'mailto:info@darshancivilworks.com',
  },
  { icon: MapPin, label: 'Location', value: 'Karnataka, India', href: undefined },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Contact
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Let&apos;s build your dream home together
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Reach out for a free consultation. Tell us about your plot, your
              vision, and your budget — and we&apos;ll guide you through every
              step of the journey.
            </p>

            <ul className="mt-10 space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-card-foreground">
                  Thank you!
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We&apos;ve received your enquiry and will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </Field>
                  <Field id="phone" label="Phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </Field>
                </div>
                <Field id="email" label="Email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </Field>
                <Field id="message" label="Project Details">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
