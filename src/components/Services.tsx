'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'UX/UI DESIGN',
    skills: [
      'Landing Page',
      'Real Estate',
      'E-commerce',
      'Online Magazine',
      'Corporate website',
      'Design agency',
      'Portfolio website'
    ]
  },
  {
    title: 'ILLUSTRATION',
    skills: [
      'Lined illustrations',
      'Web illustrations',
      'Landing page covers',
      'Icons',
      'Product illustrations',
      'Patterns'
    ]
  },
  {
    title: 'GRAPHIC DESIGN',
    skills: [
      'Storyboards',
      'Social Media Design',
      'Commercial products',
      'Mail design',
      'Animation'
    ]
  }
]

export default function Services() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          className="text-7xl font-bold mb-20 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          WHAT I DO
        </motion.h2>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="border-t border-white/10 pt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-12 tracking-tight">{service.title}</h3>
              <div className="flex flex-wrap gap-4">
                {service.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-6 py-3 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block px-12 py-4 border-2 border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all"
          >
            More about me
          </a>
        </motion.div>
      </div>
    </section>
  )
} 