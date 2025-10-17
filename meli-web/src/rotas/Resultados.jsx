import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Cabecalho } from '../componentes/Cabecalho';
import { EsqueletoLista } from '../componentes/EsqueletoLista';
import { LimiteErro } from '../componentes/LimiteErro';
import { ResultadosConteudo } from './ResultadosConteudo';

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

export function Resultados() {
  return (
    <AppContainer>
      <Helmet>
        <title>Resultados - Mercado Libre</title>
        <meta name="description" content="Encontre os melhores produtos" />
      </Helmet>

      <Cabecalho />

      <Main>
        <Container>
          <LimiteErro>
            <Suspense fallback={<EsqueletoLista />}>
              <ResultadosConteudo />
            </Suspense>
          </LimiteErro>
        </Container>
      </Main>
    </AppContainer>
  );
}
