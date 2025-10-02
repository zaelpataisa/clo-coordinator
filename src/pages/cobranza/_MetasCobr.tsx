import { useFetch } from "src/hooks/useFetch";
import ChartBar_02 from "src/components/ChartBar_02";
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  id: string;
  xAxisData: { 
    data: string[] 
  }[];
  seriesData: {
    data: number[];
    label?: string;
    color?: string;
    hidden?: boolean;
  }[];
}

const ComponenteMetasCobr = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COBRANZA_COBR;
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
        <ChartBar_02
          chartData={data}
          label={"Cantidad"}
          yAxisConfig={{opacity: 1, disableLine: false, disableTicks: false}}
        />
      )}
    </>
  );
}

export default ComponenteMetasCobr;