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
}

const Componente_cobranza_cxc = () => {
  const DATA_API = import.meta.env.PUBLIC_COBRANZA_COBRANZA_CXC;

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
    return null;
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

export default Componente_cobranza_cxc;