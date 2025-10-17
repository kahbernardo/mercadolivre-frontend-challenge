import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import { Flex, Stack, Texto } from '../estilos/primitivos';
import { Preco } from './Preco';
import { obterDetalheProduto } from '../lib/api';
import { chavesDetalhe } from '../lib/query';
import iconShipping from '../assets/ic_shipping.png';

const Card = styled.article`
  display: flex;
  gap: 16px;
  padding: 16px;
  min-height: 180px;
  border-bottom: 1px solid #EEEEEE;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
  background-color: #FFFFFF;

  &:hover {
    background-color: #F7F7F7;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ImagemContainer = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  max-width: 680px;
`;

const PrecoLinha = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconeFrete = styled.img`
  width: 20px;
  height: 20px;
`;

const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  margin: 0;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Localidade = styled.span`
  font-size: 14px;
  color: #999999;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
`;

export function CardResultado({ item }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleClick = () => {
    navigate(`/items/${item.id}`);
  };

  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: chavesDetalhe.porId(item.id),
      queryFn: () => obterDetalheProduto(item.id),
    });
  };

  return (
    <Card
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <ImagemContainer>
        <img src={item.picture} alt={item.title} loading="lazy" decoding="async" />
      </ImagemContainer>

      <InfoContainer>
        <PrecoLinha>
          <Preco price={item.price} />
          {item.free_shipping && (
            <IconeFrete src={iconShipping} alt="Frete grátis" />
          )}
        </PrecoLinha>

        <Titulo>{item.title}</Titulo>
        
        {item.city && <Localidade>{item.city}</Localidade>}
      </InfoContainer>
    </Card>
  );
}
