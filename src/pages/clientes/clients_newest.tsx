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

const Componente_clients_newest = () => {
  // const DATA_API = import.meta.env.PUBLIC_CLIENTES_CLIENTS_NEWEST;

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
    id: 'clients_newest',
    xAxisData: [
      'Adamo', 'Mario', 'Asesor 4', 'Asesor 5', 'Asesor 6', 'Asesor 7',
      'Adamo1', 'Mario1', 'Asesor 41', 'Asesor 51', 'Asesor 61', 'Asesor 71'
    ],
    seriesData: [
      {
        data: [4, 3, 5, 2, 5, 7, 4, 3, 5, 2, 5, 7],
        color: 'var(--colors-03)',
      },
    ],
  };

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

export default Componente_clients_newest;