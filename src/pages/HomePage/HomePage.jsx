import React from "react";
import "./HomePage.scss";

// import piks from "../../assets/AboutUsImg/piks.svg";
import cardstwo from "../../assets/AboutUsImg/Group 125.png";
import minicards1 from "../../assets/AboutUsImg/Снимок экрана 2024-04-09 162048 1.png";
import minicards2 from "../../assets/AboutUsImg/Rectangle 628.png";
import minicards3 from "../../assets/AboutUsImg/Rectangle 626.png";
import minicards4 from "../../assets/AboutUsImg/Rectangle 99.png";

const HomePage = () => {
  return (
    <main>
      <div className="home">
        <div className="home__container">
          {/* ===========================BUBLIK===================================== */}
          <div className="bublik">
            <div className="bublik__text">
              <h3 className="bublik__title">Кофейня Бублик</h3>
              <p className="bublik__desc">
                Привет! Я - уютная кофейня Бишкека с душой. Я - аромат
                настоящего кофе. Я - дружелюбная атмосфера. Я - Бублик!"
              </p>
              <div className="bublik__third">
                <h className="bublik__h">Скачивай приложение и</h>
                <button className="bublik__btn">Копи бублеры!</button>
              </div>
            </div>
            <div className="bublik__img">{/* <img src={piks} alt="" /> */}</div>
          </div>

          {/* ====================================END BUBLIK============================= */}
          {/* ======================================CARDS================================= */}
          <div className="cards">
            <div className="cards__first">
              <img src={cardstwo} alt="" />
            </div>
            <div className="cards__column">
              <img src={minicards1} alt="" />
              <img src={minicards3} alt="" />
            </div>

            <div className="cards__column">
              <img src={minicards2} alt="" />
              <img src={minicards4} alt="" />
            </div>
          </div>
          {/* ===========================================END CARDS================================== */}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
