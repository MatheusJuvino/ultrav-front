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

        produtoRepository.save(new Produto(null,
            "Wayfarer Classic", 699.0, "Sol", true,
            "Icone atemporal. Armacao acetato, protecao UV400.",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80"));
        produtoRepository.save(new Produto(null,
            "Holbrook Titanium", 1299.0, "Grau", true,
            "Armacao ultraleve em titanio. Ideal para uso diario.",
            "https://images.unsplash.com/photo-1556306510-31ca5e25f1bb?w=800&q=80"));
        produtoRepository.save(new Produto(null,
            "Medusa Luxe", 2199.0, "Armacao", true,
            "Design italiano exclusivo. Detalhes dourados.",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"));
        produtoRepository.save(new Produto(null,
            "Clubmaster Steel", 849.0, "Sol", false,
            "Estilo retro inconfundivel em aco inox.",
            "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80"));
        produtoRepository.save(new Produto(null,
            "Precision Flex", 979.0, "Grau", false,
            "Tecnologia flexivel para quem tem vida ativa.",
            "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80"));
        produtoRepository.save(new Produto(null,
            "GV Rose Gold", 1899.0, "Armacao", true,
            "Sofisticacao em ouro rose. Refinamento absoluto.",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80"));

        System.out.println("[DataLoader] Produtos iniciais carregados.");
    }
}
