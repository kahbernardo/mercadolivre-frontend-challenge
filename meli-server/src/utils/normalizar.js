import { separarValor } from './separarValor.js';

export function normalizarBusca(dados, autor) {
  const categorias = extrairCategorias(dados);
  const itensNormalizados = dados.results.slice(0, 4).map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      ...separarValor(item.price),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping?.free_shipping || false,
  }));

  return {
    author: autor,
    categories: categorias,
    items: itensNormalizados,
  };
}

export function normalizarDetalhe(item, descricao, autor) {
  return {
    author: autor,
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        ...separarValor(item.price),
      },
      picture: item.pictures?.[0]?.url || item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping || false,
      sold_quantity: item.sold_quantity || 0,
      description: descricao.plain_text || descricao.text || '',
    },
  };
}

function extrairCategorias(dados) {
  if (!dados.filters || dados.filters.length === 0) {
    return [];
  }

  const filtroCategoria = dados.filters.find((f) => f.id === 'category');
  if (!filtroCategoria || !filtroCategoria.values?.[0]) {
    return [];
  }

  const categoriaSelecionada = filtroCategoria.values[0];
  if (categoriaSelecionada.path_from_root) {
    return categoriaSelecionada.path_from_root.map((c) => c.name);
  }

  return [];
}
