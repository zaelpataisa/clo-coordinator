import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// Asumimos que has creado este hook con la lógica de 5 segundos
import { useFetchData } from "src/hooks/useFetchData"; 

interface DataUpdaterWrapperProps {
  url: string;
  // Permite pasar el componente final como hijo
  children: (data: any) => React.ReactNode; 
}

const DataUpdaterWrapper: React.FC<DataUpdaterWrapperProps> = ({ url, children }) => {
  const { data, isLoading, error } = useFetchData(url);

  // 1. Lógica de Carga
  if (isLoading) {
    // Si está cargando, retorna el indicador de progreso.
    // Esto se actualizará automáticamente con el polling.
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <CircularProgress />
      </div>
    );
  }

  // 2. Lógica de Error
  if (error) {
    // Si hay un error, retorna el mensaje.
    return (
      <div style={{ color: 'red', textAlign: 'center' }}>
        <p>⚠️ Error al obtener datos: {error}</p>
      </div>
    );
  }

  // 3. Lógica de Éxito
  // Retorna el componente hijo, pasándole los datos como propiedad
  return (
    <>
      {data && children(data)}
    </>
  );
}

export default DataUpdaterWrapper;