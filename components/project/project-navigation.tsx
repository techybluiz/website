import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "@/lib/projects"

interface ProjectNavigationProps {
  currentProjectId: string
}

export function ProjectNavigation({ currentProjectId }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex(p => p.id === currentProjectId)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-8">
          {/* Previous */}
          <div className="flex justify-start">
            {prevProject && (
              <Link 
                href={`/projeto/${prevProject.id}`}
                className="group flex flex-col items-start gap-2 max-w-[200px]"
              >
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Anterior</span>
                </div>
                <span className="text-lg md:text-xl font-serif text-foreground line-clamp-1 group-hover:opacity-70 transition-opacity">
                  {prevProject.title}
                </span>
              </Link>
            )}
          </div>
          
          {/* All Projects - Desktop only */}
          <div className="hidden md:flex justify-center">
            <Link 
              href="/#projetos"
              className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              Todos os projetos
            </Link>
          </div>
          
          {/* Next */}
          <div className="flex justify-end text-right">
            {nextProject && (
              <Link 
                href={`/projeto/${nextProject.id}`}
                className="group flex flex-col items-end gap-2 max-w-[200px]"
              >
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-xs uppercase tracking-widest font-semibold">Próximo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
                <span className="text-lg md:text-xl font-serif text-foreground line-clamp-1 group-hover:opacity-70 transition-opacity">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
        
        {/* All Projects - Mobile only */}
        <div className="flex md:hidden justify-center mt-12">
          <Link 
            href="/#projetos"
            className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground"
          >
            Todos os projetos
          </Link>
        </div>
      </div>
    </section>
  )
}
