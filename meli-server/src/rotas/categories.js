import { Router } from 'express';
import { obterCategoria } from '../servicos/mercadolivre.js';
import { obterDoCache, salvarNoCache } from '../utils/cache.js';
import { obterMockCategoria } from '../servicos/mocks.js';

const router = Router();

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id || id.trim() === '') {
      return res.status(400).json({
        error: 'ID da categoria é obrigatório',
      });
    }

    if (process.env.MOCK === 'true') {
      return res.json(obterMockCategoria(id));
    }

    const chaveCache = `cat:${id}`;
    const emCache = obterDoCache(chaveCache);

    if (emCache) {
      return res.json(emCache);
    }

    const dadosCategoria = await obterCategoria(id);

    const categorias = dadosCategoria.path_from_root
      ? dadosCategoria.path_from_root.map((c) => c.name)
      : [];

    const resposta = { categories: categorias };

    salvarNoCache(chaveCache, resposta);

    res.json(resposta);
  } catch (erro) {
    next(erro);
  }
});

export default router;
