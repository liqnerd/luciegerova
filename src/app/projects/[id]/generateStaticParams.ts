const basePath = '/luciegerova'

const projects = [
  {
    id: 1,
    title: 'ARena',
    subtitle: 'Research Facility Manual',
    image: `${basePath}/projects/1.jpeg`,
    tags: ['Graphic Design', 'Publication Design'],
    bgColor: 'bg-project-blue',
    description: "A comprehensive guide for the ARena research facility, bridging physical space with digital technologies (AR/VR, projection, haptics). The manual clearly presents the principles of the entire system's operation while offering specific scenarios for practical applications.",
    czechDescription: "Tato publikace slouží jako strukturovaný průvodce výzkumným zařízením ARéna, které propojuje fyzický prostor s digitálními technologiemi (AR/VR, projekce, haptika). Manuál přehledně představuje principy fungování celého systému a zároveň nabízí konkrétní scénáře, jak lze s tímto prostředím pracovat v praxi.\n\nNejde však pouze o technický návod. Cílem bylo vytvořit vizuálně atraktivní a inspirativní příručku, která bude přístupná nejen odborníkům, ale i širší veřejnosti. Grafická koncepce manuálu záměrně odráží hlavní myšlenku projektu - prolínání fyzické a digitální vrstvy - a podporuje kreativní přístup k práci s tímto jedinečným prostředím.",
    role: 'Graphic Designer',
    duration: '3 months',
    deliverables: ['Publication Design', 'Visual Identity', 'Information Architecture', 'Print Production'],
    url: '#',
    additionalImages: [`${basePath}/projects/2.jpeg`, `${basePath}/projects/3.jpeg`]
  },
  {
    id: 2,
    title: 'Pes pro Patricii',
    subtitle: 'Design Help Workshop Editorial',
    image: `${basePath}/projects/4.png`,
    tags: ['Design Help', 'Editorial Design'],
    bgColor: 'bg-project-pink',
    description: "An editorial project created during a Design Help workshop, focusing on using design as a tool to address specific human needs. The project involved analyzing a defined persona's story and real-life constraints to create a visual solution that combines empathy, visual communication, and educational value.",
    czechDescription: "Příležitostí k vytvoření tohoto editorialu bylo zadání workshopu na téma Design Help, které se zaměřovalo na využití designu jako nástroje pro řešení konkrétních lidských potřeb. Cílem bylo vytvořit vizuální výstup na základě definované persony, jejího příběhu a reálných omezení. Projekt se soustředil na analýzu problému a hledání možností, jak může design přispět k naplnění jejího přání – citlivě, kreativně a s důrazem na její zdraví a bezpečí. Výsledkem je editorial, který propojuje empatický přístup, vizuální komunikaci a edukativní přesah.",
    role: 'Editorial Designer',
    duration: '2 months',
    deliverables: ['Editorial Design', 'Visual Research', 'Typography', 'Print Production'],
    url: '#',
    additionalImages: [`${basePath}/projects/5.png`, `${basePath}/projects/6.png`, `${basePath}/projects/7.png`]
  },
  {
    id: 3,
    title: 'Kampus Dejvice',
    subtitle: 'Wayfinding System for CTU Campus',
    image: `${basePath}/projects/7.jpg`,
    tags: ['Environmental Graphic Design', 'Wayfinding'],
    bgColor: 'bg-project-orange',
    description: "A comprehensive wayfinding system designed for the Czech Technical University (CTU) campus in Dejvice, Prague. The project focuses on creating an intuitive navigation system that enhances the user experience while respecting the architectural heritage of the campus.",
    czechDescription: "Komplexní orientační systém navržený pro kampus ČVUT v pražských Dejvicích. Projekt se zaměřuje na vytvoření intuitivního navigačního systému, který zlepšuje uživatelskou zkušenost a zároveň respektuje architektonické dědictví kampusu.\n\nSystém byl navržen s důrazem na čitelnost, přehlednost a snadnou orientaci v rozsáhlém univerzitním areálu. Grafické řešení citlivě kombinuje moderní přístup s respektem k historickému charakteru budov a vytváří jednotný vizuální jazyk napříč celým kampusem.",
    role: 'Environmental Graphic Designer',
    duration: '6 months',
    deliverables: ['Wayfinding System', 'Visual Identity', 'Design Manual', 'Implementation Guidelines'],
    url: '#',
    additionalImages: [`${basePath}/projects/8.jpg`, `${basePath}/projects/9.jpg`, `${basePath}/projects/10.jpg`, `${basePath}/projects/11.jpg`]
  },
  {
    id: 4,
    title: 'Puro',
    subtitle: 'Sustainable Water App',
    image: `${basePath}/projects/12.png`,
    tags: ['UX/UI Design', 'Mobile App'],
    bgColor: 'bg-project-blue',
    description: "Puro is an eco-focused mobile app that maps publicly available drinking water sources – drinking fountains, water fountains, and businesses offering free water. The goal is to promote a sustainable lifestyle, reduce plastic consumption, and simplify access to drinking water in the city. The app includes a clear interactive map, user profile with challenges, and an educational section. The project combines functional design with education and community outreach.",
    czechDescription: "Puro je ekologicky zaměřená mobilní aplikace, která mapuje veřejně dostupné zdroje pitné vody – pítka, fontány a podniky nabízejícící vodu zdarma. Cílem je podpořit udržitelný životní styl, snížit spotřebu plastů a zjednodušit přístup k pitné vodě ve městě. Součástí aplikace je přehledná interaktivní mapa, uživatelský profil s výzvami i edukační sekce. Projekt kombinuje funkční design s edukací a komunitním přesahem.",
    role: 'UX/UI Designer',
    duration: '4 months',
    deliverables: ['Mobile App Design', 'User Research', 'Interactive Prototype', 'Design System'],
    url: '#',
    additionalImages: [`${basePath}/projects/13.png`]
  }
]

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export { projects } 