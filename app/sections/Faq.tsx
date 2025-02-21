"use client";
import { useState, useEffect } from "react";
import Label from "../components/Label";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  // Funcionalidad de FooDiv
  {
    category: "Funcionalidad de FooDiv",
    question: "¿Es necesario descargar la app para usar FooDiv?",
    answer:
      "No es obligatorio. Los clientes pueden escanear un código QR y acceder al menú y pedidos sin descargar la app.",
  },
  {
    category: "Funcionalidad de FooDiv",
    question: "¿Puedo dividir la cuenta entre varios comensales?",
    answer:
      "Sí, FooDiv permite pagos individuales o dividir la cuenta según el consumo de cada persona.",
  },
  {
    category: "Funcionalidad de FooDiv",
    question: "¿Puedo hacer un pedido sin conexión a internet?",
    answer:
      "No, FooDiv requiere conexión a internet para funcionar correctamente y enviar los pedidos en tiempo real.",
  },
  {
    category: "Funcionalidad de FooDiv",
    question: "¿Puedo hacer modificaciones en mi pedido?",
    answer:
      "Sí, los clientes pueden agregar notas o especificaciones en cada platillo antes de enviarlo a la cocina.",
  },

  // Uso para Restaurantes
  {
    category: "Uso para Restaurantes",
    question: "¿Cómo recibo los pedidos en mi restaurante?",
    answer:
      "Puedes recibirlos en una tablet, computadora o impresora en la cocina para una gestión más eficiente.",
  },
  {
    category: "Uso para Restaurantes",
    question: "¿FooDiv se integra con pantallas en la cocina?",
    answer:
      "Sí, puedes visualizar el estado de los pedidos en pantallas digitales dentro del restaurante.",
  },
  {
    category: "Uso para Restaurantes",
    question: "¿Puedo personalizar mi menú en FooDiv?",
    answer:
      "Sí, puedes actualizar tu menú, agregar imágenes y modificar precios en cualquier momento.",
  },
  {
    category: "Uso para Restaurantes",
    question:
      "¿Se pueden administrar los pedidos desde diferentes dispositivos?",
    answer:
      "Sí, puedes gestionar los pedidos desde múltiples dispositivos en el restaurante.",
  },

  // Pagos y Seguridad
  {
    category: "Pagos y Seguridad",
    question: "¿Qué métodos de pago acepta FooDiv?",
    answer:
      "FooDiv permite pagos con tarjetas de crédito/débito, billeteras digitales y pagos en efectivo si el restaurante lo habilita.",
  },
  {
    category: "Pagos y Seguridad",
    question: "¿Es seguro pagar a través de FooDiv?",
    answer:
      "Sí, usamos tecnología de encriptación para garantizar transacciones seguras y confiables.",
  },
  {
    category: "Pagos y Seguridad",
    question: "¿FooDiv cobra comisiones por transacciones?",
    answer:
      "Dependerá del plan contratado. Contáctanos para más detalles sobre tarifas.",
  },
  {
    category: "Pagos y Seguridad",
    question: "¿Puedo obtener facturas de mis pagos?",
    answer:
      "Sí, FooDiv permite generar facturas digitales según las opciones del restaurante.",
  },

  // Instalación y Configuración
  {
    category: "Instalación y Configuración",
    question: "¿Cómo puedo registrar mi restaurante en FooDiv?",
    answer:
      "Solo necesitas completar el formulario de registro y nuestro equipo te ayudará a configurar tu perfil.",
  },
  {
    category: "Instalación y Configuración",
    question: "¿FooDiv necesita hardware especial para funcionar?",
    answer: "No, funciona en cualquier dispositivo con acceso a internet.",
  },
  {
    category: "Instalación y Configuración",
    question: "¿Cuánto tiempo toma la configuración inicial?",
    answer:
      "En menos de 24 horas puedes tener FooDiv funcionando en tu restaurante.",
  },
  {
    category: "Instalación y Configuración",
    question: "¿Puedo agregar más de un usuario para administrar FooDiv?",
    answer:
      "Sí, puedes asignar diferentes roles y accesos para el personal del restaurante.",
  },

  // Soporte y Ayuda
  {
    category: "Soporte y Ayuda",
    question: "¿Cómo puedo contactar al soporte de FooDiv?",
    answer:
      "Puedes escribirnos a nuestro correo de soporte, WhatsApp o llamarnos directamente.",
  },
  {
    category: "Soporte y Ayuda",
    question: "¿FooDiv ofrece capacitación para los empleados?",
    answer:
      "Sí, brindamos sesiones de capacitación para que el personal aprenda a usar FooDiv de manera eficiente.",
  },
  {
    category: "Soporte y Ayuda",
    question: "¿Qué pasa si tengo problemas con un pedido o un pago?",
    answer:
      "Nuestro equipo de soporte está disponible para ayudarte a resolver cualquier inconveniente.",
  },
  {
    category: "Soporte y Ayuda",
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, puedes gestionar tu suscripción desde tu cuenta o contactarnos para más detalles.",
  },
];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}

export default function FaqPage() {
  const isDesktop = useIsDesktop();

  const groupedFaqs = faqs.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, FaqItem[]>
  );

  return (
    <section id="faqs" className="py-16">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="py-8 flex flex-col items-center justify-center">
          <Label text="FAQS" />
          <h1 className="text-5xl font-bold mt-4 pb-2 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h1>
        </div>

        {Object.entries(groupedFaqs).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-foreground/60">
              {category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {items.map((faq, index) => (
                <AccordionItem key={index} faq={faq} isDesktop={isDesktop} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccordionItem({
  faq,
  isDesktop,
}: {
  faq: FaqItem;
  isDesktop: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isDesktop);

  useEffect(() => {
    setIsOpen(isDesktop);
  }, [isDesktop]);

  const toggleAccordion = () => {
    // Solo permite el toggle en móvil
    if (!isDesktop) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`pb-2 ${!isDesktop ? "border-b border-foreground/10" : ""}`}
    >
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full py-2 text-left transition-colors duration-200 hover:text-primary"
      >
        <span className="text-lg font-medium text-foreground">
          {faq.question}
        </span>
        {/* Mostrar icono solo en móvil */}
        {!isDesktop && (
          <motion.span
            initial={false}
            animate={{ opacity: [0.8, 1] }}
            transition={{ duration: 0.2 }}
            className="ml-2 text-xl"
          >
            {isOpen ? "−" : "+"}
          </motion.span>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-2 text-foreground/70 pb-2">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
