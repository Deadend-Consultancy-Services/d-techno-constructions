import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { Gallery } from '@/components/site/gallery'
import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
