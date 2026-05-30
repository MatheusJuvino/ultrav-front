# Ultra V — Ótica Premium

Loja virtual de óculos. Frontend em **Next.js 16 + TypeScript** e backend em
**Java 17 + Spring Boot 4 + MySQL**. Projeto da disciplina Expotech 2026.

---

## Como rodar (Windows)

### 1. Instale o necessário (uma vez só)

| Ferramenta | Onde baixar | Observação |
|---|---|---|
| Node.js 18+   | https://nodejs.org              | — |
| JDK 17+       | https://adoptium.net            | — |
| MySQL 8.x     | https://dev.mysql.com/downloads | **senha do `root` = `root`** |

> Se sua senha do MySQL não for `root`, edite o arquivo
> `backend/src/main/resources/application.properties` (linhas
> `spring.datasource.username` / `password`).

### 2. Garanta que o serviço do MySQL está rodando

No Windows: `Win + R` → `services.msc` → procure `MySQL80` (ou similar) → clique direito → Iniciar.

### 3. Dê um duplo-clique em `start.bat`

Pronto. O script vai:

1. Localizar o JDK 17+ na sua máquina automaticamente
2. Subir o backend em `http://localhost:8080` (numa janela)
3. Subir o frontend em `http://localhost:3000` (em outra janela)
4. O Hibernate cria as tabelas e o `DataLoader` insere 6 produtos de exemplo na primeira execução

Aguarde uns 30 segundos as duas janelas terminarem de subir e abra
**http://localhost:3000** no navegador.

Para parar: feche as duas janelas pretas que apareceram.

---

## Como rodar (Linux / macOS)

```bash
# Terminal 1
cd backend && ./mvnw spring-boot:run

# Terminal 2
cd frontend && npm install && npm run dev
```

---

## Estrutura do projeto

```
ultrav-front/
├── frontend/                # Next.js (App Router) + TypeScript
│   ├── app/                 # home, carrinho, contato, produto/[id]
│   ├── components/          # Hero, Products, Navbar, Footer, OculosSVG…
│   └── lib/                 # CarrinhoContext + catálogo local
│
├── backend/                 # Spring Boot 4 + JPA
│   └── src/main/java/br/com/ultravexpotech/
│       ├── controller/      # Produto, Carrinho, Usuario, Admin, Pagamento
│       ├── service/         # Lógica de negócio
│       ├── repository/      # Spring Data JPA
│       ├── model/           # Entidades JPA
│       └── DataLoader.java  # Popula 6 produtos na 1ª execução
│
├── database/
│   └── ultrav.sql           # (Opcional) Cria banco/tabelas/produtos manualmente
│
└── start.bat                # Sobe back + front num clique (Windows)
```

---

## Endpoints da API

- `GET  /produtos` — lista todos os produtos
- `GET  /produto/{id}` — busca produto por id
- `GET  /categoria/{categoria}` — lista por categoria
- `GET  /pesquisa/{nome}` — busca por nome
- `POST /cadastro` / `POST /login` — usuários
- `POST /adm/cadastro` / `POST /adm/login` — administradores
- `POST /api/carrinho/{idCliente}/adicionar` — itens do carrinho
- `POST /pagamento/criar-preferencia` — gera link de checkout (Mercado Pago)

---

## Solução de problemas

| Sintoma | Causa | Como resolver |
|---|---|---|
| "Backend não encontrado" no front | Backend não subiu | Confira se o MySQL está rodando, depois rode `start.bat` de novo |
| `Communications link failure` | MySQL parado | Inicie o serviço do MySQL no Windows |
| `Access denied for user 'root'` | Senha diferente | Edite `backend/src/main/resources/application.properties` |
| Backend não acha JDK | JDK 17+ não está no PATH nem em local conhecido | Instale o JDK 17+ ou defina `JAVA_HOME` antes de rodar |
