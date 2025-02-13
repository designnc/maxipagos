"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Step {
  title: string;
  description: string;
  image: string;
}

const HowItWorks: React.FC = () => {
  // Lista de pasos con su imagen correspondiente
  const steps: Step[] = [
    {
      title: 'Regístrate en segundos',
      description: 'Crea tu cuenta rápidamente con nuestros simples formularios.',
      image: '/images/registro-exitoso.png'
    },
    {
      title: 'Configura tu negocio',
      description: 'Agrega tus productos, servicios y métodos de cobro.',
      image: '/images/configura-negocio.png'
    },
    {
      title: 'Automatiza y cobra',
      description: 'Recibe pagos de manera fácil y segura, con todo automatizado.',
      image: '/images/automatiza-cobra.png'
    }
  ];

  // Estado para el paso activo y para controlar el hover
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Efecto para el cambio automático de slide cada 8 segundos (8000 ms)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isHovered, steps.length]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Contenedor principal con evento hover para pausar el slider */}
      <div 
        className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-primary"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Sección Izquierda: Imagen responsive que cambia según el paso activo */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative h-64 md:h-auto">
          <Image
            key={steps[activeStep].image} // Forzamos la actualización al cambiar la key
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            fill
            className="object-contain rounded-lg shadow-md transition-opacity duration-500"
          />
        </div>

        {/* Sección Derecha: Texto y slider de pasos */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-white text-xl font-medium uppercase mb-2">
            CÓMO FUNCIONA
          </h2>
          <h3 className="text-white text-4xl font-bold mb-4">
            Descubre cómo Maxipagos Optimiza tus Cobros
          </h3>
          <p className="text-white text-base mb-4">
            Simplifica tus cobros y ahorra tiempo con Maxipagos. Configura, automatiza y haz crecer tu negocio fácilmente.
          </p>

          {/* Lista de pasos con hover y click para seleccionar */}
          <div className="flex flex-col space-y-2 bg-primary-950 rounded-2xl p-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-3 rounded-md transition-colors ${
                  activeStep === index ? 'bg-secondary' : 'bg-transparent hover:bg-primary-700'
                }`}
              >
                <div className="flex items-start">
                  {/* Número del paso */}
                  <div className="mr-3 flex items-center justify-center w-8 h-8 bg-white text-primary-700 rounded-full font-bold">
                    {index + 1}
                  </div>
                  {/* Título y descripción */}
                  <div>
                    <h4 className="text-white font-semibold">{step.title}</h4>
                    <p className="text-white text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de acción */}
          <div className="mt-6">
            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
