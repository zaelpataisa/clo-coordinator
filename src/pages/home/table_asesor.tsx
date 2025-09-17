import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import { Tables } from "src/components/Tables"

interface ApiResponse {
    columns: {
        field: string;
        headerName: string;
        flex: number;
    }[];
    rows: {
        id: number;
        asesor: string;
        fact_meta: string;
        fact: string;
        fact_rest: string;
        fact_percent: string;
        meta_cobr: string;
        cobr: string;
        cobr_rest: string;
        cobr_percent: string;
    }[];
    pageSizeOptions: number[];
}

const Componente_table_asesor = () => {
  // const DATA_API = import.meta.env.PUBLIC_COORD_GRAPHIC_VENTA;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //       <CircularProgress />
  //     );
  //   ;
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const columns = [
    { field: 'asesor', headerName: 'Asesor', flex: 1, minWidth: 100 },
    { field: 'fact_meta', headerName: 'Meta facturación', flex: 1, minWidth: 100 },
    { field: 'fact', headerName: 'Facturado', flex: 1, minWidth: 100 },
    { field: 'fact_rest', headerName: 'Resta', flex: 1, minWidth: 100 },
    { field: 'fact_percent', headerName: 'F%', flex: 1, minWidth: 100 },
    { field: 'meta_cobr', headerName: 'Meta cobranza', flex: 1, minWidth: 100 },
    { field: 'cobr', headerName: 'Cobrado', flex: 1, minWidth: 100 },
    { field: 'cobr_rest', headerName: 'Resta', flex: 1, minWidth: 100 },
    { field: 'cobr_percent', headerName: 'C%', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, asesor: 'María', fact_meta: '25.000$', fact: '24.993$', fact_rest: '7$', fact_percent: '99.97%', meta_cobr: '17.500$', cobr: '14.000$', cobr_rest: '3.500$', cobr_percent: '80%' },
    { id: 2, asesor: 'José', fact_meta: '40.000$', fact: '25.001$', fact_rest: '14.999$', fact_percent: '62.5%', meta_cobr: '35.000$', cobr: '12.000$', cobr_rest: '23.000$', cobr_percent: '34.2$' },
    { id: 3, asesor: 'Jesús', fact_meta: '10.000$', fact: '7.999$', fact_rest: '2.001$', fact_percent: '79.99$', meta_cobr: '9.500$', cobr: '7.000$', cobr_rest: '2.500$', cobr_percent: '73.68$' },
    { id: 4, asesor: 'Asesor 4', fact_meta: '20.000$', fact: '15.000$', fact_rest: '5.000$', fact_percent: '75%', meta_cobr: '15.000$', cobr: '10.000$', cobr_rest: '5.000$', cobr_percent: '66.67%' },
    { id: 5, asesor: 'Asesor 5', fact_meta: '30.000$', fact: '28.000$', fact_rest: '2.000$', fact_percent: '93.33%', meta_cobr: '25.000$', cobr: '22.000$', cobr_rest: '3.000$', cobr_percent: '88%' },
    { id: 6, asesor: 'Asesor 6', fact_meta: '15.000$', fact: '12.500$', fact_rest: '2.500$', fact_percent: '83.33%', meta_cobr: '10.000$', cobr: '8.000$', cobr_rest: '2.000$', cobr_percent: '80%' },
    { id: 7, asesor: 'Asesor 7', fact_meta: '22.000$', fact: '20.500$', fact_rest: '1.500$', fact_percent: '93.18%', meta_cobr: '18.000$', cobr: '15.000$', cobr_rest: '3.000$', cobr_percent: '83.33%' },
    { id: 8, asesor: 'Asesor 8', fact_meta: '28.000$', fact: '27.000$', fact_rest: '1.000$', fact_percent: '96.43%', meta_cobr: '24.000$', cobr: '21.000$', cobr_rest: '3.000$', cobr_percent: '87.5%' },
    { id: 9, asesor: 'Asesor 9', fact_meta: '35.000$', fact: '30.000$', fact_rest: '5.000$', fact_percent: '85.71%', meta_cobr: '30.000$', cobr: '25.000$', cobr_rest: '5.000$', cobr_percent: '83.33%' },
    { id: 10, asesor: 'Asesor 10', fact_meta: '18.000$', fact: '17.500$', fact_rest: '500$', fact_percent: '97.22%', meta_cobr: '15.000$', cobr: '14.000$', cobr_rest: '1.000$', cobr_percent: '93.33%' },
    { id: 11, asesor: 'Asesor 11', fact_meta: '26.000$', fact: '22.000$', fact_rest: '4.000$', fact_percent: '84.62%', meta_cobr: '20.000$', cobr: '18.000$', cobr_rest: '2.000$', cobr_percent: '90%' },
    { id: 12, asesor: 'Asesor 12', fact_meta: '45.000$', fact: '40.000$', fact_rest: '5.000$', fact_percent: '88.89%', meta_cobr: '38.000$', cobr: '35.000$', cobr_rest: '3.000$', cobr_percent: '92.11%' },
    { id: 13, asesor: 'Asesor 13', fact_meta: '12.000$', fact: '10.000$', fact_rest: '2.000$', fact_percent: '83.33%', meta_cobr: '8.000$', cobr: '7.000$', cobr_rest: '1.000$', cobr_percent: '87.5%' },
    { id: 14, asesor: 'Asesor 14', fact_meta: '32.000$', fact: '30.500$', fact_rest: '1.500$', fact_percent: '95.31%', meta_cobr: '28.000$', cobr: '25.000$', cobr_rest: '3.000$', cobr_percent: '89.29%' },
    { id: 15, asesor: 'Asesor 15', fact_meta: '27.000$', fact: '25.000$', fact_rest: '2.000$', fact_percent: '92.59%', meta_cobr: '23.000$', cobr: '21.000$', cobr_rest: '2.000$', cobr_percent: '91.3%' },
    { id: 16, asesor: 'Asesor 16', fact_meta: '38.000$', fact: '35.000$', fact_rest: '3.000$', fact_percent: '92.11%', meta_cobr: '32.000$', cobr: '28.000$', cobr_rest: '4.000$', cobr_percent: '87.5%' },
    { id: 17, asesor: 'Asesor 17', fact_meta: '23.000$', fact: '21.000$', fact_rest: '2.000$', fact_percent: '91.3%', meta_cobr: '19.000$', cobr: '17.000$', cobr_rest: '2.000$', cobr_percent: '89.47%' },
    { id: 18, asesor: 'Asesor 18', fact_meta: '42.000$', fact: '41.000$', fact_rest: '1.000$', fact_percent: '97.62%', meta_cobr: '37.000$', cobr: '35.000$', cobr_rest: '2.000$', cobr_percent: '94.6%' },
    { id: 19, asesor: 'Asesor 19', fact_meta: '19.000$', fact: '18.500$', fact_rest: '500$', fact_percent: '97.37%', meta_cobr: '16.000$', cobr: '15.000$', cobr_rest: '1.000$', cobr_percent: '93.75%' },
    { id: 20, asesor: 'Asesor 20', fact_meta: '31.000$', fact: '29.000$', fact_rest: '2.000$', fact_percent: '93.55%', meta_cobr: '27.000$', cobr: '25.000$', cobr_rest: '2.000$', cobr_percent: '92.59%' },
    { id: 21, asesor: 'Asesor 21', fact_meta: '24.000$', fact: '23.500$', fact_rest: '500$', fact_percent: '97.92%', meta_cobr: '20.000$', cobr: '19.000$', cobr_rest: '1.000$', cobr_percent: '95%' },
    { id: 22, asesor: 'Asesor 22', fact_meta: '36.000$', fact: '32.000$', fact_rest: '4.000$', fact_percent: '88.89%', meta_cobr: '30.000$', cobr: '28.000$', cobr_rest: '2.000$', cobr_percent: '93.33%' },
    { id: 23, asesor: 'Asesor 23', fact_meta: '17.000$', fact: '15.500$', fact_rest: '1.500$', fact_percent: '91.18%', meta_cobr: '13.000$', cobr: '12.000$', cobr_rest: '1.000$', cobr_percent: '92.31%' },
    { id: 24, asesor: 'Asesor 24', fact_meta: '29.000$', fact: '28.500$', fact_rest: '500$', fact_percent: '98.28%', meta_cobr: '25.000$', cobr: '24.000$', cobr_rest: '1.000$', cobr_percent: '96%' },
    { id: 25, asesor: 'Asesor 25', fact_meta: '33.000$', fact: '30.000$', fact_rest: '3.000$', fact_percent: '90.91%', meta_cobr: '28.000$', cobr: '25.000$', cobr_rest: '3.000$', cobr_percent: '89.29%' },
    { id: 26, asesor: 'Asesor 26', fact_meta: '48.000$', fact: '45.000$', fact_rest: '3.000$', fact_percent: '93.75%', meta_cobr: '42.000$', cobr: '40.000$', cobr_rest: '2.000$', cobr_percent: '95.24%' },
    { id: 27, asesor: 'Asesor 27', fact_meta: '21.000$', fact: '19.000$', fact_rest: '2.000$', fact_percent: '90.48%', meta_cobr: '17.000$', cobr: '16.000$', cobr_rest: '1.000$', cobr_percent: '94.12%' },
    { id: 28, asesor: 'Asesor 28', fact_meta: '37.000$', fact: '35.000$', fact_rest: '2.000$', fact_percent: '94.59%', meta_cobr: '32.000$', cobr: '30.000$', cobr_rest: '2.000$', cobr_percent: '93.75%' },
    { id: 29, asesor: 'Asesor 29', fact_meta: '16.000$', fact: '14.000$', fact_rest: '2.000$', fact_percent: '87.5%', meta_cobr: '12.000$', cobr: '10.000$', cobr_rest: '2.000$', cobr_percent: '83.33%' },
    { id: 30, asesor: 'Asesor 30', fact_meta: '40.000$', fact: '38.000$', fact_rest: '2.000$', fact_percent: '95%', meta_cobr: '35.000$', cobr: '33.000$', cobr_rest: '2.000$', cobr_percent: '94.29%' },
    { id: 31, asesor: 'Asesor 31', fact_meta: '25.000$', fact: '22.000$', fact_rest: '3.000$', fact_percent: '88%', meta_cobr: '20.000$', cobr: '18.000$', cobr_rest: '2.000$', cobr_percent: '90%' },
    { id: 32, asesor: 'Asesor 32', fact_meta: '39.000$', fact: '36.000$', fact_rest: '3.000$', fact_percent: '92.31%', meta_cobr: '34.000$', cobr: '30.000$', cobr_rest: '4.000$', cobr_percent: '88.24%' },
    { id: 33, asesor: 'Asesor 33', fact_meta: '28.000$', fact: '26.000$', fact_rest: '2.000$', fact_percent: '92.86%', meta_cobr: '24.000$', cobr: '22.000$', cobr_rest: '2.000$', cobr_percent: '91.67%' },
    { id: 34, asesor: 'Asesor 34', fact_meta: '31.000$', fact: '30.000$', fact_rest: '1.000$', fact_percent: '96.77%', meta_cobr: '28.000$', cobr: '26.000$', cobr_rest: '2.000$', cobr_percent: '92.86%' },
    { id: 35, asesor: 'Asesor 35', fact_meta: '22.000$', fact: '21.000$', fact_rest: '1.000$', fact_percent: '95.45%', meta_cobr: '19.000$', cobr: '18.000$', cobr_rest: '1.000$', cobr_percent: '94.74%' },
    { id: 36, asesor: 'Asesor 36', fact_meta: '46.000$', fact: '44.000$', fact_rest: '2.000$', fact_percent: '95.65%', meta_cobr: '40.000$', cobr: '38.000$', cobr_rest: '2.000$', cobr_percent: '95%' },
    { id: 37, asesor: 'Asesor 37', fact_meta: '19.000$', fact: '17.000$', fact_rest: '2.000$', fact_percent: '89.47%', meta_cobr: '15.000$', cobr: '14.000$', cobr_rest: '1.000$', cobr_percent: '93.33%' },
    { id: 38, asesor: 'Asesor 38', fact_meta: '34.000$', fact: '32.000$', fact_rest: '2.000$', fact_percent: '94.12%', meta_cobr: '30.000$', cobr: '28.000$', cobr_rest: '2.000$', cobr_percent: '93.33%' },
    { id: 39, asesor: 'Asesor 39', fact_meta: '27.000$', fact: '25.500$', fact_rest: '1.500$', fact_percent: '94.44%', meta_cobr: '23.000$', cobr: '21.500$', cobr_rest: '1.500$', cobr_percent: '93.48%' },
    { id: 40, asesor: 'Asesor 40', fact_meta: '41.000$', fact: '39.000$', fact_rest: '2.000$', fact_percent: '95.12%', meta_cobr: '37.000$', cobr: '35.000$', cobr_rest: '2.000$', cobr_percent: '94.6%' },
    { id: 41, asesor: 'Asesor 41', fact_meta: '20.000$', fact: '18.000$', fact_rest: '2.000$', fact_percent: '90%', meta_cobr: '16.000$', cobr: '14.000$', cobr_rest: '2.000$', cobr_percent: '87.5%' },
    { id: 42, asesor: 'Asesor 42', fact_meta: '36.000$', fact: '33.000$', fact_rest: '3.000$', fact_percent: '91.67%', meta_cobr: '30.000$', cobr: '27.000$', cobr_rest: '3.000$', cobr_percent: '90%' },
    { id: 43, asesor: 'Asesor 43', fact_meta: '15.000$', fact: '13.000$', fact_rest: '2.000$', fact_percent: '86.67%', meta_cobr: '11.000$', cobr: '9.000$', cobr_rest: '2.000$', cobr_percent: '81.82%' },
    { id: 44, asesor: 'Asesor 44', fact_meta: '28.000$', fact: '26.000$', fact_rest: '2.000$', fact_percent: '92.86%', meta_cobr: '24.000$', cobr: '22.000$', cobr_rest: '2.000$', cobr_percent: '91.67%' },
    { id: 45, asesor: 'Asesor 45', fact_meta: '32.000$', fact: '29.000$', fact_rest: '3.000$', fact_percent: '90.63%', meta_cobr: '27.000$', cobr: '24.000$', cobr_rest: '3.000$', cobr_percent: '88.89%' },
    { id: 46, asesor: 'Asesor 46', fact_meta: '45.000$', fact: '42.000$', fact_rest: '3.000$', fact_percent: '93.33%', meta_cobr: '39.000$', cobr: '36.000$', cobr_rest: '3.000$', cobr_percent: '92.31%' },
    { id: 47, asesor: 'Asesor 47', fact_meta: '23.000$', fact: '21.000$', fact_rest: '2.000$', fact_percent: '91.3%', meta_cobr: '19.000$', cobr: '17.000$', cobr_rest: '2.000$', cobr_percent: '89.47%' },
    { id: 48, asesor: 'Asesor 48', fact_meta: '30.000$', fact: '27.000$', fact_rest: '3.000$', fact_percent: '90%', meta_cobr: '25.000$', cobr: '22.000$', cobr_rest: '3.000$', cobr_percent: '88%' },
    { id: 49, asesor: 'Asesor 49', fact_meta: '18.000$', fact: '16.000$', fact_rest: '2.000$', fact_percent: '88.89%', meta_cobr: '14.000$', cobr: '12.000$', cobr_rest: '2.000$', cobr_percent: '85.71%' },
    { id: 50, asesor: 'Asesor 50', fact_meta: '35.000$', fact: '31.000$', fact_rest: '4.000$', fact_percent: '88.57%', meta_cobr: '29.000$', cobr: '25.000$', cobr_rest: '4.000$', cobr_percent: '86.21%' },
    { id: 51, asesor: 'Asesor 51', fact_meta: '24.000$', fact: '22.000$', fact_rest: '2.000$', fact_percent: '91.67%', meta_cobr: '20.000$', cobr: '18.000$', cobr_rest: '2.000$', cobr_percent: '90%' },
    { id: 52, asesor: 'Asesor 52', fact_meta: '40.000$', fact: '38.000$', fact_rest: '2.000$', fact_percent: '95%', meta_cobr: '36.000$', cobr: '34.000$', cobr_rest: '2.000$', cobr_percent: '94.44%' },
    { id: 53, asesor: 'Asesor 53', fact_meta: '26.000$', fact: '24.000$', fact_rest: '2.000$', fact_percent: '92.31%', meta_cobr: '22.000$', cobr: '20.000$', cobr_rest: '2.000$', cobr_percent: '90.91%' },
    { id: 54, asesor: 'Asesor 54', fact_meta: '39.000$', fact: '35.000$', fact_rest: '4.000$', fact_percent: '89.74%', meta_cobr: '33.000$', cobr: '29.000$', cobr_rest: '4.000$', cobr_percent: '87.88%' },
    { id: 55, asesor: 'Asesor 55', fact_meta: '21.000$', fact: '19.000$', fact_rest: '2.000$', fact_percent: '90.48%', meta_cobr: '17.000$', cobr: '15.000$', cobr_rest: '2.000$', cobr_percent: '88.24%' },
    { id: 56, asesor: 'Asesor 56', fact_meta: '34.000$', fact: '31.000$', fact_rest: '3.000$', fact_percent: '91.18%', meta_cobr: '29.000$', cobr: '26.000$', cobr_rest: '3.000$', cobr_percent: '89.66%' },
    { id: 57, asesor: 'Asesor 57', fact_meta: '17.000$', fact: '15.000$', fact_rest: '2.000$', fact_percent: '88.24%', meta_cobr: '13.000$', cobr: '11.000$', cobr_rest: '2.000$', cobr_percent: '84.62%' },
    { id: 58, asesor: 'Asesor 58', fact_meta: '30.000$', fact: '28.000$', fact_rest: '2.000$', fact_percent: '93.33%', meta_cobr: '26.000$', cobr: '24.000$', cobr_rest: '2.000$', cobr_percent: '92.31%' },
    { id: 59, asesor: 'Asesor 59', fact_meta: '25.000$', fact: '23.000$', fact_rest: '2.000$', fact_percent: '92%', meta_cobr: '21.000$', cobr: '19.000$', cobr_rest: '2.000$', cobr_percent: '90.48%' },
    { id: 60, asesor: 'Asesor 60', fact_meta: '37.000$', fact: '34.000$', fact_rest: '3.000$', fact_percent: '91.89%', meta_cobr: '32.000$', cobr: '29.000$', cobr_rest: '3.000$', cobr_percent: '90.63%' },
    { id: 61, asesor: 'Asesor 61', fact_meta: '22.000$', fact: '20.000$', fact_rest: '2.000$', fact_percent: '90.91%', meta_cobr: '18.000$', cobr: '16.000$', cobr_rest: '2.000$', cobr_percent: '88.89%' },
    { id: 62, asesor: 'Asesor 62', fact_meta: '31.000$', fact: '28.000$', fact_rest: '3.000$', fact_percent: '90.32%', meta_cobr: '26.000$', cobr: '23.000$', cobr_rest: '3.000$', cobr_percent: '88.46%' },
    { id: 63, asesor: 'Asesor 63', fact_meta: '19.000$', fact: '17.000$', fact_rest: '2.000$', fact_percent: '89.47%', meta_cobr: '15.000$', cobr: '13.000$', cobr_rest: '2.000$', cobr_percent: '86.67%' },
    { id: 64, asesor: 'Asesor 64', fact_meta: '35.000$', fact: '32.000$', fact_rest: '3.000$', fact_percent: '91.43%', meta_cobr: '30.000$', cobr: '27.000$', cobr_rest: '3.000$', cobr_percent: '90%' },
    { id: 65, asesor: 'Asesor 65', fact_meta: '28.000$', fact: '25.000$', fact_rest: '3.000$', fact_percent: '89.29%', meta_cobr: '23.000$', cobr: '20.000$', cobr_rest: '3.000$', cobr_percent: '86.96%' },
    { id: 66, asesor: 'Asesor 66', fact_meta: '42.000$', fact: '39.000$', fact_rest: '3.000$', fact_percent: '92.86%', meta_cobr: '37.000$', cobr: '34.000$', cobr_rest: '3.000$', cobr_percent: '91.89%' },
    { id: 67, asesor: 'Asesor 67', fact_meta: '23.000$', fact: '21.500$', fact_rest: '1.500$', fact_percent: '93.48%', meta_cobr: '19.000$', cobr: '17.500$', cobr_rest: '1.500$', cobr_percent: '92.11%' },
    { id: 68, asesor: 'Asesor 68', fact_meta: '36.000$', fact: '33.500$', fact_rest: '2.500$', fact_percent: '93.06%', meta_cobr: '31.000$', cobr: '28.500$', cobr_rest: '2.500$', cobr_percent: '91.94%' },
    { id: 69, asesor: 'Asesor 69', fact_meta: '20.000$', fact: '18.000$', fact_rest: '2.000$', fact_percent: '90%', meta_cobr: '16.000$', cobr: '14.000$', cobr_rest: '2.000$', cobr_percent: '87.5%' },
    { id: 70, asesor: 'Asesor 70', fact_meta: '38.000$', fact: '35.000$', fact_rest: '3.000$', fact_percent: '92.11%', meta_cobr: '33.000$', cobr: '30.000$', cobr_rest: '3.000$', cobr_percent: '90.91%' },
    { id: 71, asesor: 'Asesor 71', fact_meta: '25.000$', fact: '22.000$', fact_rest: '3.000$', fact_percent: '88%', meta_cobr: '20.000$', cobr: '17.000$', cobr_rest: '3.000$', cobr_percent: '85%' },
    { id: 72, asesor: 'Asesor 72', fact_meta: '33.000$', fact: '30.000$', fact_rest: '3.000$', fact_percent: '90.91%', meta_cobr: '28.000$', cobr: '25.000$', cobr_rest: '3.000$', cobr_percent: '89.29%' },
    { id: 73, asesor: 'Asesor 73', fact_meta: '18.000$', fact: '16.500$', fact_rest: '1.500$', fact_percent: '91.67%', meta_cobr: '14.000$', cobr: '12.500$', cobr_rest: '1.500$', cobr_percent: '89.29%' },
    { id: 74, asesor: 'Asesor 74', fact_meta: '40.000$', fact: '37.000$', fact_rest: '3.000$', fact_percent: '92.5%', meta_cobr: '35.000$', cobr: '32.000$', cobr_rest: '3.000$', cobr_percent: '91.43%' },
    { id: 75, asesor: 'Asesor 75', fact_meta: '22.000$', fact: '20.000$', fact_rest: '2.000$', fact_percent: '90.91%', meta_cobr: '18.000$', cobr: '16.000$', cobr_rest: '2.000$', cobr_percent: '88.89%' },
    { id: 76, asesor: 'Asesor 76', fact_meta: '35.000$', fact: '32.000$', fact_rest: '3.000$', fact_percent: '91.43%', meta_cobr: '30.000$', cobr: '27.000$', cobr_rest: '3.000$', cobr_percent: '90%' },
    { id: 77, asesor: 'Asesor 77', fact_meta: '16.000$', fact: '14.500$', fact_rest: '1.500$', fact_percent: '90.63%', meta_cobr: '12.000$', cobr: '10.500$', cobr_rest: '1.500$', cobr_percent: '87.5%' },
    { id: 78, asesor: 'Asesor 78', fact_meta: '30.000$', fact: '27.500$', fact_rest: '2.500$', fact_percent: '91.67%', meta_cobr: '25.000$', cobr: '22.500$', cobr_rest: '2.500$', cobr_percent: '90%' },
    { id: 79, asesor: 'Asesor 79', fact_meta: '24.000$', fact: '21.500$', fact_rest: '2.500$', fact_percent: '89.58%', meta_cobr: '20.000$', cobr: '17.500$', cobr_rest: '2.500$', cobr_percent: '87.5%' },
  ];
  const pageSizeOptions = [20];

  return (
    <>
      <Tables
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel:
            { page: 0, pageSize: 20 }
          }
        }}
        pageSizeOptions={pageSizeOptions}
      />
    </>
  )
}

export default Componente_table_asesor;