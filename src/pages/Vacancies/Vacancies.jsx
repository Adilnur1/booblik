import React from "react";
import "./Vacancies.scss";
import { VacancyCard } from "./VacancyCard/VacancyCard";
import { useLocation } from "react-router-dom";

const Vacancies = () => {
  const location=useLocation()
  console.log(location.pathname.slice(1))
  return (
    <main>
      <div className="home">
        <div className="home__container">
          <div className="home__location">
            <div>Главная</div>
            <div></div>
            <div>Вакансии</div>
          </div>
          <div className="home__title">
            Вакансии
          </div>
      
          <div className="home__vacancies">
            <VacancyCard title="We are hiring" />
            <VacancyCard title="We are hiring" />
            <VacancyCard title="We are hiring" />
            <VacancyCard title="We are hiring" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vacancies;
