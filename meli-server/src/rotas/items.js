import { Router } from 'express';
import {
  buscarProdutos,
  obterDetalheProduto,
  obterDescricaoProduto,
} from '../servicos/mercadolivre.js';
import { normalizarBusca, normalizarDetalhe } from '../utils/normalizar.js';
import { obterDoCache, salvarNoCache } from '../utils/cache.js';
import { obterMockBusca, obterMockDetalhe } from '../servicos/mocks.js';

const router = Router();

const autor = {
  name: 'Kaique',
  lastname: 'Bernardo',
};

router.get('/', async (req, res, next) => {
  try {
    const { q } = req.query;

    if (!q || q.trim() === '') {
      return res.status(400).json({
        error: 'Parâmetro q é obrigatório',
      });
    }

    if (process.env.MOCK === 'true') {
      return res.json(obterMockBusca());
    }

    const chaveCache = `search:${q}`;
    const emCache = obterDoCache(chaveCache);

    if (emCache) {
      return res.json(emCache);
    }

    const dados = await buscarProdutos(q);
    const resposta = normalizarBusca(dados, autor);

    salvarNoCache(chaveCache, resposta);

    res.json(resposta);
  } catch (erro) {
    next(erro);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id || id.trim() === '') {
      return res.status(400).json({
        error: 'ID é obrigatório',
      });
    }

    if (process.env.MOCK === 'true') {
      return res.json(obterMockDetalhe());
    }

    const chaveCache = `item:${id}`;
    const emCache = obterDoCache(chaveCache);

    if (emCache) {
      return res.json(emCache);
    }

    const [item, descricao] = await Promise.all([
      obterDetalheProduto(id),
      obterDescricaoProduto(id),
    ]);

    const resposta = normalizarDetalhe(item, descricao, autor);

    salvarNoCache(chaveCache, resposta);

    res.json(resposta);
  } catch (erro) {
    next(erro);
  }
});

export default router;
