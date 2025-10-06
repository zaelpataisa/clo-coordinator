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

export function parseEuropeanNumber(value: string | number){
  let strValue = String(value);
  strValue = strValue.replace(/\./g, '');
  strValue = strValue.replace(',', '.');
  return Number(strValue);
}

export const formatDate = (dateObj: any) => 
  String(dateObj.getDate()).padStart(2, '0') + '/' 
  + String(dateObj.getMonth() + 1).padStart(2, '0') + '/' 
  + dateObj.getFullYear();
  