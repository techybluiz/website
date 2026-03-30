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
        "Falta organização entre infrairação e informação objetiva",
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
      "/ArchiPlace/wireframe_baixo.png"
    ],
    finalDesigns: [
      "/ArchiPlace/MacBook Air (2022).png",
      "/ArchiPlace/spaces_archiplace.png",
      "/ArchiPlace/Team_archiPlace.png",
      "/ArchiPlace/Group 3.png"
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
    id: "volare",
    title: "Volare",
    subtitle: "Plataforma de viagens",
    category: "E-commerce",
    thumbnail: "/volare/capa.webp",
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
      "/volare/wireframe_volare.png"
    ],
    finalDesigns: [
      "/volare/mockup_volare.webp"
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
    id: "newsflow",
    title: "NewsFlow",
    subtitle: "Agregador de notícias inteligente e focado em bem-estar",
    category: "Mobile App",
    thumbnail: "/newsflow/home.png",
    overview: "O NewsFlow é um agregador de notícias de próxima geração, projetado para combater a sobrecarga de informações e o 'doomscrolling'. Ele oferece uma experiência de leitura personalizada, focada em curadoria inteligente e comunidades de nicho, permitindo que os usuários se mantenham informados sem sacrificar o bem-estar mental.",
    problem: "Em um mundo saturado de informações, os leitores enfrentam dois grandes desafios: o excesso de conteúdo irrelevante (ruído) e a falta de fontes confiáveis centralizadas. Aplicativos atuais muitas vezes priorizam o engajamento através de clickbaits, resultando em uma experiência de leitura fragmentada e cansativa.",
    context: "O projeto surgiu da necessidade de criar um espaço digital onde o consumo de notícias fosse intencional. Ao longo de 8 semanas, desenvolvemos o NewsFlow focando em três pilares: curadoria via IA, design minimalista para leitura profunda e integração de comunidades para discussões saudáveis.",
    persona: {
      name: "Ricardo Oliveira",
      age: 45,
      occupation: "Jornalista e Curador",
      goals: [
        "Filtrar o ruído das redes sociais para encontrar fatos puros",
        "Acompanhar tendências de nicho sem ser bombardeado por anúncios",
        "Ter um espaço para discutir notícias complexas com outros especialistas"
      ],
      painPoints: [
        "Anúncios intrusivos que quebram o fluxo de leitura",
        "Dificuldade em validar a credibilidade de fontes rápidas",
        "Fadiga visual causada por interfaces excessivamente complexas"
      ],
      quote: "Eu preciso de fatos reais e contexto, não de manchetes sensacionalistas feitas para o algoritmo."
    },
    research: {
      methods: [
        "Questionários quantitativos com 100 usuários frequentes",
        "Entrevistas em profundidade com curadores de conteúdo",
        "Benchmarking competitivo com apps como Feedly e Pocket",
        "Testes de usabilidade com protótipos de alta fidelidade"
      ],
      insights: [
        "72% dos usuários sentem-se ansiosos com excesso de notificações",
        "A legibilidade (tipografia e espaçamento) é vital para a retenção",
        "Comunidades moderadas aumentam o tempo de qualidade no app",
        "Sumários rápidos facilitam a decisão de leitura profunda"
      ]
    },
    wireframes: [
      "/newsflow/login.png",
      "/newsflow/register.png",
      "/newsflow/Comunidades - config.png"
    ],
    finalDesigns: [
      "/newsflow/home.png",
      "/newsflow/page2-categories.png",
      "/newsflow/page3-save.png",
      "/newsflow/comunity.png",
      "/newsflow/chat_comunity.png",
      "/newsflow/profile_settings.png"
    ],
    sections: [
      {
        title: "Onboarding & Personalização",
        description: "Uma jornada fluida para entender os interesses do usuário e configurar o algoritmo de curadoria desde o primeiro contato.",
        images: [
          "/newsflow/onboarding1.png",
          "/newsflow/onboarding2.png",
          "/newsflow/onboarding3.png",
          "/newsflow/onboarding4.png"
        ]
      },
      {
        title: "Feed de Notícias & Artigos",
        description: "Interface limpa focada na legibilidade, com sumários inteligentes e sistema de salvamento para leitura posterior.",
        images: [
          "/newsflow/home.png",
          "/newsflow/page2-categories.png",
          "/newsflow/page3-save.png"
        ]
      },
      {
        title: "Comunidades & Discussões",
        description: "Espaços moderados onde usuários podem discutir temas específicos, compartilhar visões e aprofundar conhecimentos.",
        images: [
          "/newsflow/comunity.png",
          "/newsflow/chat_comunity.png",
          "/newsflow/comunity_2.png",
          "/newsflow/comunity_3.png",
          "/newsflow/comunity_4.png",
          "/newsflow/members_chat_comunity.png"
        ]
      }
    ],
    decisions: [
      {
        title: "Foco na Leitura Limpa",
        description: "Interface sem anúncios intrusivos, com tipografia otimizada para longos períodos de leitura, reduzindo a fadiga visual."
      },
      {
        title: "Curadoria por Comunidades",
        description: "Em vez de apenas algoritmos, o app permite que especialistas criem 'fluxos' de notícias curados, humanizando a descoberta."
      },
      {
        title: "Sumários Inteligentes",
        description: "Implementação de resumos para leitura rápida, permitindo que o usuário decida se quer aprofundar no artigo original."
      },
      {
        title: "Espaços de Discussão Saudável",
        description: "Comunidades dedicadas com chat e moderação ativa para evitar polarização tóxica e incentivar o debate de ideias."
      }
    ]
  },
  {
    id: "starbucks",
    title: "Starbucks App",
    subtitle: "Experiência de pedido e fidelidade",
    category: "Mobile App",
    thumbnail: "/Starbucks/capa_star.png",
    overview: "Redesign conceitual do aplicativo Starbucks, focando em simplificar o processo de customização de bebidas e integrar o programa de fidelidade de forma mais fluida.",
    problem: "O processo de customização atual é complexo e muitas vezes resulta em erros no pedido final.",
    context: "Projeto de 6 semanas focado em micro-interações e design emocional para reforçar a identidade da marca no ambiente digital.",
    persona: {
      name: "Beatriz Santos",
      age: 24,
      occupation: "Estudante de Design",
      goals: [
        "Pedir café rapidamente entre as aulas",
        "Customizar suas bebidas favoritas",
        "Acumular estrelas facilmente"
      ],
      painPoints: [
        "Interface confusa para adicionar extras",
        "Demora na atualização do saldo de pontos",
        "Dificuldade em encontrar lojas próximas"
      ],
      quote: "Eu adoro meu café do meu jeito, mas o app atual dificulta muito isso."
    },
    research: {
      methods: [
        "Observação direta em lojas",
        "Teste de guerrilha com usuários do app atual",
        "Mapeamento da jornada do usuário"
      ],
      insights: [
        "Visualização dos ingredientes em camadas ajuda na compreensão da customização",
        "Feedback visual imediato ao adicionar itens aumenta a confiança",
        "Acesso rápido aos pedidos recentes é a funcionalidade mais usada"
      ]
    },
    wireframes: [
      "/Starbucks/login_starbucks.png"
    ],
    finalDesigns: [
      "/Starbucks/mockup_star1.png",
      "/Starbucks/mockup_star2.png",
      "/Starbucks/mockup_star3.png",
      "/Starbucks/home.png",
      "/Starbucks/drinks.png"
    ],
    decisions: [
      {
        title: "Interface baseada em cartões",
        description: "Utilizamos cards para representar os itens do menu, facilitando a navegação com uma mão."
      },
      {
        title: "Feedback tátil e visual",
        description: "Implementamos animações suaves e haptics para confirmar ações de customização, tornando o app mais 'vivo'."
      }
    ]
  },
  {
    id: "woofle",
    title: "Woofle",
    subtitle: "Plataforma para donos de pets",
    category: "Web Platform",
    thumbnail: "/Woofle/Desktop - 1 (3).png",
    overview: "Woofle conecta donos de animais de estimação a serviços locais como pet shops, veterinários e dog walkers, além de oferecer uma rede social para a comunidade pet.",
    problem: "Donos de pets gastam muito tempo procurando serviços confiáveis e gerindo a agenda de saúde de seus animais em diferentes lugares.",
    context: "Criado para unificar a experiência de cuidado animal, facilitando o agendamento e o compartilhamento de experiências entre tutores.",
    persona: {
      name: "Juliana Lima",
      age: 30,
      occupation: "Veterinária",
      goals: [
        "Encontrar passeadores confiáveis para seu cão",
        "Organizar o histórico de vacinas",
        "Conhecer outros donos de Golden Retrievers"
      ],
      painPoints: [
        "Falta de reviews confiáveis de serviços",
        "Esquece datas de vermifugação",
        "Sente falta de uma comunidade local"
      ],
      quote: "Meu cachorro é parte da família, quero o melhor para ele com o mínimo de complicação."
    },
    research: {
      methods: [
        "Entrevistas com 30 tutores de pets",
        "Análise de mercado de pet tech",
        "Prototipagem rápida"
      ],
      insights: [
        "Segurança e confiança são os fatores decisivos na escolha de serviços",
        "Lembretes push são muito valorizados para saúde preventiva",
        "Fotos e vídeos são fundamentais na rede social pet"
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
        title: "Perfil do Pet centralizado",
        description: "Toda a navegação gira em torno do perfil do animal, facilitando o acesso rápido a informações de saúde e serviços."
      }
    ]
  },
  {
    id: "bookclub",
    title: "BookClub",
    subtitle: "Comunidade para leitores vorazes",
    category: "Web Platform",
    thumbnail: "/placeholder.svg",
    overview: "Uma plataforma para organizar clubes de leitura, discutir livros em capítulos e acompanhar o progresso de leitura de forma social.",
    problem: "Clubes de leitura presenciais são difíceis de organizar e plataformas online existentes são datadas ou pouco focadas na discussão profunda.",
    context: "Foco em criar uma experiência de discussão assíncrona que respeite o ritmo de cada leitor.",
    persona: {
      name: "Felipe Mendes",
      age: 22,
      occupation: "Estudante de Letras",
      goals: [
        "Participar de discussões literárias profundas",
        "Organizar suas leituras do ano",
        "Encontrar pessoas com gostos similares"
      ],
      painPoints: [
        "Spoilers em redes sociais",
        "Dificuldade em encontrar grupos de nicho",
        "Interface confusa em apps de leitura"
      ],
      quote: "Ler é solitário, mas discutir o que lemos é o que torna tudo especial."
    },
    research: {
      methods: [
        "Benchmark de plataformas como Goodreads e Skoob",
        "Sessões de co-criação com leitores",
        "User journey mapping"
      ],
      insights: [
        "Controle de spoiler por capítulo é a funcionalidade mais desejada",
        "Gamificação leve incentiva o hábito de leitura",
        "Interface limpa reduz a fadiga visual durante a leitura de comentários"
      ]
    },
    wireframes: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop"
    ],
    finalDesigns: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
    ],
    decisions: [
      {
        title: "Sistema anti-spoiler",
        description: "Implementamos um sistema onde comentários são escondidos baseado no progresso de leitura do usuário."
      }
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}
