const Testimonials = () => {
    const testimonials = [
      { name: "María P.", text: "FooDiv me ahorró horas de trabajo cada semana." },
      { name: "Juan L.", text: "Automatizar mis cobros nunca fue tan fácil. ¡Excelente servicio!" },
      { name: "Ana G.", text: "Las promociones ayudaron a aumentar mis ventas rápidamente." },
    ];
  
    return (
      <section className="bg-accent-500 text-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen nuestros clientes</h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-6 rounded-md shadow-md">
              <p className="text-lg italic mb-2">&quot;{testimonial.text}&quot;</p>
              <h3 className="font-bold text-right">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  