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
    rif: string;
    name: string;
    vend: string;
    cont_esp: string;
    estado: string;
    location: string;
  }[];
  pageSizeOptions: number[];
}

const ComponenteTableClientes = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_CLIENTES_TABLE_CLIENTES;
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

export default ComponenteTableClientes;