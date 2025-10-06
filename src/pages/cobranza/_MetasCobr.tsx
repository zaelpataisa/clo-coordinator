import { useFetch } from "src/hooks/useFetch";
import ChartBar_03 from "src/components/ChartBar_03";
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  id: string;
  data: {
    yDataKey: string;
    xDataKey: number;
  }[];
  color: string;
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
  if (!data) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  return (
    <>
      <ChartBar_03
        dataset={data.data}
        yDataKey="yDataKey"
        xDataKey="xDataKey"
        label="Cantidad"
        selectedColor={data.color}
        textSymbol=""
        yAxisConfig={{
          opacityTickLabel: 1,
          disableLine: false,
          disableTicks: false,
        }}
      />
    </>
  );
}

export default ComponenteMetasCobr;