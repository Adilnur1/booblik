import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/HeaderImg/image 1.svg";
import dropDown from "../../assets/HeaderImg/Shape white.svg";
import planet from "../../assets/HeaderImg/Shape.svg";
import menu from "../../assets/HeaderImg/menu-svgrepo-com (1).svg";
import "./Header.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [Lang, setLang] = useState("RU")
  const { t, i18n } = useTranslation()
  const changeLanguage = (newLang) => {
    if (newLang === "RU") {
      setLang("KG")
      i18n.changeLanguage("kg")
    } else if (newLang === "KG") {
      setLang(EN)
      i18n.changeLanguage("en")
    }
    else if (newLang === "EN") {
      setLang(RU)
      i18n.changeLanguage("ru")
    }
  }
  const [isOpen, setOpen] = useState();
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className={`header__menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to={"/about"}>Обо мне</NavLink>
            </li>
            <li>
              <NavLink to={"/new"}>Новости</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Меню</NavLink>
            </li>
            <li>
              <NavLink to={"/branches"}>Филиалы</NavLink>
            </li>
            <li>
              <NavLink to={"/vacancies"}>Вакансии</NavLink>
            </li>
          </ul>
        </div>
        <img
          src={menu}
          alt=""
          isActive={isOpen}
          onClick={() => setOpen(!isOpen)}
          className="burger-menu"
        />
        <div className="header__buttons">
          <button className="btn-language">
            <img src={planet} alt="" />
            {t("RU")}
            <img src={dropDown} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
