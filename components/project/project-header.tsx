import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectHeaderProps {
  project: Project
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="relative">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <Link 
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar aos projetos
        </Link>
      </div>
      
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      {/* Title */}
      <div className="relative -mt-32 z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mt-2">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
            {project.subtitle}
          </p>
        </div>
      </div>
    </header>
  )
}
