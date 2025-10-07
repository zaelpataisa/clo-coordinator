import ChartGauge from "src/components/ChartGauge";
import { useFetch } from "src/hooks/useFetch";
import { formatEuropeanNumber } from "src/utils/FormattingFunctions";
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  minValue: string;
  value: string;
  maxValue: string;
  restante: string;
  porcentaje: string;
  porcentajeRestante: string;
}

const ComponenteMetaPedidos = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_META_VENTA;
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
      <div className="flex flex-col justify-center items-center space-y-6 w-[100%]">
        <div className="flex justify-center items-center w-[100%]">
          {data && (
            formatEuropeanNumber(data.maxValue) > 0 ? (
              <ChartGauge
                chartData={{
                  minValue:  formatEuropeanNumber(data.minValue),
                  value:  formatEuropeanNumber(data.value),
                  maxValue:  formatEuropeanNumber(data.maxValue),
                  restante:  formatEuropeanNumber(data.restante),
                  // @ts-ignore 
                  porcentaje:  data.porcentaje,
                  porcentajeRestante:  formatEuropeanNumber(data.porcentajeRestante),
                  colors: 'var(--colors-03)'
                }}
              />
            ) : (
              <p className="font-rFont font-bold text-[var(--colors-05)] text-[1.5rem] my-10">
                Actualmente no se cuenta con una meta...
              </p>
            )
          )}
        </div>
        <div className="flex justify-center items-center w-[100%]">
          <div className="flex flex-col justify-center items-center w-1/2 space-y-2">
            <p className='font-bold text-[1.35rem] text-[var(--colors-03)]'>
              Avance actual
            </p>
            <p className='font-bold text-[1.5rem] text-[var(--colors-05)]'>
              {data?.value} $
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 space-y-2">
            <p className='font-bold text-[1.35rem] text-[var(--colors-03)]'>
              Meta total
            </p>
            <p className='font-bold text-[1.5rem] text-[var(--colors-05)]'>
              {data?.maxValue} $
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponenteMetaPedidos;