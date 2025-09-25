import { useEffect, useState } from "react";
import { getLocalStorageData } from "src/utils/GetLocalStorageData";
import CircularProgress from '@mui/material/CircularProgress'; 

interface DataUpdaterProps {
  url: string;
}

const FetchUpdater: React.FC<DataUpdaterProps> = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url+getLocalStorageData('authToken_vendedor'));

      if(!response.ok){
        throw new Error(`Error HTTP! Estado: ${response.status}`);
      }

      const result: any = await response.json();
      setApiResponse(result);
    } catch(error: unknown){
      console.error("Fetch error: ", error)
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  if (error) {
    return (
      <div className="App">
        <h1>Hubo un error: {error}</h1>
      </div>
    );
  }
  
  console.log(apiResponse)

  return (
    <div>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </div>
  );
}

export default FetchUpdater;