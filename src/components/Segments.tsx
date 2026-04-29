import React from 'react';
import Image from 'next/image';

const Segments = ({ dict }: { dict: any }) => {
  const segDict = dict?.segments;
  if (!segDict) return null;

  const segments = [
    {
      id: 1,
      title: 'Bernardo Concept',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Bernardo Construtora',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Steel Frame',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'TechnoGlass',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <section className="segments-section">
      <div className="container segments-header">
        <h2 className="segments-title">
          <span className="accent-mark"></span>
          {segDict.title}<br/>
          <span className="steel-text">{segDict.success}</span>
        </h2>
        <p className="segments-desc">
          {segDict.desc}
        </p>
      </div>

      <div className="segments-grid">
        {segments.map((seg) => (
          <div key={seg.id} className="segment-card">
            <div className="segment-img-wrapper">
              {/* Using standard img for external url to avoid next.config.js domains issue temporarily */}
              <img src={seg.image} alt={seg.title} className="segment-img" />
            </div>
            <div className="segment-overlay">
              <h3 className="segment-name">{seg.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Segments;
