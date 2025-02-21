"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Label from "../components/Label";
import { useInView } from "../hooks/useInView"; // Ajusta la ruta según la ubicación de tu hook

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [rut, setRut] = useState("");
  const { ref, isInView } = useInView();

  const formatRut = (value: string): string => {
    const clean = value.replace(/[^0-9kK]/g, "");
    if (clean.length === 0) return "";
    if (clean.length === 1) return clean;
    const body = clean.slice(0, -1);
    const dv = clean.slice(-1).toUpperCase();
    const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${formattedBody}-${dv}`;
  };

  const validateRut = (rut: string): boolean => {
    const rutLimpio = rut.replace(/\./g, "").replace(/-/g, "").toUpperCase();
    if (rutLimpio.length < 2) return false;

    const cuerpo = rutLimpio.slice(0, -1);
    const dv = rutLimpio.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo[i]) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const dvCalculado = 11 - resto;
    const dvEsperado =
      dvCalculado === 11
        ? "0"
        : dvCalculado === 10
          ? "K"
          : dvCalculado.toString();

    return dvEsperado === dv;
  };

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatRut(value);
    setRut(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombre") as string;
    const apellido = formData.get("apellido") as string;
    const rutValue = formData.get("rut") as string;
    const restaurante = formData.get("restaurante") as string;
    const email = formData.get("email") as string;
    const telefono = formData.get("telefono") as string;
    const address = (formData.get("address") as string) || "Sin dirección";
    const mensaje = formData.get("mensaje") as string; // Capturamos el textarea

    // Validar RUT
    if (!validateRut(rutValue)) {
      setError("El RUT ingresado no es válido");
      setLoading(false);
      return;
    }

    // Datos a enviar
    const data = {
      name: nombre,
      lastname: apellido,
      rut: rutValue,
      address,
      email,
      businessName: restaurante,
      phone: telefono,
      mensaje, // Incluimos el mensaje
    };

    try {
      const response = await fetch(
        "https://us-central1-maxipays-7cbdb.cloudfunctions.net/createPendingUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      // Verificar si la petición HTTP fue exitosa
      if (!response.ok) {
        setError("Ocurrió un error al enviar el formulario (HTTP no-200)");
        return;
      }

      // Parsear la respuesta
      const dataApi = await response.json();
      // dataApi.res == true => Exito, dataApi.res == false => Error lógico
      if (dataApi.res === true) {
        setSuccess(true);
        e.currentTarget.reset();
        setRut("");
      } else {
        setError(
          "Error: ya se había intentado el registro o no se pudo completar."
        );
      }
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error en la comunicación con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: 5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="w-full flex flex-col items-center py-16"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="py-8 flex flex-col items-center justify-center px-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={childVariants}>
            <Label text="Hablemos" />
          </motion.div>
          <motion.h2
            variants={childVariants}
            className="text-5xl font-bold mt-4 pb-2 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Contacto
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-xl text-center text-foreground/70 mb-8 transition-all duration-500"
          >
            ¿Tienes dudas o quieres integrar FooDiv en tu restaurante?
            ¡Hablemos! Estamos aquí para ayudarte.
          </motion.p>
        </motion.div>

        <div className="w-full mx-auto flex flex-col md:flex-row bg-primary rounded-3xl overflow-hidden">
          <motion.div
            className="w-full md:w-1/2 p-8 text-white"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={childVariants}
              className="text-3xl font-semibold mb-2"
            >
              Contáctanos
            </motion.h2>
            <motion.p variants={childVariants} className="mb-6 text-base">
              Déjanos tu nombre, correo electrónico y un mensaje con tu
              consulta. Nos pondremos en contacto contigo a la brevedad.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={childVariants}
              method="post"
            >
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
              <div className="flex flex-col md:flex-row gap-4">
                <InputField
                  label="RUT"
                  name="rut"
                  placeholder="11.111.111-1"
                  type="text"
                  required
                  value={rut}
                  onChange={handleRutChange}
                />
                <InputField
                  label="Restaurante"
                  name="restaurante"
                  placeholder="Tu restaurante"
                  required
                />
              </div>
              {/* 
                Si tu API requiere la dirección, añade un input "address"
                <InputField
                  label="Dirección"
                  name="address"
                  placeholder="Ej: Av. Siempre Viva 123"
                />
              */}
              <div className="flex flex-col md:flex-row gap-4">
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
              </div>
              <TextAreaField
                label="Mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
              />
              {error && (
                <p className="text-white text-center font-bold">{error}</p>
              )}
              {success && (
                <p className="text-green-300 text-center font-bold">
                  ¡Enviado correctamente!
                </p>
              )}
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
            </motion.form>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 relative flex items-center justify-center p-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-full bg-white rounded-2xl overflow-hidden min-h-[400px]">
              {/* Fondo blur */}
              <div className="absolute w-[320px] h-[320px] lg:w-[860px] lg:h-[860px] bg-primary rounded-full blur-[60px] lg:blur-[220px] -bottom-[5%] -right-[25%] lg:-bottom-[75%] lg:-right-[75%] z-[1]" />
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
                  <strong>¿Quieres ver cómo funciona FooDiv en acción?</strong>.
                  Contáctanos y programaremos una demostración gratuita. hacer
                  crecer tu negocio
                </p>
              </div>
            </div>
          </motion.div>
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
  value,
  onChange,
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
      value={value}
      onChange={onChange}
      className="w-full rounded-md px-3 py-2 border border-white/20 text-white bg-white/5
           focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
      className="w-full rounded-md px-3 py-2 border border-white/20 text-white bg-white/5
           focus:outline-none focus:ring-2 focus:ring-yellow-500 min-h-16 max-h-40"
    />
  </div>
);

export default Contact;
