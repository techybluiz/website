import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projeto/${project.id}`}
      className="group block relative"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary/20 rounded-2xl mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      
      <div className="space-y-3 px-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl md:text-3xl font-serif text-foreground leading-tight group-hover:translate-x-1 transition-transform duration-500">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap bg-secondary/50 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover:text-foreground/70 transition-colors">
          {project.subtitle}
        </p>
      </div>
    </Link>
  )
}
