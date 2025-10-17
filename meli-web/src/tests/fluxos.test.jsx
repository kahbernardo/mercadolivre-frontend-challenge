import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Busca } from '../rotas/Busca';
import { Resultados } from '../rotas/Resultados';
import { Detalhe } from '../rotas/Detalhe';
import {
  renderComProvedores,
  screen,
  waitFor,
  userEvent,
} from './utils/renderComProvedores';

describe('Fluxos de navegação', () => {
  it('deve navegar de / para /items?search= ao digitar e enviar', async () => {
    const user = userEvent.setup();
    window.history.pushState({}, '', '/');

    renderComProvedores(
      <Routes>
        <Route path="/" element={<Busca />} />
        <Route path="/items" element={<Resultados />} />
      </Routes>
    );

    const input = screen.getByLabelText(/buscar produtos/i);
    await user.type(input, 'notebook');

    const submitButton = screen.getByRole('button', { name: /buscar/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(window.location.search).toContain('search=notebook');
    });

    const titulo = await screen.findByText('iPhone 13 Pro Max 256gb', {}, { timeout: 3000 });
    expect(titulo).toBeInTheDocument();
  });

  it('deve acessar /items/:id diretamente via deep-link', async () => {
    window.history.pushState({}, '', '/items/MLA123456');

    renderComProvedores(
      <Routes>
        <Route path="/items/:id" element={<Detalhe />} />
      </Routes>
    );

    const titulo = await screen.findByText(
      'iPhone 13 Pro Max 256gb Azul Sierra',
      {},
      { timeout: 3000 }
    );
    expect(titulo).toBeInTheDocument();

    expect(screen.getByText('$ 450.000')).toBeInTheDocument();
    expect(screen.getByText(/Novo/i)).toBeInTheDocument();
    expect(screen.getByText(/1543 vendidos/i)).toBeInTheDocument();
    expect(screen.getByText('Descrição do produto')).toBeInTheDocument();
    expect(
      screen.getByText(/iPhone 13 Pro Max com tela Super Retina XDR/)
    ).toBeInTheDocument();
  });
});
