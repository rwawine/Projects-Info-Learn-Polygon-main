import React from "react";
import { Link } from "react-router-dom";
import PoliticalDeviceImage from "../../assets/PoliticalDeviceImage.png";
import { useLanguage } from "../../context/LanguageContext";

export default function PoliticalDevice() {
  const { language, translations } = useLanguage();

  return (
    <div style={{ position: "relative" }}>
      <header
        style={{
          backgroundColor: "#061424",
        }}
      >
        <div
          style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
        >
          <div
            style={{
              padding: "20px 0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
            }}
          >
             <div
              style={{
                width: "117px",
                height: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#B64D4A",
              }}
            ><div style={{color: 'white', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].politicalPage.politicalSite}</div></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "white",
                gap: "70px",
              }}
            >
               <p>
                <Link
                  to="/political-site"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPage.main}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/person"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPage.persons}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/party"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPage.parties}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/device"
                  style={{ fontSize: "18px", color: "#DED651", textDecoration: "underline" }}
                >
                  {translations[language].politicalPage.politicalStructure}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}>
        <img src={PoliticalDeviceImage} alt="PoliticalDeviceImage" />
        <h2 style={{fontFamily: "Cormorant Garamond",  textAlign: "center", fontSize: "50px", fontWeight: "medium", marginTop: "40px"}}>{translations[language].politicalDevice.politicalStructureText1}</h2>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "60px"}}>
          <button style={{
                display: "flex",
                width: "346px",
                height: "41px",
                backgroundColor: "#EC602B",
                color: "white",
                alignItems: "center", 
                justifyContent: "center",
                borderRadius: "3px",
              }}>{translations[language].politicalDevice.republicanParty}</button>
          <button style={{
                display: "flex",
                width: "346px",
                height: "41px",
                alignItems: "center", 
                justifyContent: "center",
                backgroundColor: "#EC602B",
                color: "white",
                borderRadius: "3px",
              }}>{translations[language].politicalDevice.democraticParty}</button>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#061424",
          padding: "60px",
          zIndex: "5",
          position: "relative",
          marginTop: "100px",
        }}
      >
        <div
          style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "18px", color: "white" }}>
              {translations[language].politicalDevice.politicalSiteTitle}
            </p>
            <div
              style={{
                display: "flex",
                gap: "65px",
                alignItems: "flex-start",
                opacity: 0.5,
                color: "white",
              }}
            >
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>{translations[language].politicalPage.main}</p>
                <p>{translations[language].politicalPage.persons}</p>
              </div>
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>{translations[language].politicalPage.parties}</p>
                <p>{translations[language].politicalPage.politicalStructure}</p>
              </div>
            </div>
          </div>
          <hr style={{ margin: "60px 0 20px 0" }} />
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <p
            style={{
              fontSize: "18px",
              color: "white",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
          2023.  {translations[language].politicalDevice.copyright}
          </p>
          <Link to="/" style={{color: 'white', fontSize: 18, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].politicalDevice.returnToSystem}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
