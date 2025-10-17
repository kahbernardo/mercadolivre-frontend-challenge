import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Busca } from './rotas/Busca';
import { Resultados } from './rotas/Resultados';
import { Detalhe } from './rotas/Detalhe';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Busca />} />
        <Route path="/items" element={<Resultados />} />
        <Route path="/items/:id" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  );
}



