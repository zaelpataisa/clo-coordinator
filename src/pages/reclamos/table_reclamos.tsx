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
    n_recl: string;
    cliente: string;
    vendedor: string;
    monto: string;
    fch_recl: string;
    est_recl: string;
  }[];
  pageSizeOptions: number[];
}

const Componente_table_reclamos = () => {
  // const DATA_API = import.meta.env.PUBLIC_RECLAMOS_TABLE_RECLAMOS;

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
    { field: 'n_recl', headerName: 'N° Reclamo', flex: 1, minWidth: 100 },
    { field: 'cliente', headerName: 'Cliente', flex: 1, minWidth: 100 },
    { field: 'vendedor', headerName: 'Vendedor', flex: 1, minWidth: 100 },
    { field: 'monto', headerName: 'Monto del reclamo', flex: 1, minWidth: 100 },
    { field: 'fch_recl', headerName: 'Fecha del reclamo', flex: 1, minWidth: 100 },
    { field: 'est_recl', headerName: 'Estado del reclamo', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, n_recl: '0000000000000001', cliente: 'Lady Di', vendedor: '10 - Adamo', monto: '4.000 $', fch_recl: '26/01/2025', est_recl: 'Entregado' },
    { id: 2, n_recl: '0000000000000002', cliente: 'Ferrepráctico', vendedor: '11 - Mario', monto: '5.000 $', fch_recl: '19/01/2025', est_recl: 'En proceso' },
    { id: 3, n_recl: '0000000000000003', cliente: 'Soluciones C.A.', vendedor: '12 - Elias', monto: '1.500 $', fch_recl: '28/01/2025', est_recl: 'Entregado' },
    { id: 4, n_recl: '0000000000000004', cliente: 'Multiservicios', vendedor: '10 - Adamo', monto: '8.200 $', fch_recl: '30/01/2025', est_recl: 'Entregado' },
    { id: 5, n_recl: '0000000000000005', cliente: 'Todo Hogar', vendedor: '11 - Mario', monto: '600 $', fch_recl: '02/02/2025', est_recl: 'Entregado' },
    { id: 6, n_recl: '0000000000000006', cliente: 'El Gran Bazar', vendedor: '12 - Elias', monto: '25.000 $', fch_recl: '05/02/2025', est_recl: 'En proceso' },
    { id: 7, n_recl: '0000000000000007', cliente: 'Mercadito Feliz', vendedor: '10 - Adamo', monto: '1.800 $', fch_recl: '08/02/2025', est_recl: 'Entregado' },
    { id: 8, n_recl: '0000000000000008', cliente: 'Comercial P&G', vendedor: '11 - Mario', monto: '3.500 $', fch_recl: '10/02/2025', est_recl: 'Entregado' },
    { id: 9, n_recl: '0000000000000009', cliente: 'Distribuidora Fenix', vendedor: '12 - Elias', monto: '9.100 $', fch_recl: '12/02/2025', est_recl: 'En proceso' },
    { id: 10, n_recl: '0000000000000010', cliente: 'Tienda La Esquina', vendedor: '10 - Adamo', monto: '700 $', fch_recl: '15/02/2025', est_recl: 'Entregado' },
  ]
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

export default Componente_table_reclamos;