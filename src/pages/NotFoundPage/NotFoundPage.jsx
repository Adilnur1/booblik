import React from "react";
import "./NotFoundPage.scss";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <h1>Страница не найдена</h1>
      <NavLink to={"/"}>На главную</NavLink>
    </main>
  );
};

export default NotFoundPage;
