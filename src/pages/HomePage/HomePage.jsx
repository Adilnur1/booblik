import React from "react";
import "./HomePage.scss";
import piks from '../../assets/AboutUsImg/piks.svg'
import cardstwo from '../../assets/AboutUsImg/cardstwo.svg'
import minicards1 from '../../assets/AboutUsImg/minicards1.svg'
import minicards2 from '../../assets/AboutUsImg/minicards2.svg'
import minicards3 from '../../assets/AboutUsImg/minicards3.svg'
import minicards4 from '../../assets/AboutUsImg/minicards4.svg'

const HomePage = () => {
  return (
    <main>
      <div className="home">
        <div className="home__container">
              {/* ===========================BUBLIK===================================== */}
              <div
            style={{
              display: "flex"
            }}
            className="bublik">
            <div>
              <h3
                style={{
                  width: "410px",
                  height: "46px",
                  marginTop: "224px",
                  fontWeight: "400",
                  fontSize: "46px",
                  lineHeight: "46px",
                  color: "#000000",
                  marginLeft:"164px"

                }}>Кофейня Бублик
              </h3>

              <p
                style={{
                  width: "420px",
                  height: "184px",
                  marginTop: "28px",
                  fontSize: "30px",
                  fontWeight: "600",
                  lineHeight: "36.63px",
                  color: "#4E3425",
                  marginLeft:"164px"
                }}>Привет! Я - уютная кофейня Бишкека с душой. Я - аромат настоящего кофе. Я - дружелюбная атмосфера. Я - Бублик!"

              </p>

              <div style={{
                // display: "inline-grid"
                marginTop:"70px"
              }}>
                <h
                  style={{
                    fontWeight: "600px",
                    fontSize: "14px",
                    width: "168px",
                    height: "16px",
                    lineHeight: "16.44px",

                    border: "none",
                    background: "#FCFCFD",
                    marginLeft: "285px",
                    marginTop: "70px",
                    color: "##111C26",


                  }}>Скачивай приложение и
                </h>


                <button
                  style={{
                    width: "420px",
                    height: "101px",
                    borderRadius: "30px",
                    marginTop: "15px",
                    fontSize: "28px",
                    fontWeight: "700px",
                    lineHeight: "32px",
                    border: "none",
                    cursor: "pointer",
                    background: "#FEA405",
                    color: "#FFFFFF",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 1)",
                    boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.43)",
                    // marginLeft:"164px"
                    marginLeft:"164px"
                  }}
                  className='copyButton'>Копи бублеры!

                </button>

              </div>
            </div>
            <div>
              <div style={{
                width: "552px",
                height: "650px",
                borderRadius: "30px",
                marginTop: "100px",
                marginRight:"190px",
              }}>
                <img

                  src={piks} alt="" />
              </div>
            </div>
          </div>


          {/* ====================================END BUBLIK============================= */}
          {/* ======================================CARDS================================= */}
          <div
            style={{
              marginTop: "220px"
              
            }}
            className="cards">
              <div
              style={{
                display:"flex",
                gap:"5px"
              }}
              >
            <div

            >
              <img
                style={{
                  width: "552px",
                  height: "618px",
                  top: "1153px",
                  // marginLeft: "px",
                  borderRadius: "30px",
                  border: "1px",
                  opacity: "93%",
                  boxShadow: " 0px 0px 20px rgba(0, 0, 0, 0.44)",
                  marginLeft:"164px",
                  // border:"1px solid black"
                }} src={cardstwo} alt="" />
            </div>
            <div
        style={{
      marginTop:"-16px",
      // width:"264px",
      height:"300",
      borderRadius:"32px",
      opacity:"92%",
      marginLeft:"25px"

        }}>
   <div 
   style={{
    width:""
   }}
   className="column">
          <img src={minicards1} alt="" />
          <img src={minicards2} alt="" />
        </div>

        <div
        style={{
          marginTop:"-15px"
        }}
        className="column">
          <img src={minicards3} alt="" />
          <img src={minicards4} alt="" />
        </div>
      </div>
      </div>
           
          </div>
          {/* ===========================================END CARDS================================== */}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
