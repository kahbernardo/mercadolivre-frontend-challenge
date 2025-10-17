import { useQuery } from '@tanstack/react-query';
import { buscarProdutos } from '../lib/api';
import { chavesBusca } from '../lib/query';

export function useBusca(termo) {
  return useQuery({
    queryKey: chavesBusca.porTermo(termo),
    queryFn: () => buscarProdutos(termo),
    enabled: !!termo && termo.trim().length > 0,
  });
}
