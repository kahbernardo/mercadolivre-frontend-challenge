import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Cabecalho } from '../componentes/Cabecalho';
import { EsqueletoDetalhe } from '../componentes/EsqueletoDetalhe';
import { LimiteErro } from '../componentes/LimiteErro';
import { DetalheConteudo } from './DetalheConteudo';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #EEEEEE;
`;

const Main = styled.main`
  flex: 1;
  padding: 16px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export function Detalhe() {
  return (
    <AppContainer>
      <Helmet>
        <title>Detalhes do produto - Mercado Libre</title>
        <meta name="description" content="Veja todos os detalhes do produto" />
      </Helmet>

      <Cabecalho />

      <Main>
        <Container>
          <LimiteErro>
            <Suspense fallback={<EsqueletoDetalhe />}>
              <DetalheConteudo />
            </Suspense>
          </LimiteErro>
        </Container>
      </Main>
    </AppContainer>
  );
}
