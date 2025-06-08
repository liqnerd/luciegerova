'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ImageModal from '@/components/ImageModal'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'ARena',
    subtitle: 'Research Facility Manual',
    image: '/projects/1.jpeg',
    tags: ['Graphic Design', 'Publication Design'],
    bgColor: 'bg-project-blue',
    description: "A comprehensive guide for the ARena research facility, bridging physical space with digital technologies (AR/VR, projection, haptics). The manual clearly presents the principles of the entire system's operation while offering specific scenarios for practical applications.",
    czechDescription: "Tato publikace slouží jako strukturovaný průvodce výzkumným zařízením ARéna, které propojuje fyzický prostor s digitálními technologiemi (AR/VR, projekce, haptika). Manuál přehledně představuje principy fungování celého systému a zároveň nabízí konkrétní scénáře, jak lze s tímto prostředím pracovat v praxi.\n\nNejde však pouze o technický návod. Cílem bylo vytvořit vizuálně atraktivní a inspirativní příručku, která bude přístupná nejen odborníkům, ale i širší veřejnosti. Grafická koncepce manuálu záměrně odráží hlavní myšlenku projektu - prolínání fyzické a digitální vrstvy - a podporuje kreativní přístup k práci s tímto jedinečným prostředím.",
    role: 'Graphic Designer',
    duration: '3 months',
    deliverables: ['Publication Design', 'Visual Identity', 'Information Architecture', 'Print Production'],
    url: '#',
    additionalImages: ['/projects/2.jpeg', '/projects/3.jpeg']
  },
  {
    id: 2,
    title: 'Pes pro Patricii',
    subtitle: 'Design Help Workshop Editorial',
    image: '/projects/4.png',
    tags: ['Design Help', 'Editorial Design'],
    bgColor: 'bg-project-pink',
    description: "An editorial project created during a Design Help workshop, focusing on using design as a tool to address specific human needs. The project involved analyzing a defined persona's story and real-life constraints to create a visual solution that combines empathy, visual communication, and educational value.",
    czechDescription: "Příležitostí k vytvoření tohoto editorialu bylo zadání workshopu na téma Design Help, které se zaměřovalo na využití designu jako nástroje pro řešení konkrétních lidských potřeb. Cílem bylo vytvořit vizuální výstup na základě definované persony, jejího příběhu a reálných omezení. Projekt se soustředil na analýzu problému a hledání možností, jak může design přispět k naplnění jejího přání – citlivě, kreativně a s důrazem na její zdraví a bezpečí. Výsledkem je editorial, který propojuje empatický přístup, vizuální komunikaci a edukativní přesah.",
    role: 'Editorial Designer',
    duration: '2 months',
    deliverables: ['Editorial Design', 'Visual Research', 'Typography', 'Print Production'],
    url: '#',
    additionalImages: ['/projects/5.png', '/projects/6.png', '/projects/7.png']
  },
  {
    id: 3,
    title: 'Kampus Dejvice',
    subtitle: 'Wayfinding System for CTU Campus',
    image: '/projects/7.jpg',
    tags: ['Environmental Graphic Design', 'Wayfinding'],
    bgColor: 'bg-project-orange',
    description: "A comprehensive wayfinding system designed for the Czech Technical University (CTU) campus in Dejvice, Prague. The project focuses on creating an intuitive navigation system that enhances the user experience while respecting the architectural heritage of the campus.",
    czechDescription: "Komplexní orientační systém navržený pro kampus ČVUT v pražských Dejvicích. Projekt se zaměřuje na vytvoření intuitivního navigačního systému, který zlepšuje uživatelskou zkušenost a zároveň respektuje architektonické dědictví kampusu.\n\nSystém byl navržen s důrazem na čitelnost, přehlednost a snadnou orientaci v rozsáhlém univerzitním areálu. Grafické řešení citlivě kombinuje moderní přístup s respektem k historickému charakteru budov a vytváří jednotný vizuální jazyk napříč celým kampusem.",
    role: 'Environmental Graphic Designer',
    duration: '6 months',
    deliverables: ['Wayfinding System', 'Visual Identity', 'Design Manual', 'Implementation Guidelines'],
    url: '#',
    additionalImages: ['/projects/8.jpg', '/projects/9.jpg', '/projects/10.jpg', '/projects/11.jpg']
  },
  {
    id: 4,
    title: 'Puro',
    subtitle: 'Sustainable Water App',
    image: '/projects/12.png',
    tags: ['UX/UI Design', 'Mobile App'],
    bgColor: 'bg-project-blue',
    description: "Puro is an eco-focused mobile app that maps publicly available drinking water sources – drinking fountains, water fountains, and businesses offering free water. The goal is to promote a sustainable lifestyle, reduce plastic consumption, and simplify access to drinking water in the city. The app includes a clear interactive map, user profile with challenges, and an educational section. The project combines functional design with education and community outreach.",
    czechDescription: "Puro je ekologicky zaměřená mobilní aplikace, která mapuje veřejně dostupné zdroje pitné vody – pítka, fontány a podniky nabízející vodu zdarma. Cílem je podpořit udržitelný životní styl, snížit spotřebu plastů a zjednodušit přístup k pitné vodě ve městě. Součástí aplikace je přehledná interaktivní mapa, uživatelský profil s výzvami i edukační sekce. Projekt kombinuje funkční design s edukací a komunitním přesahem.",
    role: 'UX/UI Designer',
    duration: '4 months',
    deliverables: ['Mobile App Design', 'User Research', 'Interactive Prototype', 'Design System'],
    url: '#',
    additionalImages: ['/projects/13.png']
  }
]

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
                            ? 'aspect-auto h-auto w-full max-w-[1200px] mx-auto' 
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
                          fill
                          className={`w-full h-full ${project.id !== 4 ? 'object-cover bg-[#F5F5F5]' : ''}`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw"
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
      <Footer />

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt={project.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
} 