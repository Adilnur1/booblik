import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/HeaderImg/image 1.svg";
import dropDown from "../../assets/HeaderImg/Vector (2).svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <NavLink to={"/new"}>Новинки</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Меню</NavLink>
            </li>
            <li>
              <NavLink to={"/bublers"}>Бублеры</NavLink>
            </li>
            <li>
              <NavLink to={"/branches"}>Филиалы</NavLink>
            </li>
            <li>
              <NavLink to={"/vacancies"}>Вакансии</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__buttons">
          <button className="btn-language">
            Русский
            <img src={dropDown} alt="" />
          </button>
          <button className="download">Скачать приложение</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
