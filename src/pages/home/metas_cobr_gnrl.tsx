import ChartBar_02 from "src/components/ChartBar_02";
import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

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

const Componente_metas_cobr_gnrl = () => {
  const DATA_API = import.meta.env.PUBLIC_COORD_META_COBR_GNRL;

  const url = DATA_API+getLocalStorageData('authToken_vendedor');
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return;
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  return (
    <>
      <div className="flex justify-center items-center h-[40dvh] w-auto">
        {data && (
          <ChartBar_02
            chartData={data}
            label={"Ventas"}
            yAxisConfig={{opacity: 1, disableLine: false, disableTicks: false}}
          />
        )}
      </div>
    </>
  );
}

export default Componente_metas_cobr_gnrl;