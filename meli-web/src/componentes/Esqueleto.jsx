import styled, { keyframes } from 'styled-components';

const brilhar = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const EsqueletoEstilizado = styled.div`
  width: ${props => props.$largura || '100%'};
  height: ${props => props.$altura || '20px'};
  background-color: ${props => props.theme.cores.neutro200};
  background-image: linear-gradient(
    90deg,
    ${props => props.theme.cores.neutro200} 0px,
    ${props => props.theme.cores.neutro100} 40px,
    ${props => props.theme.cores.neutro200} 80px
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: ${props => props.$arredondado ? props.theme.raioBorda.md : '0'};
  animation: ${brilhar} 1.2s ease-in-out infinite;
`;

export function Esqueleto({ largura, altura, arredondado = true }) {
  return (
    <EsqueletoEstilizado
      $largura={largura}
      $altura={altura}
      $arredondado={arredondado}
    />
  );
}

