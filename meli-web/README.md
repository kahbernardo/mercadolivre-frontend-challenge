# meli-web

Aplicação web do Mercado Libre construída com React e Vite.

## Tecnologias

- React 18
- React Router
- Vite
- styled-components (sistema de design com tema, Saas)
- Vitest + React Testing Library
- MSW para mocks
- ESLint + Prettier

## Pré-requisitos

O backend meli-server deve estar rodando em http://localhost:3001

## Instalação

```bash
npm install
```

## Scripts

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm test           # Executar testes
npm run lint       # Verificar código
npm run format     # Formatar código
```

## Rotas

### / (Busca)

Página inicial com caixa de busca.

### /items?search=:query

Lista de resultados da busca. Exibe no máximo 4 produtos com:
- Imagem
- Preço
- Título
- Indicador de frete grátis
- Breadcrumb de categorias

### /items/:id

Detalhe do produto com:
- Imagem grande
- Preço
- Condição e quantidade vendida
- Descrição completa
- Botão de compra

Suporta acesso direto via deep-link.

## Arquitetura de Estilos

A aplicação utiliza styled-components com um sistema de design baseado em tokens:

- **Tema** (`estilos/tema.js`): cores, espaçamentos, tipografia, sombras, breakpoints
- **Estilos Globais** (`estilos/globais.js`): reset e estilos base
- **Helpers** (`estilos/helpers.js`): funções utilitárias (media queries, foco visível)
- **Primitivos** (`estilos/primitivos.js`): componentes base (Box, Flex, Stack, Grid, Texto)

## Estrutura

```
src/
├── main.jsx                     # Ponto de entrada + ThemeProvider
├── App.jsx                      # Configuração de rotas
├── estilos/
│   ├── tema.js                  # Tokens de design
│   ├── globais.js               # Estilos globais
│   ├── helpers.js               # Funções utilitárias
│   └── primitivos.js            # Componentes primitivos
├── rotas/
│   ├── Busca.jsx                # Página inicial
│   ├── Resultados.jsx           # Lista de produtos
│   └── Detalhe.jsx              # Detalhe do produto
├── componentes/
│   ├── Cabecalho.jsx            # Busca no topo
│   ├── Breadcrumb.jsx           # Navegação de categorias
│   ├── Preco.jsx                # Formatação de preço
│   ├── CardResultado.jsx        # Card de produto na lista
│   ├── Botao.jsx                # Botão com variantes
│   ├── CampoTexto.jsx           # Input com estados
│   ├── IndicadorCarregando.jsx  # Spinner
│   ├── Esqueleto.jsx            # Loading skeleton
│   ├── Alerta.jsx               # Mensagens de feedback
│   └── ImagemResponsiva.jsx     # Imagem otimizada
├── lib/
│   ├── api.js                   # Chamadas ao backend
│   └── formatacao.js            # Funções de formatação
├── assets/                      # Imagens e ícones
└── tests/                       # Testes
```

## Como usar

1. Inicie o backend meli-server
2. Execute `npm run dev`
3. Acesse http://localhost:3000
4. Digite um termo de busca
5. Navegue pelos resultados e detalhes

