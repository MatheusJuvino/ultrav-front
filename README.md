# Ultra V — Ótica Premium

Projeto acadêmico de uma loja virtual de óculos (ótica). O sistema é composto por
um **frontend** em Next.js 16 + TypeScript e um **backend** em Java 17 com Spring Boot.

## Estrutura

```
ultrav-front/
├── frontend/   # Next.js (App Router) + TypeScript
└── backend/    # Spring Boot 4 + JPA + MySQL
```

## Pré-requisitos

| Ferramenta | Versão recomendada |
|------------|--------------------|
| Node.js    | 18 ou superior     |
| npm        | 9 ou superior      |
| Java JDK   | 17                 |
| MySQL      | 8.x rodando em `localhost:3306` |

> O Maven não precisa estar instalado: o projeto usa o `mvnw` (Maven Wrapper).

## Banco de dados

O backend espera um MySQL local com as credenciais abaixo
(arquivo `backend/src/main/resources/application.properties`):

```
url:      jdbc:mysql://localhost:3306/ultrav?createDatabaseIfNotExist=true
usuário:  root
senha:    root
```

O Hibernate cria as tabelas automaticamente (`ddl-auto=update`) ao subir o serviço.

## Como rodar

Abra **dois terminais**, um para cada módulo.

### 1) Backend (porta 8080)

**Com MySQL (config padrão):**
```bash
cd backend
./mvnw spring-boot:run        # Linux/macOS
mvnw.cmd spring-boot:run      # Windows
```

**Sem MySQL (banco H2 em memória — ideal para testar rapidinho):**
```bash
cd backend
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev      # Linux/macOS
mvnw.cmd spring-boot:run -D"spring-boot.run.profiles=dev"  # Windows
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

### 2) Frontend (porta 3000)

```bash
cd frontend
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Pagamento

A finalização de compra usa o **Checkout Pro do Mercado Pago**. O backend expõe
`POST /pagamento/criar-preferencia`, recebe os itens do carrinho e devolve a URL
de pagamento, para a qual o frontend redireciona o usuário automaticamente.

O token de teste já vem configurado em `PagamentoController.java`. Para produção,
substitua por uma variável de ambiente.

## Observações

- A vitrine inicial busca os produtos no backend. Se o backend ainda não
  estiver rodando, o front exibe um aviso amigável.
- A página de detalhes do produto e os relacionados usam um catálogo local
  (`frontend/lib/produtos.ts`), apenas para fins de demonstração visual.
- Projeto desenvolvido para a disciplina de Expotech 2026.
