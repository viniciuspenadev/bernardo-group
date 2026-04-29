"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleLang = () => {
    if (!pathname) return "/";
    const newLang = lang === "en" ? "pt" : "en";
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">

          <Link href={`/${lang}`} className="logo-link navbar-logo-container" style={{ position: 'relative', width: '350px', height: '120px', display: 'block' }}>
            <Image 
              src="/Logov01.png" 
              alt="Bernardo Group" 
              fill
              sizes="(max-width: 768px) 200px, 350px"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
              className="navbar-logo"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links">
            <Link href={`/${lang}#about`}>{dict.navbar.about}</Link>
            <Link href={`/${lang}#empresas`}>{dict.navbar.companies}</Link>
            <Link href={`/${lang}#investidores`}>{dict.navbar.investors}</Link>
            <Link href={toggleLang()} className="lang-switcher">
              {lang === "en" ? "PT" : "EN"}
            </Link>
            <Link href={`/${lang}#contato`} className="btn-primary">{dict.navbar.contact}</Link>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button 
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Premium Mobile Menu Overlay */}
      <div className={`premium-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        
        {/* Dedicated Close Button */}
        <button 
          className="premium-close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          &times;
        </button>

        <div className="premium-menu-content">
          <div className="premium-menu-links">
            <div className="nav-item-wrapper" style={{ transitionDelay: '0.1s' }}>
              <Link href={`/${lang}#about`} onClick={closeMenu}>{dict.navbar.about}</Link>
            </div>
            <div className="nav-item-wrapper" style={{ transitionDelay: '0.2s' }}>
              <Link href={`/${lang}#empresas`} onClick={closeMenu}>{dict.navbar.companies}</Link>
            </div>
            <div className="nav-item-wrapper" style={{ transitionDelay: '0.3s' }}>
              <Link href={`/${lang}#investidores`} onClick={closeMenu}>{dict.navbar.investors}</Link>
            </div>
            <div className="nav-item-wrapper" style={{ transitionDelay: '0.4s' }}>
              <Link href={`/${lang}#contato`} onClick={closeMenu}>{dict.navbar.contact}</Link>
            </div>
          </div>
          
          <div className="premium-menu-footer" style={{ transitionDelay: '0.5s' }}>
            <div className="premium-menu-lang">
              <Link href={pathname?.replace(`/${lang}`, '/pt') || '/pt'} onClick={closeMenu} className={lang === 'pt' ? 'active' : ''}>PT</Link>
              <Link href={pathname?.replace(`/${lang}`, '/en') || '/en'} onClick={closeMenu} className={lang === 'en' ? 'active' : ''}>EN</Link>
            </div>
            <div className="premium-menu-contact">
              <a href="mailto:contato@bernardogroup.com.br">{dict.presence.general}: contato@bernardogroup.com.br</a>
              <a href="tel:+551130310000">SP: +55 11 3031-0000</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
