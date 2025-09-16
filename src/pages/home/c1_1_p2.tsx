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

const Componente_c1_1_p2 = () => {
  const url = "http://192.168.0.40:8000/api/manager/stadistic/sum/"+getLocalStorageData('authToken_vendedor');
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return;
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  return (
    <>      
      {/* Restante faltante */}
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
    </>
  );
}

export default Componente_c1_1_p2;