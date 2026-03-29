import { projects } from "@/lib/projects"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm text-muted-foreground uppercase tracking-wider">
            Projetos Selecionados
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
