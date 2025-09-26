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
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_FACT_TABLE_FACTURACION;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
       <CircularProgress />
    );
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  if (!data) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  return (
    <>
      <Tables
        rows={data.rows}
        columns={data.columns}
        initialState={{
          pagination: {
            paginationModel:
            { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={data.pageSizeOptions}
      />
    </>
  )
}

export default Componente_table_facturacion;