import React from "react";
import logo from "../assets/img/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="" width={120} height={80} />
      </div>
      <div className="footer__info">
        <a className="footer__info-item">Про нас</a>
        <a className="footer__info-item">Пропозиції</a>
        <a className="footer__info-item">Відгуки</a>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-tel">8 800 000-00-00</div>
        <div className="footer__contact-text">дзвінки безплатні</div>
      </div>
    </footer>
  );
};

export default Footer;
