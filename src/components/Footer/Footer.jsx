import React from "react";
import "./Footer.scss";
import footerLogo from "../../assets/FooterImg/Remove-bg 1.png";
import qr from "../../assets/FooterImg/CEGvxdR0CtNBYwlGJb94G-transformed 1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__logo">
          <img src={footerLogo} alt="" />
        </div>
        <div className="footer__list">
          <div className="footer__li">
            <h3>Bublick</h3>
            <p>Contact us</p>
            <p>yabublik@gmail.com</p>
            <p>
              <a href="tel:+1-2345-6789">
                +1-2345-6789
              </a>
            </p>
          </div>
          <div className="footer__li">
            <h3>Обо мне</h3>
            <p>Я хорош</p>
            <p>Я умен</p>
            <p>Я красив</p>
            <p>Я разнообразен</p>
            <p>Я восхитителен</p>
          </div>
          <div className="footer__li">
            <h3>Продукция</h3>
            <p>Мокко</p>
            <p>Горячий шоколад</p>
            <p>Какао</p>
            <p>Макао</p>
            <p>Салат</p>
          </div>
          <div className="footer__li">
            <h3>Партнеры</h3>
            <p>Мокко</p>
            <p>Горячий шоколад</p>
            <p>Какао</p>
            <p>Макао</p>
            <p>Салат</p>
          </div>
        </div>
        <div className="footer__qr">
          <a href="https://www.instagram.com/ya_booblik/" target="_blank">
            <img src={qr} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
