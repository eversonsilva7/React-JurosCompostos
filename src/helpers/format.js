/**
 * Referência ao objeto que formata números
 */
const formatter = Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });
/*
function formatNumber(numberToBeFormatted) {
  return formatter.format(numberToBeFormatted);
}
*/

function formatNumberReal(numberToBeFormatted) {
  return `R$ ${formatter.format(numberToBeFormatted)}`;
}

function formatPercentage(numberToBeFormatted) {
  if (numberToBeFormatted) {
    return numberToBeFormatted.toFixed(2).replace('.', ',') + '%';
  }
}

export { formatNumberReal, formatPercentage };
