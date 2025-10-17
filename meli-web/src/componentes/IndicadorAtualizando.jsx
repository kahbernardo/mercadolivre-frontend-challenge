import styled from 'styled-components';

const Texto = styled.span`
  font-size: 12px;
  color: #999999;
  margin-left: 8px;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
`;

export function IndicadorAtualizando() {
  return <Texto>Atualizando…</Texto>;
}

