import React from "react";
import "./AboutUs.scss";
import corn from '../../assets/AboutImg/corn.svg'
import coffee from '../../assets/AboutImg/coffee.png'
import limonad from '../../assets/AboutImg/limonad.svg'
import limonads from '../../assets/AboutImg/limonads.png'
import dessert from '../../assets/AboutImg/dessert.svg'
import desserts from '../../assets/AboutImg/desserts.png'
import butter from '../../assets/AboutImg/butter.png'
import butters from '../../assets/AboutImg/butters.svg'
import croissants from '../../assets/AboutImg/croissants.svg'
import croissant from '../../assets/AboutImg/croissant.png'
import buter from '../../assets/AboutImg/buter.png'
import buters from '../../assets/AboutImg/buters.svg'
import heart from '../../assets/AboutImg/heart.svg'
import { useTranslation } from "react-i18next";




const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <main>
      <div className="about">
        <div className="about__container">

          {/* ===========================================ABOUT ME ==================================== */}

          <div className="AboutMe">
            <h4>
              {t("Oбо мне")}

            </h4>

            <div className="p">
              <p className="p1">
                Привет! Я - уютная кофейня Бишкека с душой. Я - аромат настоящего кофе. Я - дружелюбная атмосфера. Я - Бублик!

              </p>
              <p className="p2">Моя история началась с мечты о создании места, где каждый гость сможет насладиться не только ароматным кофе, но и атмосферой домашнего уюта. Каждая чашка кофе готовится с любовью и вниманием к деталям. Я стремлюсь предложить не просто напиток, а настоящий опыт, который запоминается. </p>
              <p className="p3">Со мной работает дружная команда, которая любит свое дело и заботится о каждом госте. Я хочу, чтобы вы приходили и чувствовали себя комфортно, словно в гостях у друга.</p>
              <p className="p4">Моя философия проста: создавать не просто кофейни, а места, где можно забыть о суете и насладиться моментом. Я верю, что качественный продукт, дружелюбный сервис и уютная атмосфера - это то, что делает нас особенными.</p>
              <p className="p5">Поэтому приходите в гости, буду с нетерпением всех ждать!</p>
            </div>


            {/* ========================================== END ABOUT ME ====================================== */}
            {/* =========================================== ABOUT ME 2 ===================================== */}
            <div className="aboutme2">
              <h3>{t("Дорогой Бубликчанин, кстати")}</h3>
              {/* ========================================== BLOK =========================================== */}
              <div className="blok1">
                <div>
                  <p>{t("Благодаря качественным зёрнам, кофе у меня получается насыщенным и ароматным")}</p>
                  <img className="corn" src={corn} alt="" />
                </div>
                <div className="coffee">
                  <img src={coffee} alt="" />
                </div>
              </div>
              <div className="blok2">
                <div className="limonads">
                  <img src={limonads} alt="" />
                </div>
                <div>
                  <p>{t("Все лимонады я готовлю только из отборных и натуральных ягод.")}</p>
                  <img className="limonad" src={limonad} alt="" />
                </div>
              </div>
              <div className="blok3">
                <div>
                  <p>{t("Каждая моя выпечка и десерты готовятся с любовью и только из натуральных ингредиентов на сливочном масле.")}</p>
                  <img className="dessert" src={dessert} alt="" />
                </div>
                <div className="desserts">
                  <img src={desserts} alt="" />
                </div>
              </div>
              <div className="blok4">
                <div className="butter">
                  <img src={butter} alt="" />
                </div>
                <div>
                  <p>{t("Хлеб, деревенские бублики и круассаны я тоже пеку сам из свежих натуральных ингредиентов на сливочном масле, БЕЗ ДОБАВЛЕНИЯ консервантов.")}</p>
                  <img className="butters" src={butters} alt="" />
                  {/* <Butters /> */}
                </div>
              </div>
              <div className="blok5">
                <div>
                  <p>{t("Мои круассаны ты можешь хранить в холодильнике до 3-4 дней, разогреть в духовке и вновь насладиться восхитительным вкусом.")}</p>
                  <img className="croissants" src={croissants} alt="" />
                </div>
                <div className="croissant">
                  <img src={croissant} alt="" />
                </div>
              </div>
              <div className="blok6">
                <div className="buter">
                  <img src={buter} alt="" />
                </div>
                <div>
                  <p>{t("Все мясные блюда у меня халал.")}</p>
                  <img className="buters" src={buters} alt="" />
                </div>

              </div>
              {/* ========================================== END BLOK ========================================= */}
              <div className="end">
                <h3>{t("Ну что, сколько фактов обо мне ты знал?")}</h3>
                <img src={heart} alt="" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
