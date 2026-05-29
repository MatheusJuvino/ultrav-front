package br.com.ultravexpotech;

import br.com.ultravexpotech.model.Produto;
import br.com.ultravexpotech.repository.ProdutoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProdutoRepository produtoRepository;

    public DataLoader(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @Override
    public void run(String... args) {
        if (produtoRepository.count() > 0) return;

        produtoRepository.save(new Produto(null,
            "Wayfarer Classic", 699.0, "Sol", true,
            "Icone atemporal. Armacao acetato, protecao UV400.", "/imagens/wayfarer.jpg"));
        produtoRepository.save(new Produto(null,
            "Holbrook Titanium", 1299.0, "Grau", true,
            "Armacao ultraleve em titanio. Ideal para uso diario.", "/imagens/holbrook.jpg"));
        produtoRepository.save(new Produto(null,
            "Medusa Luxe", 2199.0, "Armacao", true,
            "Design italiano exclusivo. Detalhes dourados.", "/imagens/medusa.jpg"));
        produtoRepository.save(new Produto(null,
            "Clubmaster Steel", 849.0, "Sol", false,
            "Estilo retro inconfundivel em aco inox.", "/imagens/clubmaster.jpg"));
        produtoRepository.save(new Produto(null,
            "Precision Flex", 979.0, "Grau", false,
            "Tecnologia flexivel para quem tem vida ativa.", "/imagens/precision.jpg"));
        produtoRepository.save(new Produto(null,
            "GV Rose Gold", 1899.0, "Armacao", true,
            "Sofisticacao em ouro rose. Refinamento absoluto.", "/imagens/rosegold.jpg"));

        System.out.println("[DataLoader] Produtos iniciais carregados.");
    }
}
