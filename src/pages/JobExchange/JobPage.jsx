import React from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../../assets/JobPage/ArrowButton.svg";
import BackgroundElementsVacancy from "../../assets/JobPage/BackgroundElementsVacancy.svg";
import BackgroundImageVacancy from "../../assets/JobPage/BackgroundImageVacancy.png";
import BackgroundElementsCompany from "../../assets/JobPage/BackgroundElementsCompany.svg";
import BackgroundImageCompany from "../../assets/JobPage/BackgroundImageCompany.png";

import BackgroundImageCards1 from "../../assets/JobPage/IMAGE 2024-11-04 14_48_48 1.png";
import BackgroundImageCards2 from "../../assets/JobPage/IMAGE 2024-11-04 14_50_18 1.png";
import BackgroundImageCards3 from "../../assets/JobPage/IMAGE 2024-11-04 14_59_20 1.png";
import BackgroundImageCards4 from "../../assets/JobPage/IMAGE 2024-11-04 14_51_50 1.png";
import BackgroundImageCards5 from "../../assets/JobPage/IMAGE 2024-11-04 14_56_36 1.png";
import BackgroundImageCards6 from "../../assets/JobPage/IMAGE 2024-11-04 15_02_58 1.png";
import BackgroundImageCards7 from "../../assets/JobPage/IMAGE 2024-11-04 14_54_12 1.png";

import { useLanguage } from "../../context/LanguageContext";

