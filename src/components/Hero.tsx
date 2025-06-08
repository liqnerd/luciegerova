'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-16 md:pt-20 pb-4 md:pb-8 px-4 md:px-6 bg-[#F5F5F5] 2xl:min-h-screen 2xl:flex 2xl:items-center">
      <div className="max-w-[1400px] mx-auto w-full 2xl:max-w-[1800px]">
        <div className="relative">
          <div className="absolute top-4 left-0 text-xs md:text-sm 2xl:text-base">
            OVER 5 YEARS<br />
            OF EXPERIENCE<br />
            IN INDUSTRY
          </div>

          <motion.div 
            className="text-[48px] md:text-[120px] lg:text-[180px] 2xl:text-[220px] leading-[0.9] font-bold tracking-tighter pt-16 md:pt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'M A UX/UI<br />
            DESIGNER &<br />
            ILLUSTRATOR
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mt-6 md:mt-4">
            <div className="flex gap-2 2xl:gap-3">
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12 rounded-full border border-black flex items-center justify-center text-xs md:text-sm 2xl:text-base hover:bg-black hover:text-white transition-all">
                Be
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12 rounded-full border border-black flex items-center justify-center text-xs md:text-sm 2xl:text-base hover:bg-black hover:text-white transition-all">
                @
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12 rounded-full border border-black flex items-center justify-center text-xs md:text-sm 2xl:text-base hover:bg-black hover:text-white transition-all">
                In
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12 rounded-full border border-black flex items-center justify-center text-xs md:text-sm 2xl:text-base hover:bg-black hover:text-white transition-all">
                Ig
              </a>
            </div>

            <div className="text-xs md:text-sm 2xl:text-base text-right">
              HELLO, I AM LUCIE HEGEROVA.<br />
              I'M FOCUSING ON CREATING<br />
              WEBSITE DESIGN & LINED<br />
              ILLUSTRATIONS FOR ANY TYPES<br />
              OF BUSINESS IDEA.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 