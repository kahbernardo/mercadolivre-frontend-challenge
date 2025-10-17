import { criarApp } from './app.js';

const PORTA = process.env.PORT || 3001;

const app = criarApp();

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
