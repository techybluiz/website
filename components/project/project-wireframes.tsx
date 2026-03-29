import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectWireframesProps {
  project: Project
}

export function ProjectWireframes({ project }: ProjectWireframesProps) {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
          Rabiscos & Wireframes
        </h2>
        <p className="text-foreground mb-12 max-w-2xl">
          Antes de partir para o design de alta fidelidade, exploramos diversas possibilidades 
          através de rabiscos e wireframes de baixa fidelidade.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.wireframes.map((wireframe, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] bg-muted overflow-hidden"
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
