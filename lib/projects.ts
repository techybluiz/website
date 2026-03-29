export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  thumbnail: string
  overview: string
  problem: string
  context: string
  persona: {
    name: string
    age: number
    occupation: string
    goals: string[]
    painPoints: string[]
    quote: string
  }
  research: {
    methods: string[]
    insights: string[]
  }
  wireframes: string[]
  finalDesigns: string[]
  decisions: {
    title: string
    description: string
  }[]
}

export const projects: Project[] = [
  {
    id: "fintech-app",
    title: "FinTrack",
    subtitle: "App de gestão financeira pessoal",
    category: "Mobile App",
    thumbnail: "/tela_home.png",
    overview: "FinTrack é um aplicativo móvel que ajuda pessoas a gerenciar suas finanças pessoais de forma simples e intuitiva. O projeto foi desenvolvido com foco em usuários que têm dificuldade em acompanhar seus gastos e criar hábitos financeiros saudáveis.",
    problem: "Muitas pessoas têm dificuldade em acompanhar seus gastos diários e acabam perdendo o controle financeiro. Os apps existentes no mercado são complexos demais ou não oferecem insights acionáveis para melhorar os hábitos financeiros.",
    context: "O projeto foi desenvolvido em 8 semanas, partindo de uma pesquisa inicial com 25 usuários potenciais até a entrega de um protótipo de alta fidelidade validado. O foco foi criar uma experiência que fosse acessível tanto para iniciantes quanto para usuários mais experientes em finanças.",
    persona: {
      name: "Marina Silva",
      age: 28,
      occupation: "Analista de Marketing",
      goals: [
        "Economizar para uma viagem internacional",
        "Ter controle dos gastos mensais",
        "Criar uma reserva de emergência"
      ],
      painPoints: [
        "Esquece de anotar pequenos gastos",
        "Não consegue visualizar para onde vai seu dinheiro",
        "Sente-se sobrecarregada com planilhas complexas"
      ],
      quote: "Eu quero algo que me mostre de forma clara e rápida se estou gastando demais, sem precisar fazer cálculos."
    },
    research: {
      methods: [
        "Entrevistas em profundidade com 15 usuários",
        "Análise competitiva de 8 apps similares",
        "Teste de usabilidade com 10 participantes",
        "Análise de dados de uso de apps financeiros"
      ],
      insights: [
        "78% dos usuários abandonam apps financeiros no primeiro mês por complexidade",
        "Notificações personalizadas aumentam o engajamento em 45%",
        "Visualizações gráficas são preferidas por 89% dos entrevistados",
        "A gamificação de metas aumenta a aderência em 60%"
      ]
    },
    wireframes: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop"
    ],
    finalDesigns: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    decisions: [
      {
        title: "Paleta de cores calmas",
        description: "Optamos por tons de azul e verde para transmitir confiança e tranquilidade, evitando cores que pudessem causar ansiedade ao lidar com dinheiro."
      },
      {
        title: "Onboarding progressivo",
        description: "Implementamos um onboarding que revela funcionalidades gradualmente, evitando sobrecarregar novos usuários com todas as opções de uma vez."
      },
      {
        title: "Dashboard simplificado",
        description: "A tela inicial mostra apenas as 3 informações mais importantes: saldo, gastos do mês e progresso das metas, com acesso fácil a detalhes."
      }
    ]
  },
  {
    id: "ecommerce-redesign",
    title: "Volare",
    subtitle: "Plataforma de viagens",
    category: "E-commerce",
    thumbnail: "/capa.webp",
    overview: "A Volare é um conceito de plataforma digital para busca e compra de passagens aéreas, focada em praticidade, clareza e experiência do usuário.",
    problem: "O site existente tinha uma taxa de conversão baixa (1.2%) e os usuários relatavam dificuldade em encontrar produtos e entender a proposta de sustentabilidade da marca.",
    context: "Projeto realizado em parceria com a equipe de marketing da ModaViva ao longo de 12 semanas. O objetivo principal era aumentar a taxa de conversão e melhorar a percepção da marca como referência em moda sustentável.",
    persona: {
      name: "Carolina Mendes",
      age: 34,
      occupation: "Arquiteta",
      goals: [
        "Encontrar roupas de qualidade que durem",
        "Apoiar marcas com valores sustentáveis",
        "Ter um guarda-roupa versátil e atemporal"
      ],
      painPoints: [
        "Difícil encontrar informações sobre sustentabilidade dos produtos",
        "Fotos não mostram bem os detalhes e caimento",
        "Processo de checkout demorado"
      ],
      quote: "Quero saber exatamente de onde vem o que estou comprando e como foi feito."
    },
    research: {
      methods: [
        "Análise de heatmaps e gravações de sessão",
        "Entrevistas com 20 clientes da marca",
        "Teste A/B de páginas de produto",
        "Card sorting para reorganização de categorias"
      ],
      insights: [
        "65% dos usuários abandonam o carrinho na etapa de frete",
        "Páginas de produto com certificações sustentáveis convertem 40% mais",
        "Vídeos de produto aumentam o tempo na página em 2.5x",
        "Filtros por impacto ambiental são desejados por 72% dos usuários"
      ]
    },
    wireframes: [
      "/wireframe_volare.png",
      "https://images.unsplash.com/photo-1586953208270-767889fa9b0e?w=800&h=600&fit=crop"
    ],
    finalDesigns: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop",
      "/mockup_volare.webp",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop"
    ],
    decisions: [
      {
        title: "Selo de sustentabilidade visível",
        description: "Criamos um sistema de selos que aparece em todas as páginas, indicando rapidamente o nível de sustentabilidade de cada produto."
      },
      {
        title: "Checkout em uma página",
        description: "Reduzimos o checkout de 4 etapas para uma única página com seções expansíveis, diminuindo o abandono em 35%."
      },
      {
        title: "Fotos em contexto real",
        description: "Substituímos fotos de estúdio por imagens em ambientes reais, mostrando o caimento e versatilidade das peças."
      }
    ]
  },
  {
    id: "health-dashboard",
    title: "ArchiPlace",
    subtitle: "Landing page para imobiliária e arquitetura",
    category: "Landing Page",
    thumbnail: "/tela_home.png",
    overview: "Landing page criada para uma marca fictícia do setor imobiliário e de arquitetura, com foco em apresentar imóveis e estilos de ambientes de forma sofisticada, clara e visualmente atrativa.",
    problem: "Muitas plataformas do setor imobiliário apresentam excesso de informação, navegação pouco atraente e uma comunicação visual genérica, o que dificulta a exploração dos imóveis e reduz a percepção de valor da marca.",
    context: "Este projeto foi desenvolvido como um exercício conceitual de UI Design com o objetivo de praticar hierarquia visual, organização de conteúdo, construção de identidade visual e criação de uma interface digital com aparência premium para o segmento de real estate.",
    persona: {
      name: "Marina Costa",
      age: 32,
      occupation: "Arquiteta",
      goals: [
        "Encontrar imóveis de forma prática e visual",
        "Explorar diferentes estilos de arquitetura e interiores",
        "Ter uma experiência digital elegante e confiável"
      ],
      painPoints: [
        "Muitos sites imobiliários são poluídos visualmente",
        "Falta organização entre inspiração e informação objetiva",
        "Interfaces genéricas reduzem a confiança na marca"
      ],
      quote: "Quando estou procurando um imóvel ou referência de espaço, eu quero sentir clareza, confiança e inspiração logo nos primeiros segundos."
    },
    research: {
      methods: [
        "Benchmark de landing pages imobiliárias e de arquitetura",
        "Análise de referências visuais com proposta premium",
        "Estudo de hierarquia visual para páginas longas",
        "Exploração de padrões de cards para exibição de imóveis"
      ],
      insights: [
        "Usuários valorizam imagens de destaque logo no primeiro contato com a página",
        "Prova social e números institucionais ajudam a transmitir credibilidade",
        "Cards com imagem, localização e preço facilitam a escaneabilidade",
        "Seções inspiracionais ajudam a tornar a experiência mais aspiracional e memorável"
      ]
    },
    wireframes: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    finalDesigns: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop"
    ],
    decisions: [
      {
        title: "Hero com foco em impacto visual",
        description: "A primeira dobra foi construída para combinar uma mensagem clara com uma imagem de alto impacto, criando uma entrada forte e aspiracional para a experiência."
      },
      {
        title: "Cards modulares para imóveis",
        description: "Os imóveis foram organizados em cards que combinam imagem, nome, localização, descrição e preço, facilitando a leitura rápida e mantendo consistência visual."
      },
      {
        title: "Seção inspiracional de estilos",
        description: "Além de apresentar propriedades, foi criada uma seção com estilos de espaços para ampliar o apelo emocional da interface e reforçar o posicionamento da marca."
      },
            {
        title: "Equipe para reforço de credibilidade",
        description: "A apresentação dos profissionais foi incluída para humanizar a marca e transmitir confiança ao usuário."
      },
            {
        title: "Paleta neutra com contraste premium",
        description: "A escolha de tons claros, preto e um bloco de destaque suave no hero ajudou a construir uma estética elegante, limpa e contemporânea."
      }
    ]
  },
  {
    id: "health-dashboard",
    title: "ArchiPlace",
    subtitle: "Landing page para imobiliária e arquitetura",
    category: "Landing Page",
    thumbnail: "/tela_home.png",
    overview: "Landing page criada para uma marca fictícia do setor imobiliário e de arquitetura, com foco em apresentar imóveis e estilos de ambientes de forma sofisticada, clara e visualmente atrativa.",
    problem: "Muitas plataformas do setor imobiliário apresentam excesso de informação, navegação pouco atraente e uma comunicação visual genérica, o que dificulta a exploração dos imóveis e reduz a percepção de valor da marca.",
    context: "Este projeto foi desenvolvido como um exercício conceitual de UI Design com o objetivo de praticar hierarquia visual, organização de conteúdo, construção de identidade visual e criação de uma interface digital com aparência premium para o segmento de real estate.",
    persona: {
      name: "Marina Costa",
      age: 32,
      occupation: "Arquiteta",
      goals: [
        "Encontrar imóveis de forma prática e visual",
        "Explorar diferentes estilos de arquitetura e interiores",
        "Ter uma experiência digital elegante e confiável"
      ],
      painPoints: [
        "Muitos sites imobiliários são poluídos visualmente",
        "Falta organização entre inspiração e informação objetiva",
        "Interfaces genéricas reduzem a confiança na marca"
      ],
      quote: "Quando estou procurando um imóvel ou referência de espaço, eu quero sentir clareza, confiança e inspiração logo nos primeiros segundos."
    },
    research: {
      methods: [
        "Benchmark de landing pages imobiliárias e de arquitetura",
        "Análise de referências visuais com proposta premium",
        "Estudo de hierarquia visual para páginas longas",
        "Exploração de padrões de cards para exibição de imóveis"
      ],
      insights: [
        "Usuários valorizam imagens de destaque logo no primeiro contato com a página",
        "Prova social e números institucionais ajudam a transmitir credibilidade",
        "Cards com imagem, localização e preço facilitam a escaneabilidade",
        "Seções inspiracionais ajudam a tornar a experiência mais aspiracional e memorável"
      ]
    },
    wireframes: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    finalDesigns: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop"
    ],
    decisions: [
      {
        title: "Hero com foco em impacto visual",
        description: "A primeira dobra foi construída para combinar uma mensagem clara com uma imagem de alto impacto, criando uma entrada forte e aspiracional para a experiência."
      },
      {
        title: "Cards modulares para imóveis",
        description: "Os imóveis foram organizados em cards que combinam imagem, nome, localização, descrição e preço, facilitando a leitura rápida e mantendo consistência visual."
      },
      {
        title: "Seção inspiracional de estilos",
        description: "Além de apresentar propriedades, foi criada uma seção com estilos de espaços para ampliar o apelo emocional da interface e reforçar o posicionamento da marca."
      },
            {
        title: "Equipe para reforço de credibilidade",
        description: "A apresentação dos profissionais foi incluída para humanizar a marca e transmitir confiança ao usuário."
      },
            {
        title: "Paleta neutra com contraste premium",
        description: "A escolha de tons claros, preto e um bloco de destaque suave no hero ajudou a construir uma estética elegante, limpa e contemporânea."
      }
    ]
  },
  {
    id: "health-dashboard",
    title: "ArchiPlace",
    subtitle: "Landing page para imobiliária e arquitetura",
    category: "Landing Page",
    thumbnail: "/tela_home.png",
    overview: "Landing page criada para uma marca fictícia do setor imobiliário e de arquitetura, com foco em apresentar imóveis e estilos de ambientes de forma sofisticada, clara e visualmente atrativa.",
    problem: "Muitas plataformas do setor imobiliário apresentam excesso de informação, navegação pouco atraente e uma comunicação visual genérica, o que dificulta a exploração dos imóveis e reduz a percepção de valor da marca.",
    context: "Este projeto foi desenvolvido como um exercício conceitual de UI Design com o objetivo de praticar hierarquia visual, organização de conteúdo, construção de identidade visual e criação de uma interface digital com aparência premium para o segmento de real estate.",
    persona: {
      name: "Marina Costa",
      age: 32,
      occupation: "Arquiteta",
      goals: [
        "Encontrar imóveis de forma prática e visual",
        "Explorar diferentes estilos de arquitetura e interiores",
        "Ter uma experiência digital elegante e confiável"
      ],
      painPoints: [
        "Muitos sites imobiliários são poluídos visualmente",
        "Falta organização entre inspiração e informação objetiva",
        "Interfaces genéricas reduzem a confiança na marca"
      ],
      quote: "Quando estou procurando um imóvel ou referência de espaço, eu quero sentir clareza, confiança e inspiração logo nos primeiros segundos."
    },
    research: {
      methods: [
        "Benchmark de landing pages imobiliárias e de arquitetura",
        "Análise de referências visuais com proposta premium",
        "Estudo de hierarquia visual para páginas longas",
        "Exploração de padrões de cards para exibição de imóveis"
      ],
      insights: [
        "Usuários valorizam imagens de destaque logo no primeiro contato com a página",
        "Prova social e números institucionais ajudam a transmitir credibilidade",
        "Cards com imagem, localização e preço facilitam a escaneabilidade",
        "Seções inspiracionais ajudam a tornar a experiência mais aspiracional e memorável"
      ]
    },
    wireframes: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    finalDesigns: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop"
    ],
    decisions: [
      {
        title: "Hero com foco em impacto visual",
        description: "A primeira dobra foi construída para combinar uma mensagem clara com uma imagem de alto impacto, criando uma entrada forte e aspiracional para a experiência."
      },
      {
        title: "Cards modulares para imóveis",
        description: "Os imóveis foram organizados em cards que combinam imagem, nome, localização, descrição e preço, facilitando a leitura rápida e mantendo consistência visual."
      },
      {
        title: "Seção inspiracional de estilos",
        description: "Além de apresentar propriedades, foi criada uma seção com estilos de espaços para ampliar o apelo emocional da interface e reforçar o posicionamento da marca."
      },
            {
        title: "Equipe para reforço de credibilidade",
        description: "A apresentação dos profissionais foi incluída para humanizar a marca e transmitir confiança ao usuário."
      },
            {
        title: "Paleta neutra com contraste premium",
        description: "A escolha de tons claros, preto e um bloco de destaque suave no hero ajudou a construir uma estética elegante, limpa e contemporânea."
      }
    ]
  },
  {
    id: "health-dashboard",
    title: "Starbucks App",
    subtitle: "Aplicativo de vendas de bebidas",
    category: "Aplicativo",
    thumbnail: "/capa_star.png",
    overview: "Landing page criada para uma marca fictícia do setor imobiliário e de arquitetura, com foco em apresentar imóveis e estilos de ambientes de forma sofisticada, clara e visualmente atrativa.",
    problem: "Muitas plataformas do setor imobiliário apresentam excesso de informação, navegação pouco atraente e uma comunicação visual genérica, o que dificulta a exploração dos imóveis e reduz a percepção de valor da marca.",
    context: "Este projeto foi desenvolvido como um exercício conceitual de UI Design com o objetivo de praticar hierarquia visual, organização de conteúdo, construção de identidade visual e criação de uma interface digital com aparência premium para o segmento de real estate.",
    persona: {
      name: "Marina Costa",
      age: 32,
      occupation: "Arquiteta",
      goals: [
        "Encontrar imóveis de forma prática e visual",
        "Explorar diferentes estilos de arquitetura e interiores",
        "Ter uma experiência digital elegante e confiável"
      ],
      painPoints: [
        "Muitos sites imobiliários são poluídos visualmente",
        "Falta organização entre inspiração e informação objetiva",
        "Interfaces genéricas reduzem a confiança na marca"
      ],
      quote: "Quando estou procurando um imóvel ou referência de espaço, eu quero sentir clareza, confiança e inspiração logo nos primeiros segundos."
    },
    research: {
      methods: [
        "Benchmark de landing pages imobiliárias e de arquitetura",
        "Análise de referências visuais com proposta premium",
        "Estudo de hierarquia visual para páginas longas",
        "Exploração de padrões de cards para exibição de imóveis"
      ],
      insights: [
        "Usuários valorizam imagens de destaque logo no primeiro contato com a página",
        "Prova social e números institucionais ajudam a transmitir credibilidade",
        "Cards com imagem, localização e preço facilitam a escaneabilidade",
        "Seções inspiracionais ajudam a tornar a experiência mais aspiracional e memorável"
      ]
    },
    wireframes: [
      "/capa_star.png",
      "/tela_home.png"
    ],
    finalDesigns: [
       "/login_starbucks.png",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop"
    ],
    decisions: [
      {
        title: "Hero com foco em impacto visual",
        description: "A primeira dobra foi construída para combinar uma mensagem clara com uma imagem de alto impacto, criando uma entrada forte e aspiracional para a experiência."
      },
      {
        title: "Cards modulares para imóveis",
        description: "Os imóveis foram organizados em cards que combinam imagem, nome, localização, descrição e preço, facilitando a leitura rápida e mantendo consistência visual."
      },
      {
        title: "Seção inspiracional de estilos",
        description: "Além de apresentar propriedades, foi criada uma seção com estilos de espaços para ampliar o apelo emocional da interface e reforçar o posicionamento da marca."
      },
            {
        title: "Equipe para reforço de credibilidade",
        description: "A apresentação dos profissionais foi incluída para humanizar a marca e transmitir confiança ao usuário."
      },
            {
        title: "Paleta neutra com contraste premium",
        description: "A escolha de tons claros, preto e um bloco de destaque suave no hero ajudou a construir uma estética elegante, limpa e contemporânea."
      }
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}
