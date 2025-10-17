import React from 'react';
import { Preco } from '../componentes/Preco';
import { Breadcrumb } from '../componentes/Breadcrumb';
import { renderComProvedores, screen } from './utils/renderComProvedores';

describe('Preco - formatação de amount/decimals', () => {
  it('deve formatar amount e decimals corretamente', () => {
    const price = {
      currency: 'ARS',
      amount: 1234,
      decimals: 5,
    };

    renderComProvedores(<Preco price={price} />);

    expect(screen.getByText('$ 1.234')).toBeInTheDocument();
    expect(screen.getByText('05')).toBeInTheDocument();
  });

  it('deve formatar preço grande sem decimals', () => {
    const price = {
      currency: 'ARS',
      amount: 450000,
      decimals: 0,
    };

    renderComProvedores(<Preco price={price} />);

    expect(screen.getByText(/450\.000/)).toBeInTheDocument();
  });

  it('deve formatar decimals de um dígito com zero à esquerda', () => {
    const price = {
      currency: 'ARS',
      amount: 999,
      decimals: 5,
    };

    renderComProvedores(<Preco price={price} />);

    expect(screen.getByText('$ 999')).toBeInTheDocument();
    expect(screen.getByText('05')).toBeInTheDocument();
  });
});

describe('Breadcrumb - render da trilha', () => {
  it('deve renderizar categorias separadas por >', () => {
    const categorias = ['Tecnologia', 'Celulares', 'Smartphones'];

    renderComProvedores(<Breadcrumb categorias={categorias} />);

    expect(screen.getByText('Tecnologia')).toBeInTheDocument();
    expect(screen.getByText('Celulares')).toBeInTheDocument();
    expect(screen.getByText('Smartphones')).toBeInTheDocument();

    const separadores = screen.getAllByText('>');
    expect(separadores).toHaveLength(2);
  });

  it('deve renderizar uma única categoria sem separador', () => {
    const categorias = ['Tecnologia'];

    renderComProvedores(<Breadcrumb categorias={categorias} />);

    expect(screen.getByText('Tecnologia')).toBeInTheDocument();
    expect(screen.queryByText('>')).not.toBeInTheDocument();
  });

  it('não deve renderizar nada quando categorias estiver vazia', () => {
    const { container } = renderComProvedores(<Breadcrumb categorias={[]} />);

    expect(container.firstChild).toBeNull();
  });
});

