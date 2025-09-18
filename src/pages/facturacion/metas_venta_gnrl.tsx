import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

import ChartLine_01 from "src/components/ChartLine_01";
import ChartBar_02 from "src/components/ChartBar_02";

interface ApiResponse {
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

const Componente_metas_venta_gnrl = () => {
  // const DATA_API = import.meta.env.PUBLIC_FACT_METAS_VENTA_GNRL;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //     <CircularProgress />
  //   );
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const data = {
  id: 'metasVentaGeneral',
  xAxisData: [
    {
      data: [
        'Adamo', 'Mario', 'Asesor 4', 'Asesor 5', 'Asesor 6', 'Asesor 7',
        'Adamo1', 'Mario1', 'Asesor 41', 'Asesor 51', 'Asesor 61', 'Asesor 71'
      ]
    }
  ],
  seriesData: [
    {
      data: [4, 3, 5, 2, 5, 7, 4, 3, 5, 2, 5, 7],
      label: 'Meta de facturas',
      color: 'var(--colors-03)',
      hidden: false
    },
    {
      data: [1, 6, 3, 2, 5, 7, 1, 6, 3, 2, 5, 7],
      label: 'Facturado',
      color: 'var(--colors-03_50)',
      hidden: false
    },
  ]
};

  return (
    <>
      {data && (
        <ChartBar_02
          chartData={data}
          label={"Ventas"}
          yAxisConfig={{opacity: 1, disableLine: false, disableTicks: false}}
        />
      )}
    </>
  );
}

export default Componente_metas_venta_gnrl;