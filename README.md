# Desafio Front-End Mercado Libre

Olá! Sou **Kaique Bernardo**, e este repositório contém minha solução para o desafio técnico de Front-End do Mercado Libre.

A proposta foi desenvolver uma aplicação completa, composta por duas partes que se integram:

- **meli-server** — um backend BFF em Node.js e Express que consome a API pública do Mercado Libre e normaliza os dados.

- **meli-web** — uma aplicação em React e Vite que exibe a busca, a lista de resultados e o detalhe de produtos, seguindo fielmente os designs fornecidos no teste.

Este projeto foi construído com cuidado para refletir o que acredito ser essencial em um sistema moderno: **clareza**, **performance**, **escalabilidade** e **atenção à experiência do usuário**.

## Tecnologias principais

| Camada | Stack |
|--------|-------|
| **Frontend** | React 18, React Router, styled-components, React Query, Helmet Async, Vite |
| **Backend** | Node 20+, Express, LRU-Cache, Jest + Supertest |
| **Testes e Dev Tools** | Vitest + React Testing Library, MSW, ESLint, Prettier, Husky |

## Estrutura geral

```
meli/
├── meli-server/     # Backend BFF (Node/Express)
└── meli-web/        # Frontend (React/Vite)
```

## Pré-requisitos

- Node.js 20 ou superior
- NPM 9+

As portas padrão são:

- `3001` → meli-server
- `3000` → meli-web

## Instalação e execução

**Instalar dependências nos dois projetos:**

```bash
cd meli-server && npm install
cd ../meli-web && npm install
```

**Iniciar o backend:**

```bash
npm run dev
```

**Em outro terminal, iniciar o frontend:**

```bash
npm run dev
```

Acesse `http://localhost:3000`

## Rotas principais

### Frontend

| Rota | Função |
|------|--------|
| `/` | Caixa de busca |
| `/items?search=:query` | Lista de resultados (máx. 4 itens, breadcrumb de categorias) |
| `/items/:id` | Detalhe do produto (imagem, preço, condição, vendidos, descrição) |

### Backend

| Endpoint | Função |
|----------|--------|
| `GET /api/items?q=:query` | Busca produtos por termo, devolve no formato exigido no PDF |
| `GET /api/items/:id` | Detalhe completo de um produto |
| `GET /api/categories/:id` | (Auxiliar) Retorna breadcrumb da categoria via path_from_root |

## Arquitetura de estilos

O front utiliza **styled-components** com um sistema de design baseado em tokens:

- `estilos/tema.js` → cores, tipografia, espaçamentos, sombras, breakpoints
- `estilos/globais.js` → reset e estilos base
- `estilos/primitivos.js` → componentes estruturais (Box, Flex, Stack)

As cores e medidas seguem exatamente as especificações visuais fornecidas no teste:

| Token | Cor |
|-------|-----|
| primário | `#FFE600` |
| texto | `#333333` |
| secundário | `#666666` |
| borda | `#999999` |
| fundo | `#EEEEEE` |
| ação | `#3483FA` |

## Comportamento principal

- **Busca com histórico local** e prefetch via React Query
- **Cache curto (15 segundos)** no front e no BFF, garantindo dados atualizados
- **Skeletons e Suspense** para percepção fluida de carregamento
- **Breadcrumb dinâmico:**
  - Resultados → categoria mais frequente
  - Detalhe → via `/api/categories/:id`
- **Imagens da listagem** usam o thumbnail 90x90 conforme o enunciado
- **Indicador "Atualizando…"** exibe refetch silencioso após expiração do cache

## Testes

**Frontend:** Vitest + React Testing Library + MSW

- Cobertura dos fluxos de busca, resultados, detalhe e breadcrumb
- Hooks de dados testados com React Query (retry desativado)

**Backend:** Jest + Supertest

- Endpoints `/api/items`, `/api/items/:id`, `/api/categories/:id`
- Casos de cache, mock e erros 502/504

## Scripts úteis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm test           # Testes
npm run lint       # Lint
npm run format     # Prettier
```

## Notas de Projeto

O projeto foi pensado para demonstrar boas práticas de usabilidade, SEO, performance e escalabilidade:

- **Usabilidade:** navegação direta, feedbacks visuais consistentes e carregamentos suaves.
- **SEO:** rotas acessíveis, títulos e descrições dinâmicas via Helmet Async, preconnect para otimização de rede.
- **Performance:** cache curto no React Query e no BFF, imagens otimizadas e compressão HTTP.
- **Escalabilidade:** separação de camadas, design system com tokens, testes automatizados e CI preparado.
- **Mocks:** variável `.env` (`MOCK=true`) permite desenvolvimento local sem depender da API real.
- **Autor:** todas as respostas da API incluem `{ author: { name: "Kaique", lastname: "Bernardo" } }`, conforme exigido no PDF.

## Considerações finais

Foi um prazer desenvolver este desafio.
Procurei equilibrar fidelidade ao enunciado com escolhas técnicas que mostrem atenção a performance, clareza de código e escalabilidade.

Agradeço pela oportunidade de participar do processo.

**— Kaique Bernardo**

