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
        referencia: string;
        cliente: string;
        vendedor: string;
        monto: string;
        emision: string;
        cantidad: number;
        estado: string;
    }[];
    pageSizeOptions: number[];
}

const Componente_table_facturacion = () => {
  // const DATA_API = import.meta.env.PUBLIC_FACT_TABLE_FACTURACION;

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
    { field: 'referencia', headerName: 'Referencia', flex: 1, minWidth: 100 },
    { field: 'cliente', headerName: 'Cliente', flex: 1, minWidth: 100 },
    { field: 'vendedor', headerName: 'Vendedor', flex: 1, minWidth: 100 },
    { field: 'monto', headerName: 'Monto', flex: 1, minWidth: 100 },
    { field: 'emision', headerName: 'Emision', flex: 1, minWidth: 100 },
    { field: 'cantidad', headerName: 'Cantidad', flex: 1, minWidth: 100 },
    { field: 'estado', headerName: 'Estado', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 2, referencia: '0000000000000002', cliente: 'John Doe', vendedor: 'Adamo', monto: '2.500$', emision: '15/05/2025', cantidad: 10, estado: 'SUBIDO A LA NUBE' },
    { id: 3, referencia: '0000000000000003', cliente: 'Jane Smith', vendedor: 'Maria', monto: '500$', emision: '16/05/2025', cantidad: 2, estado: 'ANULADO' },
    { id: 4, referencia: '0000000000000004', cliente: 'Peter Jones', vendedor: 'Adamo', monto: '3.200$', emision: '17/05/2025', cantidad: 12, estado: 'ACTUALIZADO' },
    { id: 5, referencia: '0000000000000005', cliente: 'Mary Miller', vendedor: 'Juan', monto: '1.800$', emision: '18/05/2025', cantidad: 7, estado: 'SUBIDO A LA NUBE' },
    { id: 6, referencia: '0000000000000006', cliente: 'Robert Davis', vendedor: 'Maria', monto: '7.500$', emision: '19/05/2025', cantidad: 25, estado: 'ACTUALIZADO' },
    { id: 7, referencia: '0000000000000007', cliente: 'Emily Wilson', vendedor: 'Adamo', monto: '950$', emision: '20/05/2025', cantidad: 3, estado: 'ACTUALIZADO' },
    { id: 8, referencia: '0000000000000008', cliente: 'Michael Brown', vendedor: 'Juan', monto: '4.100$', emision: '21/05/2025', cantidad: 9, estado: 'ANULADO' },
    { id: 9, referencia: '0000000000000009', cliente: 'Jessica Garcia', vendedor: 'Maria', monto: '600$', emision: '22/05/2025', cantidad: 4, estado: 'SUBIDO A LA NUBE' },
    { id: 10, referencia: '0000000000000010', cliente: 'Daniel Martinez', vendedor: 'Adamo', monto: '12.000$', emision: '23/05/2025', cantidad: 50, estado: 'ACTUALIZADO' },
    { id: 11, referencia: '0000000000000011', cliente: 'Samantha Rodriguez', vendedor: 'Juan', monto: '1.500$', emision: '24/05/2025', cantidad: 6, estado: 'SUBIDO A LA NUBE' },
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

export default Componente_table_facturacion;