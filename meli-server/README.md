# meli-server

Backend BFF para a aplicação web do Mercado Libre. Consome a API pública do Mercado Libre e normaliza os dados.

## Tecnologias

- Node.js 20+
- Express
- Jest + Supertest
- ESLint + Prettier

## Instalação

```bash
npm install
```

## Variáveis de Ambiente

Copie o arquivo de exemplo e configure:

```bash
cp .env.example .env
```

Variáveis disponíveis:
- `PORT`: Porta do servidor (padrão: 3001)
- `MOCK`: Se true, retorna fixtures locais sem chamar a API externa (padrão: false)

## Scripts

```bash
npm run dev        # Desenvolvimento com watch
npm start          # Produção
npm test           # Executar testes
npm run lint       # Verificar código
npm run format     # Formatar código
```

## Rotas

### GET /api/items?q=:query

Busca produtos por termo. Retorna no máximo 4 itens.

Resposta:
```json
{
  "author": { "name": "String", "lastname": "String" },
  "categories": ["String"],
  "items": [
    {
      "id": "String",
      "title": "String",
      "price": { "currency": "String", "amount": Number, "decimals": Number },
      "picture": "String",
      "condition": "String",
      "free_shipping": Boolean
    }
  ]
}
```

### GET /api/items/:id

Obtém detalhes de um produto específico.

Resposta:
```json
{
  "author": { "name": "String", "lastname": "String" },
  "item": {
    "id": "String",
    "title": "String",
    "price": { "currency": "String", "amount": Number, "decimals": Number },
    "picture": "String",
    "condition": "String",
    "free_shipping": Boolean,
    "sold_quantity": Number,
    "description": "String"
  }
}
```

## Estrutura

```
src/
├── servidor.js              # Inicialização do servidor
├── app.js                   # Configuração do Express
├── rotas/
│   └── items.js             # Rotas de produtos
├── servicos/
│   └── mercadolivre.js      # Chamadas à API externa
└── utils/
    ├── cache.js             # Cache LRU
    ├── http.js              # Requisições com retry
    ├── normalizar.js        # Normalização de dados
    └── separarValor.js      # Separação de decimais
```



