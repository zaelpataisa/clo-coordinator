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

const Componente_dttl_pdds_gnrl = () => {
  // const DATA_API = import.meta.env.PUBLIC_COORD_DTTL_PDDS_GNRL;

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
    id: 'dtll_pdds_gnrl',
    xAxisData: [
      'Transito', 'Retenidos', 'En almacén', 'Facturados'
    ],
    seriesData: [
      {
        data: [15, 16, 12, 32],
        color: 'var(--colors-03)'
      }
    ]
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

export default Componente_dttl_pdds_gnrl;