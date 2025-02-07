// src/app/components/LoadingProvider.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Loading from './Loading';

const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Manejo de la carga inicial
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      // Si la página ya está cargada
      setLoading(false);
    } else {
      // Escuchar el evento 'load' para detectar cuando toda la página está cargada
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Manejo de cambios de ruta
  useEffect(() => {
    if (prevPathname !== pathname) {
      setLoading(true);

      // Simula una carga durante cambios de ruta
      const timer = setTimeout(() => {
        setLoading(false);
        setPrevPathname(pathname);
      }, 500); // Ajusta según tus necesidades

      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
};

export default LoadingProvider;
