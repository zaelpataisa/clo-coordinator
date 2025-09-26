import { useEffect, useState } from "react";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";

export const useFetchData = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url + getLocalStorageData('authToken_vendedor'));
      if (!response.ok) {
        throw new Error(`Error HTTP! Estado: ${response.status}`);
      }
      const result: any = await response.json();
      setData(result);
    } catch (error: unknown) {
      console.error("Fetch error: ", error);
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
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, [url]);

  return { data, isLoading, error };
};