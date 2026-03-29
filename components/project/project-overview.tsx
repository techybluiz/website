import type { Project } from "@/lib/projects"

interface ProjectOverviewProps {
  project: Project
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Overview */}
          <div className="md:col-span-2">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Overview
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>
          
          {/* Sidebar Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Categoria
              </h3>
              <p className="text-foreground">{project.category}</p>
            </div>
          </div>
        </div>
        
        {/* Problem & Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-border">
          <div>
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              O Problema
            </h2>
            <p className="text-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>
          
          <div>
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Contexto
            </h2>
            <p className="text-foreground leading-relaxed">
              {project.context}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
