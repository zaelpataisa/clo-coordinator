import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import ChartLine_01 from "src/components/ChartLine_01";

interface ApiResponse {
  id: string;
  xAxisData: string[];
  seriesData: {
    data: number[];
    label: string;
    color: string;
  }[];
}

const Componente_graphic_venta = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_GRAPHIC_ANALYSIS;
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
        <ChartLine_01
          label={'Cantidad'}
          chartData={data}
          yAxisConfig={{opacity: 1, disableLine: false}}
          lineDesign={{area: false}}
        />
      )}
    </>
  );
}

export default Componente_graphic_venta;