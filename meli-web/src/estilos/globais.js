import { createGlobalStyle } from 'styled-components';

export const EstilosGlobais = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonte.familiaBase};
    font-size: ${props => props.theme.fonte.tamanho.md};
    line-height: ${props => props.theme.fonte.altura.normal};
    color: ${props => props.theme.cores.texto};
    background-color: ${props => props.theme.cores.fundo};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

