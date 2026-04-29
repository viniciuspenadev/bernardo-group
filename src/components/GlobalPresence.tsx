"use client";

import React from "react";
import Image from "next/image";

interface GlobalPresenceProps {
  dict: any;
}

export default function GlobalPresence({ dict }: GlobalPresenceProps) {
  const presence = dict?.presence;
  if (!presence) return null;

  return (
    <section className="presence-section">
      <div className="container">
        <div className="presence-header text-center">
          <h2 className="section-title text-silver">{presence.title}</h2>
          <p className="presence-subtitle steel-text">{presence.subtitle}</p>
        </div>

        <div className="map-wrapper">
          {/* The authoritative SVG map moved from site_oficial */}
          <img
            src="/mapa%20mundi%20aberto.svg"
            alt="World Map"
            className="world-map-svg"
          />

          {/* USA / Miami Marker */}
          <div className="map-marker" style={{ top: "40%", left: "19%" }}>
            <div className="marker-dot">
              <div className="radar"></div>
            </div>
            <div className="marker-label">
              <span className="location-name">{presence.usa_title}</span>
              <span className="location-desc">{presence.usa_desc}</span>
            </div>
          </div>

          {/* Brazil Marker */}
          <div className="map-marker" style={{ top: "70%", left: "30%" }}>
            <div className="marker-dot">
              <div className="radar"></div>
            </div>
            <div className="marker-label">
              <span className="location-name">{presence.br_title}</span>
              <span className="location-desc">{presence.br_desc}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

