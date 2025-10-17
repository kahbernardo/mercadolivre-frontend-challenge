export const mockBusca = {
  site_id: 'MLA',
  filters: [
    {
      id: 'category',
      values: [
        {
          path_from_root: [
            { name: 'Tecnologia' },
            { name: 'Celulares e Telefones' },
            { name: 'Celulares e Smartphones' },
          ],
        },
      ],
    },
  ],
  results: [
    {
      id: 'MLA1234567890',
      title: 'iPhone 13 128gb Azul',
      price: 799999.99,
      currency_id: 'ARS',
      thumbnail: 'http://http2.mlstatic.com/D_123456-MLA1234567890-I.jpg',
      condition: 'new',
      shipping: {
        free_shipping: true,
      },
    },
    {
      id: 'MLA2345678901',
      title: 'iPhone 12 64gb Preto',
      price: 649900.5,
      currency_id: 'ARS',
      thumbnail: 'http://http2.mlstatic.com/D_234567-MLA2345678901-I.jpg',
      condition: 'new',
      shipping: {
        free_shipping: true,
      },
    },
    {
      id: 'MLA3456789012',
      title: 'iPhone 11 128gb Branco',
      price: 549000,
      currency_id: 'ARS',
      thumbnail: 'http://http2.mlstatic.com/D_345678-MLA3456789012-I.jpg',
      condition: 'used',
      shipping: {
        free_shipping: false,
      },
    },
    {
      id: 'MLA4567890123',
      title: 'iPhone SE 64gb Vermelho',
      price: 399999,
      currency_id: 'ARS',
      thumbnail: 'http://http2.mlstatic.com/D_456789-MLA4567890123-I.jpg',
      condition: 'new',
      shipping: {
        free_shipping: true,
      },
    },
  ],
};

export const mockItens = {
  MLA1234567890: {
    item: {
      id: 'MLA1234567890',
      title: 'iPhone 13 128gb Azul',
      price: 799999.99,
      currency_id: 'ARS',
      category_id: 'MLA1055',
      thumbnail: 'http://http2.mlstatic.com/D_123456-MLA1234567890-I.jpg',
      pictures: [
        {
          url: 'http://http2.mlstatic.com/D_123456-MLA1234567890-O.jpg',
        },
      ],
      condition: 'new',
      shipping: {
        free_shipping: true,
      },
      sold_quantity: 1523,
    },
    description: {
      plain_text:
        'iPhone 13 na cor azul com 128GB de armazenamento. Tela Super Retina XDR de 6.1 polegadas, chip A15 Bionic, sistema de câmera dupla avançado com modo Noite, Estilos Fotográficos, vídeo HDR com Dolby Vision. Resistente à água e poeira. iOS 15 com novas funcionalidades.',
    },
  },
  MLA2345678901: {
    item: {
      id: 'MLA2345678901',
      title: 'iPhone 12 64gb Preto',
      price: 649900.5,
      currency_id: 'ARS',
      category_id: 'MLA1055',
      thumbnail: 'http://http2.mlstatic.com/D_234567-MLA2345678901-I.jpg',
      pictures: [
        {
          url: 'http://http2.mlstatic.com/D_234567-MLA2345678901-O.jpg',
        },
      ],
      condition: 'new',
      shipping: {
        free_shipping: true,
      },
      sold_quantity: 2834,
    },
    description: {
      plain_text:
        'iPhone 12 na cor preta com 64GB. Tela Super Retina XDR de 6.1 polegadas, chip A14 Bionic, sistema de câmera dupla com modo Noite em todas as câmeras. Gravação de vídeo HDR com Dolby Vision. Ceramic Shield mais resistente.',
    },
  },
  MLA3456789012: {
    item: {
      id: 'MLA3456789012',
      title: 'iPhone 11 128gb Branco',
      price: 549000,
      currency_id: 'ARS',
      category_id: 'MLA1055',
      thumbnail: 'http://http2.mlstatic.com/D_345678-MLA3456789012-I.jpg',
      pictures: [
        {
          url: 'http://http2.mlstatic.com/D_345678-MLA3456789012-O.jpg',
        },
      ],
      condition: 'used',
      shipping: {
        free_shipping: false,
      },
      sold_quantity: 892,
    },
    description: {
      plain_text:
        'iPhone 11 seminovo na cor branca com 128GB de armazenamento. Tela Liquid Retina HD de 6.1 polegadas, chip A13 Bionic, sistema de câmera dupla com ultra grande angular e grande angular. Modo Noite, modo Retrato e vídeo 4K.',
    },
  },
  MLA4567890123: {
    item: {
      id: 'MLA4567890123',
      title: 'iPhone SE 64gb Vermelho',
      price: 399999,
      currency_id: 'ARS',
      category_id: 'MLA1055',
      thumbnail: 'http://http2.mlstatic.com/D_456789-MLA4567890123-I.jpg',
      pictures: [
        {
          url: 'http://http2.mlstatic.com/D_456789-MLA4567890123-O.jpg',
        },
      ],
      condition: 'new',
      shipping: {
        free_shipping: true,
      },
      sold_quantity: 3421,
    },
    description: {
      plain_text:
        'iPhone SE na cor vermelha com 64GB. Design compacto de 4.7 polegadas, chip A15 Bionic (o mesmo do iPhone 13), Touch ID, câmera de 12MP com modo Retrato e Smart HDR 4. Resistente à água e poeira.',
    },
  },
};
