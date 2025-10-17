const URL_BASE = 'http://localhost:3001/api';

export async function buscarProdutos(termo) {
  const resposta = await fetch(`${URL_BASE}/items?q=${encodeURIComponent(termo)}`);
  
  if (!resposta.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  
  return resposta.json();
}

export async function obterDetalheProduto(id) {
  const resposta = await fetch(`${URL_BASE}/items/${id}`);
  
  if (!resposta.ok) {
    throw new Error('Erro ao obter detalhes do produto');
  }
  
  return resposta.json();
}

export async function obterCategoriasPorId(id) {
  const resposta = await fetch(`${URL_BASE}/categories/${id}`);
  
  if (!resposta.ok) {
    throw new Error('Erro ao obter categorias');
  }
  
  return resposta.json();
}



