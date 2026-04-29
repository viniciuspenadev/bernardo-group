"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const pathname = usePathname();

  const toggleLang = () => {
    if (!pathname) return "/";
    const newLang = lang === "en" ? "pt" : "en";
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">

        <Link href={`/${lang}`} className="logo-link">
          <Image 
            src="/Logov01.png" 
            alt="Bernardo Group" 
            width={350} 
            height={120} 
            priority
            className="navbar-logo"
            style={{ width: '350px', maxWidth: '100%', height: 'auto' }}
          />
        </Link>
        <div className="nav-links">
          <Link href={`/${lang}#about`}>{dict.about}</Link>
          <Link href={`/${lang}#empresas`}>{dict.companies}</Link>
          <Link href={`/${lang}#investidores`}>{dict.investors}</Link>
          <Link href={toggleLang()} className="lang-switcher">
            {lang === "en" ? "PT" : "EN"}
          </Link>
          <Link href={`/${lang}#contato`} className="btn-primary">{dict.contact}</Link>
        </div>
      </div>
    </nav>
  );
}
