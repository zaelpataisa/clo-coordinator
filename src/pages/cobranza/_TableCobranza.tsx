import { useFetch } from "src/hooks/useFetch";
import { Tables } from "src/components/Tables"
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  columns: {
    field: string;
    headerName: string;
    flex: number;
  }[];
  rows: {
    id: number;
    n_recibo: string;
    t_recibo: string;
    vendedor: string;
    moneda: string;
    monto: string;
    est_recibo: string;
    fch_creacion: string;
  }[];
  pageSizeOptions: number[];
}

const ComponenteTableCobranza = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COBRANZA_TABLE_COBR;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
      <LoadingCircle />
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

export default ComponenteTableCobranza;