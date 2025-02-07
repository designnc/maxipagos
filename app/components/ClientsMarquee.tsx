"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const ClientsMarquee: React.FC = () => {
  const clientes = [
    { name: "Oveja Negra", logo: "/img/clientes/oveja-negra.png" },
    { name: "El Pollo Farsante", logo: "/img/clientes/el-pollo-farsante.png" },
    {
      name: "Restaurante Tito El Pacho",
      logo: "/img/clientes/restaurante-tito-el-pacho.png",
    },
    { name: "Maimat", logo: "/img/clientes/maimat.jpg" },
/*     {
      name: "Distribuidora Yiliko",
      logo: "/img/clientes/distribuidora-yiliko.png",
    }, */
    { name: "Maxipos", logo: "/img/clientes/maxipos.png" },
    { name: "Cebal", logo: "/img/clientes/cebal.png" },
    { name: "NC Autos", logo: "/img/clientes/nc-autos.png" },
    { name: "Ay de mi vestido", logo: "/img/clientes/ay-de-mi-vestido.webp" },
    { name: "Parsome", logo: "/img/clientes/parsome.webp" },
    { name: "Caniceria - El Collan", logo: "/img/clientes/carniceria-collan.webp" },
    { name: "Bancoarena Hotel", logo: "/img/clientes/bancoarena-hotel.png" },
   /*  {
      name: "Productos Lonquimay",
      logo: "/img/clientes/productos-lonquimay.png",
    }, */
    /* {
      name: "Superdespensa Lontué",
      logo: "/img/clientes/superdespensa-lontue.jpg",
    }, */
    /* { name: "Malas Pulgas", logo: "/img/clientes/malas-pulgas.png" }, */
  ];

  return (
    <div className="border border-white/10 rounded-[1.5rem] py-4 overflow-hidden">
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={false}
      >
        {clientes.map((cliente, index) => (
          <div
            key={`${cliente.name}-${index}`}
            className="flex-shrink-0 flex justify-center items-center bg-zinc-900 p-4 px-12 rounded-[1.5rem] mx-1.5"
          >
            <div className="relative w-20 h-20 lg:w-24 lg:h-24">
              <Image
                src={cliente.logo}
                alt={cliente.name}
                className="grayscale hover:grayscale-0 transition-all duration-300 object-contain rounded-xl"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientsMarquee;
