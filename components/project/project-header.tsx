import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectHeaderProps {
  project: Project
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const isMobileApp = project.category.toLowerCase().includes("mobile") || project.category.toLowerCase().includes("aplicativo")
  const isWebProject = project.category.toLowerCase().includes("landing page") || project.category.toLowerCase().includes("web") || project.category.toLowerCase().includes("e-commerce")

  return (
    <header className="relative w-full">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/#projetos"
            className="group inline-flex items-center gap-3 text-sm font-medium text-foreground hover:opacity-70 transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
            <span className="uppercase tracking-[0.3em] text-xs font-bold">Voltar aos Projetos</span>
          </Link>
        </div>
      </nav>
      
      <div className="flex flex-col">
        {/* Title Section */}
        <div className="pt-40 pb-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
                  <span className="w-12 h-px bg-foreground/20" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-light tracking-tighter text-foreground leading-[0.9] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                  {project.title}
                </h1>
              </div>
              <div className="max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic border-l-2 border-foreground/10 pl-6 py-2">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="px-6 md:px-10 pb-24">
          <div className="max-w-7xl mx-auto">
            {isMobileApp ? (
              <div className="flex justify-center py-20 bg-secondary/30 rounded-[2rem] md:rounded-[4rem] animate-in fade-in zoom-in-95 duration-1000 delay-500">
                <div className="relative w-[280px] h-[580px] md:w-[360px] md:h-[740px] rounded-[3.5rem] border-[12px] border-foreground overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] bg-muted group">
                   <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden rounded-2xl border border-border shadow-2xl bg-muted animate-in fade-in zoom-in-95 duration-1000 delay-500 group">
                {/* Browser-like top bar for web projects */}
                {isWebProject ? (
                  <div className="absolute top-0 left-0 right-0 h-10 bg-background/80 border-b border-border z-10 flex items-center px-6 gap-2 backdrop-blur-md">
                    <div className="w-3 h-3 rounded-full bg-red-400/40" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/40" />
                    <div className="w-3 h-3 rounded-full bg-green-400/40" />
                  </div>
                ) : null}
                
                <div className={`relative w-full h-full ${isWebProject ? 'pt-10' : ''}`}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
