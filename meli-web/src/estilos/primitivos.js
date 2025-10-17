import styled from 'styled-components';

export const Box = styled.div`
  ${props => props.padding && `padding: ${props.theme.espacamento[props.padding]};`}
  ${props => props.margin && `margin: ${props.theme.espacamento[props.margin]};`}
  ${props => props.fundo && `background-color: ${props.theme.cores[props.fundo]};`}
  ${props => props.borda && `border: 1px solid ${props.theme.cores[props.borda]};`}
  ${props => props.raio && `border-radius: ${props.theme.raioBorda[props.raio]};`}
  ${props => props.sombra && `box-shadow: ${props.theme.sombra[`nivel${props.sombra}`]};`}
  ${props => props.larguraMax && `max-width: ${props.larguraMax};`}
  ${props => props.altura && `height: ${props.altura};`}
  ${props => props.largura && `width: ${props.largura};`}
`;

export const Texto = styled.span`
  color: ${props => props.cor ? props.theme.cores[props.cor] : 'inherit'};
  font-size: ${props => props.tamanho ? props.theme.fonte.tamanho[props.tamanho] : 'inherit'};
  font-weight: ${props => props.peso ? props.theme.fonte.peso[props.peso] : 'inherit'};
  line-height: ${props => props.altura ? props.theme.fonte.altura[props.altura] : 'inherit'};
  ${props => props.truncar && `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Flex = styled.div`
  display: flex;
  ${props => props.direcao && `flex-direction: ${props.direcao};`}
  ${props => props.alinhar && `align-items: ${props.alinhar};`}
  ${props => props.justificar && `justify-content: ${props.justificar};`}
  ${props => props.gap && `gap: ${props.theme.espacamento[props.gap]};`}
  ${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${props => props.flex && `flex: ${props.flex};`}
`;

export const Stack = styled(Flex)`
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  ${props => props.colunas && `grid-template-columns: repeat(${props.colunas}, 1fr);`}
  ${props => props.gap && `gap: ${props.theme.espacamento[props.gap]};`}
  ${props => props.colunasAuto && `grid-template-columns: repeat(auto-fit, minmax(${props.colunasAuto}, 1fr));`}
`;

export const Container = styled(Box)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.espacamento[20]};
`;

