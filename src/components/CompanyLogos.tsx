import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Bernardo Concept', type: 'text' },
    { name: 'Bernardo Construtora', type: 'text' },
    { name: 'Steel Frame', type: 'text' },
    { name: 'TechnoGlass', type: 'text' },
  ];

  return (
    <div className="company-logos-bar">
      <div className="container logos-container">
        <span className="logos-label">GRUPOS E PARCEIROS</span>
        <div className="logos-grid">
          {companies.map((company, index) => (
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
