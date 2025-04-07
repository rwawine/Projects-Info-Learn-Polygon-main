import React from "react";
import { Link } from "react-router-dom";
import BackgroundPoliticalPage from "../../assets/BackgroundPoliticalPage.png";
import DropdownArrow from "../../assets/DropdownArrow.svg";
import { useLanguage } from "../../context/LanguageContext";

export default function PoliticalPage() {
  const { language, translations } = useLanguage();
  
  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ position: "absolute", width: "100%", height: "100%"}}
        src={BackgroundPoliticalPage}
        alt=""
      />
      <header
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.5)",
          position: "relative",
          zIndex: "5",
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
              <p
                style={{
                  fontSize: "18px",
                  color: "#DED651",
                  textDecoration: "underline",
                }}
              >
                <Link
                  to="/political-site"
                  style={{fontSize: "18px", color: "#DED651", textDecoration: "none" }}
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
                  style={{ fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPage.politicalStructure}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          position: "relative",
          zIndex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "190px",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "50px",
            color: "white",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </h1>
        <p
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "28px",
            color: "white",
            textAlign: "center",
            fontWeight: "regular",
            maxWidth: "1044px",
            marginTop: "20px",
          }}
        >
          Proin rutrum euismod leo non aliquam. Mauris lacinia ultrices
          diam, quis bibendum justo auctor eget. Praesent aliquam vestibulum
          nisi et porttitor.
        </p>
        <div
          style={{
            padding: "25px 15px",
            backgroundColor: "rgb(0,0,0,.4",
            marginTop: "50px",
            width: "1040px",
          }}
        >
          <p
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "18px",
              color: "#48A6D5",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px 25px",
                backgroundColor: "white",
                borderRadius: "3px",
                maxWidth: "250px",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {translations[language].politicalPage.allSections} <img src={DropdownArrow} alt="DropdownArrow" />
            </div>
            <input
              style={{
                display: "flex",
                padding: "10px 25px",
                backgroundColor: "white",
                borderRadius: "3px",
                width: "100%",
              }}
              type="text"
              placeholder={translations[language].politicalPage.searchPlaceholder}
            />
            <button
              style={{
                display: "flex",
                padding: "10px 60px",
                backgroundColor: "#B64D4A",
                color: "white",
                borderRadius: "3px",
              }}
            >
              {translations[language].politicalPage.buttonSearch}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 60px",
              backgroundColor: "none",
              border: "1px solid white",
              color: "white",
              borderRadius: "3px",
              maxWidth: "250px",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            + {translations[language].politicalPage.filter}
          </div>
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
              {translations[language].politicalPage.politicalSiteTitle}
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
          2023. {translations[language].politicalPage.copyright}
          </p>
          <Link to="/" style={{color: 'white', fontSize: 18, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].politicalPage.returnToSystem}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
