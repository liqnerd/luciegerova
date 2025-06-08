import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F5F5F5]">
        <div className="space-y-2 md:space-y-4">
          <Hero />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  )
}
