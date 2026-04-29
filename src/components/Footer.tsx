import Image from "next/image";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="footer">
      <div className="footer-title-huge">
        BERNARDO GROUP
      </div>

      <div className="footer-contact-grid">
        <div className="f-contact-item">
          <h4>Escritório Brasil</h4>
          <p>Balneário Camboriú, SC</p>
          <a href="tel:+554733333333">+55 47 3333-3333</a>
        </div>
        
        <div className="f-contact-item">
          <h4>Miami Office</h4>
          <p>Brickell Ave, Miami, FL</p>
          <a href="mailto:miami@bernardogroup.com">miami@bernardogroup.com</a>
        </div>

        <div className="f-contact-item">
          <h4>Geral</h4>
          <a href="mailto:contato@bernardogroup.com.br">contato@bernardogroup.com.br</a>
          <a href="#">Trabalhe Conosco</a>
        </div>
      </div>

      <div className="footer-bottom">
        <nav className="f-nav">
          <a href="#">Empresas</a>
          <a href="#">Investidores</a>
          <a href="#">Holding</a>
          <a href="#">Privacidade</a>
        </nav>
        <div className="f-copyright">
          &copy; {new Date().getFullYear()} Bernardo Group. All rights reserved.
        </div>
      </div>
    </footer>

  );
}

