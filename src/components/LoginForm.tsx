import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { ROUTES } from 'src/utils/routes';
import { loginUser } from '../utils/AuthService';

const LoginForm = () => {
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const data = { user, pass };
    setMessage('Iniciando sesión...');

    const success = await loginUser(data);

    if (success) {
      setMessage('¡Inicio de sesión exitoso!');
      window.location.href = ROUTES.HOME;
    } else {
      setMessage('Error: Credenciales incorrectas o error de conexión.');
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
      </div>
    </>
  );
}

export default LoginForm;