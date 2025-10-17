import styled, { keyframes } from 'styled-components';

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: ${props => props.$tamanho || '40px'};
  height: ${props => props.$tamanho || '40px'};
  border: 3px solid ${props => props.theme.cores.neutro200};
  border-top-color: ${props => props.theme.cores.primario};
  border-radius: ${props => props.theme.raioBorda.pill};
  animation: ${girar} 0.6s linear infinite;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.espacamento[40]};
`;

export function IndicadorCarregando({ tamanho, centralizado = true }) {
  const spinner = <Spinner $tamanho={tamanho} role="status" aria-label="Carregando" />;
  
  if (centralizado) {
    return <Container>{spinner}</Container>;
  }
  
  return spinner;
}

