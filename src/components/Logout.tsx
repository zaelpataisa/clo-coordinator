// src/components/Logout.tsx

import React, { useEffect } from 'react';
import { AuthLogout } from '../utils/AuthLogout';

const Logout = () => {
  useEffect(() => {
    const logoutButton = document.getElementById('logout-button');

    if (logoutButton) {
      const handleClick = (e: Event) => {
        e.preventDefault();
        AuthLogout();
      };
      logoutButton.addEventListener('click', handleClick);

      return () => {
        logoutButton.removeEventListener('click', handleClick);
      };
    }
  }, []); 

  return (
    <>
      <div className="bg-red-200 w-full">
        <a 
          href="/" 
          id="logout-button"
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default Logout;