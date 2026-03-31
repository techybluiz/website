import type { Project } from "@/lib/projects"

interface ProjectOverviewProps {
  project: Project
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            <div className="space-y-8">
              <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
                Visão Geral
              </h2>
              <p className="text-3xl md:text-5xl font-serif text-foreground leading-[1.2] tracking-tight">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-foreground/5">
              <div className="space-y-6">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
                  O Problema
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
                  Contexto
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  {project.context}
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-16 p-8 md:p-12 bg-secondary/30 rounded-3xl border border-border/50">
              <div className="space-y-6">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.3em]">
                  Serviços
                </h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground font-light text-lg">{project.category}</li>
                  <li className="text-muted-foreground font-light text-lg">UI/UX Design</li>
                  <li className="text-muted-foreground font-light text-lg">Product Strategy</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-12">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.3em]">
                    Ano
                  </h3>
                  <p className="text-muted-foreground font-light text-lg">{project.year}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-[0.3em]">
                    Duração
                  </h3>
                  <p className="text-muted-foreground font-light text-lg">{project.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
