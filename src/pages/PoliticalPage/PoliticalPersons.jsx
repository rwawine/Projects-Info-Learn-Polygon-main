import React from "react";
import { Link } from "react-router-dom";
import ArrowPerson from "../../assets/ArrowPerson.svg";
import ArrowButtonPerson from "../../assets/ArrowButtonPerson.svg";
import Person1 from "../../assets//Persons/Person1.png";
import Person2 from "../../assets//Persons/Person2.png";
import Person3 from "../../assets//Persons/Person3.png";
import Person4 from "../../assets//Persons/Person4.png";

import { useLanguage } from "../../context/LanguageContext";

export default function PoliticalPersons() {
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
            ><div style={{color: 'white', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].politicalPerson.politicalSite}</div></div>
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
                  {translations[language].politicalPerson.main}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/person"
                  style={{fontSize: "18px", color: "#DED651", textDecoration: "underline" }}
                >
                  {translations[language].politicalPerson.persons}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/party"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPerson.parties}
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/device"
                  style={{ fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  {translations[language].politicalPerson.politicalStructure}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}>
        <h2 style={{fontFamily: "Cormorant Garamond",  fontSize: "50px", marginTop: "60px" }}>
          {translations[language].politicalPerson.politicalPersons}
        </h2>
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <input
            style={{
              padding: "10px 25px",
              border: "1px solid rgb(0,0,0,0.5",
              width: "580px",
              borderRadius: "3px",
            }}
            type="text"
            placeholder={translations[language].politicalPerson.placeholder}
          />
          <Link
          to="/political-site/person/samira-narges"
            style={{
              padding: "10px 60px",
              backgroundColor: "#B64D4A",
              color: "white",
              borderRadius: "3px",
            }}
          >
            {translations[language].politicalPerson.search}
          </Link>
        </div>
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
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.abhayAjit}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.abhayAjitTitle}</p>
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
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
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
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.anushSartra}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.anushSartraTitle}</p>
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
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
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
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.argavanSumati}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.argavanSumatiTitle}</p>
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
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
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
            <img src={Person4} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.samiraNarges}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.samiraNargesTitle}</p>
            </div>
          </div>
          <Link
          to="/political-site/person/detail"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
          </Link>
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
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.abhayAjit}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.abhayAjitTitle}</p>
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
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
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
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.anushSartra}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.anushSartraTitle}</p>
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
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
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
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.argavanSumati}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.argavanSumatiTitle}</p>
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
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
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
            <img src={Person4} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>{translations[language].politicalPerson.samiraNarges}</p>
              <p style={{ fontSize: "18px" }}>{translations[language].politicalPerson.samiraNargesTitle}</p>
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
            {translations[language].politicalPerson.fullInformation} <img width={9} src={ArrowPerson} alt="" />
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
          {translations[language].politicalPerson.loadMore} <img src={ArrowButtonPerson} alt="" />
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
              {translations[language].politicalPerson.politicalSiteTitle}
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
                <p>{translations[language].politicalPerson.main}</p>
                <p>{translations[language].politicalPerson.persons}</p>
              </div>
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>{translations[language].politicalPerson.parties}</p>
                <p>{translations[language].politicalPerson.politicalStructure}</p>
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
            2023. {translations[language].politicalPerson.copyright}
          </p>
          <Link to="/" style={{color: 'white', fontSize: 18, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].politicalPerson.returnToSystem}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
