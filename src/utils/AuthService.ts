// src/utils/AuthService.ts
import { ROUTES } from './routes';

interface LoginData {
  user: string;
  pass: string;
}

interface ApiResponse {
  status: number;
  description: string;
  time: string;
  message: string;
  company: string;
  data: {
    username: string;
    nombre: string;
    vendedor: string;
    desactivo: number;
    sesion: number;
    correlativo: number | null;
    correlativoreclamo: number | null;
    correlativoprecobranza: number | null;
    cierre_sesion: number;
  };
}

export const loginUser = async (data: LoginData): Promise<boolean> => {
  try {
    localStorage.clear();
    const response = await fetch('https://api.cloccidental.com/api/user/login', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData: ApiResponse = await response.json();
      if (responseData.data) {
        localStorage.setItem('authToken_username', responseData.data.username);
        localStorage.setItem('authToken_nombre', responseData.data.nombre);
        localStorage.setItem('authToken_vendedor', responseData.data.vendedor);
        localStorage.setItem('authToken_cierre_sesion', String(responseData.data.cierre_sesion));
        return true;
      }
    }
  } catch (error) {
    console.log(`Hubo un error de conexión: ${error}`);
  }
  localStorage.clear();
  return false;
};