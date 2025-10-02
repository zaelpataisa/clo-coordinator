import { useFetch } from "src/hooks/useFetch";
import Box from '@mui/material/Box';
import ChartPie from "src/components/ChartPie";
import LoadingCircle from "src/components/LoadingCircle";

interface ApiResponse {
  id: string;
  pie_data: string[];
  series_data: number[];
}

const ComponenteGraphicRclmGnrl = () => {
  const url = import.meta.env.PUBLIC_HOST_API+import.meta.env.PUBLIC_RECLAMOS_GRAPHIC_RCLM_GNRL;
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return (
      <LoadingCircle />
      );
    ;
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }
  if (!data) {
    return <p>Error al obtener los datos: {error}</p>;
  }


  return (
    <>
      <Box>
        <ChartPie 
          data_text={data.pie_data}
          data_values={data.series_data}
          data_colors={
            data.series_data.map(() => 'var(--colors-03_50)')
          }
        />
      </Box>
    </>
  );
}

export default ComponenteGraphicRclmGnrl;