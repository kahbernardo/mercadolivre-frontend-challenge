import request from 'supertest';
import { criarApp } from '../src/app.js';

const app = criarApp();

describe('GET /api/items', () => {
  it('deve retornar erro quando q não é fornecido', async () => {
    const resposta = await request(app).get('/api/items');
    expect(resposta.status).toBe(400);
  });

  it('deve retornar estrutura correta com author e items', async () => {
    const resposta = await request(app).get('/api/items?q=iphone');

    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('author');
    expect(resposta.body.author).toHaveProperty('name');
    expect(resposta.body.author).toHaveProperty('lastname');
    expect(resposta.body).toHaveProperty('categories');
    expect(resposta.body).toHaveProperty('items');
    expect(Array.isArray(resposta.body.items)).toBe(true);
  });

  it('deve limitar resultados a no máximo 4 itens', async () => {
    const resposta = await request(app).get('/api/items?q=notebook');

    expect(resposta.status).toBe(200);
    expect(resposta.body.items.length).toBeLessThanOrEqual(4);
  });

  it('cada item deve ter estrutura completa', async () => {
    const resposta = await request(app).get('/api/items?q=mouse');

    expect(resposta.status).toBe(200);
    const item = resposta.body.items[0];

    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('price');
    expect(item.price).toHaveProperty('currency');
    expect(item.price).toHaveProperty('amount');
    expect(item.price).toHaveProperty('decimals');
    expect(item).toHaveProperty('picture');
    expect(item).toHaveProperty('condition');
    expect(item).toHaveProperty('free_shipping');
  });
});
