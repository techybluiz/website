import Image from "next/image"
import { User, Target, AlertCircle, Quote, MapPin, Briefcase, Calendar } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectPersonaProps {
  project: Project
}

export function ProjectPersona({ project }: ProjectPersonaProps) {
  const { persona } = project
  
  return (
    <section className="py-24 md:py-40 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">
            A Persona
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-foreground">
            Entendendo para quem projetamos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Persona Card */}
          <div className="lg:col-span-5">
            <div className="bg-background p-8 md:p-12 rounded-[2rem] shadow-xl border border-border/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-bl-[100%] opacity-50 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-3xl flex items-center justify-center border border-border group-hover:rotate-3 transition-transform duration-500 overflow-hidden relative">
                    {persona.image ? (
                      <Image
                        src={persona.image}
                        alt={persona.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 md:w-16 md:h-16 text-foreground/20" />
                    )}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-serif font-medium text-foreground mb-2">
                      {persona.name}
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <span className="px-3 py-1 bg-secondary text-xs font-bold uppercase tracking-wider rounded-full">{persona.age} anos</span>
                      <span className="px-3 py-1 bg-secondary text-xs font-bold uppercase tracking-wider rounded-full">{persona.occupation}</span>
                    </div>
                  </div>
                </div>

                <div className="relative py-8 border-y border-foreground/5">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-foreground/5" />
                  <p className="text-xl md:text-2xl font-serif italic text-muted-foreground text-center md:text-left leading-relaxed">
                    {persona.quote}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-muted-foreground group/item">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover/item:bg-foreground group-hover/item:text-background transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-lg">São Paulo, Brasil</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground group/item">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover/item:bg-foreground group-hover/item:text-background transition-colors">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-lg">Frequência: Diária</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Goals & Pain Points */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pt-12">
            {/* Goals */}
            <div className="space-y-8 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-[0.2em]">
                  Objetivos
                </h3>
              </div>
              <ul className="space-y-6">
                {persona.goals.map((goal, index) => (
                  <li key={index} className="text-muted-foreground text-xl leading-relaxed flex items-start gap-4 p-6 bg-background/50 rounded-2xl border border-transparent hover:border-foreground/10 hover:bg-background transition-all">
                    <span className="text-foreground/20 font-serif text-2xl mt-[-4px]">{index + 1}.</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Pain Points */}
            <div className="space-y-8 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-[0.2em]">
                  Frustrações
                </h3>
              </div>
              <ul className="space-y-6">
                {persona.painPoints.map((pain, index) => (
                  <li key={index} className="text-muted-foreground text-xl leading-relaxed flex items-start gap-4 p-6 bg-background/50 rounded-2xl border border-transparent hover:border-red-500/10 hover:bg-background transition-all">
                    <span className="text-red-500/20 font-serif text-2xl mt-[-4px]">{index + 1}.</span>
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
