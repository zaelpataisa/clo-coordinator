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

const Componente_dttl_rclm_gnrl = () => {
  // const DATA_API = import.meta.env.PUBLIC_RECLAMOS_DTTL_RCLM_GNRL;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //       <CircularProgress />
  //     );
  //   ;
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const data = {
    id: 'dtll_rclm_gnrl',
    xAxisData: [
      'Defecto de fábrica',
      'Grantía del proveedor',
      'Mal manejo de mercancía',
      'Error de venta',
      'Error en catálogo del producto',
      'Mal despacho (faltó/sobro)',
    ],
    seriesData: [
      {
        data: [30, 25, 28, 16, 24, 9],
        color: 'var(--colors-03)',
      },
    ],
  };

  return (
    <>
      {data && (
        <ChartBar_01 
          chartData={data}
          label={""}
          yAxisConfig={{opacityTickLabel: 0, disableLine: true, disableTicks: true}}
        />
      )}
    </>
  );
}

export default Componente_dttl_rclm_gnrl;