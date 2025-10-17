import request from 'supertest';
import { criarApp } from '../src/app.js';

const app = criarApp();

describe('GET /api/categories/:id', () => {
  beforeAll(() => {
    process.env.MOCK = 'true';
  });

  afterAll(() => {
    delete process.env.MOCK;
  });

  it('deve retornar categorias válidas para um ID existente', async () => {
    const resposta = await request(app)
      .get('/api/categories/MLA1055')
      .expect(200);

    expect(resposta.body).toHaveProperty('categories');
    expect(Array.isArray(resposta.body.categories)).toBe(true);
    expect(resposta.body.categories.length).toBeGreaterThan(0);
    expect(resposta.body.categories).toEqual([
      'Tecnologia',
      'Celulares e Telefones',
      'Celulares e Smartphones',
    ]);
  });

  it('deve retornar array vazio para ID não encontrado no mock', async () => {
    const resposta = await request(app)
      .get('/api/categories/ID_INEXISTENTE')
      .expect(200);

    expect(resposta.body).toHaveProperty('categories');
    expect(Array.isArray(resposta.body.categories)).toBe(true);
    expect(resposta.body.categories.length).toBe(0);
  });

  it('deve retornar array vazio para categoria sem path_from_root', async () => {
    const resposta = await request(app)
      .get('/api/categories/CATEGORIA_SEM_PATH')
      .expect(200);

    expect(resposta.body).toHaveProperty('categories');
    expect(resposta.body.categories).toEqual([]);
  });

  it('deve ter a estrutura correta da resposta', async () => {
    const resposta = await request(app)
      .get('/api/categories/MLA1055')
      .expect(200);

    expect(resposta.body).toEqual({
      categories: expect.any(Array),
    });

    resposta.body.categories.forEach((categoria) => {
      expect(typeof categoria).toBe('string');
    });
  });

  it('deve validar que path_from_root ausente retorna array vazio', async () => {
    const resposta = await request(app)
      .get('/api/categories/ID_SEM_PATH')
      .expect(200);

    expect(resposta.body.categories).toEqual([]);
  });
});
