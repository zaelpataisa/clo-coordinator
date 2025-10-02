import { useFetch } from "src/hooks/useFetch";
import ChartBar_01 from "src/components/ChartBar_01";
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  id: string;
  xAxisData: string[];
  seriesData: {
    data: number[];
    color: string;
  }[];
}

const ComponenteClientsNewest = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_CLIENTES_CLIENTS_NEWEST;
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
        <ChartBar_01 
          chartData={data}
          label={"Cantidad"}
          yAxisConfig={{opacityTickLabel: 0, disableLine: true, disableTicks: true}}
        />
      )}
    </>
  );
}

export default ComponenteClientsNewest;