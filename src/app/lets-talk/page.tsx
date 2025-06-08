import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function LetsTalkPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F5F5F5] pt-20">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <h1 className="text-7xl font-bold mb-20">LET'S TALK</h1>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
} 