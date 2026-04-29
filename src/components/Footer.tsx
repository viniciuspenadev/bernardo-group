import Image from "next/image";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="footer">
      <div className="footer-title-huge">
        BERNARDO GROUP
      </div>

      <div className="footer-contact-grid">
        <div className="f-contact-item">
          <h4>{dict.presence.office_br_sp}</h4>
          <p>{dict.presence.address_sp}</p>
          <a href="tel:+551130310000">+55 11 3031-0000</a>
        </div>

        <div className="f-contact-item">
          <h4>{dict.presence.office_br_cp}</h4>
          <p>{dict.presence.address_cp}</p>
          <a href="tel:+551933333333">+55 19 3333-3333</a>
        </div>
        
        <div className="f-contact-item">
          <h4>{dict.presence.office_usa}</h4>
          <p>Brickell Ave, Miami, FL</p>
          <a href="mailto:miami@bernardogroup.com">miami@bernardogroup.com</a>
        </div>

        <div className="f-contact-item">
          <h4>{dict.presence.general}</h4>
          <a href="mailto:contato@bernardogroup.com.br">contato@bernardogroup.com.br</a>
          <a href="#">{dict.presence.work_with_us}</a>
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

