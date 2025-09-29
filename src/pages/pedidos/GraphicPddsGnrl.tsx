import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import ChartBar_01 from "src/components/ChartBar_01";

interface ApiResponse {
  id: string;
  xAxisData: string[];
  seriesData: {
    data: number[];
    color: string;
  }[];
}

const ComponenteGraphicPdds_Gnrl = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_PEDIDOS_GRAPHIC_PDDS_GNRL;
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
        <ChartBar_01 
          chartData={data}
          label={"Cantidad"}
          yAxisConfig={{opacityTickLabel: 1, disableLine: false, disableTicks: false}}
        />
      )}
    </>
  );
}

export default ComponenteGraphicPdds_Gnrl;