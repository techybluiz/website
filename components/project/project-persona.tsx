import { User, Target, AlertCircle, Quote, MapPin, Briefcase, Calendar } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectPersonaProps {
  project: Project
}

export function ProjectPersona({ project }: ProjectPersonaProps) {
  const { persona } = project
  
  return (
    <section className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Persona Detail Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-12">
                Persona
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center border border-border">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-foreground">
                      {persona.name}
                    </h3>
                    <p className="text-muted-foreground italic font-light">
                      "{persona.quote}"
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 pt-8 border-t border-border">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{persona.age} anos</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span>{persona.occupation}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>São Paulo, Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Persona Main Info */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pt-24">
            {/* Goals */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-foreground/5 rounded-full">
                  <Target className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground uppercase tracking-widest">
                  Objetivos
                </h3>
              </div>
              <ul className="space-y-4">
                {persona.goals.map((goal, index) => (
                  <li key={index} className="text-muted-foreground text-lg leading-relaxed flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-3 flex-shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Pain Points */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/5 rounded-full">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-medium text-foreground uppercase tracking-widest">
                  Dores
                </h3>
              </div>
              <ul className="space-y-4">
                {persona.painPoints.map((pain, index) => (
                  <li key={index} className="text-muted-foreground text-lg leading-relaxed flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/20 mt-3 flex-shrink-0" />
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
