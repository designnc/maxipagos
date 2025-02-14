"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";

// Constantes para el color de destaque (puedes modificar estos valores)
const HIGHLIGHT_COLOR = "bg-primary";
const HIGHLIGHT_TEXT_COLOR = "text-white";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Gratis",
      subtitle: "Empieza gratis",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
      ],
    },
    {
      name: "Pro",
      subtitle: "Excelente para empresas",
      monthlyPrice: 9990,
      annualPrice: 9990 * 12 * 0.8, // Ejemplo con 20% de descuento anual
      features: [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
      ],
    },
    {
      name: "Pyme",
      subtitle: "Empieza gratis",
      monthlyPrice: 24990,
      annualPrice: 24990 * 12 * 0.8,
      features: [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
      ],
    },
  ];

  return (
    <section id="planes" className="w-full py-16 px-4 md:px-8 text-center animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        {/* Título y subtítulo */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 transition-all duration-500">
          Planes para ti
        </h2>
        <p className="text-lg text-foreground/70 mb-8 transition-all duration-500">
          Escoge la opción que mejor se adapte a tu negocio
        </p>

        {/* Toggle Mensual / Anual */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-zinc-900 rounded-md p-1 shadow border border-foreground/10 transition-all duration-300">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-sm font-semibold rounded-md transition-colors duration-300
                ${
                  !isAnnual
                    ? "bg-primary text-white" // Botón activo
                    : "text-primary hover:bg-primary/10"
                }
              `}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-sm font-semibold rounded-md transition-colors duration-300
                ${
                  isAnnual
                    ? "bg-primary text-white" // Botón activo
                    : "text-primary hover:bg-primary/10"
                }
              `}
            >
              Anual
            </button>
          </div>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isHighlighted = plan.name === "Pro";

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between p-6 rounded-2xl shadow transition-transform duration-300 hover:scale-105
                  ${
                    isHighlighted
                      ? `${HIGHLIGHT_COLOR} ${HIGHLIGHT_TEXT_COLOR} scale-105`
                      : "bg-white dark:bg-zinc-900 text-foreground border border-foreground/10"
                  }
                `}
              >
                {/* Título y subtítulo */}
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    isHighlighted ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {plan.subtitle}
                </p>

                {/* Precio con animación al cambiar */}
                <p className="text-4xl font-bold mb-4 transition-all duration-300">
                  <span
                    key={`${isAnnual}-${plan.name}`} // Cambiar key reinicia la animación
                    className="inline-block animate-fadeIn"
                  >
                    ${price.toLocaleString("es-CL")}
                  </span>
                  <span className="text-base font-medium ml-1">
                    {isAnnual ? "/año" : "/m"}
                  </span>
                </p>

                {/* Lista de características */}
                <ul className="space-y-2 mb-6 text-left transition-all duration-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle
                        className={`w-5 h-5 mr-2 mt-0.5 transition-all duration-300 ${
                          isHighlighted ? "text-white" : "text-primary"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de acción */}
                <Button variant="primary" size="medium">
                  Empieza ahora
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
