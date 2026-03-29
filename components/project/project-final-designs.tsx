import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectFinalDesignsProps {
  project: Project
}

export function ProjectFinalDesigns({ project }: ProjectFinalDesignsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
          Interface Final
        </h2>
        <p className="text-foreground mb-12 max-w-2xl">
          O resultado final após iterações e validações com usuários reais.
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          {project.finalDesigns.map((design, index) => (
            <div 
              key={index} 
              className="relative aspect-video bg-muted overflow-hidden"
            >
              <Image
                src={design}
                alt={`Design final ${index + 1}`}
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
