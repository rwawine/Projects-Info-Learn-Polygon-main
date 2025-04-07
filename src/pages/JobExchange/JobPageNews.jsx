import React from "react";
import { Link } from "react-router-dom";

import ArrowButton from "../../assets/JobPage/ArrowButton.svg";

import BackgroundImageCards1 from "../../assets/JobPage/IMAGE 2024-11-04 14_48_48 1.png";
import BackgroundImageCards2 from "../../assets/JobPage/IMAGE 2024-11-04 14_50_18 1.png";
import BackgroundImageCards3 from "../../assets/JobPage/IMAGE 2024-11-04 14_59_20 1.png";
import BackgroundImageCards4 from "../../assets/JobPage/IMAGE 2024-11-04 14_51_50 1.png";
import BackgroundImageCards5 from "../../assets/JobPage/IMAGE 2024-11-04 14_56_36 1.png";
import BackgroundImageCards6 from "../../assets/JobPage/IMAGE 2024-11-04 15_02_58 1.png";
import BackgroundImageCards7 from "../../assets/JobPage/IMAGE 2024-11-04 14_54_12 1.png";

import BackgroundImageCards8 from "../../assets/JobPage/IMAGE 2024-11-04 14_59_20 1.png";
import BackgroundImageCards9 from "../../assets/JobPage/IMAGE 2024-11-05 18_36_38 1.png";
import BackgroundImageCards10 from "../../assets/JobPage/IMAGE 2024-11-05 18_36_43 1.png";
import BackgroundImageCards11 from "../../assets/JobPage/IMAGE 2024-11-05 18_36_29 1.png";
import BackgroundImageCards12 from "../../assets/JobPage/IMAGE 2024-11-05 18_36_33 1.png";

import { useLanguage } from "../../context/LanguageContext";

export default function JobPageNews() {
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
                {translations[language].jobPageNews.jobExchange}
              </h3>
              <div
                style={{ display: "flex", gap: "100px", alignItems: "center" }}
              >
                <Link
          to="/job-exchange"
          style={{ textDecoration: "none", color: "black" }}
        >
          {translations[language].jobPageNews.main}
        </Link>
        <Link
          to="/job-exchange/news"
          style={{ textDecoration: "none", color: "#EF6C00" }}
        >
          {translations[language].jobPageNews.news}
        </Link>
        <Link
          to="/job-exchange/company"
          style={{ textDecoration: "none", color: "black" }}
        >
          {translations[language].jobPageNews.companies}
        </Link>
        <Link
          to="/job-exchange/vacancy"
          style={{ textDecoration: "none", color: "black" }}
        >
          {translations[language].jobPageNews.vacancies}
        </Link>
              </div>
            </div>
          </header>
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
              {translations[language].jobPageNews.jobExchangeNews}
            </h3>
            <div
              style={{ margin: "100px 0 0 0", display: "flex", gap: "10px" }}
            >
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
                  {translations[language].jobPageNews.whatIsNew}
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
                  {translations[language].jobPageNews.whatIsNewNews1}
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
                  {translations[language].jobPageNews.whatIsNewNews2}
                </p>
              </div>
            </div>
            <div style={{ margin: "10px 0 0 0", display: "flex", gap: "10px" }}>
              <div
                style={{
                  background: "#EEF1F7",
                  borderRadius: 25,
                  maxWidth: "650px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
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
                  {translations[language].jobPageNews.whatIsNewNews3}
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
                      {translations[language].jobPageNews.whatIsNewNews4}
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
                      {translations[language].jobPageNews.whatIsNewNews5}
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
                    {translations[language].jobPageNews.whatIsNewNews6}
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                margin: "10px 0",
                borderRadius: 52,
                height: "700px",
                backgroundImage: `url(${BackgroundImageCards8})`,
                width: "100%",
                position: "relative",
                backgroundSize: "cover",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  left: "55px",
                  bottom: "60px",
                  color: "white",
                  fontSize: 36,
                  fontFamily: "IBM Plex Sans",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                {translations[language].jobPageNews.whatIsNewNews7}
              </p>
            </div>
            <div style={{ margin: "10px 0 0 0", display: "flex", gap: "10px" }}>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "10px", height: "345px" }}>
                  <div
                    style={{
                      background: "#EEF1F7",
                      borderRadius: 25,
                      maxWidth: "330px",
                    }}
                  >
                    <img
                      style={{ height: "180px", width: "100%" }}
                      src={BackgroundImageCards9}
                      alt=""
                    />
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
                     {translations[language].jobPageNews.whatIsNewNews8}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#EEF1F7",
                      borderRadius: 25,
                      maxWidth: "330px",
                    }}
                  >
                    <img
                      style={{ height: "180px" }}
                      src={BackgroundImageCards10}
                      alt=""
                    />
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
                      {translations[language].jobPageNews.whatIsNewNews9}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: 25,
                    height: "345px",
                    backgroundImage: `url(${BackgroundImageCards11})`,
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
                    {translations[language].jobPageNews.whatIsNewNews10}
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: "#EEF1F7",
                  borderRadius: 25,
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "670px",
                  justifyContent: "space-between",
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
                  {translations[language].jobPageNews.whatIsNewNews11}
                </p>
                <img
                  style={{ height: "340px" }}
                  src={BackgroundImageCards12}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: "1320px",
              margin: "0 auto",
              padding: "100px 0 50px",
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
              {translations[language].jobPageNews.allNews} <img src={ArrowButton} alt="ArrowButton" />
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
              {translations[language].jobPageNews.jobExchange} /
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
                {translations[language].jobPageNews.backToContour}
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
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageNews.employers}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPageNews.placementOfVacancies}</p> <p>{translations[language].jobPageNews.companyPage}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageNews.applicants}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPageNews.vacancies}</p> <p>{translations[language].jobPageNews.createResume}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}> О нас</p>
                <div>
                  <p>{translations[language].jobPageNews.news}</p>
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
                2023, {translations[language].jobPageNews.copyright}
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
                  {translations[language].jobPageNews.userAgreement}
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
                  {translations[language].jobPageNews.privacyPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
