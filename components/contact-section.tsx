import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-6 border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Contato
            </h2>
            <p className="text-2xl md:text-3xl font-normal text-foreground leading-relaxed">
              Se você gostaria de discutir um projeto ou apenas dizer olá, 
              estou sempre aberto para conversar.
            </p>
            
            <a 
              href="mailto:seu@email.com"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Entrar em contato
            </a>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-muted-foreground mb-2">Email</h3>
              <a 
                href="mailto:seu@email.com" 
                className="text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                seu@email.com
              </a>
            </div>
            
            <div>
              <h3 className="text-sm text-muted-foreground mb-2">Redes Sociais</h3>
              <div className="space-y-2">
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024. Feito com cuidado.</p>
          <p>Disponível para novos projetos</p>
        </div>
      </div>
    </section>
  )
}
