'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Label from './Label';


const PaymentMethods: React.FC = () => {
  const methods = [
    { name: 'Visa', logo: '/img/metodos-pagos/visa.png' },
    { name: 'Mastercard', logo: '/img/metodos-pagos/mastercard.png' },
    { name: 'American Express', logo: '/img/metodos-pagos/amex.png' },
    { name: 'Diners Club', logo: '/img/metodos-pagos/diners.png' },
    { name: 'Red-Compra', logo: '/img/metodos-pagos/redcompra.png' },
    { name: 'Webpay', logo: '/img/metodos-pagos/1.Webpay_FN_300px.svg' },
    { name: 'OnePay', logo: '/img/metodos-pagos/1.Webpay_FB_300px.svg' },
    { name: 'Khipu', logo: '/img/metodos-pagos/khipu.svg' },
    { name: 'PayPal', logo: '/img/metodos-pagos/paypal.svg' },
    { name: 'Mercado Pago', logo: '/img/metodos-pagos/MP_RGB_HANDSHAKE_color-blanco_vert.svg' },

  ];

  return (
    <div className="py-8 relative flex flex-col items-center justify-center">
      <Label text="Metodos de Pago" />
      <div className="container mx-auto text-center mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="grayscale-carousel"
        >
          {methods.map((methods) => (
            <SwiperSlide key={methods.name} className="flex justify-center items-center">
              {/* Contenedor relativo con dimensiones fijas */}
              <div className="relative h-20 w-20 lg:h-28 lg:w-28">
                <Image
                  src={methods.logo}
                  alt={methods.name}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PaymentMethods;
