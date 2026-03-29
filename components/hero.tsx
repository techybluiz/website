export function Hero() {
  return (
   <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <p className="text-muted-foreground mb-4">
            Olá, bem-vindo(a)
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-foreground">
            Transformo problemas complexos em experiências digitais simples e funcionais.
          </h1>

          <p className="mt-6 text-muted-foreground">
            Sou uma <strong className="font-semibold">designer</strong> focada em criar produtos 
            digitais intuitivos e centrados no usuário. Tenho interesse em resolver problemas 
            reais através de pesquisa, estruturação de informações e design de{" "}
            <strong className="font-semibold">interfaces claras</strong>.
          </p>

          <div className="mt-8">
            <a 
              href="#projetos"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="flex justify-center">
        <img
          src="/designer.png"
          className="w-100"
        />
        </div>
      </div>
    </section>
  )
}
