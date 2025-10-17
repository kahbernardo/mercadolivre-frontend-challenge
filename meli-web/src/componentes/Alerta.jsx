import styled from 'styled-components';
import { Flex } from '../estilos/primitivos';

const AlertaEstilizado = styled(Flex)`
  padding: ${props => props.theme.espacamento[16]};
  border-radius: ${props => props.theme.raioBorda.md};
  gap: ${props => props.theme.espacamento[12]};
  align-items: flex-start;

  ${props => {
    const tipos = {
      info: {
        background: props.theme.cores.infoClaro,
        color: props.theme.cores.info,
      },
      sucesso: {
        background: props.theme.cores.sucessoClaro,
        color: props.theme.cores.sucesso,
      },
      alerta: {
        background: props.theme.cores.alertaClaro,
        color: props.theme.cores.alerta,
      },
      erro: {
        background: props.theme.cores.erroClaro,
        color: props.theme.cores.erro,
      },
    };
    
    const tipo = tipos[props.$tipo] || tipos.info;
    return `
      background-color: ${tipo.background};
      color: ${tipo.color};
    `;
  }}
`;

export function Alerta({ tipo = 'info', children }) {
  return (
    <AlertaEstilizado $tipo={tipo} role="alert">
      {children}
    </AlertaEstilizado>
  );
}

