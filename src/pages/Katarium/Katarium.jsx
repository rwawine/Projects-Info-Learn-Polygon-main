import React from "react";
import katariumImage from "../../assets/Katarium_start.png";
import waterfallImage from "../../assets/Waterfall.png";
import mapImage from "../../assets/Map.png";
import behmanImage from "../../assets/Behman.png";
import tinaImage from "../../assets/Tina.png";
import { useLanguage } from "../../context/LanguageContext";
import MagicButton from "../../components/MagicButton"

export default function Katarium() {
  const { language, translations } = useLanguage();
  
  return (
    <div style={{ backgroundColor: "#F5F1E7", width: "100%" }}>
      <MagicButton />
      <img src={katariumImage} alt="katarium" style={{ width: "100%" }} />
      <p
        style={{
          fontFamily: "Romile Personal Use",
          fontSize: "92px",
          paddingLeft: "230px",
          paddingRight: "230px",
        }}
      >
        {translations[language].history}
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        {translations[language].historyText1}
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        {translations[language].historyText2}
      </p>
      <img src={waterfallImage} style={{ width: "100%" }} alt="waterfall"></img>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        {translations[language].historyText3}
      </p>
      <hr
        style={{
          width: "25%",
        }}
      ></hr>
      <p
        style={{
          paddingLeft: "105px",
          paddingRight: "43px",
          fontFamily: "IBM Plex Sans",
          fontSize: "35px",
          color: "#B64D4A",
          position: "center",
        }}
      >
        {translations[language].historyText4}
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        {translations[language].historyText5}
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        {translations[language].historyText6}
      </p>
      <p
        style={{
          fontFamily: "Romile Personal Use",
          fontSize: "92px",
          paddingLeft: "230px",
          paddingRight: "230px",
          position: "center",
        }}
      >
        {translations[language].geography}
      </p>
      <img src={mapImage} alt="map" style={{ width: "100%" }} />
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        {translations[language].geographyText}
      </p>
      <p
        style={{
          fontFamily: "Romile Personal Use",
          fontSize: "92px",
          paddingLeft: "230px",
          paddingRight: "230px",
          position: "center",
        }}
      >
        {translations[language].politicalStructure}
      </p>
      <p
        style={{
          paddingLeft: "105px",
          paddingRight: "43px",
          fontFamily: "IBM Plex Sans",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        {translations[language].politicalStructureText1}
      </p>
      <p
        style={{
          paddingLeft: "105px",
          paddingRight: "43px",
          fontFamily: "IBM Plex Sans",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        {translations[language].politicalStructureText2}
      </p>
      <div style={{ display: "flex", paddingLeft: "350px" }}>
        <div style={{ padding: "50px", left: "200px" }}>
          <img
            src={tinaImage}
            alt="tina"
            style={{ width: "100%", margin: "50px" }}
          />
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              paddingTop: "20px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            {translations[language].tinaWilson}
          </p>
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            {translations[language].tinaWilsonTitle}
          </p>
        </div>
        <div style={{ padding: "50px", left: "200px" }}>
          <img
            src={behmanImage}
            alt="behman"
            style={{ width: "100%", margin: "50px" }}
          />
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              paddingTop: "20px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Бехман Гарун
          </p>
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Капитан-Регент
          </p>
        </div>
      </div>
    </div>
  );
}
