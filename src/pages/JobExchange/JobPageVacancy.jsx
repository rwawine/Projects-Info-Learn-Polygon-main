import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterSVG from "../../assets/Filter.svg";
import SearchSVG from "../../assets/Search.svg";
import ArrowMoreSVG from "../../assets/ArrowMore.svg";
import CAPCOIcon from "../../assets/CAPCO.png";
import VKIcon from "../../assets/VK.png";
import NatWestIcon from "../../assets/NatWest.png";
import YandexIcon from "../../assets/Yandex167.png";
import CapuaIcon from "../../assets/Capua.png";

import GPSIcon from "../../assets/GPS.svg";
import LampIcon from "../../assets/Lamp.svg";
import OtherPlusIcon from "../../assets/OtherPlus.svg";

import { useLanguage } from "../../context/LanguageContext";

export default function JobPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, translations } = useLanguage();
  const toggleModal = () => setIsOpen((prev) => !prev);
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
                {translations[language].jobPageVacancy.jobExchange}
              </h3>
              <div
                style={{ display: "flex", gap: "100px", alignItems: "center" }}
              >
                <Link
                  to="/job-exchange"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {translations[language].jobPageVacancy.main}
                </Link>
                <Link
                  to="/job-exchange/news"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {translations[language].jobPageVacancy.news}
                </Link>
                <Link
                  to="/job-exchange/company"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {translations[language].jobPageVacancy.companies}
                </Link>
                <Link
                  to="/job-exchange/vacancy"
                  style={{ textDecoration: "none", color: "#EF6C00" }}
                >
                  {translations[language].jobPageVacancy.vacancies}
                </Link>
              </div>
            </div>
          </header>
          <div
            style={{ maxWidth: "1320px", margin: "0 auto", marginTop: "50px" }}
          >
            <h2
              style={{
                color: "black",
                fontSize: 48,
                fontFamily: "IBM Plex Sans",
                fontWeight: "400",
                wordWrap: "break-word",
                marginTop: "25px",
              }}
            >
              {translations[language].jobPageVacancy.vacancies}
            </h2>
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 35,
                }}
              >
                <button
                  onClick={toggleModal}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img src={FilterSVG} alt="FilterSVG" />
                </button>
                {isOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: 0,
                      backgroundColor: "white",
                      border: "1px solid #AFA8A8",
                      borderRadius: "26px",
                      padding: "45px 25px",
                      zIndex: 1000,
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px"
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={GPSIcon} alt="" /><p>{translations[language].jobPageVacancy.country}</p></div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><p>{translations[language].jobPageVacancy.choose}</p><img src={OtherPlusIcon} alt="" /></div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={LampIcon} alt="" /><p>{translations[language].jobPageVacancy.activitySphere}</p></div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><p>{translations[language].jobPageVacancy.chooseActivitySphere}</p><img src={OtherPlusIcon} alt="" /></div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                      <p style={{ opacity: .5 }}>{translations[language].jobPageVacancy.findVacancies}</p>
                      <button style={{ cursor: "pointer", width: '100%', height: '100%', paddingLeft: 100, paddingRight: 100, paddingTop: 12, paddingBottom: 12, background: '#EF6C00', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 13.52, display: 'inline-flex' }}>
                        <div style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word' }}>{translations[language].jobPageVacancy.apply}</div>
                      </button>
                    </div>

                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                  <p
                    style={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 5,
                      paddingBottom: 5,
                      background: "#EDF1FE",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                      color: "#4251A9",
                      fontSize: 17,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.moscow}
                  </p>
                  <p
                    style={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 5,
                      paddingBottom: 5,
                      background: "#EDF1FE",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                      color: "#4251A9",
                      fontSize: 17,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.office}
                  </p>
                  <p
                    style={{
                      paddingLeft: 26,
                      paddingRight: 26,
                      paddingTop: 5,
                      paddingBottom: 5,
                      background: "#EDF1FE",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                      color: "#4251A9",
                      fontSize: 17,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.hoursPerWeek}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "33px" }}>
                <input
                  type="text"
                  placeholder={translations[language].jobPageVacancy.placeholderAnalytic}
                  style={{
                    width: "510px",
                    paddingLeft: 37,
                    paddingRight: 37,
                    paddingTop: 22,
                    paddingBottom: 22,
                    background: "#F2F2F4",
                    borderRadius: 25,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 10,
                    display: "inline-flex",
                  }}
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
                    src={SearchSVG}
                    alt="SearchSVG"
                  />
                </button>
              </div>
            </div>
            <div
              style={{
                marginTop: "40px",
                paddingBottom: "110px",
                display: "flex",
                gap: "5px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={VKIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.analyst}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          VK
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #EF6C00 solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={CAPCOIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.consultant}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          CAPCO
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={YandexIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.fullStackDeveloper}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.yandex}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={NatWestIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          NatWest Group
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek2}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={CapuaIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst2}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Capua HR Limited
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek2}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={NatWestIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          NatWest Group
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={CapuaIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst2}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Capua HR Limited
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek2}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween3}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={CapuaIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst2}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Capua HR Limited
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek2}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween3}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={NatWestIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          NatWest Group
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek2}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <img src={CapuaIcon} alt="" />
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst2}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Capua HR Limited
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek2}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween3}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "630px",
                    height: "130px",
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 19,
                    paddingBottom: 19,
                    background: "white",
                    borderRadius: 20,
                    border: "1px #CACACA solid",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 69,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 21,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 29,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{ width: 42, height: 42, position: "relative" }}
                      >
                        <div
                          style={{
                            width: 42,
                            height: 42,
                            left: 0,
                            top: 0,
                            position: "absolute",
                            background: "#2787F5",
                            borderRadius: 9999,
                          }}
                        />
                        <div
                          style={{
                            left: 5.27,
                            top: 7.91,
                            position: "absolute",
                            color: "white",
                            fontSize: 21.78,
                            fontFamily: "Inter",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          РФ
                        </div>
                      </div>
                      <div
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 4,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.dataAnalyst3}
                        </div>
                        <div
                          style={{
                            color: "rgba(0, 0, 0, 0.51)",
                            fontSize: 12,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          VK
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 6,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          height: 32,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.moscow}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.office}
                        </div>
                      </div>
                      <div
                        style={{
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                          paddingBottom: 5,
                          background: "#EDF1FE",
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            color: "#4251A9",
                            fontSize: 17,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursPerWeek}
                        </div>
                      </div>
                      <div
                        style={{
                          flex: "1 1 0",
                          height: 21,
                          paddingLeft: 15,
                          paddingRight: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            flex: "1 1 0",
                            textAlign: "right",
                            color: "rgba(0, 0, 0, 0.44)",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageVacancy.hoursBetween}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    width: "100%",
                    height: "840px",
                    paddingTop: 41,
                    paddingBottom: 50,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px #CACACA solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 751,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 57,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: 104,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 26,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          justifyContent: "space-between",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 22,
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              width: 42,
                              height: 42,
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                width: 42,
                                height: 42,
                                left: 0,
                                top: 0,
                                position: "absolute",
                                borderRadius: 9999,
                              }}
                            />
                            <img src={CAPCOIcon} alt="" />
                          </div>
                          <div
                            style={{
                              width: 135,
                              height: 18,
                              color: "black",
                              fontSize: 12,
                              fontFamily: "IBM Plex Sans",
                              fontWeight: "500",
                              wordWrap: "break-word",
                            }}
                          >
                            {translations[language].jobPageVacancy.CAPCO}
                          </div>
                        </div>
                        <div
                          style={{
                            paddingLeft: 100,
                            paddingRight: 100,
                            paddingTop: 12,
                            paddingBottom: 12,
                            background: "#EF6C00",
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 13.52,
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              color: "white",
                              fontSize: 16,
                              cursor: "pointer",
                              fontFamily: "IBM Plex Sans",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            {translations[language].jobPageVacancy.applyResume}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          height: 33,
                          color: "black",
                          fontSize: 24,
                          fontFamily: "IBM Plex Sans",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        {translations[language].jobPageVacancy.consultant}
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: 590,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 39,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          height: 529,
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 14,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 6,
                            display: "inline-flex",
                          }}
                        >
                          <div
                            style={{
                              height: 32,
                              paddingLeft: 14,
                              paddingRight: 14,
                              paddingTop: 5,
                              paddingBottom: 5,
                              background: "#EDF1FE",
                              borderRadius: 10,
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 10,
                              display: "flex",
                            }}
                          >
                            <div
                              style={{
                                color: "#4251A9",
                                fontSize: 17,
                                fontFamily: "IBM Plex Sans",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              {translations[language].jobPageVacancy.moscow}
                            </div>
                          </div>
                          <div
                            style={{
                              paddingLeft: 14,
                              paddingRight: 14,
                              paddingTop: 5,
                              paddingBottom: 5,
                              background: "#EDF1FE",
                              borderRadius: 10,
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 10,
                              display: "flex",
                            }}
                          >
                            <div
                              style={{
                                color: "#4251A9",
                                fontSize: 17,
                                fontFamily: "IBM Plex Sans",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              {translations[language].jobPageVacancy.office}
                            </div>
                          </div>
                          <div
                            style={{
                              paddingLeft: 14,
                              paddingRight: 14,
                              paddingTop: 5,
                              paddingBottom: 5,
                              background: "#EDF1FE",
                              borderRadius: 10,
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 10,
                              display: "flex",
                            }}
                          >
                            <div
                              style={{
                                color: "#4251A9",
                                fontSize: 17,
                                fontFamily: "IBM Plex Sans",
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              {translations[language].jobPageVacancy.hoursPerWeek}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            alignSelf: "stretch",
                            color: "black",
                            fontSize: 16,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          <p>
                            {translations[language].jobPageVacancy.capcoDescription}
                          </p>

                          <p style={{ marginTop: "24px" }}>
                           {translations[language].jobPageVacancy.capcoDescription2}
                          </p>

                          <p style={{ marginTop: "24px" }}>{translations[language].jobPageVacancy.candidateMust}:</p>

                          <p style={{ marginTop: "24px" }}>
                            {translations[language].jobPageVacancy.candidateMust1}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 20,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            paddingBottom: 1,
                            paddingRight: 3,
                            borderBottom: "1px #EF6C00 solid",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            cursor: "pointer",
                          }}
                        >
                          <p
                            style={{
                              color: "#EF6C00",
                              fontSize: 16,
                              fontFamily: "IBM Plex Sans",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            {translations[language].jobPageVacancy.loadMore}
                          </p>
                        </div>
                        <img src={ArrowMoreSVG} alt="ArrowMoreSVG" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "370px",
                    position: "relative",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px #CACACA solid",
                  }}
                >
                  <div
                    style={{
                      left: 19,
                      top: 42,
                      position: "absolute",
                      color: "black",
                      fontSize: 20,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.companyOverview}
                  </div>
                  <div
                    style={{
                      width: 281,
                      left: 19,
                      top: 99,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.numberOfEmployees}
                  </div>
                  <div
                    style={{
                      width: 219,
                      left: 439,
                      top: 99,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.numberOfEmployees1}
                  </div>
                  <div
                    style={{
                      width: 164,
                      left: 19,
                      top: 139,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.averageSalary}
                  </div>
                  <div
                    style={{
                      width: 201,
                      left: 19,
                      top: 179,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.yearOfCreation}
                  </div>
                  <div
                    style={{
                      width: 219,
                      left: 439,
                      top: 139,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.yearOfCreation1}
                  </div>
                  <div
                    style={{
                      width: 219,
                      left: 439,
                      top: 179,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    30.08.2022
                  </div>
                  <div
                    style={{
                      width: 281,
                      left: 19,
                      top: 219,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.capital}
                  </div>
                  <div
                    style={{
                      width: 164,
                      left: 19,
                      top: 259,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.netProfit}
                  </div>
                  <div
                    style={{
                      width: 201,
                      left: 19,
                      top: 299,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.balance}
                  </div>
                  <div
                    style={{
                      width: 219,
                      left: 439,
                      top: 299,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.balance1}
                  </div>
                  <div
                    style={{
                      width: 219,
                      left: 439,
                      top: 259,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.balance2}
                  </div>
                  <div
                    style={{
                      width: 219,
                      left: 439,
                      top: 219,
                      position: "absolute",
                      color: "black",
                      fontSize: 18,
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    {translations[language].jobPageVacancy.balance3}
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
              {translations[language].jobPageVacancy.jobExchange} /
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
                {translations[language].jobPageVacancy.backToContour}
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
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageVacancy.employers}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPageVacancy.placementOfVacancies}</p> <p>{translations[language].jobPageVacancy.companyPage}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageVacancy.jobSeekers}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPageVacancy.vacancies}</p> <p>{translations[language].jobPageVacancy.createResume}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageVacancy.aboutUs}</p>
                <div>
                  <p>{translations[language].jobPageVacancy.news}</p>
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
                2023, {translations[language].jobPageVacancy.copyright}
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
                  {translations[language].jobPageVacancy.userAgreement}
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
                  {translations[language].jobPageVacancy.privacyPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
