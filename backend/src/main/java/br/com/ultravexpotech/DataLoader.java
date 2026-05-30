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
            "Icone atemporal. Armacao acetato preto, protecao UV400.",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80");
        save("Aviator Gold", 1199.0, "Sol", true,
            "O icone aviador em metal dourado. Lentes G-15 originais.",
            "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80");
        save("Cat-Eye Vintage", 1499.0, "Sol", true,
            "Formato felino com armacao branca. Estilo vintage moderno.",
            "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80");
        save("Pilot Mirror", 899.0, "Sol", false,
            "Lente espelhada e armacao branca leve. Estilo aviador moderno.",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80");

        // ===== GRAU (4) =====
        save("Round Vintage", 799.0, "Grau", true,
            "Armacao preta com formato classico. Conforto para uso prolongado.",
            "https://images.unsplash.com/photo-1610555423081-85ec0b8eabac?w=800&q=80");
        save("Holbrook Titanium", 1299.0, "Grau", true,
            "Armacao ultraleve em titanio. Apenas 12g, ideal para uso diario.",
            "https://images.unsplash.com/photo-1771299463101-1ec43c55225b?w=800&q=80");
        save("Square Modern", 749.0, "Grau", false,
            "Linhas geometricas em armacao preta. Para o estilo minimalista.",
            "https://images.unsplash.com/photo-1610136649349-0f646f318053?w=800&q=80");
        save("Precision Flex", 979.0, "Grau", false,
            "Tecnologia flexivel para quem tem vida ativa. Resistente e confortavel.",
            "https://images.unsplash.com/photo-1608539733292-190446b22b83?w=800&q=80");

        // ===== ARMACAO (4) =====
        save("Medusa Luxe", 2199.0, "Armacao", true,
            "Design italiano exclusivo em ouro. Detalhes Medusa autenticos.",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80");
        save("GV Rose Gold", 1899.0, "Armacao", true,
            "Cat-eye em ouro com brilho exclusivo. Sofisticacao absoluta.",
            "https://images.unsplash.com/photo-1768297087466-ff89f85ab180?w=800&q=80");
        save("Octagon Italian", 2499.0, "Armacao", false,
            "Dupla colecao em acetato veneziano. Peca de assinatura.",
            "https://images.unsplash.com/photo-1761896909195-2e3c656b2014?w=800&q=80");
        save("Acetate Black", 1599.0, "Armacao", false,
            "Acetato preto profundo com hastes em metal. Sobriedade absoluta.",
            "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?w=800&q=80");

        // ===== ESPORTIVO (4) =====
        save("Radar Performance", 1099.0, "Esportivo", true,
            "Wayfarer esportivo. Visao otimizada e protecao total.",
            "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80");
        save("Active Run", 849.0, "Esportivo", false,
            "Para corredores. Encaixe firme e visao livre durante o esporte.",
            "https://images.unsplash.com/photo-1752778597898-d76a2cbacc82?w=800&q=80");
        save("Crossfit Pro", 999.0, "Esportivo", false,
            "Resistencia militar para treinos intensos. Suporta quedas e suor.",
            "https://images.unsplash.com/photo-1611222777277-61319d63ca94?w=800&q=80");
        save("Cycling Edge", 1199.0, "Esportivo", true,
            "Especifico para ciclistas. Aerodinamica e protecao lateral.",
            "https://images.unsplash.com/photo-1778385532979-7f6e2b61cdca?w=800&q=80");

        // ===== PREMIUM (4) =====
        save("Diamond Edition", 4999.0, "Premium", true,
            "Detalhes em diamante natural e ouro 18k. Limitada a 100 pecas.",
            "https://images.unsplash.com/photo-1577744486770-020ab432da65?w=800&q=80");
        save("Onyx Luxe", 3899.0, "Premium", true,
            "Edicao em tres acabamentos. Acetato onyx polido, titanio dourado.",
            "https://images.unsplash.com/photo-1758552322632-ba288778c770?w=800&q=80");
        save("Royal Crystal", 5499.0, "Premium", false,
            "Cristais Swarovski em armacao polida. Para ocasioes especiais.",
            "https://images.unsplash.com/photo-1605813808456-26c16c0dfb77?w=800&q=80");
        save("Master Limited", 4299.0, "Premium", false,
            "Edicao em titanio puro com acabamento fosco. Engenharia dinamarquesa.",
            "https://images.unsplash.com/photo-1566421966482-ad8076104d8e?w=800&q=80");

        System.out.println("[DataLoader] " + produtoRepository.count() + " produtos carregados.");
    }

    private void save(String nome, Double preco, String categoria, Boolean destaque, String descricao, String imagemUrl) {
        produtoRepository.save(new Produto(null, nome, preco, categoria, destaque, descricao, imagemUrl));
    }
}
