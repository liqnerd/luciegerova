'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const allProjects = [
  {
    id: 1,
    title: 'ARena',
    image: 'https://liqnerd.github.io/luciegerova/projects/1.jpeg',
    tags: ['Graphic Design', 'Publication Design'],
    bgColor: 'bg-project-blue',
    featured: true,
    hasImage: true
  },
  {
    id: 2,
    title: 'Pes pro Patricii',
    image: 'https://liqnerd.github.io/luciegerova/projects/4.png',
    tags: ['Design Help', 'Editorial Design'],
    bgColor: 'bg-project-pink',
    featured: true,
    hasImage: true
  },
  {
    id: 3,
    title: 'Kampus Dejvice',
    image: 'https://liqnerd.github.io/luciegerova/projects/7.jpg',
    tags: ['Environmental Graphic Design', 'Wayfinding'],
    bgColor: 'bg-project-orange',
    featured: true,
    hasImage: true
  },
  {
    id: 4,
    title: 'Puro',
    image: 'https://liqnerd.github.io/luciegerova/projects/12.png',
    tags: ['UX/UI Design', 'Mobile App'],
    bgColor: 'bg-project-green',
    description: "Puro is an eco-focused mobile app that maps publicly available drinking water sources.",
    featured: true,
    hasImage: true
  }
]

export default function AllProjects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {allProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${project.bgColor} p-4 sm:p-6 md:p-8`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/projects/${project.id}`} className="block">
            {project.hasImage ? (
              <div className="aspect-[16/10] relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={project.image || ''}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
            ) : (
              <div className="aspect-[16/10] mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-black/5 flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold text-black/20">{project.title.split(' ')[0]}</span>
              </div>
            )}
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">{project.title}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 rounded-full text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
} 