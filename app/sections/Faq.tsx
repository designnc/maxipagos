"use client"
import { useState } from "react";

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

// Aquí defines tus preguntas frecuentes, incluyendo la categoría
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

export default function FaqPage() {
  // Agrupamos las preguntas por categoría
  const groupedFaqs = faqs.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FaqItem[]>);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>

      {Object.entries(groupedFaqs).map(([category, items]) => (
        <div key={category} className="mb-8">
          {/* Título de la categoría */}
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>

          {/* Lista de preguntas de la categoría */}
          <div className="space-y-4">
            {items.map((faq, index) => (
              <AccordionItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Componente individual para cada pregunta y respuesta
function AccordionItem({ faq }: { faq: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 pb-2">
      <button
        onClick={toggleAccordion}
        className="flex justify-between w-full py-2 text-left"
      >
        <span className="font-medium text-gray-800">{faq.question}</span>
        <span className="ml-2 text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
