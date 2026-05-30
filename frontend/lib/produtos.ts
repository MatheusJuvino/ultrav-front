export type Produto = {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  parcelas: number;
  badge: string;
  categoria: string;
  descricao: string;
  detalhes: string[];
  cor: string;
  imagemUrl?: string;
};

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Wayfarer Classic",
    marca: "Ray-Ban",
    preco: 699,
    parcelas: 6,
    badge: "Mais vendido",
    categoria: "Sol",
    descricao: "Ícone atemporal. Armação acetato, proteção UV400, disponível em 8 cores.",
    detalhes: ["Proteção UV400", "Armação em acetato", "Lente mineral", "Disponível em 8 cores", "Garantia de 12 meses"],
    cor: "#2c1f0e",
    imagemUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
  },
  {
    id: 2,
    nome: "Holbrook Titanium",
    marca: "Oakley",
    preco: 1299,
    parcelas: 12,
    badge: "Novo",
    categoria: "Grau",
    descricao: "Armação ultraleve em titânio. Ideal para uso diário com grau multifocal.",
    detalhes: ["Titânio ultraleve", "Compatível com multifocal", "Design ergonômico", "Ajuste personalizado", "Garantia de 24 meses"],
    cor: "#4a3520",
    imagemUrl: "https://images.unsplash.com/photo-1556306510-31ca5e25f1bb?w=800&q=80",
  },
  {
    id: 3,
    nome: "Medusa Luxe",
    marca: "Versace",
    preco: 2199,
    parcelas: 12,
    badge: "Premium",
    categoria: "Armação",
    descricao: "Design italiano exclusivo. Detalhes dourados e acetato de alta resistência.",
    detalhes: ["Design italiano", "Detalhes em ouro 18k", "Acetato premium", "Edição limitada", "Certificado de autenticidade"],
    cor: "#b8914a",
    imagemUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
  },
  {
    id: 4,
    nome: "Clubmaster Steel",
    marca: "Ray-Ban",
    preco: 849,
    parcelas: 8,
    badge: "Clássico",
    categoria: "Sol",
    descricao: "O estilo retrô inconfundível em aço inox. Elegância para o dia a dia.",
    detalhes: ["Aço inox", "Lente policarbonato", "UV400", "Estilo retrô", "Garantia de 12 meses"],
    cor: "#2c1f0e",
    imagemUrl: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
  },
  {
    id: 5,
    nome: "Precision Flex",
    marca: "Oakley",
    preco: 979,
    parcelas: 10,
    badge: "Esportivo",
    categoria: "Grau",
    descricao: "Tecnologia flexível para quem tem vida ativa. Resistente e confortável.",
    detalhes: ["Material flexível", "Resistente a impactos", "Leve e confortável", "Para esportes", "Garantia de 18 meses"],
    cor: "#4a3520",
    imagemUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
  },
  {
    id: 6,
    nome: "GV Rose Gold",
    marca: "Giorgio Armani",
    preco: 1899,
    parcelas: 12,
    badge: "Luxo",
    categoria: "Armação",
    descricao: "Sofisticação em ouro rosê. Para quem não abre mão do refinamento.",
    detalhes: ["Ouro rosê 18k", "Acetato italiano", "Design exclusivo", "Peça numerada", "Caixa premium"],
    cor: "#b8914a",
    imagemUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80",
  },
];
