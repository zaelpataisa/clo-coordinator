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

const Componente_graphic_fact_pdds_vend = () => {
  // const DATA_API = import.meta.env.PUBLIC_VENDS_TABLE_FACT_PDDS_VEND;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //      <CircularProgress />
  //   );
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const data = {
    id: 'graphic_fact_pdds_vend',
    xAxisData: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
      "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
    ],
    seriesData: [
      {
        data: [345, 150, 351, 684, 425, 165, 600, 287, 20, 209, 410, 102, 550, 75, 812, 333, 941, 198, 705, 480, 222, 631, 38, 909, 583, 115, 762, 444, 137, 850],
        label: 'Cantidad',
        color: "var(--colors-03_50)",
      },
    ],
  };

  return (
    <>
      {data && (
        <ChartLine_01
          label={'Ventas'}
          chartData={data}
          yAxisConfig={{opacity: 1, disableLine: false}}
          lineDesign={{area: true}}
        />
      )}
    </>
  );
}

export default Componente_graphic_fact_pdds_vend;