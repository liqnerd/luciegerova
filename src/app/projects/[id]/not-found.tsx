import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="bg-white pt-20">
        <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
          <h1 className="text-7xl font-bold mb-8">Project Not Found</h1>
          <p className="text-xl text-gray-600 mb-12">The project you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/projects"
            className="inline-block px-12 py-4 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
} 