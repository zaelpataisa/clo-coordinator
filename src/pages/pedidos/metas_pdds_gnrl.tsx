import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import ChartBar_02 from "src/components/ChartBar_02";

interface ApiResponse {
  id: string;
  xAxisData: { 
    data: string[] 
  }[];
  seriesData: {
    data: number[];
    label?: string;
    color?: string;
    hidden?: boolean;
  }[];
}

const Componente_metas_pdds_gnrl = () => {
  const DATA_API = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_META_VENTA_GNRL;

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

  return (
    <>
      {data && (
        <ChartBar_02
          chartData={data}
          label={"Pedidos"}
          yAxisConfig={{opacity: 1, disableLine: false, disableTicks: false}}
        />
      )}
    </>
  );
}

export default Componente_metas_pdds_gnrl;