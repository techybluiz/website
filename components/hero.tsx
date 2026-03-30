export function Hero() {
  return (
   <section className="pt-48 pb-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Text Content */}
        <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-foreground/20" />
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">
                Product Designer & UX Strategist
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] text-foreground tracking-tighter">
              Transformando <br />
              <span className="italic text-muted-foreground/60">complexidade</span> <br />
              em clareza.
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl border-l-2 border-foreground/10 pl-8">
            Especialista em criar produtos digitais que equilibram 
            <strong className="font-medium text-foreground"> funcionalidade impecável</strong> com 
            <strong className="font-medium text-foreground"> estética refinada</strong>. 
            Foco em design centrado no humano e resultados mensuráveis.
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            <a 
              href="#projetos"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-foreground text-background text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300"
            >
              Ver Projetos Selecionados
              <div className="w-2 h-2 rounded-full bg-background group-hover:scale-150 transition-transform" />
            </a>
            <a 
              href="#contato"
              className="text-sm font-bold uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors border-b-2 border-foreground/10 pb-1"
            >
              Vamos conversar?
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative flex justify-center animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-secondary rounded-[4rem] rotate-6 scale-95 opacity-50" />
            <div className="absolute inset-0 bg-secondary/30 rounded-[4rem] -rotate-3 scale-100" />
            <img
              src="/designer.png"
              alt="Designer Profile"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-foreground/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
