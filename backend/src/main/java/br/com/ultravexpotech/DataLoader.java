package br.com.ultravexpotech;

import br.com.ultravexpotech.model.Administrador;
import br.com.ultravexpotech.model.Produto;
import br.com.ultravexpotech.repository.AdministradorRepository;
import br.com.ultravexpotech.repository.ProdutoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProdutoRepository produtoRepository;
    private final AdministradorRepository administradorRepository;

    public DataLoader(ProdutoRepository produtoRepository, AdministradorRepository administradorRepository) {
        this.produtoRepository = produtoRepository;
        this.administradorRepository = administradorRepository;
    }

    @Override
    public void run(String... args) {
        seedAdmin();
        seedProdutos();
    }

    private void seedAdmin() {
        if (administradorRepository.count() > 0) return;
        Administrador adm = new Administrador();
        adm.setNome("Administrador Ultra V");
        adm.setUsuario("admin");
        adm.setEmail("admin@ultrav.com");
        adm.setSenha("admin123");
        adm.setNivelAcesso("MASTER");
        administradorRepository.save(adm);
        System.out.println("[DataLoader] Admin padrao criado -> usuario: admin | senha: admin123");
    }

    private void seedProdutos() {
        if (produtoRepository.count() > 0) return;

        // ===== SOL (4) =====
        save("Wayfarer Classic", 699.0, "Sol", true,
            "Icone atemporal. Armacao acetato, protecao UV400.",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80");
        save("Aviator Gold", 1199.0, "Sol", true,
            "O icone aviador em metal dourado. Lentes G-15 originais.",
            "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80");
        save("Cat-Eye Vintage", 1499.0, "Sol", true,
            "Formato felino atemporal. Acetato italiano com detalhes em ouro.",
            "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80");
        save("Pilot Mirror", 899.0, "Sol", false,
            "Lente espelhada e armacao leve em metal. Estilo aviador moderno.",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80");

        // ===== GRAU (4) =====
        save("Round Vintage", 799.0, "Grau", true,
            "Armacao redonda em metal escovado. Conforto para uso prolongado.",
            "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80");
        save("Holbrook Titanium", 1299.0, "Grau", true,
            "Armacao ultraleve em titanio. Apenas 12g, ideal para uso diario.",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80");
        save("Square Modern", 749.0, "Grau", false,
            "Linhas geometricas e acabamento fosco. Para o estilo minimalista.",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80");
        save("Precision Flex", 979.0, "Grau", false,
            "Tecnologia flexivel para quem tem vida ativa. Resistente e confortavel.",
            "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80");

        // ===== ARMACAO (4) =====
        save("Medusa Luxe", 2199.0, "Armacao", true,
            "Design italiano exclusivo. Detalhes dourados em acetato premium.",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80");
        save("GV Rose Gold", 1899.0, "Armacao", true,
            "Sofisticacao em ouro rose. Refinamento absoluto.",
            "https://images.unsplash.com/photo-1620207418302-439b387441b0?w=800&q=80");
        save("Octagon Italian", 2499.0, "Armacao", false,
            "Formato octogonal em acetato veneziano. Peca de assinatura.",
            "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=800&q=80");
        save("Acetate Black", 1599.0, "Armacao", false,
            "Acetato preto profundo com hastes em metal escovado.",
            "https://images.unsplash.com/photo-1556015048-4d3aa10df74c?w=800&q=80");

        // ===== ESPORTIVO (4) =====
        save("Radar Performance", 1099.0, "Esportivo", true,
            "Lente Prizm para esportes. Visao otimizada para qualquer terreno.",
            "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?w=800&q=80");
        save("Active Run", 849.0, "Esportivo", false,
            "Ultraleve para corrida e ciclismo. Apenas 18g e nao desliza com suor.",
            "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&q=80");
        save("Crossfit Pro", 999.0, "Esportivo", false,
            "Resistencia militar para treinos intensos. Suporta quedas e suor.",
            "https://images.unsplash.com/photo-1567473810954-507d59716c25?w=800&q=80");
        save("Cycling Edge", 1199.0, "Esportivo", true,
            "Lentes ImpactRX para ciclistas. Aerodinamica e ventilacao otimizadas.",
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80");

        // ===== PREMIUM (4) =====
        save("Diamond Edition", 4999.0, "Premium", true,
            "Detalhes em diamante natural e ouro 18k. Limitada a 100 pecas no mundo.",
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80");
        save("Onyx Luxe", 3899.0, "Premium", true,
            "Acetato preto onyx polido com hastes em titanio escovado.",
            "https://images.unsplash.com/photo-1589642380614-4a8c2147b857?w=800&q=80");
        save("Royal Crystal", 5499.0, "Premium", false,
            "Cristais Swarovski e acabamento em ouro rose.",
            "https://images.unsplash.com/photo-1592492152545-9695d3f473f4?w=800&q=80");
        save("Master Limited", 4299.0, "Premium", false,
            "Engenharia dinamarquesa em titanio puro. Sem parafusos, sem soldas.",
            "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=800&q=80");

        System.out.println("[DataLoader] " + produtoRepository.count() + " produtos carregados.");
    }

    private void save(String nome, Double preco, String categoria, Boolean destaque, String descricao, String imagemUrl) {
        produtoRepository.save(new Produto(null, nome, preco, categoria, destaque, descricao, imagemUrl));
    }
}
