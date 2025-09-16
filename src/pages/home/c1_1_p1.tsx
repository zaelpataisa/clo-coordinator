import ChartGauge from "src/components/ChartGauge";
import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

interface ApiResponse {
  minValue: number;
  value: number;
  maxValue: number;
  restante: number;
  porcentaje: number;
  porcentajeRestante: number;
}

const Componente_c1_1_p1 = () => {
  const DATA_API = import.meta.env.PUBLIC_COORD_C1_1;
  
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
      {data && (
        <ChartGauge
          chartData={{
            GaugeWidth: 'w-[75%]',
            minValue: data.minValue,
            value: data.value,
            maxValue: data.maxValue,
            colors: 'var(--colors-03)'
          }}
        />
      )}
    </>
  );
}

export default Componente_c1_1_p1;