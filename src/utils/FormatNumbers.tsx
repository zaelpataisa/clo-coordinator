
export function formatNumber(num: number | null | undefined): string {
  if (num === null || num === undefined) {
    return 'N/A';
  }
  
  const formatter = new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(num);
}