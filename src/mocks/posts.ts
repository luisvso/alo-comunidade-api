export type PostStatus = "Aberto" | "Em Andamento" | "Resolvido";

export interface MockPost {
  id: number;
  title: string;
  description: string;
  image: string;
  location: {
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number?: string;
  };
  status: PostStatus;
  categoria: string;
  createdAt: string;
  author: {
    id: number;
    name: string;
  };
}

export const mockPosts: MockPost[] = [
  {
    id: 1,
    title: "Buraco na calçada após chuvas",
    description:
      "Um grande buraco se abriu na calçada em frente ao mercado central após as fortes chuvas da semana passada. Pedestres estão desviando pela pista, colocando-se em risco.",
    image: "https://picsum.photos/seed/post1/800/600",
    location: {
      state: "Amazonas",
      city: "Manaus",
      neighborhood:"Centro",
      street: "Rua Guilherme Moreira",
      number: "142",
    },
    status: "Aberto",
    categoria: "Infraestrutura",
    createdAt: "2026-05-10T08:30:00.000Z",
    author: { id: 1, name: "Carlos Souza" },
  },
  {
    id: 2,
    title: "Iluminação pública apagada há duas semanas",
    description:
      "Quatro postes consecutivos estão sem luz no trecho entre a escola municipal e a UBS do bairro. À noite a situação é de total escuridão, favorecendo assaltos.",
    image: "https://picsum.photos/seed/post2/800/600",
    location: {
      state: "Amazonas",
      city: "Manaus",
      neighborhood:"Adrianópolis",
      street: "Avenida Mário Ypiranga",
      number: "890",
    },
    status: "Em Andamento",
    categoria: "Iluminação Pública",
    createdAt: "2026-05-12T14:15:00.000Z",
    author: { id: 2, name: "Fernanda Lima" },
  },
  {
    id: 3,
    title: "Acúmulo de lixo na beira do igarapé",
    description:
      "Há um ponto de descarte irregular de lixo crescendo às margens do igarapé do Mindu. O mau cheiro já atinge as residências próximas e há risco de contaminação da água.",
    image: "https://picsum.photos/seed/post3/800/600",
    location: {
      state: "Amazonas",
      city: "Manaus",
      neighborhood:"Parque Dez de Novembro",
      street: "Rua Pará",
    },
    status: "Aberto",
    categoria: "Limpeza Urbana",
    createdAt: "2026-05-14T09:00:00.000Z",
    author: { id: 3, name: "Rafael Andrade" },
  },
  {
    id: 4,
    title: "Vazamento de água na rua principal",
    description:
      "Um cano rompido está desperdiçando água há mais de cinco dias. O vazamento já formou uma poça que ocupa metade da via, dificultando a passagem de veículos e pedestres.",
    image: "https://picsum.photos/seed/post4/800/600",
    location: {
      state: "Amazonas",
      city: "Manaus",
      neighborhood:"Compensa",
      street: "Rua Jutaí",
      number: "55",
    },
    status: "Resolvido",
    categoria: "Saneamento",
    createdAt: "2026-05-01T11:45:00.000Z",
    author: { id: 4, name: "Ana Paula Ferreira" },
  },
  {
    id: 5,
    title: "Árvore caída bloqueando calçada",
    description:
      "Uma árvore de grande porte caiu durante a tempestade de quinta-feira e está bloqueando completamente a calçada e parte da rua. Moradores com mobilidade reduzida estão sendo prejudicados.",
    image: "https://picsum.photos/seed/post5/800/600",
    location: {
      state: "Bahia",
      city: "Salvador",
      neighborhood:"Barra",
      street: "Avenida Sete de Setembro",
      number: "310",
    },
    status: "Em Andamento",
    categoria: "Áreas Verdes",
    createdAt: "2026-05-16T07:20:00.000Z",
    author: { id: 5, name: "Juliana Costa" },
  },
  {
    id: 6,
    title: "Semáforo com defeito há três dias",
    description:
      "O semáforo do cruzamento está piscando em amarelo continuamente, causando congestionamento nos horários de pico e risco de acidentes. Já houve duas colisões leves.",
    image: "https://picsum.photos/seed/post6/800/600",
    location: {
      state: "Bahia",
      city: "Salvador",
      neighborhood:"Pituba",
      street: "Rua Ceará",
      number: "480",
    },
    status: "Aberto",
    categoria: "Mobilidade Urbana",
    createdAt: "2026-05-18T16:50:00.000Z",
    author: { id: 6, name: "Marcos Oliveira" },
  },
  {
    id: 7,
    title: "Poluição sonora de estabelecimento comercial",
    description:
      "Um bar instalado no bairro funciona com som alto até as 3h da manhã em dias de semana, impedindo o descanso dos moradores. Reclamações informais foram ignoradas pelos proprietários.",
    image: "https://picsum.photos/seed/post7/800/600",
    location: {
      state: "Bahia",
      city: "Feira de Santana",
      neighborhood:"Kalilândia",
      street: "Rua Orlando Leite",
      number: "77",
    },
    status: "Aberto",
    categoria: "Poluição Sonora",
    createdAt: "2026-05-19T22:10:00.000Z",
    author: { id: 7, name: "Beatriz Nunes" },
  },
  {
    id: 8,
    title: "Calçada inacessível para cadeirantes",
    description:
      "A reforma da calçada foi concluída sem respeitar as normas de acessibilidade. Não há rampas de acesso e o piso tátil foi instalado de forma incorreta, prejudicando pessoas com deficiência.",
    image: "https://picsum.photos/seed/post8/800/600",
    location: {
      state: "São Paulo",
      city: "São Paulo",
      neighborhood:"Pinheiros",
      street: "Rua dos Pinheiros",
      number: "1200",
    },
    status: "Em Andamento",
    categoria: "Acessibilidade",
    createdAt: "2026-05-13T10:30:00.000Z",
    author: { id: 8, name: "Diego Mendes" },
  },
  {
    id: 9,
    title: "Esgoto a céu aberto na rua",
    description:
      "Um coletor de esgoto transbordou e o efluente está escorrendo pela rua há dias. O odor é insuportável e há risco real de doenças para crianças que frequentam a escola no quarteirão.",
    image: "https://picsum.photos/seed/post9/800/600",
    location: {
      state: "São Paulo",
      city: "São Paulo",
      neighborhood:"Cidade Tiradentes",
      street: "Estrada do Iguatemi",
      number: "3400",
    },
    status: "Aberto",
    categoria: "Saneamento",
    createdAt: "2026-05-20T08:00:00.000Z",
    author: { id: 9, name: "Patrícia Rocha" },
  },
  {
    id: 10,
    title: "Playground da praça em estado de abandono",
    description:
      "Os equipamentos do parquinho estão enferrujados e com partes quebradas, oferecendo risco de cortes e quedas para as crianças. A tinta descascando nas estruturas metálicas é outro ponto de preocupação.",
    image: "https://picsum.photos/seed/post10/800/600",
    location: {
      state: "São Paulo",
      city: "Campinas",
      neighborhood:"Cambuí",
      street: "Rua Alagoas",
      number: "620",
    },
    status: "Resolvido",
    categoria: "Espaços Públicos",
    createdAt: "2026-04-28T15:00:00.000Z",
    author: { id: 10, name: "Lucas Barbosa" },
  },
];
