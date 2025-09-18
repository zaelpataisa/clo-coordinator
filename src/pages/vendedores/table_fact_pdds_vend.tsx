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
    tipo_doc: string;
    est_doc: string;
    referencia: string;
    cliente: string;
    monto: string;
    estado: string;
    est_entrega: string;
    fecha: string;
  }[];
  pageSizeOptions: number[];
}

const Componente_table_fact_pdds_vend = () => {
  // const DATA_API = import.meta.env.PUBLIC_VENDS_GRAPHIC_FACT_PDDS_VEND;

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
    { field: 'tipo_doc', headerName: 'Tipo Documento', flex: 1, minWidth: 100 },
    { field: 'est_doc', headerName: 'Est. Documento', flex: 1, minWidth: 100 },
    { field: 'referencia', headerName: 'Referencia', flex: 1, minWidth: 100 },
    { field: 'cliente', headerName: 'Cliente', flex: 1, minWidth: 100 },
    { field: 'monto', headerName: 'Monto', flex: 1, minWidth: 100 },
    { field: 'estado', headerName: 'Estado', flex: 1, minWidth: 100 },
    { field: 'est_entrega', headerName: 'Est. Entrega', flex: 1, minWidth: 100 },
    { field: 'fecha', headerName: 'Fecha', flex: 1, minWidth: 100 },
  ];
  const rows = [
    { id: 1, tipo_doc: 'FAC', est_doc: 'PAGADO', referencia: '0000000001', cliente: 'Ferretotal', monto: '4.500$', estado: 'Subido a la nube', est_entrega: 'Facturación', fecha: '14/05/2025' },
    { id: 2, tipo_doc: 'N/E', est_doc: 'PENDIENTE', referencia: '0000000002', cliente: 'Inversiones C.A.', monto: '2.100$', estado: 'Subido a la nube', est_entrega: 'Enviado', fecha: '15/05/2025' },
    { id: 3, tipo_doc: 'FAC', est_doc: 'PAGADO', referencia: '0000000003', cliente: 'Distribuidora Global', monto: '8.900$', estado: 'Anulado', est_entrega: 'En transito', fecha: '16/05/2025' },
    { id: 4, tipo_doc: 'N/E', est_doc: 'PENDIENTE', referencia: '0000000004', cliente: 'Comercial P&G', monto: '500$', estado: 'Subido a la nube', est_entrega: 'Entregado', fecha: '17/05/2025' },
    { id: 5, tipo_doc: 'FAC', est_doc: 'PAGADO', referencia: '0000000005', cliente: 'Todo Hogar', monto: '1.500$', estado: 'Subido a la nube', est_entrega: 'Facturación', fecha: '18/05/2025' },
    { id: 6, tipo_doc: 'N/E', est_doc: 'PENDIENTE', referencia: '0000000006', cliente: 'El Gran Bazar', monto: '12.000$', estado: 'Anulado', est_entrega: 'Enviado', fecha: '19/05/2025' },
    { id: 7, tipo_doc: 'FAC', est_doc: 'PAGADO', referencia: '0000000007', cliente: 'Mercadito Feliz', monto: '3.200$', estado: 'Subido a la nube', est_entrega: 'En transito', fecha: '20/05/2025' },
    { id: 8, tipo_doc: 'N/E', est_doc: 'PENDIENTE', referencia: '0000000008', cliente: 'Tienda La Esquina', monto: '700$', estado: 'Subido a la nube', est_entrega: 'Entregado', fecha: '21/05/2025' },
    { id: 9, tipo_doc: 'FAC', est_doc: 'PAGADO', referencia: '0000000009', cliente: 'Farmacia Central', monto: '9.500$', estado: 'Anulado', est_entrega: 'Facturación', fecha: '22/05/2025' },
    { id: 10, tipo_doc: 'N/E', est_doc: 'PENDIENTE', referencia: '0000000010', cliente: 'Construcciones S.A.', monto: '5.000$', estado: 'Subido a la nube', est_entrega: 'Enviado', fecha: '23/05/2025' },
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

export default Componente_table_fact_pdds_vend;