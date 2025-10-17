import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import logoML from '../assets/Logo_ML.png';
import iconSearch from '../assets/ic_Search.png';

const Header = styled.header`
  background-color: #FFE600;
  height: 54px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  img {
    height: 36px;
    width: auto;
  }
`;

const FormBusca = styled.form`
  flex: 1;
  display: flex;
  max-width: 600px;
`;

const InputBusca = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 12px;
  border: none;
  border-radius: 2px 0 0 2px;
  font-size: 16px;
  font-family: "Proxima Nova", "Helvetica Neue", Arial, sans-serif;
  color: #333333;
  outline: none;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  
  &::placeholder {
    color: #999999;
  }
  
  &:focus {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 1px #3483FA;
  }
`;

const BotaoBusca = styled.button`
  background-color: #FFFFFF;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 0 2px 2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 150ms ease-in-out;
  
  &:hover {
    background-color: #F7F7F7;
  }
  
  img {
    width: 18px;
    height: 18px;
  }
`;

export function Cabecalho() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [termoBusca, setTermoBusca] = useState(
    searchParams.get('search') || localStorage.getItem('ultimaBusca') || ''
  );

  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setTermoBusca(searchParam);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (termoBusca.trim()) {
      localStorage.setItem('ultimaBusca', termoBusca.trim());
      navigate(`/items?search=${encodeURIComponent(termoBusca.trim())}`);
    }
  };

  return (
    <Header>
      <Container>
        <Logo onClick={() => navigate('/')} aria-label="Ir para página inicial">
          <img src={logoML} alt="Mercado Libre" />
        </Logo>
        
        <FormBusca onSubmit={handleSubmit}>
          <InputBusca
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            aria-label="Buscar produtos"
          />
          <BotaoBusca type="submit" aria-label="Buscar">
            <img src={iconSearch} alt="" />
          </BotaoBusca>
        </FormBusca>
      </Container>
    </Header>
  );
}
