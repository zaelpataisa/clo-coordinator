import React, { useState, useEffect } from 'react';
import { ROUTES } from 'src/utils/routes';

interface UserData {
  username: string;
  nombre: string;
  vendedor: string;
  cierre_sesion: string;
}

const AuthDisplay = () => {
const [userData, setUserData] = useState<UserData | null>(null);

useEffect(() => {
  const username = localStorage.getItem('authToken_username');
  const nombre = localStorage.getItem('authToken_nombre');
  const vendedor = localStorage.getItem('authToken_vendedor');
  const cierreSesion = localStorage.getItem('authToken_cierre_sesion');

  if (!username || !nombre || !vendedor || !cierreSesion) {
    localStorage.clear();
    window.location.href = ROUTES.INDEX;
    return; 
  }

  setUserData({
    username,
    nombre,
    vendedor,
    cierre_sesion: cierreSesion,
  });

  }, []); 
  if (!userData) {
    return <p>{/* Validando autenticación... */}</p>;
  }

  // return (
  //   <div>
  //     <p>Username: {userData.username}</p>
  //     <p>Nombre: {userData.nombre}</p>
  //     <p>Vendedor: {userData.vendedor}</p>
  //     <p>Cierre de Sesión: {userData.cierre_sesion}</p>
  //   </div>
  // );
};

export default AuthDisplay;