import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectWireframesProps {
  project: Project
}

export function ProjectWireframes({ project }: ProjectWireframesProps) {
  if (project.wireframes.length === 0) return null

  return (
    <section className="py-24 md:py-32 px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
            Rabiscos & Wireframes
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
            Explorando diversas possibilidades através de rabiscos e wireframes de baixa fidelidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {project.wireframes.map((wireframe, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] bg-muted overflow-hidden shadow-sm"
            >
              <Image
                src={wireframe}
                alt={`Wireframe ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
