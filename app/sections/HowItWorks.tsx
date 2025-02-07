import { FaUserPlus, FaCogs, FaMobileAlt } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Regístrate en segundos",
      description: "Crea tu cuenta en minutos y empieza a disfrutar de una gestión de cobros ágil y sin complicaciones.",
    },
    {
      icon: <FaCogs />,
      title: "Configura tu negocio",
      description: "Personaliza las opciones de pago, ajusta calendarios y define los parámetros que se adapten a las necesidades de tus clientes.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Automatiza y cobra",
      description: "Optimiza tu proceso de cobro generando enlaces de pago automáticos, para que puedas centrarte en hacer crecer tu negocio.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Descubre cómo Maxipagos Optimiza tus Cobros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-opacity-20 transition"
            >
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
              <p className="text-base text-black/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
