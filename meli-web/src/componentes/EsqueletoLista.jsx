import React from 'react';
import styled from 'styled-components';
import { Esqueleto } from './Esqueleto';
import { Stack, Flex } from '../estilos/primitivos';

const Container = styled.div`
  background-color: ${(props) => props.theme.cores.fundoClaro};
  border-radius: ${(props) => props.theme.raioBorda.md};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.sombra.nivel1};
`;

const Card = styled.div`
  display: flex;
  gap: ${(props) => props.theme.espacamento[16]};
  padding: ${(props) => props.theme.espacamento[16]};
  border-bottom: 1px solid ${(props) => props.theme.cores.borda};

  &:last-child {
    border-bottom: none;
  }
`;

export function EsqueletoLista() {
  return (
    <Container data-testid="skeleton-lista">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i}>
          <Esqueleto largura="90px" altura="90px" />
          <Stack gap={16} flex="1">
            <Flex gap={12} alinhar="center">
              <Esqueleto largura="120px" altura="28px" />
              <Esqueleto largura="20px" altura="20px" />
            </Flex>
            <Esqueleto largura="80%" altura="20px" />
            <Esqueleto largura="60%" altura="20px" />
          </Stack>
        </Card>
      ))}
    </Container>
  );
}
