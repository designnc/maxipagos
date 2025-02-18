import Button from "../components/Button";
import Image from "next/image";


const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen text-foreground py-20 px-8 flex items-center justify-center"
    >
      {/* Círculos de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="absolute w-[98vw] h-[98vw] border border-black/30 dark:border-white/30 rounded-full blur-[3px]"></div>
        <div className="absolute w-[75vw] h-[75vw] border border-black/30 dark:border-white/30 rounded-full blur-[3px]"></div>
        <div className="absolute w-[45vw] h-[45vw] border border-black/30 dark:border-white/30 rounded-full blur-[2px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content Column */}
        <div className="text-left md:col-span-1 animate_top">
          <h1 className="text-primary text-5xl md:text-6xl font-bold mb-4">
            Simplifica tus pagos con Maxipagos
          </h1>
          <p className="text-lg mb-8">
            Administra tus clientes, automatiza cobros y recibe pagos fácilmente.
          </p>
          <Button variant="primary" size="medium">
            Empieza ahora
          </Button>
        </div>

        {/* Image Column */}
        <div className="relative w-full max-w-[702px] h-[568px] mx-auto md:col-span-1 flex items-center justify-center animate_bottom">

          <div className="relative w-[95%] sm:w-[80%] md:w-[410px] h-[85%] sm:h-[80%] md:h-[528px] bg-primary rounded-xl overflow-hidden flex items-center justify-center shadow-2xl">
            <Image
              src="/hero/hero-clients.png"
              alt="Clientes"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          </div>
          <Image
            src="/hero/hero-mount.png"
            alt="Monto"
            width={262}
            height={78}
            className="absolute top-[5%] left-[-5%] md:top-12 md:-left-10 drop-shadow-2xl animate-[side-to-side_3s_ease-in-out_infinite]"
          />
          <Image
            src="/hero/hero-pay.png"
            alt="Pago"
            width={138}
            height={70}
            className="absolute bottom-[5%] left-[5%] md:bottom-14 md:left-12 drop-shadow-2xl animate-[side-to-side_3s_ease-in-out_infinite]"
          />
          <Image
            src="/hero/hero-credit-card.png"
            alt="Tarjeta de crédito"
            width={150}
            height={100}
            className="absolute bottom-[5%] right-[5%] md:bottom-14 md:right-6 rotate-[15deg] drop-shadow-2xl animate-[bounce_5s_infinite]"
          />
          <Image
            src="/hero/hero-database-square.png"
            alt="Base de datos"
            width={50}
            height={50}
            className="absolute top-[5%] right-[10%] md:top-12 md:right-20 rotate-[15deg] drop-shadow-2xl animate-bounce"
          />
          <Image
            src="/hero/hero-check-square.png"
            alt="Check"
            width={50}
            height={50}
            className="absolute left-[10%] top-[40%] md:left-1/12 md:top-3/9 rotate-[-15deg] drop-shadow-2xl animate-bounce"
          />
          <Image
            src="/hero/hero-message-square.png"
            alt="Mensaje"
            width={50}
            height={50}
            className="absolute bottom-[2%] right-[15%] md:bottom-0 md:right-36 rotate-[15deg] drop-shadow-2xl animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
