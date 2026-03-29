"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-medium text-foreground hover:text-muted-foreground transition-colors">
          Bianca Luiz
          <span className="block text-sm text-muted-foreground font-normal">Product Designer | UX/UI Designer</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            href="/#projetos" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </Link>
          <Link 
            href="/#contato" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
