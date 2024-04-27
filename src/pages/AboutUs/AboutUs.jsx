import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <main>
      <div className="about">
        <div className="about__container">
          {/* ===========================================ABOUT ME ==================================== */}
          <div>
            <div
              style={{
                marginTop: "286px",
              }}
              className="AboutMe"
            >
              <h4
                style={{
                  textAlign: "center",
                }}
              >
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
