import React from 'react';
import { useFetchData } from "src/test/useFetchData"; // Importa el hook
import CircularProgress from '@mui/material/CircularProgress'; 
import ChartGauge from "src/components/ChartGauge";


const NewComponent: React.FC = () => {
    const url = "https://api.cloccidental.com/api/product/2025-09-12%2009:50:28";
    const { data, isLoading, error } = useFetchData(url);

    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        return <p>Error al obtener los datos: {error}</p>;
    }

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
};

export default NewComponent;