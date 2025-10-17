import React from 'react';
import styled from 'styled-components';
import { formatarPreco } from '../lib/formatacao';

const PrecoContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const Valor = styled.span`
  font-size: ${props => props.$tamanho === 'grande' ? '46px' : '24px'};
  font-weight: 400;
  color: #333333;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
  
  @media (max-width: 768px) {
    font-size: ${props => props.$tamanho === 'grande' ? '36px' : '20px'};
  }
`;

const Decimais = styled.span`
  font-size: ${props => props.$tamanho === 'grande' ? '24px' : '14px'};
  font-weight: 400;
  color: #333333;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
  
  @media (max-width: 768px) {
    font-size: ${props => props.$tamanho === 'grande' ? '20px' : '12px'};
  }
`;

export function Preco({ price, tamanho = 'medio' }) {
  const texto = formatarPreco(price);
  const [parte, decimal] = texto.split(',');

  return (
    <PrecoContainer>
      <Valor $tamanho={tamanho}>{parte}</Valor>
      {decimal && <Decimais $tamanho={tamanho}>{decimal}</Decimais>}
    </PrecoContainer>
  );
}
