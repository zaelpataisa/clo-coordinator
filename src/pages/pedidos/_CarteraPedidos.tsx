import { useFetch } from "src/hooks/useFetch";
import Box from '@mui/material/Box';
import ChartPie from "src/components/ChartPie";
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  c_total: number;
  c_nuevos: number;
  p_cantidad: number;
  data_pie: {
    c_visitas: number;
    c_no_visitas: number;
  }
  total_clients_newest: number;
}

const ComponenteCarteraPedidos = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_COORD_CARTERA;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
      <LoadingCircle/>
    );
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }
  
  if(!data){
    return <p>No se encontraron datos de la API.</p>;
  }

  const data_text = ['Clientes Visitados', 'Clientes No Visitados'];
  const data_values = [data.data_pie.c_visitas, data.data_pie.c_no_visitas];
  const data_colors = ['var(--colors-03_50)', 'var(--colors-04_50)']; 

  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center w-full h-full">
        <div className="flex flex-col items-center justify-center h-full p-2 xl:w-1/2">
          <Box>
            <ChartPie 
              data_text={data_text}
              data_values={data_values}
              data_colors={data_colors}
            />
          </Box>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center h-full w-full xl:w-1/2">
          <div className="flex flex-col justify-center items-center w-1/2 h-auto">
            <p className="font-rFont font-bold text-[1rem] text-[var(--colors-03)] text-center">
              Total de clientes
            </p>
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              {data.c_total}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 h-auto">
            <p className="font-rFont font-bold text-[1rem] text-[var(--colors-03)] text-center">
              Pedidos este mes
            </p>
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              {data.p_cantidad}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 h-auto">
            <p className="font-rFont font-bold text-[1rem] text-[var(--colors-03)] text-center">
              Clientes nuevos
            </p>
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              {data.total_clients_newest}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 h-auto">
            <p className="font-rFont font-bold text-[1rem] text-[var(--colors-03)] text-center">
              Clientes visitados
            </p>
            <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
              {data.data_pie.c_visitas}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


export default ComponenteCarteraPedidos;