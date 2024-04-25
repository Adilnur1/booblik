import React from "react";
import "./AboutUs.scss";
import piks from '../../assets/AboutUsImg/piks.svg'
import cardstwo from '../../assets/AboutUsImg/cardstwo.svg'
import minicards1 from '../../assets/AboutUsImg/minicards1.svg'
import minicards2 from '../../assets/AboutUsImg/minicards2.svg'
import minicards3 from '../../assets/AboutUsImg/minicards3.svg'
import minicards4 from '../../assets/AboutUsImg/minicards4.svg'

const AboutUs = () => {
  return (
    <main>
      <div className="about">
        <div className="about__container">
      
          {/* ===========================================ABOUT ME ==================================== */}
          <div>
            <div
            style={{
              marginTop:"286px"
            }} className="AboutMe">
              <h4 
              style={{
                textAlign:"center",
                
              }}>
              Обо мне:
              </h4>

            </div>
          </div>
          {/* ==========================================END ABOUT ME====================================== */}
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
