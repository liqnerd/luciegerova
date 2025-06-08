import { projects, Project } from './projects-data'

export function generateStaticParams() {
  return projects.map((project: Project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 