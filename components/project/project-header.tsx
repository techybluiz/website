import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectHeaderProps {
  project: Project
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="relative w-full">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="uppercase tracking-widest">Projetos</span>
          </Link>
        </div>
      </nav>
      
      <div className="flex flex-col">
        {/* Title Section */}
        <div className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-muted-foreground" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-foreground leading-[0.95]">
                  {project.title}
                </h1>
              </div>
              <div className="max-w-sm">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light italic">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="px-6 md:px-10 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-xl border border-border shadow-2xl bg-muted">
              {/* Browser-like top bar for web projects */}
              {project.category.toLowerCase().includes("landing page") || project.category.toLowerCase().includes("web") ? (
                <div className="absolute top-0 left-0 right-0 h-10 bg-muted-foreground/5 border-b border-border z-10 flex items-center px-4 gap-1.5 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
              ) : null}
              
              <div className="relative w-full h-full pt-10">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-1000 hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
