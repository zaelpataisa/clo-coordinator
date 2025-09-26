import { useFetch } from "src/hooks/useFetch";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress';

interface ApiResponse extends Array<number> {}

const Componente_cartera_pedidos = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_CARTERA;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
       <CircularProgress />
    );
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }
  
  if(!data){
    return null;
  }

  const data_titles = [
    'Total del clientes',
    'Clientes activados',
    'Clientes visitados',
    'Ventas emitidas este mes',
  ];

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
              {data[index]}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}


export default Componente_cartera_pedidos;