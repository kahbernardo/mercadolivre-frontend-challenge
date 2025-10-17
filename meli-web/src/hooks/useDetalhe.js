import { useQuery } from '@tanstack/react-query';
import { obterDetalheProduto } from '../lib/api';
import { chavesDetalhe } from '../lib/query';

export function useDetalhe(id) {
  return useQuery({
    queryKey: chavesDetalhe.porId(id),
    queryFn: () => obterDetalheProduto(id),
    enabled: !!id,
  });
}
