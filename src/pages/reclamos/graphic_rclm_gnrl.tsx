import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

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

const Componente_graphic_rclm_gnrl = () => {
  // const DATA_API = import.meta.env.PUBLIC_RECLAMOS_GRAPHIC_RCLM_GNRL;

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
    id: 'graphic_rclm_gnrl',
    xAxisData: [
      {
        data: ['Adamo', 'Mario', 'Luigi', 'Asesor3', 'Asesor4', 'Asesor5'],
      },
    ],
    seriesData: [
      {
        data: [4, 3, 5, 2, 5, 7],
        label: 'Defecto de fábrica',
        color: 'var(--colors-03)',
        hidden: false,
      },
      {
        data: [1, 6, 3, 2, 5, 7],
        label: 'Garantía del proveedor',
        color: 'var(--colors-03_75)',
        hidden: false,
      },
      {
        data: [2, 5, 6, 2, 5, 7],
        label: 'Mal manejo de mercancía',
        color: 'var(--colors-03_75)',
        hidden: false,
      },
      {
        data: [7, 2, 4, 3, 1, 2],
        label: 'Error de venta',
        color: 'var(--colors-03_50)',
        hidden: false,
      },
      {
        data: [7, 2, 4, 3, 1, 2],
        label: 'Error en catálogo del producto',
        color: 'var(--colors-03_25)',
        hidden: false,
      },
      {
        data: [7, 2, 4, 3, 1, 2],
        label: 'Mal despacho (faltó/sobro)',
        color: 'var(--colors-03)',
        hidden: false,
      },
    ],
  };

  return (
    <>
      {data && (
        <ChartBar_02
          chartData={data}
          label={"Cantidad"}
          yAxisConfig={{opacity: 1, disableLine: false, disableTicks: false}}
        />
      )}
    </>
  );
}

export default Componente_graphic_rclm_gnrl;