import { LRUCache } from 'lru-cache';

const cache = new LRUCache({
  max: 200,
  ttl: Number(process.env.CACHE_TTL_MS || 15000),
});

export function obterDoCache(chave) {
  return cache.get(chave);
}

export function salvarNoCache(chave, valor) {
  cache.set(chave, valor);
}
