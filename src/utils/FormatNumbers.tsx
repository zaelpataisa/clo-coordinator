const numberFormatter = new Intl.NumberFormat('es-ES', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: true, 
});

export function formatNumber(num: number | null | undefined): string {
  if (num === null || num === undefined) {
    return 'N/A';
  }
  return numberFormatter.format(num);
}

export function formatEuropeanNumber(value: string): number {
  return parseFloat(value.replace(/\./g, '').replace(',', '.'));
}
