import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

interface ApiResponse {
  seriesData: number[];
}

const Componente_cartera_venta = () => {
  // const DATA_API = import.meta.env.PUBLIC_COORD_GRAPHIC_VENTA;

  // const url = DATA_API+getLocalStorageData('authToken_vendedor');
  // const { data, isLoading, error } = useFetch<ApiResponse>(url);

  // if (isLoading) {
  //   return (
  //      <CircularProgress />
  //   );
  // }

  // if (error) {
  //   return <p>Error al obtener los datos: {error}</p>;
  // }

  const data_titles = [
    'Total del clientes',
    'Clientes activados',
    'Clientes visitados',
    'Ventas emitidas este mes',
  ];
  const data = [211,52,3553,234];

  return (
    <>
      <div className={`w-full h-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4`}>
        {data_titles.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <p className="font-rFont font-bold text-[1rem] text-[var(--colors-03)]">
              {item}
            </p>
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              {data[index]} {/* <--- Cambio aquí */}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}


export default Componente_cartera_venta;