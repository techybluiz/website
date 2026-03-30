import { Search, Lightbulb } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectResearchProps {
  project: Project
}

export function ProjectResearch({ project }: ProjectResearchProps) {
  const { research } = project
  
  return (
    <section className="py-24 md:py-40 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          {/* Methods */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">
                Metodologia
              </h2>
              <p className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
                Processo de descoberta e validação.
              </p>
            </div>
            
            <div className="space-y-4">
              {research.methods.map((method, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 border border-transparent hover:border-foreground/10 hover:bg-secondary/50 transition-all duration-300"
                >
                  <span className="text-2xl font-serif text-foreground/20 group-hover:text-foreground transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg text-muted-foreground">{method}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Insights */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">
                Insights Chave
              </h2>
              <p className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
                O que aprendemos com os usuários.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {research.insights.map((insight, index) => (
                <div key={index} className="relative p-8 md:p-10 bg-secondary/30 rounded-3xl border border-border/50 hover:bg-secondary/50 transition-all group overflow-hidden">
                  <Lightbulb className="absolute -top-4 -right-4 w-24 h-24 text-foreground/5 group-hover:text-foreground/10 transition-colors" />
                  <span className="text-4xl font-serif text-foreground/10 block mb-8 group-hover:text-foreground/20 transition-colors">0{index + 1}</span>
                  <p className="text-xl text-muted-foreground leading-relaxed relative z-10">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
