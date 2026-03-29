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
    <section className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {prevProject ? (
            <Link 
              href={`/projeto/${prevProject.id}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider block">Anterior</span>
                <span className="text-sm text-foreground">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          <Link 
            href="/#projetos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Todos os projetos
          </Link>
          
          {nextProject ? (
            <Link 
              href={`/projeto/${nextProject.id}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider block">Próximo</span>
                <span className="text-sm text-foreground">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  )
}
