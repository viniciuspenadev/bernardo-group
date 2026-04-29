"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero({ dict }: { dict: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "01",
      title: "Steel",
      subtitle: "Frame",
      desc: "Construção a seco de alta precisão, sustentabilidade e rapidez para projetos modernos.",
      image: "/Luxury_contemporary_twostory_house_ultra_realistic_5cae988f6b.jpeg",
      label: "STEEL FRAME"
    },
    {
      id: "02",
      title: "Planejados",
      subtitle: "Sob Medida",
      desc: "Mobiliário de alto padrão com design exclusivo e acabamentos impecáveis para sua residência.",
      image: "/Luxury_contemporary_twostory_house_ultra_realistic_5cae988f6b.jpeg", 
      label: "PLANEJADOS"
    },
    {
      id: "03",
      title: "Reformas e Obras",
      subtitle: "Alto Padrão",
      desc: "Execução de obras complexas e reformas com gestão detalhada e padrão de excelência Bernardo.",
      image: "/Luxury_contemporary_twostory_house_ultra_realistic_5cae988f6b.jpeg",
      label: "OBRAS"
    },
    {
      id: "04",
      title: "Technoglass",
      subtitle: "Vidros Premium",
      desc: "Soluções avançadas em vidros de alta performance, aliando estética e proteção térmica.",
      image: "/Luxury_contemporary_twostory_house_ultra_realistic_5cae988f6b.jpeg",
      label: "TECHNOGLASS"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {/* Background Images Layer */}
      <div className="hero-bg-layer">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide-bg ${currentSlide === index ? "active" : ""}`}
          >
            <Image 
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="bg-img-full"
            />
            <div className="bg-overlay-dark"></div>
          </div>
        ))}
      </div>

      {/* Left Sidebar Navigation */}
      <div className="hero-nav-left">
        <div className="vertical-nav-line"></div>
        <div className="nav-numbers">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`nav-num-item ${currentSlide === index ? "active" : ""}`}
            >
              <span className="num">{slides[index].id}</span>
              {currentSlide === index && <div className="active-accent-block"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="hero-content-overlay">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide-content-glass ${currentSlide === index ? "active" : ""}`}
          >
            <div className="bg-number-large">{slide.id}</div>
            <div className="content-inner">
              <h1 className="slide-title">
                {slide.title} <br />
                <span className="text-white">{slide.subtitle}</span>
              </h1>
              <p className="slide-desc text-silver">
                {slide.desc}
              </p>
              <div className="hero-actions">
                <a href="#empresas" className="btn-hero-steel">SAIBA MAIS</a>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>

  );
}


