import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectWireframesProps {
  project: Project
}

export function ProjectWireframes({ project }: ProjectWireframesProps) {
  if (!project.wireframes || project.wireframes.length === 0) return null

  const isMobileApp = project.category.toLowerCase().includes("mobile") || project.category.toLowerCase().includes("aplicativo")

  return (
    <section className="py-24 md:py-40 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20 md:mb-32">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Estratégia & Estrutura
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight">
            Explorando fluxos e possibilidades através de wireframes de baixa fidelidade.
          </p>
        </div>
        
        <div className={isMobileApp ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12" : "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"}>
          {project.wireframes.map((wireframe, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden bg-background shadow-2xl border border-border/50 transition-all duration-700 hover:shadow-foreground/5 ${isMobileApp ? "aspect-[9/19] rounded-[3rem]" : "aspect-[16/10] rounded-2xl"}`}
            >
              <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <Image
                src={wireframe}
                alt={`Wireframe ${index + 1}`}
                fill
                className="object-contain p-4 md:p-8 grayscale contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center border border-border text-xs font-bold z-20">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
