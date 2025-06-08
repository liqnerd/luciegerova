'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight">
            LUCIE HEGEROVA
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 hover:opacity-60 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/projects" className="text-sm hover:opacity-60 transition-opacity">
              Projects
            </Link>
            <Link href="/about" className="text-sm hover:opacity-60 transition-opacity">
              About
            </Link>
            <Link 
              href="/lets-talk"
              className="text-sm text-[#FF4D4D] hover:opacity-60 transition-opacity"
            >
              Let's talk
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4 pb-3 space-y-3">
            <Link 
              href="/projects" 
              className="block text-base hover:opacity-60 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="block text-base hover:opacity-60 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/lets-talk"
              className="block text-base text-[#FF4D4D] hover:opacity-60 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's talk
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
} 