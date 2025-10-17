import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15000,
      gcTime: 60000,
      retry: 1,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

export const chavesBusca = {
  todas: ['busca'],
  porTermo: (termo) => ['busca', termo],
};

export const chavesDetalhe = {
  todas: ['detalhe'],
  porId: (id) => ['detalhe', id],
};

export const chavesCategorias = {
  todas: ['categorias'],
  porId: (id) => ['categorias', id],
};
