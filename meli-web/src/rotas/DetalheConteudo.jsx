import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDetalhe } from '../hooks/useDetalhe';
import { useCategorias } from '../hooks/useCategorias';
import { Breadcrumb } from '../componentes/Breadcrumb';
import { Preco } from '../componentes/Preco';
import { formatarCondicao } from '../lib/formatacao';
import { IndicadorAtualizando } from '../componentes/IndicadorAtualizando';

const Container = styled.div`
  background-color: #FFFFFF;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 680px 1fr;
  }
`;

const ImagemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    max-width: 680px;
    height: auto;
    object-fit: contain;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Meta = styled.div`
  font-size: 14px;
  color: #999999;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
`;

const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Titulo = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #333333;
  margin: 0;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PrecoContainer = styled.div`
  margin-bottom: 32px;
`;

const BotaoComprar = styled.button`
  width: 100%;
  height: 46px;
  background-color: #3483FA;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
  
  &:hover {
    background-color: #2968C8;
  }
  
  &:active {
    background-color: #1F5BB7;
  }
`;

const DescricaoSection = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #EEEEEE;
`;

const DescricaoTitulo = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: #333333;
  margin: 0 0 16px 0;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
`;

const DescricaoTexto = styled.p`
  font-size: 16px;
  color: #666666;
  line-height: 1.4;
  margin: 0;
  white-space: pre-wrap;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
`;

export function DetalheConteudo() {
  const { id } = useParams();
  const { data: dados, isFetching } = useDetalhe(id);

  const categoryId = dados?.item?.category_id;
  const { data: categoriasData } = useCategorias(categoryId);

  const item = dados?.item;
  const categorias = categoriasData?.categories;

  if (!item) {
    return null;
  }

  return (
    <>
      {categorias && categorias.length > 0 && <Breadcrumb categorias={categorias} />}
      
      <Container>
        <Grid>
          <ImagemContainer>
            <img src={item.picture} alt={item.title} />
          </ImagemContainer>

          <InfoContainer>
            <Meta>
              {formatarCondicao(item.condition)} - {item.sold_quantity} vendidos
            </Meta>

            <TituloContainer>
              <Titulo>{item.title}</Titulo>
              {isFetching && <IndicadorAtualizando />}
            </TituloContainer>

            <PrecoContainer>
              <Preco price={item.price} tamanho="grande" />
            </PrecoContainer>

            <BotaoComprar>Comprar</BotaoComprar>
          </InfoContainer>
        </Grid>

        <DescricaoSection>
          <DescricaoTitulo>Descrição do produto</DescricaoTitulo>
          <DescricaoTexto>
            {item.description || 'Sem descrição disponível'}
          </DescricaoTexto>
        </DescricaoSection>
      </Container>
    </>
  );
}
