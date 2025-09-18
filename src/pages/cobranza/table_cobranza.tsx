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
    n_recibo: string;
    t_recibo: string;
    vendedor: string;
    moneda: string;
    monto: string;
    est_recibo: string;
    fch_creacion: string;
  }[];
  pageSizeOptions: number[];
}

const Componente_table_cobranza = () => {
  // const DATA_API = import.meta.env.PUBLIC_COBRANZA_TABLE_COBR;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //      <CircularProgress />
  //   );
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const columns = [
    { field: 'n_recibo', headerName: 'N° de recibo', flex: 1, minWidth: 100 },
    { field: 't_recibo', headerName: 'Tipo de recibo', flex: 1, minWidth: 100 },
    { field: 'vendedor', headerName: 'Vendedor', flex: 1, minWidth: 100 },
    { field: 'moneda', headerName: 'Moneda', flex: 1, minWidth: 100 },
    { field: 'monto', headerName: 'Monto total', flex: 1, minWidth: 100 },
    { field: 'est_recibo', headerName: 'Est. recibo', flex: 1, minWidth: 100 },
    { field: 'fch_creacion', headerName: 'Fecha de creación', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, n_recibo: '01-PRC-00000001', t_recibo: 'D: Anexo de deposito', vendedor: '10 - Adamo', moneda: 'Dolar', monto: '2.000 $', est_recibo: 'Por conciliar', fch_creacion: '14/05/2025' },
    { id: 2, n_recibo: '02-PRC-00000002', t_recibo: 'W: Recibo de cobro', vendedor: '11 - Mario', moneda: 'Bolivar', monto: '2.000.025 Bs', est_recibo: 'Conciliado', fch_creacion: '18/05/2025' },
    { id: 3, n_recibo: '03-PRC-00000003', t_recibo: 'W: Recibo de cobro', vendedor: '12 - Elias', moneda: 'Dolar', monto: '42.000 $', est_recibo: 'Anulado', fch_creacion: '23/05/2025' },
    { id: 4, n_recibo: '04-PRC-00000004', t_recibo: 'D: Anexo de deposito', vendedor: '10 - Adamo', moneda: 'Dolar', monto: '1.500 $', est_recibo: 'Por conciliar', fch_creacion: '25/05/2025' },
    { id: 5, n_recibo: '05-PRC-00000005', t_recibo: 'W: Recibo de cobro', vendedor: '13 - Jesus', moneda: 'Dolar', monto: '5.600 $', est_recibo: 'Conciliado', fch_creacion: '28/05/2025' },
    { id: 6, n_recibo: '06-PRC-00000006', t_recibo: 'D: Anexo de deposito', vendedor: '12 - Elias', moneda: 'Bolivar', monto: '500.000 Bs', est_recibo: 'Por conciliar', fch_creacion: '30/05/2025' },
    { id: 7, n_recibo: '07-PRC-00000007', t_recibo: 'W: Recibo de cobro', vendedor: '11 - Mario', moneda: 'Dolar', monto: '8.900 $', est_recibo: 'Conciliado', fch_creacion: '01/06/2025' },
    { id: 8, n_recibo: '08-PRC-00000008', t_recibo: 'W: Recibo de cobro', vendedor: '10 - Adamo', moneda: 'Dolar', monto: '32.000 $', est_recibo: 'Anulado', fch_creacion: '03/06/2025' },
    { id: 9, n_recibo: '09-PRC-00000009', t_recibo: 'D: Anexo de deposito', vendedor: '13 - Jesus', moneda: 'Bolivar', monto: '1.250.000 Bs', est_recibo: 'Por conciliar', fch_creacion: '05/06/2025' },
    { id: 10, n_recibo: '10-PRC-00000010', t_recibo: 'W: Recibo de cobro', vendedor: '12 - Elias', moneda: 'Dolar', monto: '15.000 $', est_recibo: 'Conciliado', fch_creacion: '07/06/2025' },
  ];
  const pageSizeOptions = [5, 10, 25, 50, 100];

  return (
    <>
      <Tables
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel:
            { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={pageSizeOptions}
      />
    </>
  )
}

export default Componente_table_cobranza;