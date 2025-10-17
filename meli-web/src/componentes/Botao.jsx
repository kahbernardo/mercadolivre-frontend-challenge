import styled from 'styled-components';
import { focoVisivel } from '../estilos/helpers';

const BotaoEstilizado = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.espacamento[8]};
  border: none;
  border-radius: ${props => props.theme.raioBorda.lg};
  font-weight: ${props => props.theme.fonte.peso.semibold};
  transition: all ${props => props.theme.transicao.rapida};
  cursor: pointer;
  
  ${props => {
    const tamanhos = {
      sm: {
        padding: `${props.theme.espacamento[8]} ${props.theme.espacamento[16]}`,
        fontSize: props.theme.fonte.tamanho.sm,
      },
      md: {
        padding: `${props.theme.espacamento[12]} ${props.theme.espacamento[24]}`,
        fontSize: props.theme.fonte.tamanho.md,
      },
      lg: {
        padding: `${props.theme.espacamento[16]} ${props.theme.espacamento[32]}`,
        fontSize: props.theme.fonte.tamanho.lg,
      },
    };
    const tamanho = tamanhos[props.$tamanho] || tamanhos.md;
    return `
      padding: ${tamanho.padding};
      font-size: ${tamanho.fontSize};
    `;
  }}

  ${props => {
    const variantes = {
      primario: `
        background-color: ${props.theme.cores.primario};
        color: ${props.theme.cores.fundoClaro};
        
        &:hover:not(:disabled) {
          background-color: ${props.theme.cores.primarioAtivo};
        }
        
        &:active:not(:disabled) {
          transform: translateY(1px);
        }
      `,
      secundario: `
        background-color: ${props.theme.cores.fundoClaro};
        color: ${props.theme.cores.primario};
        border: 1px solid ${props.theme.cores.borda};
        
        &:hover:not(:disabled) {
          border-color: ${props.theme.cores.primario};
          background-color: ${props.theme.cores.primarioClaro};
        }
      `,
      fantasma: `
        background-color: transparent;
        color: ${props.theme.cores.primario};
        
        &:hover:not(:disabled) {
          background-color: ${props.theme.cores.primarioClaro};
        }
      `,
    };
    return variantes[props.$variante] || variantes.primario;
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    ${focoVisivel()}
  }

  ${props => props.$larguraCompleta && 'width: 100%;'}
`;

export function Botao({ 
  variante = 'primario',
  tamanho = 'md',
  desabilitado = false,
  carregando = false,
  larguraCompleta = false,
  children,
  ...props 
}) {
  return (
    <BotaoEstilizado
      $variante={variante}
      $tamanho={tamanho}
      $larguraCompleta={larguraCompleta}
      disabled={desabilitado || carregando}
      {...props}
    >
      {carregando ? 'Carregando...' : children}
    </BotaoEstilizado>
  );
}

