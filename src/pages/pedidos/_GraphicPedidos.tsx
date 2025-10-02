import { useFetch } from "src/hooks/useFetch";
import ChartLine_01 from "src/components/ChartLine_01";
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  id: string;
  xAxisData: string[];
  seriesData: {
      data: number[];
      label: string;
      color: string;
  }[];
}

const ComponenteGraphicPedidos = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_GRAPHIC_VENTA;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
      <LoadingCircle />
    );
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  return (
    <>
      {data && (
        <ChartLine_01
          label={'Pedidos'}
          chartData={data}
          yAxisConfig={{opacity: 1, disableLine: false}}
          lineDesign={{area: true}}
        />
      )}
    </>
  );
}

export default ComponenteGraphicPedidos;