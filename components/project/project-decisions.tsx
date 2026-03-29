import type { Project } from "@/lib/projects"

interface ProjectDecisionsProps {
  project: Project
}

export function ProjectDecisions({ project }: ProjectDecisionsProps) {
  return (
    <section className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-background/60 uppercase tracking-wider mb-12">
          Decisões de Design
        </h2>
        
        <div className="space-y-12">
          {project.decisions.map((decision, index) => (
            <div key={index} className="flex gap-8">
              <span className="text-4xl font-serif text-background/30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl font-medium text-background mb-3">
                  {decision.title}
                </h3>
                <p className="text-background/80 leading-relaxed">
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
