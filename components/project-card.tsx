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
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {project.subtitle}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
            {project.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
