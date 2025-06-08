'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#F5F5F5] pt-20">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl font-bold mb-20">ABOUT ME</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-6">
                <p className="text-lg">
                  Hello! I'm Lucie Hegerova, a UX/UI designer and illustrator with over 5 years 
                  of experience in creating beautiful and functional digital experiences.
                </p>
                <p className="text-lg">
                  My approach combines clean, modern design principles with user-centered 
                  thinking to create interfaces that are both aesthetically pleasing and 
                  highly functional.
                </p>
                <p className="text-lg">
                  I specialize in website design, digital illustrations, and creating 
                  comprehensive brand identities that help businesses stand out in the 
                  digital space.
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Experience</h2>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="font-medium">Senior UX/UI Designer</h3>
                      <p className="text-gray-600">Design Studio XYZ • 2020-Present</p>
                    </li>
                    <li>
                      <h3 className="font-medium">UI Designer & Illustrator</h3>
                      <p className="text-gray-600">Creative Agency ABC • 2018-2020</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Education</h2>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="font-medium">Master's in Digital Design</h3>
                      <p className="text-gray-600">Design University • 2016-2018</p>
                    </li>
                    <li>
                      <h3 className="font-medium">Bachelor's in Graphic Design</h3>
                      <p className="text-gray-600">Art Academy • 2012-2016</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
} 