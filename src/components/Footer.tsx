'use client'

import { motion } from 'framer-motion'

const ScrollingText = () => {
  const text = "LET'S TALK"
  const repeatedText = Array(8).fill(text)

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap py-2"
        animate={{
          x: [0, '-50%']
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedText.map((text, i) => (
          <span key={i} className="text-6xl md:text-8xl font-bold mx-4">{text}</span>
        ))}
        {repeatedText.map((text, i) => (
          <span key={`clone-${i}`} className="text-6xl md:text-8xl font-bold mx-4">{text}</span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <ScrollingText />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-sm">
            Open for any offers and<br />
            collaborations
          </div>

          <div className="flex items-center space-x-8">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400 transition-colors">Be</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400 transition-colors">Dr</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400 transition-colors">In</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400 transition-colors">Ig</a>

            <motion.a
              href="mailto:hello@luciehegerova.com"
              className="ml-8 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Send me email
            </motion.a>
          </div>
        </div>

        <div className="mt-16 text-sm text-gray-400">
          © {new Date().getFullYear()} Lucie Hegerova. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 