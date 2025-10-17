import React from 'react';
import styled from 'styled-components';

const BreadcrumbNav = styled.nav`
  padding: 12px 0;
`;

const Lista = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
`;

const Item = styled.li`
  font-size: 14px;
  color: #999999;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
`;

const Separador = styled.span`
  font-size: 14px;
  color: #999999;
  margin: 0 4px;
  user-select: none;
`;

export function Breadcrumb({ categorias }) {
  if (!categorias || categorias.length === 0) {
    return null;
  }

  return (
    <BreadcrumbNav aria-label="Navegação">
      <Lista>
        {categorias.map((categoria, index) => (
          <>
            <Item key={index}>{categoria}</Item>
            {index < categorias.length - 1 && (
              <Separador key={`sep-${index}`}>&gt;</Separador>
            )}
          </>
        ))}
      </Lista>
    </BreadcrumbNav>
  );
}
