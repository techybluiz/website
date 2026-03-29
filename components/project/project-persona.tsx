import { User, Target, AlertCircle, Quote } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectPersonaProps {
  project: Project
}

export function ProjectPersona({ project }: ProjectPersonaProps) {
  const { persona } = project
  
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-12">
          Persona
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Persona Info */}
          <div className="bg-background p-6 space-y-4">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground">{persona.name}</h3>
              <p className="text-muted-foreground">
                {persona.age} anos, {persona.occupation}
              </p>
            </div>
          </div>
          
          {/* Goals */}
          <div className="bg-background p-6 space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-4 h-4" />
              <h3 className="text-sm uppercase tracking-wider">Objetivos</h3>
            </div>
            <ul className="space-y-2">
              {persona.goals.map((goal, index) => (
                <li key={index} className="text-foreground text-sm flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Pain Points */}
          <div className="bg-background p-6 space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="w-4 h-4" />
              <h3 className="text-sm uppercase tracking-wider">Dores</h3>
            </div>
            <ul className="space-y-2">
              {persona.painPoints.map((pain, index) => (
                <li key={index} className="text-foreground text-sm flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">•</span>
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Quote */}
        <div className="mt-8 p-8 bg-background border-l-4 border-foreground">
          <Quote className="w-8 h-8 text-muted-foreground mb-4" />
          <blockquote className="text-xl text-foreground italic leading-relaxed">
            {`"${persona.quote}"`}
          </blockquote>
          <cite className="block mt-4 text-sm text-muted-foreground not-italic">
            — {persona.name}
          </cite>
        </div>
      </div>
    </section>
  )
}
