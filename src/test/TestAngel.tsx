import { useEffect, useState } from "react";

// Define una interfaz para el objeto de un solo producto
interface Producto {
  codigo: string;
  nombre: string;
  marca: string;
  precio1: number;
  existencia: string;
  fechamodifi: string;
  // Puedes añadir más propiedades de tu API aquí
}

// Define una interfaz para la respuesta completa de la API
interface ApiResponse {
  data: Producto[];
  status: string;
  description: string;
  message: string;
  // Puedes añadir más propiedades aquí
}

const DataUpdater: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      // product
      const response = await fetch('https://api.cloccidental.com/api/product/2025-09-12%2009:50:28');
      
      if (!response.ok) {
        throw new Error(`Error HTTP! estado: ${response.status}`);
      }
      
      const result: ApiResponse = await response.json();
      setApiResponse(result);
    } catch (error: unknown) {
      console.error("Hubo un error al obtener los datos:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Llama a la función fetchData inmediatamente al cargar el componente
    fetchData();

    // Configura el temporizador para llamar a fetchData cada 5 segundos
    const interval = setInterval(() => {
      fetchData();
    }, 5000); // 5000 milisegundos = 5 segundos

    // La función de limpieza se ejecuta cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El array de dependencias vacío asegura que esto solo se ejecute una vez

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <h1>Hubo un error: {error}</h1>
      </div>
    );
  }
  
  if (!apiResponse || !Array.isArray(apiResponse.data)) {
    return (
      <div className="App">
        <h1>La API no devolvió datos de productos.</h1>
      </div>
    );
  }

  return (
    <>
      {apiResponse.data.map((item) => (
        <div key={item.codigo} className="p-2 border-1 w-1/2">
          {item.codigo}
        </div>
      ))}
    </>
  );
};

export default DataUpdater;