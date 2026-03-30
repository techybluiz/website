import { projects } from "@/lib/projects"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 md:py-40 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.4em] mb-6">
              Portfólio Selecionado
            </h2>
            <p className="text-4xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tighter">
              Transformando ideias em experiências.
            </p>
          </div>
          <p className="text-xl text-muted-foreground font-light max-w-xs md:mb-4 border-l-2 border-foreground/10 pl-6">
            Uma seleção de projetos focados em usabilidade, estética e resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={index % 2 === 1 ? "md:translate-y-32" : ""}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
