/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Label from "../components/Label";
import { BentoCard, BentoGrid } from "../components/BentoGrid";


const features = [
  {
    name: "Automatización Inteligente de Cobros",
    description: "Olvídate de los recordatorios manuales. Maxipagos programa y automatiza los cobros por correo electrónico, asegurando que recibas tus pagos a tiempo sin esfuerzo adicional.",
    href: "/",
    cta: "Empezar",
    background: (
      <img 
        className="w-full h-full object-contain" // Cambiado de object-cover a object-contain
        src="benefits/benefits-1.png" 
        alt="Automatización Inteligente"
      />
    ),
    className: "col-span-12 md:col-span-12",
    imagePosition: "right" as const,
  },
  {
    name: "Pagos Rápidos y Seguros",
    description: "Ofrece a tus clientes múltiples opciones de pago, desde tarjetas hasta links de pago personalizados. Transacciones seguras y sin complicaciones en pocos clics.",
    href: "/",
    background: (
      <img 
        className="w-full h-full object-contain" // Cambiado de object-cover a object-contain
        src="benefits/benefits-2.png" 
        alt="Pagos Rápidos"
      />
    ),
    className: "col-span-12 md:col-span-6 ",
    imagePosition: "top" as const,
  },
  {
    name: "Gestión Centralizada de Clientes y Finanzas",
    description: "Administra todos tus clientes y pagos en un solo lugar...",
    href: "/",
    background: (
      <img
        className="w-full h-full object-contain" // Cambiado de object-cover y h-auto a h-full object-contain
        src="benefits/benefits-3.png"
        alt="Gestión Centralizada"
      />
    ),
    className: "col-span-12 md:col-span-6",
    imagePosition: "bottom" as const,
  }
  

];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-8 flex flex-col items-center justify-center">
          <Label text="Beneficios" />
          <h2 className="text-5xl font-bold mt-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Beneficios
          </h2>
          <p className="mt-2 text-center text-primary-700 text-2xl">
            Cobros | Pagos | Gestión.
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

export default BenefitsSection;
