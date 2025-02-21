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
  // General
  {
    category: "General",
    question: "¿Qué es Maxipagos y cómo puede ayudar a mi negocio?",
    answer:
      "Maxipagos es un servicio que simplifica la gestión de pagos en línea, ayudándote a generar cobros de manera eficiente y segura. Además, centraliza la información de tus transacciones y crea una base de pago organizada, optimizando la gestión y mejorando la eficiencia de tu negocio.",
  },
  {
    category: "General",
    question: "¿Para qué tipo de negocios es ideal Maxipagos?",
    answer:
      "Maxipagos se adapta a cualquier negocio que requiera cobrar a través de canales digitales, desde pequeños emprendedores hasta grandes empresas con necesidades más avanzadas.",
  },
  {
    category: "General",
    question: "¿Maxipagos cobra alguna comisión por transacción?",
    answer:
      "Sí, existe una tarifa por cada transacción procesada. Sin embargo, ofrecemos planes y tarifas personalizadas.",
  },

  // Administración de Pagos
  {
    category: "Administración de Pagos",
    question: "¿Puedo recibir pagos con tarjeta de crédito y débito?",
    answer:
      "Por supuesto. Maxipagos te permite recibir pagos con tarjetas de crédito y débito, además de otros métodos de pago en línea.",
  },
  {
    category: "Administración de Pagos",
    question: "¿Cómo puedo hacer un seguimiento de mis pagos en tiempo real?",
    answer:
      "Dentro de tu panel de control de Maxipagos, podrás ver todas tus transacciones, estados de pago y estadísticas de ventas en tiempo real.",
  },

  // Gestión de Clientes
  {
    category: "Gestión de Clientes",
    question: "¿Puedo programar recordatorios de pago automático?",
    answer:
      "Sí, la plataforma te permite programar recordatorios de pago automático para tus clientes, ayudándote a mantener al día tus cobros y evitar retrasos.",
  },

  // Marketing y Promociones
  {
    category: "Marketing y Promociones",
    question: "¿Cómo crear cupones de descuento?",
    answer:
      "Maxipagos ofrece herramientas para crear y gestionar cupones de descuento de manera fácil. Desde tu panel de control, puedes establecer el valor del descuento, la duración y las condiciones de uso.",
  },

  // Comercios Electrónicos
  {
    category: "Comercios Electrónicos",
    question:
      "¿Maxipagos se integra con otras plataformas de comercio electrónico?",
    answer:
      "Sí, ofrecemos integraciones con diversas plataformas de e-commerce para que puedas gestionar tus ventas y pagos en un solo lugar.",
  },

  // Links de Pago
  {
    category: "Links de Pago",
    question: "¿Puedo generar links de pago para compartir con mis clientes?",
    answer:
      "Exacto, puedes crear links de pago personalizados y compartirlos por correo electrónico, redes sociales o aplicaciones de mensajería.",
  },
  {
    category: "Links de Pago",
    question: "¿Los links de pago tienen fecha de expiración?",
    answer:
      "Puedes configurar una fecha de expiración para cada link de pago según tus necesidades y la política de tu negocio.",
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
