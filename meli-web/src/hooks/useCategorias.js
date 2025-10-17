import { useQuery } from '@tanstack/react-query';
import { obterCategoriasPorId } from '../lib/api';
import { chavesCategorias } from '../lib/query';

export function useCategorias(categoryId) {
  return useQuery({
    queryKey: chavesCategorias.porId(categoryId),
    queryFn: () => obterCategoriasPorId(categoryId),
    enabled: !!categoryId,
  });
}
