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
  const DATA_API = import.meta.env.PUBLIC_RECLAMOS_TABLE_RECLAMOS;

  const url = DATA_API+getLocalStorageData('authToken_vendedor');
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

export default Componente_table_reclamos;