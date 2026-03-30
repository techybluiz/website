import type { Project } from "@/lib/projects"

interface ProjectDecisionsProps {
  project: Project
}

export function ProjectDecisions({ project }: ProjectDecisionsProps) {
  if (!project.decisions || project.decisions.length === 0) return null

  return (
    <section className="py-24 md:py-40 px-6 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20 md:mb-32">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Estratégia de Design
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight">
            Decisões fundamentadas em objetivos de negócio e necessidades do usuário.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/5 overflow-hidden rounded-[2rem] border border-foreground/5">
          {project.decisions.map((decision, index) => (
            <div key={index} className="group bg-background p-10 md:p-16 flex flex-col justify-between hover:bg-secondary/30 transition-all duration-500">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-serif font-light text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-foreground/5 flex items-center justify-center group-hover:border-foreground/20 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover:scale-150 group-hover:bg-foreground transition-all" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-foreground tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {decision.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed font-light">
                    {decision.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
