import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { ROUTES } from 'src/utils/routes';

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

const LoginForm = () => {
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  // const [userData, setUserData] = useState<ApiResponse['data'] | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const data = { user, pass };

    try {
      localStorage.clear();
      const response = await fetch('https://api.cloccidental.com/api/user/login', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if(response.ok){
        const responseData = await response.json();

        if(responseData.data == null){
          setMessage(`Error: Credenciales incorrectas.`);
          localStorage.clear();
          return;
        }

        localStorage.setItem('authToken_username', responseData.data.username);
        localStorage.setItem('authToken_nombre', responseData.data.nombre);
        localStorage.setItem('authToken_vendedor', responseData.data.vendedor);
        localStorage.setItem('authToken_cierre_sesion', responseData.data.cierre_sesion);
        // setUserData(responseData.data);
        setMessage('¡Inicio de sesión exitoso!');
        window.location.href = ROUTES.HOME;

      } else{
        const errorData = await response.json();
        // setUserData(null); 
        setMessage(`Error: ${errorData.message || 'Credenciales incorrectas. '}`);
        localStorage.clear();
      }
    } catch (error) {
      setMessage("Hubo un error de conexión")
      console.log(`Hubo un error de conexión: ${error}`)
      // setUserData(null);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}  
        className="w-full flex flex-col items-center h-auto space-y-4 p-2"
      >
        <input 
          type="text" 
          name="user" 
          placeholder="Ingrese su código" 
          autoComplete="on"
          minLength={5} 
          maxLength={20} 
          className="w-full max-w-[80%] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" 
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input 
          type="password" 
          name="pass" 
          placeholder="Ingrese su contraseña" 
          minLength={5} 
          maxLength={20} 
          className="w-full max-w-[80%] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" 
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        
        <button
          type="submit"
          className="w-auto h-auto px-5 py-2 bg-blue-700 font-rFont text-[var(--colors-07)] rounded-xl text-[1rem]"
        >
          Ingresar
        </button>
      </form>
      <div className="flex justify-center items-center flex-col">
        {message && (
          <p className={`font-rFont font-bold text-[var(--colors-07)] p-4`}>
            {message}
          </p>
        )}
        {/* {userData && (
          <div className="mt-2 text-center text-gray-600">
            <p className="font-bold">Datos del usuario:</p>
            <p>Usuario: {userData.username}</p>
            <p>Nombre: {userData.nombre}</p>
            <p>Vendedor: {userData.vendedor}</p>
          </div>
        )} */}
      </div>
    </>
  );
}

export default LoginForm;