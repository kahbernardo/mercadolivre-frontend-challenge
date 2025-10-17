import { http, HttpResponse } from 'msw';
import {
  mockBuscaResposta,
  mockDetalheResposta,
  mockCategoriasResposta,
} from './dadosExemplo.js';

const URL_BASE = 'http://localhost:3001';

export const handlers = [
  http.get(`${URL_BASE}/api/items`, ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');

    if (!q) {
      return HttpResponse.json(
        { error: 'Parâmetro q é obrigatório' },
        { status: 400 }
      );
    }

    return HttpResponse.json(mockBuscaResposta);
  }),

  http.get(`${URL_BASE}/api/items/:id`, ({ params }) => {
    const { id } = params;

    if (id === 'MLA123456') {
      return HttpResponse.json(mockDetalheResposta);
    }

    return HttpResponse.json(
      { error: 'Produto não encontrado' },
      { status: 404 }
    );
  }),

  http.get(`${URL_BASE}/api/categories/:id`, ({ params }) => {
    const { id } = params;

    if (id === 'MLA1055') {
      return HttpResponse.json(mockCategoriasResposta);
    }

    return HttpResponse.json({ categories: [] });
  }),
];
