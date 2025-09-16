import ChartBar_02 from "src/components/ChartBar_02";
import FetchData from "src/hooks/FetchData";
import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

interface ApiResponse {
  id: string;
  xAxisData: { data: string[] }[];
  seriesData: {
    data: number[];
    label?: string;
    color?: string;
    hidden?: boolean;
  }[];
}

const Componente_c1_1 = () => {
  const url = "http://192.168.0.40:8000/api/manager/stadistic/"+getLocalStorageData('authToken_vendedor');
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return <p></p>;
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

export default Componente_c1_1;