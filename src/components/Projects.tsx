'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
    description: "A wayfinding system design for the CTU campus in Prague-Dejvice that addressed the need to replace the original non-functional signage while visually modernizing the entire campus environment. The project aimed to create an understandable and aesthetically contemporary system that would improve orientation for students, faculty staff, and visitors.",
    czechDescription: "Návrh orientačního systému pro pražský kampus ČVUT v Dejvicích reagoval na potřebu nahradit původní nefunkční značení a zároveň vizuálně zmodernizovat celé prostředí kampusu. Cílem projektu bylo vytvořit srozumitelný a esteticky soudobý systém, který zlepší orientaci v prostoru pro studenty, zaměstnance jednotlivých fakult i návštěvníky.\n\nSoučástí řešení byl také grafický manuál, který definuje pravidla použití prvků značení – od typografie a barevného kódu až po rozvržení tabulí a směrovek.\n\nKoncept vznikl v rámci zpracování bakalářské práce v oboru Design na FA ČVUT.",
    role: 'Environmental Designer',
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
    bgColor: 'bg-project-green',
    description: "Puro is an eco-focused mobile app that maps publicly available drinking water sources – drinking fountains, water fountains, and businesses offering free water. The goal is to promote a sustainable lifestyle, reduce plastic consumption, and simplify access to drinking water in the city. The app includes a clear interactive map, user profile with challenges, and an educational section. The project combines functional design with education and community outreach.",
    czechDescription: "Puro je ekologicky zaměřená mobilní aplikace, která mapuje veřejně dostupné zdroje pitné vody – pítka, fontány a podniky nabízejícící vodu zdarma. Cílem je podpořit udržitelný životní styl, snížit spotřebu plastů a zjednodušit přístup k pitné vodě ve městě. Součástí aplikace je přehledná interaktivní mapa, uživatelský profil s výzvami i edukační sekce. Projekt kombinuje funkční design s edukací a komunitním přesahem.",
    role: 'UX/UI Designer',
    duration: '4 months',
    deliverables: ['Mobile App Design', 'User Research', 'Interactive Prototype', 'Design System'],
    url: '#',
    additionalImages: ['/projects/13.png']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projectVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.97
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Projects() {
  return (
    <section className="pt-8 pb-20 px-6 bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold mb-8 sm:mb-12">SELECTED PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 2xl:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${project.bgColor} p-4 sm:p-6 md:p-8 2xl:p-10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="aspect-[16/10] relative mb-4 sm:mb-6 2xl:mb-8 overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold mb-2 sm:mb-4">{project.title}</h3>
                <p className="text-sm sm:text-base 2xl:text-lg mb-4">{project.subtitle}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 2xl:px-5 2xl:py-2.5 bg-white/90 rounded-full text-xs sm:text-sm 2xl:text-base font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/projects"
            className="inline-block px-12 py-4 2xl:px-16 2xl:py-5 border-2 border-black rounded-full text-lg 2xl:text-xl font-medium hover:bg-black hover:text-white transition-all"
          >
            See more projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 