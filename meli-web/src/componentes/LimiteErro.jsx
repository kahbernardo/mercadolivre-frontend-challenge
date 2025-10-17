import { Component } from 'react';
import styled from 'styled-components';
import { Alerta } from './Alerta';
import { Botao } from './Botao';
import { Stack } from '../estilos/primitivos';

const Container = styled(Stack)`
  padding: ${(props) => props.theme.espacamento[32]};
  max-width: 600px;
  margin: 0 auto;
`;

export class LimiteErro extends Component {
  constructor(props) {
    super(props);
    this.state = { temErro: false };
  }

  static getDerivedStateFromError() {
    return { temErro: true };
  }

  componentDidCatch(erro, infoErro) {
    console.error('Erro capturado:', erro, infoErro);
  }

  handleRecarregar = () => {
    this.setState({ temErro: false });
    window.location.reload();
  };

  render() {
    if (this.state.temErro) {
      return (
        <Container gap={24}>
          <Alerta tipo="erro">
            Ocorreu um erro inesperado. Tente recarregar a página.
          </Alerta>
          <Botao onClick={this.handleRecarregar} variante="primario">
            Recarregar página
          </Botao>
        </Container>
      );
    }

    return this.props.children;
  }
}
