import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Bernardo Concept' },
    { name: 'Bernardo Construtora' },
    { name: 'Steel Frame' },
    { name: 'TechnoGlass' },
  ];

  // Double the array for seamless marquee
  const marqueeItems = [...companies, ...companies, ...companies, ...companies];

  return (
    <div className="company-logos-bar">
      <div className="logos-label-container">
        <span className="logos-label">GRUPOS E PARCEIROS</span>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {marqueeItems.map((company, index) => (
            <div key={index} className="logo-item">
              <span className="logo-text-styled steel-text">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
