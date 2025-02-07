import { useState, useEffect } from "react";

// Define el tipo del estado
interface PointerStatus {
  x: string; // Coordenada X en píxeles
  y: string; // Coordenada Y en píxeles
  xp: string; // Coordenada X como porcentaje
  yp: string; // Coordenada Y como porcentaje
}

// Hook personalizado
const usePointerGlow = () => {
  const [status, setStatus] = useState<PointerStatus | null>(null);

  useEffect(() => {
    const syncPointer = ({ clientX, clientY }: MouseEvent) => {
      const x = clientX.toFixed(2);
      const y = clientY.toFixed(2);
      const xp = (clientX / window.innerWidth).toFixed(2);
      const yp = (clientY / window.innerHeight).toFixed(2);

      setStatus({ x, y, xp, yp }); // Ahora TypeScript reconoce estas propiedades
      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--xp", xp);
      document.documentElement.style.setProperty("--y", y);
      document.documentElement.style.setProperty("--yp", yp);
    };

    window.addEventListener("pointermove", syncPointer);

    return () => {
      window.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return status;
};

export default usePointerGlow;
