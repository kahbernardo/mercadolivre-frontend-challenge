import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Stack, Texto } from '../estilos/primitivos';
import { Cabecalho } from '../componentes/Cabecalho';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.espacamento[48]};
`;

const Conteudo = styled(Stack)`
  text-align: center;
  max-width: 600px;
`;

export function Busca() {
  return (
    <Container>
      <Helmet>
        <title>Mercado Libre - Busque produtos</title>
        <meta name="description" content="Encontre os melhores produtos" />
      </Helmet>

      <Cabecalho />
      <Main>
        <Conteudo gap={16}>
          <Texto tamanho="xxl" peso="semibold">
            Busque seus produtos favoritos
          </Texto>
          <Texto tamanho="lg" cor="textoSecundario">
            Digite um termo na caixa de busca acima
          </Texto>
        </Conteudo>
      </Main>
    </Container>
  );
}
