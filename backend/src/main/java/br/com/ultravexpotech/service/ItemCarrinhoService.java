package br.com.ultravexpotech.service;

import br.com.ultravexpotech.repository.ItemCarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ItemCarrinhoService {

    @Autowired
    private ItemCarrinhoRepository itemCarrinhoRepository;

    // função para deletar um item direto pelo ID dele
    @Transactional
    public void removerItem(Integer idItem) {
        itemCarrinhoRepository.deleteById(idItem);
    }

    // função para alterar a quantidade
    @Transactional
    public void alterarQuantidade(Integer idItem, Integer novaQuantidade) {
        itemCarrinhoRepository.findById(idItem).ifPresent(item -> {
            item.setQuantidade(novaQuantidade);
            itemCarrinhoRepository.save(item); // Atualiza no banco
        });
    }
}