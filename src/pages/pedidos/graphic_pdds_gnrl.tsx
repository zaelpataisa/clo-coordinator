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

const Componente_graphic_pdds_gnrl = () => {
  const DATA_API = import.meta.env.PUBLIC_PEDIDOS_GRAPHIC_PDDS_GNRL;

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
        <ChartBar_01 
          chartData={data}
          label={"Cantidad"}
          yAxisConfig={{opacityTickLabel: 1, disableLine: false, disableTicks: false}}
        />
      )}
    </>
  );
}

export default Componente_graphic_pdds_gnrl;