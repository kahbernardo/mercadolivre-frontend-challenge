export const mq = (breakpoint) => {
  return (props) => {
    const bp = props.theme.breakpoints[breakpoint];
    return `@media (min-width: ${bp})`;
  };
};

export const sombra = (nivel = 1) => {
  return (props) => props.theme.sombra[`nivel${nivel}`];
};

export const focoVisivel = () => {
  return (props) => `
    outline: 2px solid ${props.theme.cores.primario};
    outline-offset: 2px;
  `;
};

export const truncarTexto = () => `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const esconderVisualmente = () => `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

