export const mockBuscaResposta = {
  author: {
    name: 'Kaique',
    lastname: 'Bernardo',
  },
  categories: [
    'Tecnologia',
    'Celulares e Telefones',
    'Celulares e Smartphones',
  ],
  items: [
    {
      id: 'MLA123456',
      title: 'iPhone 13 Pro Max 256gb',
      price: {
        currency: 'ARS',
        amount: 450000,
        decimals: 0,
      },
      picture: 'https://http2.mlstatic.com/D_NQ_NP_123456-MLA123456-V.jpg',
      condition: 'new',
      free_shipping: true,
      city: 'Capital Federal',
    },
    {
      id: 'MLA789012',
      title: 'Samsung Galaxy S22 Ultra 512gb',
      price: {
        currency: 'ARS',
        amount: 380000,
        decimals: 0,
      },
      picture: 'https://http2.mlstatic.com/D_NQ_NP_789012-MLA789012-V.jpg',
      condition: 'new',
      free_shipping: true,
      city: 'Buenos Aires',
    },
    {
      id: 'MLA345678',
      title: 'Motorola Edge 30 Pro 256gb',
      price: {
        currency: 'ARS',
        amount: 180000,
        decimals: 0,
      },
      picture: 'https://http2.mlstatic.com/D_NQ_NP_345678-MLA345678-V.jpg',
      condition: 'new',
      free_shipping: false,
      city: 'Córdoba',
    },
    {
      id: 'MLA901234',
      title: 'Xiaomi Redmi Note 11 Pro 128gb',
      price: {
        currency: 'ARS',
        amount: 120000,
        decimals: 0,
      },
      picture: 'https://http2.mlstatic.com/D_NQ_NP_901234-MLA901234-V.jpg',
      condition: 'new',
      free_shipping: true,
      city: 'Rosario',
    },
  ],
};

export const mockDetalheResposta = {
  author: {
    name: 'Kaique',
    lastname: 'Bernardo',
  },
  item: {
    id: 'MLA123456',
    title: 'iPhone 13 Pro Max 256gb Azul Sierra',
    price: {
      currency: 'ARS',
      amount: 450000,
      decimals: 0,
    },
    picture: 'https://http2.mlstatic.com/D_NQ_NP_123456-MLA123456-O.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 1543,
    description:
      'iPhone 13 Pro Max com tela Super Retina XDR de 6.7 polegadas, chip A15 Bionic, sistema de câmera Pro triplo com teleobjetiva, ultra grande angular e grande angular. Grava vídeos em Dolby Vision 4K. Bateria de longa duração. Resistente à água e poeira.',
    category_id: 'MLA1055',
  },
};

export const mockCategoriasResposta = {
  categories: [
    'Tecnologia',
    'Celulares e Telefones',
    'Celulares e Smartphones',
  ],
};
