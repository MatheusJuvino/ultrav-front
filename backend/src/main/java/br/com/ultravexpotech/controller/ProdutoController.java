package br.com.ultravexpotech.controller;

import br.com.ultravexpotech.model.Produto;
import br.com.ultravexpotech.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class ProdutoController {

    @Autowired
    //
    private ProdutoRepository repository;

    //listar todos os produtos
    @GetMapping("/produtos")
    public List<Produto> listar() {
        return repository.findAll();
    }

  //bruscar por id
    @GetMapping("/produto/{id}")
    public Produto buscarPorId(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

  //buscar por categoria
    @GetMapping("/categoria/{categoria}")
    public List<Produto> buscarCategoria(
            @PathVariable String categoria
    ) {
        return repository.findByCategoria(categoria);
    }

  //pesquisar produto
    @GetMapping("/pesquisa/{nome}")
    public List<Produto> pesquisar(
            @PathVariable String nome
    ) {
        return repository.findByNomeContainingIgnoreCase(nome);
    }
}