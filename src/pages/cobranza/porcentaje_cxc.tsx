import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import ChartBar_02 from "src/components/ChartBar_02";

interface ApiResponse {
  query: {
    id: string;
    xAxisData: {
      data: string[];
    }[];
    seriesData: {
      data: number[];
      label: string;
      color: string;
      hidden: boolean;
    }[];
  },
  query2: {
    id: string;
    xAxisData: {
      data: string[];
    }[];
    seriesData: {
      data: number[];
      label: string;
      color: string;
      hidden: boolean;
    }[];
  }
}

const Componente_porcentaje_cxc = () => {
  const DATA_API = import.meta.env.PUBLIC_COORD_PORCENTAJE_CXC;

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
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col w-1/2 items-center justify-start space-y-4">
          <p className="font-rFont font-bold text-[var(--colors-03)] text-[1rem]">General</p>
          {data.query && (
            <ChartBar_02 
              chartData={data.query}
              label={"Porcentaje"}
              yAxisConfig={{opacity: 0, disableLine: true, disableTicks: true}}
            />
          )}
        </div>
        <div className="flex flex-col w-1/2 items-center justify-start space-y-4">
          <p className="font-rFont font-bold text-[var(--colors-03)] text-[1rem]">Por día</p>
          {data.query2 && (
            <ChartBar_02 
              chartData={data.query2}
              label={"Porcentaje"}
              yAxisConfig={{opacity: 0, disableLine: true, disableTicks: true}}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Componente_porcentaje_cxc;