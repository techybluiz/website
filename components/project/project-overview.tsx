import type { Project } from "@/lib/projects"

interface ProjectOverviewProps {
  project: Project
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                Overview
              </h2>
              <p className="text-2xl md:text-3xl font-serif text-foreground leading-snug">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-border">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                  O Problema
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                  Contexto
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {project.context}
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 lg:pl-12">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.3em]">
                  Serviços
                </h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground font-light">{project.category}</li>
                  <li className="text-muted-foreground font-light">UI/UX Design</li>
                  <li className="text-muted-foreground font-light">Product Strategy</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.3em]">
                  Ano
                </h3>
                <p className="text-muted-foreground font-light">2024</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.3em]">
                  Duração
                </h3>
                <p className="text-muted-foreground font-light">12 Semanas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
