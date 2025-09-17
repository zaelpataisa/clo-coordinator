import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

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

const Componente_graphic_venta = () => {
  // const DATA_API = import.meta.env.PUBLIC_COORD_GRAPHIC_VENTA;

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
    id: 'graphic_analysis',
    xAxisData: [
      '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
    ],
    seriesData: [
      {
        data: [345, 150, 351, 684, 425, 165, 600, 287, 20, 209, 410, 102, 380, 215, 55, 640, 310, 180, 500, 95, 255, 450, 140, 720, 298, 85, 475, 110, 580, 240],
        label: 'Ventas',
        color: 'var(--colors-03)'
      },
      {
        data: [650, 210, 875, 150, 520, 340, 910, 480, 255, 730, 195, 600, 315, 805, 420, 170, 785, 590, 280, 950, 400, 120, 680, 365, 840, 230, 500, 990, 145, 710],
        label: 'Cobranzas',
        color: 'var(--colors-05)'
      }
    ]
  }

  return (
    <>
      {data && (
        <ChartLine_01
          label={'Cantidad'}
          chartData={data}
          yAxisConfig={{opacity: 1, disableLine: false}}
          lineDesign={{area: false}}
        />
      )}
    </>
  );
}

export default Componente_graphic_venta;