import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import { Tables } from "src/components/Tables"

interface TotalesData {
  total_cxc: number;
  total_vence_no: number;
  total_vence_no_p: number;
  total_t_coord_p: number;
  total_vence: number;
  total_vence_p: number;
  total_t_vence_p: number;
  total_v_0: number;
  total_v_1_5: number;
  total_v_6_10: number;
  total_v_11_15: number;
  total_v_16_21: number;
  total_v_21: number;
}

export type { TotalesData };

interface ApiResponse {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: {
    id: number;
    vendedor: string;
    cxc: string;
    vence_no: string;
    vence_no_p: string;
    t_coord_p: string;
    vence: string;
    vence_p: string;
    t_vence_p: string;
    v_0: string;
    v_1_5: string;
    v_6_10: string;
    v_11_15: string;
    v_16_21: string;
    v_21: string;
  }[];
  pageSizeOptions: number[];
  totales: TotalesData;
}

const ComponenteCobranzaCXC = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COBRANZA_COBRANZA_CXC;
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
    return null;
  }

  return (
    <>
      <Tables
          rows={data.rows}
          columns={data.columns}
          totales={data.totales}
          initialState={{
              pagination: {
                  paginationModel:
                  { page: 0, pageSize: data.columns.length }
              }
          }}
          pageSizeOptions={data.pageSizeOptions}
      />
    </>
  )
}

export default ComponenteCobranzaCXC;