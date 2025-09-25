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

const Componente_table_days_detail = () => {
  const DATA_API = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_DAYS_DETAIL;

  const url = DATA_API+getLocalStorageData('authToken_vendedor');
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
        <CircularProgress />
      );
    ;
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
            { page: 0, pageSize: 31 }
          }
        }}
        pageSizeOptions={data.pageSizeOptions}
      />
    </>
  )
}

export default Componente_table_days_detail;