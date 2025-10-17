export function formatarPreco(price) {
  const { currency, amount, decimals } = price;
  
  const simbolo = currency === 'ARS' ? '$' : currency;
  const valorFormatado = amount.toLocaleString('es-AR');
  
  if (decimals > 0) {
    const decimaisFormatados = decimals.toString().padStart(2, '0');
    return `${simbolo} ${valorFormatado},${decimaisFormatados}`;
  }
  
  return `${simbolo} ${valorFormatado}`;
}

export function formatarCondicao(condicao) {
  return condicao === 'new' ? 'Novo' : 'Usado';
}



