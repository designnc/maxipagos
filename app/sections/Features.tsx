import React from "react";
import Label from "../components/Label";
import {
  FaRegCreditCard,
  FaUser,
  FaTag,
  FaFileAlt,
  FaLink,
  FaQrcode,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Administración de pagos",
      description: "Control centralizado de tus pagos de forma transparente.",
      icon: <FaRegCreditCard />,
    },
    {
      title: "Gestión de clientes",
      description: "Administra clientes y automatiza recordatorios de cobro.",
      icon: <FaUser />,
    },
    {
      title: "Promociones",
      description: "Crea y envía ofertas personalizadas para tus clientes.",
      icon: <FaTag />,
    },
    {
      title: "Documentos electrónicos",
      description: "Genera y organiza documentos digitales fácilmente.",
      icon: <FaFileAlt />,
    },
    {
      title: "Links de pago",
      description:
        "Crea links seguros para transacciones rápidas y confiables.",
      icon: <FaLink />,
    },
    {
      title: "Pago QR",
      description:
        "Crea links seguros para transacciones rápidas y confiables.",
      icon: <FaQrcode />,
    }
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-8 flex flex-col items-center justify-center">
          <Label text="Características" />
          <h2 className="text-5xl font-bold mt-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Características principales
          </h2>
          <p className="mt-2 text-center text-foreground/80 text-xl">
            Potencia tu negocio con funciones eficientes y seguras.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-zinc-900 p-6 py-16 rounded-2xl overflow-hidden text-primary hover:shadow-lg transform transition duration-300 hover:-translate-y-1  inset-shadow-sm inset-shadow-white/20 ring ring-primary/20 inset-ring inset-ring-white/15"
            >
              {/* Fondo decorativo similar al componente Background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute w-[200px] h-[200px] bg-primary rounded-full blur-[70px] opacity-30 -top-10 left-1/3"></div>
                <div className="absolute w-[200px] h-[80px] bg-primary rounded-full blur-[70px] opacity-20 bottom-1 left-4"></div>
              </div>

              <div className="relative flex flex-col items-center">
                {/* Icono envuelto en un círculo de fondo secondary */}
                <div className="bg-primary/20 p-4 rounded-full mb-4 relative z-10">
                  {React.cloneElement(feature.icon, { className: "text-4xl" })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center relative z-10">
                  {feature.title}
                </h3>
                <p className="text-center relative z-10 text-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
