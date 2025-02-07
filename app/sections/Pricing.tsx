const Pricing = () => {
    const plans = [
      { name: "Básico", price: "$10/mes", features: ["1 usuario", "Hasta 50 clientes"] },
      { name: "Pro", price: "$25/mes", features: ["5 usuarios", "Hasta 200 clientes"] },
      { name: "Premium", price: "$50/mes", features: ["Usuarios ilimitados", "Clientes ilimitados"] },
    ];
  
    return (
      <section className="bg-secondary text-white py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Planes y precios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-primary p-6 rounded-md shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-primary transition">
                Elige este plan
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Pricing;
  