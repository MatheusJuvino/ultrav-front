# Ultra V — Ótica Premium

Loja virtual de óculos. Frontend em **Next.js 16 + TypeScript** e backend em
**Java 17 + Spring Boot 4**. Projeto da disciplina Expotech 2026.

---

## Como rodar (1 clique no Windows)

### Pré-requisitos (uma vez só)

| Ferramenta | Onde baixar |
|---|---|
| Node.js 18+   | https://nodejs.org   |
| JDK 17+       | https://adoptium.net |

> **NÃO precisa de MySQL nem nenhum banco instalado.** O projeto já vem
> com banco H2 em memória — funciona out of the box.

### Rodar

**Duplo-clique em `start.bat`.**

Pronto. Em alguns segundos:
- Backend sobe em `http://localhost:8080`
- Frontend sobe em `http://localhost:3000`
- Tudo aparece numa janela só com prefixos `[BACK]` e `[FRONT]`

Abra **http://localhost:3000** no navegador.

Para parar: `Ctrl+C` na janela.

---

## Como rodar (Linux / macOS)

```bash
npm install
npm start
```

(Cobre tanto a instalação do front quanto o `mvnw` do backend.)

---

## Banco de dados

Por padrão usa **H2 em memória** — zero instalação. Os dados ficam só
enquanto o backend está rodando, e o `DataLoader` semeia 6 produtos
toda vez que você sobe o servidor.

Console do H2 (opcional): http://localhost:8080/h2-console
JDBC URL: `jdbc:h2:mem:ultravdb` · usuário `sa` · senha vazia.

### Quero usar MySQL ao invés de H2

Edite `backend/src/main/resources/application.properties`:

1. Comente as 7 linhas do bloco H2
2. Descomente as 4 linhas do bloco MySQL
3. Ajuste a senha (`spring.datasource.password`) se necessário
4. (Opcional) Rode o script `database/ultrav.sql` no seu MySQL — ou
   simplesmente suba o backend que o Hibernate cria as tabelas
   sozinho e o `DataLoader` insere os produtos.

---

## Estrutura

```
ultrav-front/
├── frontend/                 # Next.js (App Router) + TypeScript
├── backend/                  # Spring Boot 4 + JPA + H2 (padrão) / MySQL
├── database/ultrav.sql       # Script MySQL opcional
├── start.bat                 # Sobe back + front num clique (Windows)
└── package.json              # Orquestra back + front com concurrently
```

---

## Endpoints da API

- `GET  /produtos` — lista produtos
- `GET  /produto/{id}` — busca por id
- `GET  /categoria/{categoria}` — filtra por categoria
- `GET  /pesquisa/{nome}` — busca por nome
- `POST /cadastro` / `POST /login` — usuários
- `POST /adm/cadastro` / `POST /adm/login` — administradores
- `POST /api/carrinho/{idCliente}/adicionar` — carrinho
- `POST /pagamento/criar-preferencia` — checkout Mercado Pago

---

## Solução de problemas

| Sintoma | Solução |
|---|---|
| `start.bat` reclama de Java | Instale o JDK 17+ em https://adoptium.net |
| `start.bat` reclama de npm | Instale o Node.js 18+ em https://nodejs.org |
| Front mostra produtos sem o backend | É proposital: catálogo local de fallback |
| Quero usar MySQL | Veja a seção "Banco de dados" acima |
