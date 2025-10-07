import { useEffect, useState } from "react";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const splittedUrl = url.split("/");
      const userLoginToken = getLocalStorageData('authToken_vendedor');

      let response;
      if(splittedUrl[splittedUrl.length - 2] != userLoginToken){
        response = await fetch(url + userLoginToken);
      } else {
        response = await fetch(url);
      }

      if (!response.ok) {
        throw new Error(`Error HTTP! ${response.status}`);
      }
      const result: T = await response.json();

      setData(result);
    } catch (error: unknown) {
      // console.error(`Error al obtener la BD: ${error}`);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error inesperado");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, import.meta.env.PUBLIC_API_COOLDOWN);
    return () => clearInterval(interval);
  }, [url]);

  return { data, isLoading, error };
}