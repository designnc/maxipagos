"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";

interface Step {
  title: string;
  description: string;
  image: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Regístrate en segundos",
      description:
        "Crea tu cuenta rápidamente con nuestros simples formularios.",
      image: "img/step-1.png",
    },
    {
      title: "Configura tu negocio",
      description: "Agrega tus productos, servicios y métodos de cobro.",
      image: "img/step-2.jpg",
    },
    {
      title: "Automatiza y cobra",
      description:
        "Recibe pagos de manera fácil y segura, con todo automatizado.",
      image: "img/step-3.jpg",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered, steps.length]);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div
        className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-primary relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Columna izquierda con padding en desktop */}
        <div className="w-full md:w-1/2 md:p-8">
          {/* Contenedor interno para la imagen; se usa aspect-square en mobile y aspect-auto en desktop */}
          <div className="relative aspect-square md:aspect-auto w-full h-full">
            <Image
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              fill
              className="object-cover rounded-lg transition-opacity duration-700 ease-in-out absolute inset-0 md:-inset-8"
              style={{ opacity: fade ? 1 : 0 }}
            />
            {/* Bloque de información, visible solo en móviles */}
            <div className="absolute bottom-0 left-0 right-0 md:hidden">
              <div className="w-full bg-gradient-to-t from-primary to-transparent p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-white text-primary-700 rounded-full font-bold">
                    {activeStep + 1}
                  </div>
                  <h4 className="text-white font-semibold ml-2">
                    {steps[activeStep].title}
                  </h4>
                </div>
                <p className="text-white/70 text-sm">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna de texto y pasos para desktop */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-white text-xl font-medium uppercase mb-2">
            CÓMO FUNCIONA
          </h2>
          <h3 className="text-white text-4xl font-bold mb-4">
            Descubre cómo Maxipagos Optimiza tus Cobros
          </h3>
          <p className="text-white text-base mb-4">
            Simplifica tus cobros y ahorra tiempo con Maxipagos. Configura,
            automatiza y haz crecer tu negocio fácilmente.
          </p>

          {/* Lista de pasos visible solo en desktop */}
          <div className="hidden md:flex flex-col space-y-2 bg-primary-950 rounded-2xl p-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer p-3 rounded-2xl transition-colors ${
                  activeStep === index
                    ? "bg-secondary" // Contenedor activo en color secondary (amarillo)
                    : "bg-transparent hover:bg-primary-700"
                }`}
              >
                <div className="flex items-center">
                  {/* Número del paso */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-bold transition-colors ${
                      activeStep === index
                        ? "bg-primary-900 text-white" // Para el paso activo, se usa un fondo oscuro y texto blanco para mayor contraste
                        : "bg-white text-primary-700"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="ml-2">
                    <h4
                      className={`${
                        activeStep === index ? "text-primary-900" : "text-white"
                      } font-semibold`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`${
                        activeStep === index ? "text-primary-900" : "text-white"
                      } text-sm`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de acción */}
          <div className="mt-6">
            <Button
              variant="primary"
              size="medium"
              endIcon={<FaArrowRight />}
              className="block w-fit"
            >
              <a href="/register">Empezar</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
