import { useEffect, useState } from "react";

export const useFetch = <T>(url: string, intervalSeconds: number = 0) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if(!response.ok){
        throw new Error(`Error HTTP! ${response.status}`);
      }

      const result: T = await response.json();
      setData(result);

    } catch (error: unknown) {
      console.error(`Error al obtener la BD: ${error}`);

      if(error instanceof Error){
        setError(error.message);

      } else {
        setError("Occurió un error inesperado");
      }

    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    if(intervalSeconds > 0){
      const interval = setInterval(() => {
        fetchData();
      }, intervalSeconds * 1000);

      return () => clearInterval(interval);
    }
  }, [url, intervalSeconds]);

  return { data, isLoading, error };
}