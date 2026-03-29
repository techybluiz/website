import type { Project } from "@/lib/projects"

interface ProjectDecisionsProps {
  project: Project
}

export function ProjectDecisions({ project }: ProjectDecisionsProps) {
  if (!project.decisions || project.decisions.length === 0) return null

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Decisões de Design
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
            Cada detalhe foi pensado para equilibrar estética e funcionalidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {project.decisions.map((decision, index) => (
            <div key={index} className="group flex gap-8 p-8 hover:bg-muted/30 transition-colors">
              <span className="text-5xl font-serif font-light text-muted-foreground/20 group-hover:text-foreground/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground tracking-tight">
                  {decision.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {decision.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
