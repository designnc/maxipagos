/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Label from "../components/Label";
import { BentoCard, BentoGrid } from "../components/BentoGrid";
import AnimatedListDemo from "../components/animate/animated-list-demo";
import AnimatedBeamMultipleOutputDemo from "../components/animate/animated-beam-multiple-outputs";
import PaymentLinkCard from "../components/animate/AnimatedPayLink";

const features = [
  {
    name: "Automatización Inteligente de Cobros",
    description:
      "Olvídate de los recordatorios manuales. Programa y automatiza los cobros por correo electrónico, asegurando que recibas tus pagos a tiempo sin esfuerzo adicional.",
    href: "/",
    cta: "Empezar",
    background: (
       <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-90" />
    ),
    className: "col-span-12 md:col-span-12",
    imagePosition: "right" as const,
  },
  {
    name: "Pagos Rápidos y Seguros",
    description:
      "Ofrece a tus clientes múltiples opciones de pago, desde tarjetas hasta links de pago personalizados. Transacciones seguras y sin complicaciones en pocos clics.",
    href: "/",
    background: (
      <PaymentLinkCard />
    ),
    className: "col-span-12 md:col-span-6 ",
    imagePosition: "top" as const,
  },
  {
    name: "Gestión Centralizada de Clientes y Finanzas",
    description: "Administra todos tus clientes y pagos en un solo lugar...",
    href: "/",
    background: (
       <AnimatedBeamMultipleOutputDemo className="absolute right-0 top-0 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_50%)] group-hover:scale-105" />
    ),
    className: "col-span-12 md:col-span-6",
    imagePosition: "bottom" as const,
  },
];

const BenefitsSection2 = () => {
  return (
    <section id="caracteristicas" className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-8 flex flex-col items-center justify-center">
          <Label text="Beneficios" />
          <h2 className="text-5xl font-bold mt-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Beneficios
          </h2>
          <p className="mt-8 text-center text-primary-700 text-3xl flex flex-wrap justify-center gap-8 gap-y-2">
            <span className="flex items-center justify-center">
              <img
                title="icono cobros"
                src="icons/icon-cobros.svg"
                className="h-8 mr-2"
              />{" "}
              Cobros{" "}
            </span>
            <span className="flex items-center justify-center">
              <img
                title="icono pagos"
                src="icons/icon-pagos.svg"
                className="h-8 mr-2"
              />{" "}
              Pagos{" "}
            </span>
            <span className="flex items-center justify-center">
              <img
                title="icono gestión"
                src="icons/icon-gestion.svg"
                className="h-8 mr-2"
              />{" "}
              Gestión{" "}
            </span>
          </p>
        </div>
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default BenefitsSection2;
