"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/Button";

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (loading) {
      e.preventDefault();
      return;
    }
    setLoading(true);
  };

  return (
    <section id="contacto" className="w-full flex flex-col items-center py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 px-8 lg:px-0">
          <h2 className="text-5xl font-bold mt-4 pb-2 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="mt-2 text-foreground/80 text-xl">
            ¿Tienes dudas o necesitas ayuda o quieres registrarte? ¡Contáctanos
            y con gusto te asistiremos!
          </p>
        </div>

        <div className="w-full mx-auto flex flex-col md:flex-row bg-primary rounded-3xl overflow-hidden">
          <div className="w-full md:w-1/2 p-8 text-white">
            <h2 className="text-3xl font-semibold mb-2">Contáctanos</h2>
            <p className="mb-6 text-base ">
              En Maxipagos estamos listos para ayudarte. Déjanos tu mensaje y
              nos pondremos en contacto contigo lo antes posible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <InputField
                  label="Nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                />
                <InputField
                  label="Apellido"
                  name="apellido"
                  placeholder="Tu apellido"
                  required
                />
              </div>
              <InputField
                label="Email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                type="email"
                required
              />
              <InputField
                label="Número de teléfono"
                name="telefono"
                placeholder="+56 9 1234 5678"
                required
              />
              <TextAreaField
                label="Mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
                required
              />
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="medium"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Contactar"}
                </Button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 relative flex items-center justify-center p-8">
            <div className="relative w-full aspect-square md:aspect-auto md:h-full bg-white rounded-2xl overflow-hidden min-h-[400px]">
              {/* Fondo blur */}
              <div className="absolute w-[320px] h-[320px] lg:w-[860px] lg:h-[860px] bg-primary rounded-full blur-[60px] lg:blur-[220px] -bottom-[5%] -right-[25%] lg:-bottom-[75%] lg:-right-[75%] z-[1]"></div>

              <Image
                src="img/contact-1.png"
                alt="Persona señalando"
                width={400}
                height={400}
                className="w-auto h-full object-cover absolute z-[2] left-1/2 -translate-x-1/2"
                style={{ objectPosition: "center" }}
              />

              <div className="absolute z-[3] bottom-0 w-full bg-gradient-to-t from-secondary to-transparent p-6 pt-16 lg:pt-32 text-black text-center">
                <p className="text-lg font-medium">
                  En Maxipagos, simplificamos tu gestión de pagos para que te
                  enfoques en lo más importante:{" "}
                  <strong>hacer crecer tu negocio</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div className="w-full">
    <label htmlFor={name} className="block mb-1 font-semibold text-white">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md px-3 py-2 border border-white/20 text-white bg-white/5 focus:ring focus:ring-yellow-400"
    />
  </div>
);

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  placeholder,
  rows = 3,
  required = false,
}) => (
  <div className="w-full">
    <label htmlFor={name} className="block mb-1 font-semibold text-white">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full rounded-md px-3 py-2 border border-white/20 text-white bg-white/5 focus:ring focus:ring-yellow-400"
    />
  </div>
);

export default Contact;
