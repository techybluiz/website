import { Search, Lightbulb } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectResearchProps {
  project: Project
}

export function ProjectResearch({ project }: ProjectResearchProps) {
  const { research } = project
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-12">
          Research
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Methods */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Search className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-medium text-foreground">Métodos Utilizados</h3>
            </div>
            <ul className="space-y-3">
              {research.methods.map((method, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-secondary text-foreground"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm">{method}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Insights */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-medium text-foreground">Principais Insights</h3>
            </div>
            <ul className="space-y-3">
              {research.insights.map((insight, index) => (
                <li 
                  key={index} 
                  className="p-4 border-l-2 border-foreground bg-secondary text-foreground"
                >
                  <span className="text-sm">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
