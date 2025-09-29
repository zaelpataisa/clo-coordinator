import { useFetch } from "src/hooks/useFetch";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ChartPie from "src/components/ChartPie";

interface ApiResponse {
  c_total: number;
  c_nuevos: number;
  p_cantidad: number;
  data_pie: {
    c_visitas: number;
    c_no_visitas: number;
  }
}

const ComponenteCarteraPedidos = () => {
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
    return <p>No se encontraron datos de la API.</p>;
  }

  const data_text = ['Clientes Visitados', 'Clientes No Visitados'];
  const data_values = [data.data_pie.c_visitas, data.data_pie.c_no_visitas];
  const data_colors = ['var(--colors-03_50)', 'var(--colors-04_50)']; 

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full p-2 w-1/2">
        <Box>
          <ChartPie 
            data_text={data_text}
            data_values={data_values}
            data_colors={data_colors}
          />
        </Box>
      </div>
      <div className="flex flex-row items-center justify-center h-full w-1/2">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="font-rFont font-bold text-[1rem] text-[var(--colors-03)]">
            Total de clientes
          </p>
          <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
            {data.c_total}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="font-rFont font-bold text-[1rem] text-[var(--colors-03)]">
            Cantidad de pedidos este mes
          </p>
          <p className="font-rFont text-[2rem] text-[var(--colors-05)]">
            {data.p_cantidad}
          </p>
        </div>
      </div>
    </>
  );
}


export default ComponenteCarteraPedidos;