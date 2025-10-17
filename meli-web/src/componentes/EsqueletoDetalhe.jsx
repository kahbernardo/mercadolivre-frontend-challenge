import React from 'react';
import styled from 'styled-components';
import { Esqueleto } from './Esqueleto';
import { Box, Stack } from '../estilos/primitivos';
import { mq } from '../estilos/helpers';

const Container = styled(Box)`
  background-color: ${(props) => props.theme.cores.fundoClaro};
  border-radius: ${(props) => props.theme.raioBorda.md};
  padding: ${(props) => props.theme.espacamento[32]};
  box-shadow: ${(props) => props.theme.sombra.nivel1};
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.espacamento[32]};
  margin-bottom: ${(props) => props.theme.espacamento[32]};

  ${mq('md')} {
    display: grid;
    grid-template-columns: 680px 1fr;
  }
`;

export function EsqueletoDetalhe() {
  return (
    <Container data-testid="skeleton-detalhe">
      <Grid>
        <Esqueleto altura="400px" />
        <Stack gap={24}>
          <Esqueleto largura="40%" altura="16px" />
          <Esqueleto largura="90%" altura="32px" />
          <Esqueleto largura="60%" altura="48px" />
          <Esqueleto largura="100%" altura="48px" />
        </Stack>
      </Grid>
      <Stack gap={24}>
        <Esqueleto largura="200px" altura="32px" />
        <Esqueleto altura="120px" />
      </Stack>
    </Container>
  );
}
