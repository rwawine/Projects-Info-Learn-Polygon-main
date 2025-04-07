import React from "react";
import { Link } from "react-router-dom";
import ArrowPerson from "../../assets/ArrowPerson.svg";
import ArrowButtonPerson from "../../assets/ArrowButtonPerson.svg";
import Person1 from "../../assets//Persons/Person1.png";
import Person2 from "../../assets//Persons/Person2.png";
import Person3 from "../../assets//Persons/Person3.png";
import Person4 from "../../assets//Persons/Person4.png";
import Person6 from "../../assets//Persons/Person6.png";

import { useLanguage } from "../../context/LanguageContext";

export default function PoliticalPersonSearch() {
  const { language, translations } = useLanguage();

  return (
    <div style={{ position: "relative" }}>
      <header
        style={{
          backgroundColor: "#061424",
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
            >
              <div
                style={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                {translations[language].politicalPersonSearch.politicalSite}
              </div>
            </div>
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
                  {translations[language].politicalPersonSearch.main}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/person"
                  style={{fontSize: "18px", color: "#DED651", textDecoration: "underline" }}
                >
                  {translations[language].politicalPersonSearch.persons}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/party"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPersonSearch.parties}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/device"
                  style={{ fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPersonSearch.politicalStructure}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "50px",
            marginTop: "60px",
          }}
        >
          {translations[language].politicalPersonSearch.searchResult}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: "60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img width={210} src={Person4} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "56px" }}>{translations[language].politicalPersonSearch.name}</p>
              <p style={{ fontSize: "28px" }}>{translations[language].politicalPersonSearch.party}</p>
            </div>
          </div>
          <Link
          to="/political-site/person/detail"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "18px",
              color: "#1A1A1A",
            }}
          >
            {translations[language].politicalPersonSearch.fullInformation} <img width={9} src={ArrowPerson} alt="" />
          </Link>
        </div>
        <hr style={{ color: "#111A28", marginTop: "20px" }} />
      </div>

      <div
        style={{
          maxWidth: "1060px",
          padding: "0 15px",
          margin: "0 auto",
          gap: "12px",
          display: "flex",
          flexDirection: "column",
          marginTop: "60px",
        }}
      >
        <h2
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "50px",
            marginBottom: "60px",
          }}
        >
          {translations[language].politicalPersonSearch.otherPoliticalFigures}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPersonSearch.name}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPersonSearch.party}</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            {translations[language].politicalPersonSearch.fullInformation} <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person2} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPersonSearch.otherPoliticalFiguresName2}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPersonSearch.otherPoliticalFiguresParty2}</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            {translations[language].politicalPersonSearch.fullInformation} <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person3} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPersonSearch.otherPoliticalFiguresName3}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPersonSearch.otherPoliticalFiguresParty3}</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            {translations[language].politicalPersonSearch.fullInformation} <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person6} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPersonSearch.otherPoliticalFiguresName4}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPersonSearch.otherPoliticalFiguresParty4}</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            {translations[language].politicalPersonSearch.fullInformation} <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <button
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #EC602B",
            padding: "6px 17px",
            color: "#EC602B",
            width: "320px",
            borderRadius: "3px",
            height: "40px",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          {translations[language].politicalPersonSearch.loadMore} <img src={ArrowButtonPerson} alt="" />
        </button>
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
              {translations[language].politicalPersonSearch.politicalSiteTitle}
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
                <p>{translations[language].politicalPersonSearch.main}</p>
                <p>{translations[language].politicalPersonSearch.persons}</p>
              </div>
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>{translations[language].politicalPersonSearch.parties}</p>
                <p>{translations[language].politicalPersonSearch.politicalStructure}</p>
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
            2023. {translations[language].politicalPersonSearch.copyright}
          </p>
          <Link to="/" style={{color: 'white', fontSize: 18, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].politicalPersonSearch.returnToSystem}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
