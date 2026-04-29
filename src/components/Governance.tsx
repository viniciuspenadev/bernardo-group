"use client";

import React, { useState } from "react";

const SolidityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const InnovationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const EsgIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
    <path d="M12 2C12 2 15 6.5 15 12C15 17.5 12 22 12 22"></path>
    <path d="M12 2C12 2 9 6.5 9 12C9 17.5 12 22 12 22"></path>
    <path d="M2 12H22"></path>
  </svg>
);

interface GovernanceProps {
  dict: any;
}

export default function Governance({ dict }: GovernanceProps) {
  const [activeTab, setActiveTab] = useState(0);
  const gov = dict?.governance;

  if (!gov) return null;

  const pillars = [
    {
      id: 0,
      icon: <SolidityIcon />,
      title: gov.solidity_title,
      desc: gov.solidity_desc,
    },
    {
      id: 1,
      icon: <InnovationIcon />,
      title: gov.innovation_title,
      desc: gov.innovation_desc,
    },
    {
      id: 2,
      icon: <EsgIcon />,
      title: gov.esg_title,
      desc: gov.esg_desc,
    },
  ];

  return (
    <section className="gov-section">
      <div className="container">
        <div className="gov-header">
          <h2 className="section-title text-silver">{gov.title}</h2>
          <p className="gov-subtitle">{gov.subtitle}</p>
        </div>
        
        <div className="gov-tabs-container glass-panel">
          <div className="gov-tabs-sidebar">
            {pillars.map((item) => (
              <button
                key={item.id}
                className={`gov-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="tab-number">0{item.id + 1}</span>
                <span className="tab-label">{item.title}</span>
              </button>
            ))}
          </div>
          
          <div className="gov-tabs-content">
            <div key={activeTab} className="gov-content-inner fade-in">
              <div className="gov-content-icon steel-text">
                {pillars[activeTab].icon}
              </div>
              <h3 className="gov-content-title">{pillars[activeTab].title}</h3>
              <p className="gov-content-desc">{pillars[activeTab].desc}</p>
              <div className="gov-content-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
