import Image from "next/image";

export default function Companies({ dict }: { dict: any }) {
  const compDict = dict.companies;
  const companies = [
    {
      name: "Bernardo Concept",
      description: compDict.concept.desc,
      tag: compDict.concept.tag,
      logo: "/bernardo-concept-logo.webp"
    },
    {
      name: "Bernardo Construtora",
      description: compDict.construtora.desc,
      tag: compDict.construtora.tag,
      logo: "/logo_bernardo_construtura.webp"
    },
    {
      name: "TechnoGlass",
      description: compDict.technoglass.desc,
      tag: compDict.technoglass.tag,
      logo: null
    }
  ];

  return (
    <section id="empresas" className="companies-section">
      <div className="container">
        <div className="section-header">
          <h2 className="text-silver">{compDict.title}</h2>
          <p>{compDict.subtitle}</p>
        </div>
        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="glass-panel company-card">
              <span className="company-tag">{company.tag}</span>
              <div className="company-logo-wrapper">
                {company.logo ? (
                  <Image 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    width={180} 
                    height={80} 
                    className="company-logo"
                  />
                ) : (
                  <h3 className="company-name-fallback">{company.name}</h3>
                )}
              </div>
              <p>{company.description}</p>
              <a href="#" className="read-more">{compDict.read_more} &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
