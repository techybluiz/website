export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  thumbnail: string
  overview: string
  problem: string
  context: string
  duration: string
  persona: {
    name: string
    age: number
    occupation: string
    goals: string[]
    painPoints: string[]
    quote: string
    image: string
  }
  research: {
    methods: string[]
    insights: string[]
  }
  wireframes: string[]
  finalDesigns: string[]
  sections?: {
    title: string
    description: string
    images: string[]
  }[]
  decisions: {
    title: string
    description: string
  }[]
}

export const projects: Project[] = [
  {
    id: "archiplace",
    title: "ArchiPlace",
    subtitle: "Landing page para imobiliária e arquitetura",
    category: "Landing Page",
    thumbnail: "/ArchiPlace/home_archiPlace.png",
    duration: "2 Semanas",
    overview: "O ArchiPlace é um estudo de interface focado em real estate e arquitetura. O objetivo foi criar uma landing page que transmita sofisticação e clareza, facilitando a navegação de usuários que buscam imóveis de alto padrão.",
    problem: "Plataformas imobiliárias costumam ser visualmente poluídas, dificultando a visualização rápida das propriedades e gerando uma experiência de busca cansativa.",
    context: "Este projeto foi desenvolvido individualmente como um exercício prático de UI Design para o meu portfólio, focando em hierarquia visual, tipografia e composição de grids para o mercado imobiliário.",
    persona: {
      name: "Marina Costa",
      age: 32,
      occupation: "Arquiteta",
      goals: [
        "Encontrar referências visuais de forma rápida",
        "Visualizar imóveis com fotos de alta qualidade",
        "Navegar em uma interface limpa e intuitiva"
      ],
      painPoints: [
        "Sites com excesso de anúncios e pop-ups",
        "Dificuldade em filtrar informações essenciais",
        "Estética datada que não transmite confiança"
      ],
      quote: "Eu valorizo a estética e a clareza; se um site é confuso, eu desisto da busca em poucos segundos.",
      image: "/Personas/persona_archiPlace.jpg"
    },
    research: {
      methods: [
        "Benchmark de sites de arquitetura e real estate",
        "Análise visual de marcas premium",
        "Validação informal de layout com colegas de curso"
      ],
      insights: [
        "O uso de espaços em branco aumenta a percepção de valor da marca",
        "Imagens grandes e de alta resolução são essenciais neste setor",
        "Uma hierarquia clara facilita a escaneabilidade da página"
      ]
    },
    wireframes: [
      "/ArchiPlace/wireframe_low.png",
      "/ArchiPlace/wireframe_low2.png"
    ],
    finalDesigns: [
      "/ArchiPlace/mockup_archiplace.png",
      "/ArchiPlace/home.png",
      "/ArchiPlace/home2.png",
      "/ArchiPlace/home3.png",
      "/ArchiPlace/home4.png"
    ],
    decisions: [
      {
        title: "Minimalismo Visual",
        description: "Optei por uma interface limpa para que o conteúdo visual (fotos dos imóveis) fosse o protagonista."
      },
      {
        title: "Tipografia Elegante",
        description: "Escolha de fontes que equilibram modernidade e sofisticação, reforçando o posicionamento premium."
      }
    ]
  },
  {
    id: "volare",
    title: "Volare",
    subtitle: "Plataforma de passagens aéreas",
    category: "UX/UI Design",
    thumbnail: "/volare/capa.webp",
    duration: "4 Semanas",
    overview: "A Volare é um conceito de plataforma digital projetado para simplificar a busca e compra de passagens aéreas, priorizando a transparência e a facilidade de uso.",
    problem: "Reservar passagens aéreas frequentemente envolve lidar com interfaces poluídas e fluxos de compra cansativos. O excesso de informações irrelevantes, taxas que surgem apenas no checkout e a falta de clareza nos preços geram desconfiança e fadiga visual no usuário.",
    context: "Este é um projeto conceitual desenvolvido individualmente para fins de estudo e aprimoramento em UX/UI Design. O objetivo foi explorar soluções visuais que priorizem a transparência e a fluidez, removendo barreiras cognitivas comuns em plataformas de reserva de voos.",
    persona: {
      name: "Ana Souza",
      age: 29,
      occupation: "Designer Freelancer",
      goals: [
        "Encontrar voos rapidamente sem taxas ocultas",
        "Comparar preços de forma clara e direta",
        "Finalizar a compra em poucos passos no mobile"
      ],
      painPoints: [
        "Taxas surpresas no final do checkout",
        "Excesso de pop-ups oferecendo serviços extras",
        "Interface confusa em dispositivos móveis"
      ],
      quote: "Eu viajo com frequência a trabalho e só quero um processo honesto, sem truques ou passos desnecessários.",
      image: "/placeholder-user.jpg"
    },
    research: {
      methods: [
        "Análise competitiva de aplicativos de viagem",
        "Entrevistas informais com 5 usuários frequentes",
        "Mapeamento de fluxo de usuário para identificar gargalos"
      ],
      insights: [
        "Usuários preferem ver o preço total (com taxas) desde a primeira etapa",
        "A seleção de assentos é muitas vezes o ponto de maior desistência",
        "Uma interface 'limpa' transmite mais segurança durante o pagamento"
      ]
    },
    wireframes: [
      "/volare/wireframe_mobile (1).png",
      "/volare/wireframe_mobile (2).png",
      "/volare/wireframe_mobile (3).png",
      "/volare/wireframe_volare.png"
    ],
    finalDesigns: [
      "/volare/home_desktop.png",
      "/volare/home_mobile.png",
      "/volare/services_desktop.png",
      "/volare/about_volare_desktop.png",
      "/volare/footer_desktop.png"
    ],
    sections: [
      {
        title: "Experiência Desktop",
        description: "Layout adaptado para telas grandes, com foco em clareza de informações e fluxos de navegação intuitivos.",
        images: [
          "/volare/home_desktop.png",
          "/volare/services_desktop.png",
          "/volare/about_volare_desktop.png",
          "/volare/footer_desktop.png"
        ]
      },
      {
        title: "Mobile First",
        description: "Priorização da experiência móvel para usuários que buscam passagens de forma rápida e prática.",
        images: [
          "/volare/home_mobile.png"
        ]
      }
    ],
    decisions: [
      {
        title: "Transparência de Preços",
        description: "Implementação da exibição do valor final logo na busca inicial, evitando surpresas negativas."
      },
      {
        title: "Fluxo Linear",
        description: "Organização das etapas de compra de forma linear e progressiva, removendo distrações desnecessárias."
      }
    ]
  },
  {
    id: "newsflow",
    title: "NewsFlow",
    subtitle: "Agregador de notícias focado em bem-estar",
    category: "Mobile App",
    thumbnail: "/newsflow/home.png",
    duration: "5 Semanas",
    overview: "O NewsFlow é um estudo de aplicativo voltado para o consumo intencional de notícias, combatendo a sobrecarga de informações através de uma interface calma e curadoria inteligente.",
    problem: "O excesso de notificações e o design focado em atenção (doomscrolling) tornam o consumo de notícias um processo ansioso e fragmentado.",
    context: "Projeto desenvolvido individualmente como parte dos meus estudos de Product Design, explorando como o design pode auxiliar no bem-estar digital e na leitura profunda.",
    persona: {
      name: "Ricardo Oliveira",
      age: 45,
      occupation: "Jornalista",
      goals: [
        "Ler notícias sem ser bombardeado por anúncios",
        "Acessar conteúdos de qualidade de forma organizada",
        "Ter um momento de leitura focado no início do dia"
      ],
      painPoints: [
        "Excesso de notificações irrelevantes",
        "Layouts de sites de notícias poluídos e difíceis de ler",
        "Falta de profundidade nos algoritmos de sugestão"
      ],
      quote: "Eu preciso de informação de qualidade e contexto, não de manchetes feitas apenas para gerar cliques.",
      image: "/Personas/persona_newsFlow.jpg"
    },
    research: {
      methods: [
        "Estudo de princípios de 'Mindful Design'",
        "Entrevistas informais com 3 usuários potenciais",
        "Benchmarking de aplicativos de leitura e meditação"
      ],
      insights: [
        "Cores frias e tipografia serifada auxiliam na concentração",
        "A possibilidade de 'silenciar' o app por períodos ajuda no foco",
        "Resumos inteligentes facilitam a decisão de leitura profunda"
      ]
    },
    wireframes: [
      "/newsflow/login.png",
      "/newsflow/register.png",
      "/newsflow/Comunidades - config.png"
    ],
    finalDesigns: [
      "/newsflow/home.png",
      "/newsflow/page2.png",
      "/newsflow/page3.png",
      "/newsflow/comunity1.png",
      "/newsflow/chat_comunity.png",
      "/newsflow/profile.png"
    ],
    sections: [
      {
        title: "Artigos & Leitura",
        description: "Foco total na legibilidade e na ausência de distrações visuais.",
        images: [
          "/newsflow/home.png",
          "/newsflow/page2.png",
          "/newsflow/page3.png",
          "/newsflow/Article view.png"
        ]
      },
      {
        title: "Comunidades",
        description: "Espaços moderados para discussão de temas específicos.",
        images: [
          "/newsflow/comunity1.png",
          "/newsflow/comunity2.png",
          "/newsflow/comunity3.png",
          "/newsflow/comunity4.png",
          "/newsflow/chat_comunity.png"
        ]
      },
      {
        title: "Perfil & Configurações",
        description: "Interface intuitiva para gerenciar preferências de leitura e bem-estar.",
        images: [
          "/newsflow/profile.png"
        ]
      }
    ],
    decisions: [
      {
        title: "Foco na Legibilidade",
        description: "Escolha de fontes e contrastes otimizados para longos períodos de leitura no mobile."
      },
      {
        title: "Curadoria Humana",
        description: "Incentivo a fluxos de notícias curados por pessoas, em vez de apenas algoritmos de engajamento."
      }
    ]
  },
  {
    id: "starbucks",
    title: "Starbucks App",
    subtitle: "Estudo de customização e fidelidade",
    category: "Mobile App",
    thumbnail: "/Starbucks/capa_star.png",
    duration: "3 Semanas",
    overview: "Redesign conceitual do fluxo de pedidos do Starbucks, focado em tornar a customização de bebidas mais visual e intuitiva.",
    problem: "A customização de bebidas no app atual pode ser complexa devido ao excesso de opções apresentadas apenas em listas de texto.",
    context: "Projeto individual de estudo para praticar micro-interações e design visual aplicado a uma interface de alta complexidade de opções.",
    persona: {
      name: "Beatriz Santos",
      age: 24,
      occupation: "Estudante",
      goals: [
        "Montar seu café personalizado de forma visual",
        "Acompanhar seus pontos de fidelidade claramente",
        "Pedir rapidamente enquanto se desloca"
      ],
      painPoints: [
        "Dificuldade em visualizar como a bebida será montada",
        "Muitos passos para adicionar itens simples",
        "Interface de recompensas pouco intuitiva"
      ],
      quote: "Eu adoro personalizar meu pedido, mas o app atual faz com que isso pareça uma tarefa difícil.",
      image: "/Personas/persona_starbucks.jpg"
    },
    research: {
      methods: [
        "Observação de jornada de compra em loja física",
        "Mapeamento de fluxo de customização atual",
        "Validação informal com amigos usuários do app"
      ],
      insights: [
        "Representação visual dos ingredientes ajuda na tomada de decisão",
        "Acesso rápido aos favoritos é a funcionalidade mais desejada",
        "Feedback tátil e visual ao adicionar itens aumenta a confiança no pedido"
      ]
    },
    wireframes: [
      "/Starbucks/login_starbucks.png"
    ],
    finalDesigns: [
      "/Starbucks/home.png",
      "/Starbucks/drinks.png",
      "/Starbucks/profile.png",
      "/Starbucks/checkout.png",
      "/Starbucks/location.png"
    ],
    sections: [
      {
        title: "Bebidas & Customização",
        description: "Visualização direta dos ingredientes e opções de customização para cada bebida.",
        images: [
          "/Starbucks/drinks.png",
          "/Starbucks/drick_maple_1.png",
          "/Starbucks/drick_maple_2.png",
          "/Starbucks/drink_choco1.png",
          "/Starbucks/drink_choco2.png",
          "/Starbucks/drink_strawberry1.png",
          "/Starbucks/drink_strawberry2.png"
        ]
      },
      {
        title: "Checkout & Localização",
        description: "Fluxo de pagamento simplificado e integração com GPS para encontrar lojas próximas.",
        images: [
          "/Starbucks/checkout.png",
          "/Starbucks/location.png",
          "/Starbucks/search_location.png"
        ]
      },
      {
        title: "Perfil & Fidelidade",
        description: "Gestão de pontos e recompensas de forma clara e acessível.",
        images: [
          "/Starbucks/profile.png"
        ]
      }
    ],
    decisions: [
      {
        title: "Customização em Camadas",
        description: "Interface que mostra a construção da bebida conforme o usuário adiciona ingredientes."
      }
    ]
  },
  {
    id: "woofle",
    title: "Woofle",
    subtitle: "Plataforma conceitual para pets",
    category: "UI Design",
    thumbnail: "/Woofle/Desktop - 1 (3).png",
    duration: "3 Semanas",
    overview: "O Woofle é um projeto de interface para uma plataforma que centraliza serviços e informações para donos de animais de estimação.",
    problem: "Informações sobre cuidados e serviços pet costumam estar dispersas, dificultando a gestão da saúde do animal.",
    context: "Estudo individual focado em criar uma linguagem visual amigável e uma arquitetura de informação centralizada para o nicho pet tech.",
    persona: {
      name: "Juliana Lima",
      age: 30,
      occupation: "Veterinária",
      goals: [
        "Organizar o histórico de saúde do seu pet",
        "Encontrar serviços locais com boas avaliações",
        "Conectar-se com outros donos de animais"
      ],
      painPoints: [
        "Esquece datas de vacinas e vermifugação",
        "Dificuldade em encontrar passeadores confiáveis",
        "Interfaces de apps pet costumam ser pouco atraentes"
      ],
      quote: "Meus animais são minha prioridade, quero um lugar onde eu possa gerenciar tudo de forma simples.",
      image: "/Personas/persona_woofle.jpg"
    },
    research: {
      methods: [
        "Análise de mercado de Pet Tech",
        "Moodboarding para definição visual",
        "Arquitetura de informação via Card Sorting informal"
      ],
      insights: [
        "Cores vibrantes e formas arredondadas transmitem acolhimento",
        "Lembretes são a funcionalidade 'core' para usuários de saúde pet",
        "Uma rede social integrada aumenta o tempo de uso da plataforma"
      ]
    },
    wireframes: [
      "/Woofle/Group 9.png"
    ],
    finalDesigns: [
      "/Woofle/Group 7.png",
      "/Woofle/Frame 2.png"
    ],
    decisions: [
      {
        title: "Identidade Visual Lúdica",
        description: "Uso de elements orgânicos para criar uma conexão emocional com o tema."
      }
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}
