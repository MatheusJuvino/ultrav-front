# Ultra V — Ótica Premium

Projeto acadêmico de uma loja virtual de óculos. O sistema é dividido em
um **frontend** em Next.js 16 + TypeScript e um **backend** em Java 17 com
Spring Boot. O banco utilizado é MySQL.

## Estrutura

```
ultrav-front/
├── frontend/                       # Next.js (App Router) + TypeScript
│   ├── app/                        # Páginas: home, carrinho, contato, produto/[id]
│   ├── components/                 # Hero, Products, Navbar, Footer, OculosSVG, etc.
│   └── lib/                        # CarrinhoContext + catálogo de fallback
│
├── backend/                        # Spring Boot 4 + JPA + MySQL
│   └── src/main/java/br/com/ultravexpotech/
│       ├── UltraVExpotechApplication.java
│       ├── DataLoader.java         # Popula produtos iniciais na 1ª execução
│       ├── controller/             # Produto, Carrinho, Usuario, Administrador, Pagamento
│       ├── service/                # Lógica de negócio
│       ├── repository/             # Spring Data JPA
│       └── model/                  # Entidades JPA
│
└── database/
    └── ultrav.sql                  # Cria o banco, tabelas e produtos iniciais
```

## Pré-requisitos

| Ferramenta | Versão recomendada |
|------------|--------------------|
| Node.js    | 18 ou superior     |
| npm        | 9 ou superior      |
| Java JDK   | 17 ou superior     |
| MySQL      | 8.x rodando em `localhost:3306` |

> O Maven não precisa estar instalado: o projeto usa o `mvnw` (Maven Wrapper).

## 1) Banco de dados

A configuração já está pronta em `backend/src/main/resources/application.properties`:

```
url:      jdbc:mysql://localhost:3306/ultrav
usuário:  root
senha:    root
```

Para criar o banco e popular a tabela de produtos é só rodar o script
`database/ultrav.sql`. Escolha uma das opções:

**Pelo terminal:**
```bash
mysql -u root -p < database/ultrav.sql
```

**Pelo MySQL Workbench:**
1. Abra o arquivo `database/ultrav.sql`.
2. Clique no botão de raio (Execute).

Pronto: o banco `ultrav` e todas as tabelas estarão criados, com 6 produtos
de exemplo já cadastrados.

> Caso prefira não rodar o script, o próprio Spring Boot cria as tabelas
> automaticamente na primeira execução (`spring.jpa.hibernate.ddl-auto=update`)
> e o `DataLoader` insere os mesmos produtos iniciais.

## 2) Backend (porta 8080)

Em um terminal:

```bash
cd backend
./mvnw spring-boot:run        # Linux/macOS
mvnw.cmd spring-boot:run      # Windows
```

A API ficará disponível em `http://localhost:8080`.

Principais rotas:
- `GET  /produtos` — lista os produtos
- `GET  /produto/{id}` — busca produto por id
- `GET  /categoria/{categoria}` — lista por categoria
- `GET  /pesquisa/{nome}` — busca por nome
- `POST /cadastro` / `POST /login` — usuários
- `POST /adm/cadastro` / `POST /adm/login` — administradores
- `POST /api/carrinho/{idCliente}/adicionar` — itens do carrinho
- `POST /pagamento/criar-preferencia` — gera link de pagamento (Mercado Pago)

## 3) Frontend (porta 3000)

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Pagamento

A finalização de compra usa o **Checkout Pro do Mercado Pago**. O backend
expõe `POST /pagamento/criar-preferencia`, recebe os itens do carrinho e
devolve a URL para a qual o frontend redireciona o usuário automaticamente.
O token de teste já vem configurado em `PagamentoController.java`.

## Resumo dos comandos

```bash
# 1. Criar o banco (uma vez)
mysql -u root -p < database/ultrav.sql

# 2. Subir o backend
cd backend && ./mvnw spring-boot:run

# 3. Em outro terminal, subir o frontend
cd frontend && npm install && npm run dev
```

Projeto desenvolvido para a disciplina de Expotech 2026.
