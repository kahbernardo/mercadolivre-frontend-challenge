import { requisicaoComRetry } from '../utils/http.js';
import { mockBusca, mockItens } from '../utils/dadosMock.js';

const URL_BASE = process.env.MELI_API_URL || 'https://api.mercadolibre.com';
const USAR_MOCK = process.env.USAR_MOCK === 'true';

const headers = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  Accept: 'application/json',
  'Accept-Language': 'es-AR,es;q=0.9',
};

export async function buscarProdutos(termo) {
  if (USAR_MOCK) {
    return mockBusca;
  }

  try {
    const url = `${URL_BASE}/sites/MLA/search?q=${encodeURIComponent(termo)}`;
    const resposta = await requisicaoComRetry(url, { headers });
    return resposta.json();
  } catch (erro) {
    console.log('API externa falhou, usando dados mock');
    return mockBusca;
  }
}

export async function obterDetalheProduto(id) {
  if (USAR_MOCK) {
    const mock = mockItens[id] || mockItens['MLA1234567890'];
    return mock.item;
  }

  try {
    const url = `${URL_BASE}/items/${id}`;
    const resposta = await requisicaoComRetry(url, { headers });
    return resposta.json();
  } catch (erro) {
    console.log('API externa falhou, usando dados mock');
    const mock = mockItens[id] || mockItens['MLA1234567890'];
    return mock.item;
  }
}

export async function obterDescricaoProduto(id) {
  if (USAR_MOCK) {
    const mock = mockItens[id] || mockItens['MLA1234567890'];
    return mock.description;
  }

  try {
    const url = `${URL_BASE}/items/${id}/description`;
    const resposta = await requisicaoComRetry(url, { headers });
    return resposta.json();
  } catch (erro) {
    console.log('API externa falhou, usando dados mock');
    const mock = mockItens[id] || mockItens['MLA1234567890'];
    return mock.description;
  }
}

export async function obterCategoria(categoryId) {
  if (USAR_MOCK) {
    return {
      path_from_root: [
        { name: 'Tecnologia' },
        { name: 'Celulares e Telefones' },
        { name: 'Celulares e Smartphones' },
      ],
    };
  }

  try {
    const url = `${URL_BASE}/categories/${categoryId}`;
    const resposta = await requisicaoComRetry(url, { headers });
    return resposta.json();
  } catch (erro) {
    console.log('API externa falhou para categoria');
    return { path_from_root: [] };
  }
}
