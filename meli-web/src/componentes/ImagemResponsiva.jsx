import styled from 'styled-components';

const Imagem = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  ${props => props.$cobrir && `
    width: 100%;
    height: 100%;
    object-fit: cover;
  `}
  ${props => props.$conter && `
    width: 100%;
    height: 100%;
    object-fit: contain;
  `}
`;

export function ImagemResponsiva({ 
  src, 
  alt, 
  cobrir, 
  conter,
  carregamentoLento = true,
  ...props 
}) {
  return (
    <Imagem
      src={src}
      alt={alt}
      $cobrir={cobrir}
      $conter={conter}
      loading={carregamentoLento ? 'lazy' : 'eager'}
      {...props}
    />
  );
}

