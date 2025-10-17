import styled from 'styled-components';
import { focoVisivel } from '../estilos/helpers';
import { Flex } from '../estilos/primitivos';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.espacamento[4]};
  width: 100%;
`;

const InputWrapper = styled(Flex)`
  position: relative;
  background-color: ${props => props.theme.cores.fundoClaro};
  border: 1px solid ${props => props.$erro ? props.theme.cores.erro : props.theme.cores.bordaEscura};
  border-radius: ${props => props.theme.raioBorda.sm};
  overflow: hidden;
  transition: border-color ${props => props.theme.transicao.rapida};

  &:focus-within {
    ${props => !props.$erro && `border-color: ${props.theme.cores.primario};`}
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: ${props => props.theme.espacamento[12]} ${props => props.theme.espacamento[16]};
  font-size: ${props => props.theme.fonte.tamanho.md};
  background: transparent;
  color: ${props => props.theme.cores.texto};

  &::placeholder {
    color: ${props => props.theme.cores.textoTerciario};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.espacamento[12]};
  color: ${props => props.theme.cores.textoSecundario};
`;

const MensagemErro = styled.span`
  font-size: ${props => props.theme.fonte.tamanho.sm};
  color: ${props => props.theme.cores.erro};
`;

export function CampoTexto({
  valor,
  onChange,
  placeholder,
  iconeEsquerda,
  erro,
  desabilitado,
  ariaLabel,
  ...props
}) {
  return (
    <Container>
      <InputWrapper $erro={erro} alinhar="center">
        {iconeEsquerda && <IconeContainer>{iconeEsquerda}</IconeContainer>}
        <Input
          value={valor}
          onChange={onChange}
          placeholder={placeholder}
          disabled={desabilitado}
          aria-label={ariaLabel}
          aria-invalid={!!erro}
          {...props}
        />
      </InputWrapper>
      {erro && <MensagemErro>{erro}</MensagemErro>}
    </Container>
  );
}

