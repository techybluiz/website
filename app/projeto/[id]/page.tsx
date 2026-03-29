import { notFound } from "next/navigation"
import { getProjectById, projects } from "@/lib/projects"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectOverview } from "@/components/project/project-overview"
import { ProjectPersona } from "@/components/project/project-persona"
import { ProjectResearch } from "@/components/project/project-research"
import { ProjectWireframes } from "@/components/project/project-wireframes"
import { ProjectFinalDesigns } from "@/components/project/project-final-designs"
import { ProjectDecisions } from "@/components/project/project-decisions"
import { ProjectNavigation } from "@/components/project/project-navigation"

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    return {
      title: "Projeto não encontrado",
    }
  }
  
  return {
    title: `${project.title} | Portfólio`,
    description: project.overview,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    notFound()
  }
  
  return (
    <main className="min-h-screen bg-background">
      <ProjectHeader project={project} />
      <ProjectOverview project={project} />
      <ProjectPersona project={project} />
      <ProjectResearch project={project} />
      <ProjectWireframes project={project} />
      <ProjectFinalDesigns project={project} />
      <ProjectDecisions project={project} />
      <ProjectNavigation currentProjectId={project.id} />
    </main>
  )
}
