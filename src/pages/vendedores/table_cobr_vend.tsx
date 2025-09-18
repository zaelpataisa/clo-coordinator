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
    monto: string;
    est_recibo: string;
    fecha: string;
  }[];
  pageSizeOptions: number[];
}

const Componente_table_cobr_vend = () => {
  // const DATA_API = import.meta.env.PUBLIC_VENDS_TABLE_COBR_VEND;

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
    { field: 'monto', headerName: 'Monto total', flex: 1, minWidth: 100 },
    { field: 'est_recibo', headerName: 'Estado de recibo', flex: 1, minWidth: 100 },
    { field: 'fecha', headerName: 'Fecha', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, n_recibo: '01-PRC-000001', t_recibo: 'D: Anexo', monto: '32.000$', est_recibo: 'Por conciliar', fecha: '21/03/2025' },
    { id: 2, n_recibo: '02-PRC-000002', t_recibo: 'W: Recibo cobro', monto: '15.500$', est_recibo: 'Conciliado', fecha: '22/03/2025' },
    { id: 3, n_recibo: '03-PRC-000003', t_recibo: 'D: Anexo', monto: '5.200$', est_recibo: 'Por conciliar', fecha: '23/03/2025' },
    { id: 4, n_recibo: '04-PRC-000004', t_recibo: 'W: Recibo cobro', monto: '7.800$', est_recibo: 'Conciliado', fecha: '24/03/2025' },
    { id: 5, n_recibo: '05-PRC-000005', t_recibo: 'D: Anexo', monto: '2.100$', est_recibo: 'Por conciliar', fecha: '25/03/2025' },
    { id: 6, n_recibo: '06-PRC-000006', t_recibo: 'W: Recibo cobro', monto: '12.450$', est_recibo: 'Conciliado', fecha: '26/03/2025' },
    { id: 7, n_recibo: '07-PRC-000007', t_recibo: 'D: Anexo', monto: '6.700$', est_recibo: 'Por conciliar', fecha: '27/03/2025' },
    { id: 8, n_recibo: '08-PRC-000008', t_recibo: 'W: Recibo cobro', monto: '9.300$', est_recibo: 'Conciliado', fecha: '28/03/2025' },
    { id: 9, n_recibo: '09-PRC-000009', t_recibo: 'D: Anexo', monto: '1.500$', est_recibo: 'Por conciliar', fecha: '29/03/2025' },
    { id: 10, n_recibo: '10-PRC-000010', t_recibo: 'W: Recibo cobro', monto: '8.000$', est_recibo: 'Conciliado', fecha: '30/03/2025' },
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

export default Componente_table_cobr_vend;