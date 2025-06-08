'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ImageModal from '@/components/ImageModal'
import { motion } from 'framer-motion'
import { projects } from './projects-data'

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const project = projects.find(p => p.id === parseInt(params.id))
  
  if (!project) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="bg-white pt-[60px]">
        <motion.div 
          className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className={`rounded-2xl sm:rounded-3xl ${project.bgColor} p-4 sm:p-6 mb-8 sm:mb-16`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="aspect-[16/10] relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {project.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {project.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <motion.p 
                className="text-base sm:text-xl leading-relaxed mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {project.description}
              </motion.p>

              {project.czechDescription && (
                <motion.div 
                  className="mb-8 sm:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Czech Description</h3>
                  <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">{project.czechDescription}</p>
                </motion.div>
              )}

              {project.additionalImages && project.additionalImages.length > 0 && (
                <motion.div 
                  className="mb-8 sm:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Additional Images</h3>
                  <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${project.id !== 4 && 'md:grid-cols-2'}`}>
                    {project.additionalImages.map((image, index) => (
                      <motion.div 
                        key={index} 
                        className={`relative rounded-xl sm:rounded-2xl overflow-hidden ${
                          project.id === 4 
                            ? 'w-full max-w-[800px] mx-auto mb-16' 
                            : 'aspect-[3/2] cursor-pointer'
                        }`}
                        onClick={() => project.id !== 4 && setSelectedImage(image)}
                        whileHover={project.id !== 4 ? { scale: 1.02 } : undefined}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Additional Image ${index + 1}`}
                          width={800}
                          height={800}
                          className={project.id === 4 ? 'w-full h-auto' : 'object-cover aspect-[3/2]'}
                          sizes={project.id === 4 ? '(max-width: 800px) 100vw, 800px' : '(max-width: 768px) 100vw, (max-width: 1200px) 45vw'}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Role</h3>
                  <p className="text-base sm:text-lg">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Duration</h3>
                  <p className="text-base sm:text-lg">{project.duration}</p>
                </div>
              </motion.div>

              <motion.div 
                className="mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Deliverables</h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                  {project.deliverables.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="text-base sm:text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {project.url !== '#' && (
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-black text-white rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Visit Website
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </main>
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      <Footer />
    </>
  )
} 