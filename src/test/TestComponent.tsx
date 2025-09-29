import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useFetch } from 'src/hooks/useFetch';
import ChartPie from '../components/ChartPie';

interface ApiResponse {
  c_total: number;
  c_nuevos: number;
  p_cantidad: number;
  data_pie: {
    c_visitas: number;
    c_no_visitas: number;
  }
}

export default function CustomTestingComponent() {
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
  
  if (!data) {
    return <p>No se encontraron datos de la API.</p>;
  }

  const data_text = ['Clientes Visitados', 'Clientes No Visitados'];
  const data_values = [data.data_pie.c_visitas, data.data_pie.c_no_visitas];
  // Usa los colores que prefieras de tu tema
  const data_colors = ['var(--colors-05)', 'var(--colors-04)']; 

  return (
    <>
      <div className='flex w-[100%] justify-center items-center'>
        <Box>
           <ChartPie 
             data_text={data_text}
             data_values={data_values}
             data_colors={data_colors}
           />
         </Box>
      </div>
    </>
  );
}