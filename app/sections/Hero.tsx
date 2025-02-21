import Button from "../components/Button";
import Image from "next/image";
import Sticker from "../components/Sticker";
import {
  IoFastFoodOutline,
  IoBicycleOutline,
  IoCheckmarkDoneCircleOutline,
} from "react-icons/io5";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen text-foreground py-16 px-6 flex items-center justify-center"
    >
      {/* Círculos de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="absolute w-[98vw] h-[98vw] border border-black/30 dark:border-white/30 rounded-full blur-[3px]"></div>
        <div className="absolute w-[75vw] h-[75vw] border border-black/30 dark:border-white/30 rounded-full blur-[3px]"></div>
        <div className="absolute w-[45vw] h-[45vw] border border-black/30 dark:border-white/30 rounded-full blur-[2px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna de texto */}
        <div className="text-left animate_top">
          <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            La forma más inteligente de ordenar y pagar en restaurantes
          </h1>
          <p className="text-base sm:text-lg mb-6">
            FooDiv mejora la experiencia en restaurantes con pedidos digitales, pagos sin contacto y gestión en vivo. Más rápido, más fácil, más eficiente.
          </p>
          <Button variant="primary" size="medium">
            Descarga FooDiv
          </Button>
        </div>

        {/* Columna de la imagen principal */}
        <div className="relative w-full mx-auto flex items-center justify-center animate_bottom">
          {/* Contenedor de fondo coloreado */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[240px] sm:h-[300px] md:h-[400px] bg-primary rounded-3xl shadow-2xl overflow-visible flex items-end justify-center">
            {/* Imagen de la mujer posicionada abajo */}
            <div className="absolute bottom-0">
              <Image
                src="/hero/hero-person-1.png"
                alt="Clientes"
                width={360}
                height={420}
                className="w-auto h-auto"
                priority
              />
            </div>
          </div>

          {/* Stickers flotantes con animación */}
          <Sticker
            icon={IoFastFoodOutline}
            title="Pedido"
            description="En cocina"
            className="absolute top-4 -left-4 sm:left-0 animate-side-to-side"
          />
          <Sticker
            icon={IoBicycleOutline}
            title="En Camino"
            description="Va a la mesa"
            className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 animate-side-to-side"
          />
          <Sticker
            icon={IoCheckmarkDoneCircleOutline}
            title="Entregado"
            description="Listo"
            className="absolute -bottom-6 sm:bottom-4 left-1/2 -translate-x-1/2 animate-side-to-side"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
