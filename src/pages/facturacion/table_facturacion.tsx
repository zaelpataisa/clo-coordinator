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
    n_doc: string;
    t_doc: string;
    vend: string;
    client: string;
    monto: string;
    emision: string;
    recep: string;
    venc: string;
    est_doc: string;
    est_ent: string;
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
    { field: 'n_doc', headerName: 'N° Documento', flex: 1, minWidth: 100 },
    { field: 't_doc', headerName: 'Tipo doc.', flex: 1, minWidth: 100 },
    { field: 'vend', headerName: 'Vendedor', flex: 1, minWidth: 100 },
    { field: 'client', headerName: 'Cliente', flex: 1, minWidth: 100 },
    { field: 'monto', headerName: 'Monto total', flex: 1, minWidth: 100 },
    { field: 'emision', headerName: 'Emisión', flex: 1, minWidth: 100 },
    { field: 'recep', headerName: 'Recepción', flex: 1, minWidth: 100 },
    { field: 'venc', headerName: 'Vencimiento', flex: 1, minWidth: 100 },
    { field: 'est_doc', headerName: 'Est. Doc.', flex: 1, minWidth: 100 },
    { field: 'est_ent', headerName: 'Est. Entrega', flex: 1, minWidth: 100 },
  ];

  const rows = [
    { id: 1, n_doc: '00000000000001', t_doc: 'FACTURA', vend: '10 - Adamo', client: 'Lady Di', monto: '30.000$', emision: '14/08/2025', recep: '-', venc: '-', est_doc: 'PAGADO', est_ent: 'Facturación' },
    { id: 2, n_doc: '00000000000002', t_doc: 'NOTA ENTREGA', vend: '15 - Maria Otilia', client: 'John Doe', monto: '15.500$', emision: '18/08/2025', recep: '25/08/2025', venc: '27/08/2025', est_doc: 'PENDIENTE', est_ent: 'Enviado' },
    { id: 3, n_doc: '00000000000003', t_doc: 'FACTURA', vend: '01 - Mario', client: 'Jane Smith', monto: '5.200$', emision: '13/08/2025', recep: '-', venc: '14/09/2025', est_doc: 'PENDIENTE', est_ent: 'En Transito' },
    { id: 4, n_doc: '00000000000004', t_doc: 'NOTA DE VENTA', vend: '10 - Adamo', client: 'Peter Jones', monto: '7.800$', emision: '20/08/2025', recep: '-', venc: '-', est_doc: 'PAGADO', est_ent: 'Facturación' },
    { id: 5, n_doc: '00000000000005', t_doc: 'NOTA ENTREGA', vend: '15 - Maria Otilia', client: 'Mary Miller', monto: '2.100$', emision: '22/08/2025', recep: '25/08/2025', venc: '27/08/2025', est_doc: 'PAGADO', est_ent: 'Entregado' },
    { id: 6, n_doc: '00000000000006', t_doc: 'FACTURA', vend: '01 - Mario', client: 'Robert Davis', monto: '12.450$', emision: '24/08/2025', recep: '-', venc: '24/09/2025', est_doc: 'PENDIENTE', est_ent: 'En Transito' },
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