export default function JobPage() {
  const { language, translations } = useLanguage();

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div
          style={{ borderRadius: "0 0 50px 50px", backgroundColor: "white" }}
        >
           <header
            style={{
              borderTop: "1px #CACACA solid",
              borderBottom: "1px #CACACA solid",
            }}
          >
            <div
              style={{
                margin: "0 auto",
                maxWidth: "1310px",
                flexDirection: "row",
                display: "flex",
                padding: "25px 0",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  color: "#252525",
                  display: "flex",
                  fontSize: 28,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "500",
                }}
              >
                {translations[language].jobPage.jobExchange}
              </h3>
              <div
                style={{ display: "flex", gap: "100px", alignItems: "center" }}
              >
                <Link
          to="/job-exchange"
          style={{ textDecoration: "none", color: "#EF6C00" }}
        >
          {translations[language].jobPage.main}
        </Link>
        <Link
          to="/job-exchange/news"
          style={{ textDecoration: "none", color: "black" }}
        >
          {translations[language].jobPage.news}
        </Link>
        <Link
          to="/job-exchange/company"
          style={{ textDecoration: "none", color: "black" }}
        >
          {translations[language].jobPage.companies}
        </Link>
        <Link
          to="/job-exchange/vacancy"
          style={{ textDecoration: "none", color: "black" }}
        >
          {translations[language].jobPage.vacancies}
        </Link>
              </div>
            </div>
          </header>
          <div style={{ display: "flex", height: "980px" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                padding: "60px 0 600px 0",
                backgroundColor: "rgba(253, 235, 216, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  color: "#EF6C00",
                  fontSize: 36,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "500",
                  textAlign: "center",
                  wordWrap: "break-word",
                  marginBottom: "24px",
                }}
              >
                {translations[language].jobPage.vacancies}
              </h2>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "black",
                  fontSize: 36,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "400",
                  maxWidth: "310px",
                  wordWrap: "break-word",
                  marginBottom: "24px",
                }}
              >
                Lorem ipsum dolor sit amet
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.40)",
                  fontSize: 18,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "500",
                  wordWrap: "break-word",
                  marginBottom: "30px",
                  width: "420px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button
                style={{
                  borderRadius: "10px",
                  background: "#EF6C00",
                  display: "flex",
                  padding: "12px 100px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13.523px",
                  color: "white",
                  maxWidth: "270px",
                }}
              >
                {translations[language].jobPage.goTo} <img src={ArrowButton} alt="ArrowButton" />
              </button>
              <img
                style={{ position: "absolute", bottom: "0%" }}
                src={BackgroundElementsVacancy}
                alt="BackgroundElementsVacancy"
              />
              <img
                style={{ position: "absolute", bottom: "0%" }}
                src={BackgroundImageVacancy}
                alt="BackgroundImageVacancy"
              />
            </div>
            <div
              style={{
                width: "100%",
                padding: "60px 0 600px 0",
                backgroundColor: "rgba(204, 251, 248, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                position: "relative",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  color: "rgba(17, 94, 89, 1)",
                  fontSize: 36,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "500",
                  textAlign: "center",
                  wordWrap: "break-word",
                  marginBottom: "24px",
                }}
              >
                {translations[language].jobPage.companies}
              </h2>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "black",
                  fontSize: 36,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  maxWidth: "310px",
                  marginBottom: "24px",
                }}
              >
                Lorem ipsum dolor sit amet
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.40)",
                  fontSize: 18,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "500",
                  wordWrap: "break-word",
                  marginBottom: "30px",
                  width: "420px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <button
                style={{
                  borderRadius: "10px",
                  background: "#EF6C00",
                  display: "flex",
                  padding: "12px 100px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "13.523px",
                  color: "white",
                  maxWidth: "270px",
                }}
              >
                {translations[language].jobPage.goTo} <img src={ArrowButton} alt="ArrowButton" />
              </button>
              <img
                style={{ position: "absolute", bottom: "0%" }}
                src={BackgroundElementsCompany}
                alt="BackgroundElementsCompany"
              />
              <img
                style={{ position: "absolute", bottom: "0%" }}
                src={BackgroundImageCompany}
                alt="BackgroundImageCompany"
              />
            </div>
          </div>
          <div
            style={{ maxWidth: "1320px", margin: "0 auto", marginTop: "50px" }}
          >
            <h3
              style={{
                color: "black",
                fontSize: 48,
                fontFamily: "IBM Plex Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              {translations[language].jobPage.whatIsNew}
            </h3>
            <div style={{ margin: "50px 0 0 0", display: "flex", gap: "10px" }}>
              <div
                style={{
                  background: "#EEF1F7",
                  borderRadius: 25,
                  maxWidth: "320px",
                }}
              >
                <img src={BackgroundImageCards1} alt="" />
                <p
                  style={{
                    padding: "6px 20px 60px",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  {translations[language].jobPage.whatIsNewNews1}
                </p>
              </div>
              <div
                style={{
                  background: "#EEF1F7",
                  borderRadius: 25,
                  maxWidth: "320px",
                }}
              >
                <img src={BackgroundImageCards2} alt="" />
                <p
                  style={{
                    padding: "6px 20px 60px",
                    color: "black",
                    fontSize: 24,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  {translations[language].jobPage.whatIsNewNews2}
                </p>
              </div>
              <div
                style={{
                  borderRadius: 25,
                  backgroundImage: `url(${BackgroundImageCards3})`,
                  width: "650px",
                  position: "relative",
                  backgroundSize: "cover",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: "20px",
                    bottom: "30px",
                    color: "white",
                    fontSize: 24,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  {translations[language].jobPage.whatIsNewNews3}
                </p>
              </div>
            </div>
            <div style={{ margin: "10px 0 0 0", display: "flex", gap: "10px" }}>
              <div
                style={{
                  background: "#EEF1F7",
                  borderRadius: 25,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  maxWidth: "650px",
                }}
              >
                <p
                  style={{
                    padding: "70px 60px 30px 20px",
                    color: "black",
                    fontSize: 36,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  {translations[language].jobPage.whatIsNewNews4}
                </p>
                <img
                  style={{ height: "410px" }}
                  src={BackgroundImageCards4}
                  alt=""
                />
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "10px", height: "345px" }}>
                  <div
                    style={{
                      background: "#EEF1F7",
                      borderRadius: 25,
                      maxWidth: "320px",
                    }}
                  >
                    <img src={BackgroundImageCards6} alt="" />
                    <p
                      style={{
                        padding: "6px 20px 60px",
                        color: "black",
                        fontSize: 24,
                        fontFamily: "IBM Plex Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {translations[language].jobPage.whatIsNewNews1}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#EEF1F7",
                      borderRadius: 25,
                      maxWidth: "320px",
                    }}
                  >
                    <img src={BackgroundImageCards7} alt="" />
                    <p
                      style={{
                        padding: "6px 20px 60px",
                        color: "black",
                        fontSize: 24,
                        fontFamily: "IBM Plex Sans",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      {translations[language].jobPage.whatIsNewNews2}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: 25,
                    height: "345px",
                    backgroundImage: `url(${BackgroundImageCards5})`,
                    width: "650px",
                    position: "relative",
                    backgroundSize: "cover",
                  }}
                >
                  <p
                    style={{
                      position: "absolute",
                      left: "20px",
                      bottom: "30px",
                      color: "white",
                      fontSize: 24,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPage.whatIsNewNews3}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: "1320px",
              margin: "0 auto",
              padding: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                borderRadius: "10px",
                background: "#EF6C00",
                display: "flex",
                padding: "12px 100px",
                justifyContent: "center",
                alignItems: "center",
                gap: "13.523px",
                color: "white",
              }}
            >
              {translations[language].jobPage.allNews} <img src={ArrowButton} alt="ArrowButton" />
            </button>
          </div>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#000",
          color: "#FFF",
          padding: "90px 0 80px 0",
        }}
      >
        <div
          style={{ maxWidth: "1440px", padding: "0 15px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "130px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "130px" }}
            >
              {translations[language].jobPage.jobExchange} /
              <Link
              to="/info"
                style={{
                  color: "rgba(255, 255, 255, 0.62)",
                  fontSize: 18,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                {translations[language].jobPage.backToContour}
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "70px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPage.employers}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPage.placementOfVacancies}</p> <p>{translations[language].jobPage.companyPage}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPage.applicants}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPage.vacancies}</p> <p>{translations[language].jobPage.createResume}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPage.aboutUs}</p>
                <div>
                  <p>{translations[language].jobPage.news}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr style={{ margin: "30px 0 30px 0" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  opacity: "0.6",
                }}
              >
                2023, {translations[language].jobPage.copyright}
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    opacity: "0.5",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  {translations[language].jobPage.userAgreement}
                </p>
                ●
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    opacity: "0.5",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  {translations[language].jobPage.privacyPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
