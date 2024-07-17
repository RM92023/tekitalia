import './Partners.css';

const partnersData = [
  { id: 1, name: "Tekpro Tecnología de Procesos", description: "Descripción del Aliado 1", image: "/tekpro.webp" },
  { id: 2, name: "Alsec alimentos secos", description: "Descripción del Aliado 2", image: "/alsec.png" },
  { id: 3, name: "Dale Verde", description: "Descripción del Aliado 3", image: "/daleVerde.png" },
  { id: 4, name: "Fresh Colombia", description: "Descripción del Aliado 4", image: "/fresh.png" },
];

const Partners = () => {
  return (
    <section className="partners">
      <h2>Aliados</h2>
      <div className="partners-container">
        {partnersData.map(partner => (
          <div key={partner.id} className="partner-card">
            <img src={partner.image} alt={partner.name} className="partner-image" />
            <h3>{partner.name}</h3>
            {/* <p>{partner.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
