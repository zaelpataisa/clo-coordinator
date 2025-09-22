import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import ChartBar_01 from "src/components/ChartBar_01";

interface ApiResponse {
  id: string;
  xAxisData: string[];
  seriesData: {
      data: number[];
      label: string;
      color: string;
  }[];
}

const Componente_graphic_rclm_gnrl = () => {
  const DATA_API = import.meta.env.PUBLIC_RECLAMOS_GRAPHIC_RCLM_GNRL;

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
      {data && (
        <ChartBar_01 
          chartData={data}
          label={"Cantidad"}
          yAxisConfig={{opacityTickLabel: 0, disableLine: true, disableTicks: true}}
        />
      )}
    </>
  );
}

export default Componente_graphic_rclm_gnrl;