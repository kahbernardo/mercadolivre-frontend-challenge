export function separarValor(valor) {
  const valorEmCentavos = Math.round(valor * 100);
  const parteInteira = Math.floor(valorEmCentavos / 100);
  const decimais = valorEmCentavos % 100;

  return {
    amount: parteInteira,
    decimals: decimais,
  };
}
