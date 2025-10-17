import request from 'supertest';
import { criarApp } from '../src/app.js';

const app = criarApp();

describe('GET /api/items/:id', () => {
  it('deve retornar erro quando id está vazio', async () => {
    const resposta = await request(app).get('/api/items/ ');
    expect(resposta.status).toBe(400);
  });

  it('deve retornar estrutura correta com author e item', async () => {
    const resposta = await request(app).get('/api/items/MLA1234567890');

    if (resposta.status === 404) {
      expect(resposta.body).toHaveProperty('error');
      return;
    }

    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('author');
    expect(resposta.body.author).toHaveProperty('name');
    expect(resposta.body.author).toHaveProperty('lastname');
    expect(resposta.body).toHaveProperty('item');
  });

  it('item deve ter estrutura completa incluindo description', async () => {
    const buscaResp = await request(app).get('/api/items?q=iphone');
    if (buscaResp.body.items.length === 0) {
      return;
    }

    const itemId = buscaResp.body.items[0].id;
    const resposta = await request(app).get(`/api/items/${itemId}`);

    expect(resposta.status).toBe(200);
    const item = resposta.body.item;

    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('price');
    expect(item.price).toHaveProperty('currency');
    expect(item.price).toHaveProperty('amount');
    expect(item.price).toHaveProperty('decimals');
    expect(item).toHaveProperty('picture');
    expect(item).toHaveProperty('condition');
    expect(item).toHaveProperty('free_shipping');
    expect(item).toHaveProperty('sold_quantity');
    expect(item).toHaveProperty('description');
  });
});
