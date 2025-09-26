import ChartGauge from "src/components/ChartGauge";
import { useFetch } from "src/hooks/useFetch";
import CircularProgress from '@mui/material/CircularProgress'; 

interface ApiResponse {
  minValue: number;
  value: number;
  maxValue: number;
  restante: number;
  porcentaje: number;
  porcentajeRestante: number;
}

const Componente_meta_pedidos = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_META_VENTA;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  return (
    <>
      {data && (
        <ChartGauge
          chartData={{
            minValue: data.minValue,
            value: data.value,
            maxValue: data.maxValue,
            colors: 'var(--colors-03)'
          }}
        />
      )}

      <div className="w-full grid grid-cols-2 gap-4 h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              { data?.restante }
            </p>
            <p className='font-rFont font-bold text-[1rem] text-[var(--colors-03)]'>
              Restante faltante
            </p>
          </div>
        </div>

        {/* Avance (%) */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              { data?.porcentaje }%
            </p>
            <p className='font-rFont font-bold text-[1rem] text-[var(--colors-03)]'>
              Avance (%)
            </p>
          </div>
        </div>

        {/* Meta total */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              { data?.maxValue }
            </p>
            <p className='font-rFont font-bold text-[1rem] text-[var(--colors-03)]'>
              Meta total
            </p>
          </div>
        </div>

        {/* Restante (%) */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              { data?.porcentajeRestante }%
            </p>
            <p className='font-rFont font-bold text-[1rem] text-[var(--colors-03)]'>
              Restante (%)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Componente_meta_pedidos;