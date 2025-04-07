import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/DefaultArrow.svg";
import SearchIcon from "../../assets/Search.svg";
import VkontakteIcon from "../../assets/Vkontakte.png";
import YandexIcon from "../../assets/Yandex.png";
import TinkoffIcon from "../../assets/Tinkoff.png";
import CAPCOIcon from "../../assets/CAPCO.png";

import { useLanguage } from "../../context/LanguageContext";

export default function JobPageCompany() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
          style={{ textDecoration: "none", color: "black" }}
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
          style={{ textDecoration: "none", color: "#EF6C00" }}
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
          <div
            style={{
              maxWidth: "1320px", marginTop: "50px",
              paddingBottom: "190px",
              flexDirection: "column",
              display: "flex",
              margin: "0 auto",
              gap: "40px",
            }}
          >
            <h2 style={{ fontSize: "48px", marginTop: "47px" }}>{translations[language].jobPage.companies}</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "16px" }}>
                <input
                  placeholder={translations[language].jobPageCompany.placeholder}
                  style={{width: '100%', height: '68px', paddingLeft: 37, paddingRight: 37, paddingTop: 22, paddingBottom: 22, background: '#F2F2F4', borderRadius: 25, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}
                />
                 <button
                  style={{
                    width: "68px",
                    height: "68px",
                    paddingTop: 17,
                    paddingBottom: 16.39,
                    paddingLeft: 16,
                    paddingRight: 13.24,
                    background: "#EF6C00",
                    borderRadius: 22,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <img
                    style={{ width: "38px", height: "35px" }}
                    src={SearchIcon}
                    alt="SearchIcon"
                  />
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "50px",
                }}
              >
                <Link
                to="/job-exchange/company/detail"
                  style={{
                    flexGrow: "1",
                    width: "620px",
                    padding: "46px 40px",
                    background:
                      hoveredIndex === 0
                        ? 'linear-gradient(108deg, #8776F7 0%, #57A0F7 100%)'
                        : "white",
                    borderRadius: "15px",
                    color: hoveredIndex === 0 ? "white" : "black",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    display: "flex",
                    border: '1px #CACACA solid',
                    flexDirection: "column",
                    transition:
                      "background 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "25px",
                      alignItems: "center",
                    }}
                  >
                    <img width={45} src={YandexIcon} alt="YandexIcon" />
                    <p style={{ fontWeight: "medium", fontSize: "28px" }}>
                      {translations[language].jobPageCompany.dataAnalyst}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "140%",
                      marginTop: "35px",
                    }}
                  >
                    {translations[language].jobPageCompany.yandexDescription}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>3 {translations[language].jobPageCompany.vacancies}</p>
                    <img src={ArrowBack} alt="" />
                  </div>
                </Link>
                <div
                  style={{
                    flexGrow: "1",
                    width: "620px",
                    padding: "46px 40px",
                    background:
                      hoveredIndex === 1
                        ? 'linear-gradient(90deg, #EA7457 0%, #F7C454 100%)'
                        : "white",
                    borderRadius: "15px",
                    color: hoveredIndex === 1 ? "white" : "black",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    display: "flex",
                    border: '1px #CACACA solid',
                    flexDirection: "column",
                    transition:
                      "background 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "25px",
                      alignItems: "center",
                    }}
                  >
                    <img width={45} src={TinkoffIcon} alt="TinkoffIcon" />
                    <p style={{ fontWeight: "medium", fontSize: "28px" }}>
                      {translations[language].jobPageCompany.tinkoff}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "140%",
                      marginTop: "35px",
                    }}
                  >
                    {translations[language].jobPageCompany.tinkoffDescription}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>3 {translations[language].jobPageCompany.vacancies}</p>
                    <img src={ArrowBack} alt="" />
                  </div>
                </div>
                <div
                  style={{
                    flexGrow: "1",
                    width: "620px",
                    padding: "46px 40px",
                    background:
                      hoveredIndex === 2
                        ? 'linear-gradient(105deg, #E35B72 0%, #CB74F4 100%)'
                        : "white",
                    borderRadius: "15px",
                    color: hoveredIndex === 2 ? "white" : "black",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    border: '1px #CACACA solid',
                    transition:
                      "background 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredIndex(2)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "25px",
                      alignItems: "center",
                    }}
                  >
                    <img width={45} src={VkontakteIcon} alt="VkontakteIcon" />
                    <p style={{ fontWeight: "medium", fontSize: "28px" }}>VK</p>
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "140%",
                      marginTop: "35px",
                    }}
                  >
                    {translations[language].jobPageCompany.vkDescription}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>2 {translations[language].jobPageCompany.vacancies}</p>
                    <img src={ArrowBack} alt="" />
                  </div>
                </div>
                <div
                  style={{
                    flexGrow: "1",
                    width: "620px",
                    padding: "46px 40px",
                    background:
                      hoveredIndex === 3
                        ? "linear-gradient(90deg, #8776F7, #57A0F7)"
                        : "white",
                    borderRadius: "15px",
                    color: hoveredIndex === 3 ? "white" : "black",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    border: '1px #CACACA solid',
                    transition:
                      "background 0.3s ease-in-out, color 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredIndex(3)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "25px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width={45}
                      style={{
                        backgroundColor: "gray",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                      }}
                      src={CAPCOIcon}
                      alt=""
                    />
                    <p style={{ fontWeight: "medium", fontSize: "28px" }}>
                    СAPCO
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "140%",
                      marginTop: "35px",
                    }}
                  >
                    {translations[language].jobPageCompany.capcoDescription}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>3 {translations[language].jobPageCompany.vacancies}</p>
                    <img src={ArrowBack} alt="" />
                  </div>
                </div>
              </div>
            </div>
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
