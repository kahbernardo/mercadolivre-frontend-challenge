import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useBusca } from '../hooks/useBusca';
import { Breadcrumb } from '../componentes/Breadcrumb';
import { CardResultado } from '../componentes/CardResultado';
import { IndicadorAtualizando } from '../componentes/IndicadorAtualizando';

const ListaResultados = styled.div`
  background-color: #FFFFFF;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const MensagemContainer = styled.div`
  padding: 48px;
  text-align: center;
  background-color: #FFFFFF;
  border-radius: 4px;
`;

const MensagemTitulo = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #333333;
  margin: 0 0 12px 0;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
`;

const MensagemTexto = styled.p`
  font-size: 16px;
  color: #666666;
  margin: 0;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
`;

const ContainerIndicador = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export function ResultadosConteudo() {
  const [searchParams] = useSearchParams();
  const termo = searchParams.get('search');

  const { data: dados, isFetching } = useBusca(termo);

  if (!dados?.items || dados.items.length === 0) {
    return (
      <MensagemContainer>
        <MensagemTitulo>Nenhum produto encontrado</MensagemTitulo>
        <MensagemTexto>
          Tente buscar por &ldquo;{termo}&rdquo; com outros termos
        </MensagemTexto>
      </MensagemContainer>
    );
  }

  return (
    <>
      {dados.categories && <Breadcrumb categorias={dados.categories} />}
      {isFetching && (
        <ContainerIndicador>
          <IndicadorAtualizando />
        </ContainerIndicador>
      )}
      <ListaResultados>
        {dados.items.map((item) => (
          <CardResultado key={item.id} item={item} />
        ))}
      </ListaResultados>
    </>
  );
}
