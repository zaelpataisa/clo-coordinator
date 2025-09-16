import React from 'react';
import { useFetch } from 'src/hooks/useFetch.tsx';
import { getLocalStorageData } from '../utils/GetLocalStorageData'

interface ApiResponse {
  message: string;
}

const FetchData = () => {
  const url = 'http://192.168.0.40:8000/api/manager/salesman/'+getLocalStorageData('authToken_vendedor');
  const { data, isLoading, error } = useFetch<ApiResponse>(url);

  if (isLoading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>Error al obtener los datos: {error}</p>;
  }

  return (
    <div>
      <h3>Respuesta de la API:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;