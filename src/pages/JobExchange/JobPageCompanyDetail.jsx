import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import ArrowMoreSVG from "../../assets/ArrowMore.svg";
import ArrowBack from "../../assets/BackArrow.svg";
import YandexIcon167 from "../../assets/Yandex167.png";

import { useLanguage } from "../../context/LanguageContext";

export default function JobPageCompanyDetail() {
  const { language, translations } = useLanguage();
  const [activeTab, setActiveTab] = useState(translations[language].jobPageCompanyDetail.description);

  const tabs = [translations[language].jobPageCompanyDetail.description, translations[language].jobPageCompanyDetail.vacancies, translations[language].jobPageCompanyDetail.events];

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
                {translations[language].jobPageCompanyDetail.jobExchange}
              </h3>
              <div
                style={{ display: "flex", gap: "100px", alignItems: "center" }}
              >
                <Link
                  to="/job-exchange"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {translations[language].jobPageCompanyDetail.main}
                </Link>
                <Link
                  to="/job-exchange/news"
                  style={{ textDecoration: "none", color: "#EF6C00" }}
                >
                  {translations[language].jobPageCompanyDetail.news}
                </Link>
                <Link
                  to="/job-exchange/company"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {translations[language].jobPageCompanyDetail.companies}
                </Link>
                <Link
                  to="/job-exchange/vacancy"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {translations[language].jobPageCompanyDetail.vacancies}
                </Link>
              </div>
            </div>
          </header>

          <div
            style={{
              maxWidth: "1320px",
              paddingTop: "50px",
              paddingBottom: "190px",
              flexDirection: "column",
              display: "flex",
              margin: "0 auto",
              gap: "50px",
            }}
          >
            <div style={{ display: "flex" }}>
              <Link to="/job-exchange/company/">
                <img width={39} src={ArrowBack} alt="ArrowBack" />
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "990px" }}>
                <h2 style={{ fontSize: "48px" }}>{translations[language].jobPageCompanyDetail.companyName}</h2>
                <p
                  style={{
                    fontSize: "22px",
                    lineHeight: "160%",
                    marginTop: "36px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu.{" "}
                </p>
              </div>
              <img width={167} src={YandexIcon167} alt="YandexIcon167" />
            </div>

            <div
              style={{
                marginTop: "140px",
                display: "flex",
                alignItems: "center",
                gap: "60px",
                padding: "24px 60px",
                backgroundColor: "white",
                borderRadius: "16px",
              }}
            >
              {tabs.map((tab, index) => (
                <React.Fragment key={tab}>
                  <div
                    onClick={() => setActiveTab(tab)}
                    style={{
                      backgroundColor:
                        activeTab === tab ? "#F2F2F4" : "transparent",
                      borderRadius: "9px",
                      padding: "10px 20px",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    {tab}
                  </div>
                  {index < tabs.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        height: "24px",
                        backgroundColor: "#CCCCCC",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {activeTab === translations[language].jobPageCompanyDetail.descriptionCompany && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "70px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingLeft: 36,
                    paddingRight: 36,
                    paddingTop: 43,
                    paddingBottom: 43,
                    background: "white",
                    borderRadius: 16,
                    border: "1px #CACACA solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 260,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 277,
                        color: "black",
                        fontSize: 48,
                        fontFamily: "IBM Plex Sans",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      {translations[language].jobPageCompanyDetail.companyOverview}
                    </div>
                    <div
                      style={{
                        width: 652,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 17,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 142,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 287,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageCompanyDetail.numberOfEmployees}
                        </div>
                        <div
                          style={{
                            width: 223,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageCompanyDetail.numberOfEmployeesFrom} 300 {translations[language].jobPageCompanyDetail.numberOfEmployeesTo} 800 {translations[language].jobPageCompanyDetail.numberOfEmployees}
                        </div>
                      </div>
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
                            width: 167,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageCompanyDetail.averageSalary}
                        </div>
                        <div
                          style={{
                            width: 223,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          183 895 {translations[language].jobPageCompanyDetail.averageSalaryUnit} ({translations[language].jobPageCompanyDetail.averageSalaryYear})
                        </div>
                      </div>
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
                            width: 205,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageCompanyDetail.yearOfCreation}
                        </div>
                        <div
                          style={{
                            width: 223,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          30.08.2022
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 142,
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 287,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageCompanyDetail.authorizedCapital}
                        </div>
                        <div
                          style={{
                            width: 223,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          875,3 {translations[language].jobPageCompanyDetail.authorizedCapitalUnit}
                        </div>
                      </div>
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
                            width: 167,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageCompanyDetail.netProfit}
                        </div>
                        <div
                          style={{
                            width: 223,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          2,6 {translations[language].jobPageCompanyDetail.netProfitUnit} ({translations[language].jobPageCompanyDetail.netProfitYear})
                        </div>
                      </div>
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
                            width: 205,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          {translations[language].jobPageCompanyDetail.balance}
                        </div>
                        <div
                          style={{
                            width: 223,
                            color: "black",
                            fontSize: 18,
                            fontFamily: "IBM Plex Sans",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          18,26 {translations[language].jobPageCompanyDetail.balanceUnit} ({translations[language].jobPageCompanyDetail.balanceYear})
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingLeft: 36,
                    paddingRight: 36,
                    paddingTop: 43,
                    paddingBottom: 43,
                    background: "white",
                    borderRadius: 16,
                    border: "1px #CACACA solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 190,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 360,
                        color: "black",
                        fontSize: 48,
                        fontFamily: "IBM Plex Sans",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      {translations[language].jobPageCompanyDetail.products}
                    </div>
                    <p
                      style={{
                        width: 698,
                        height: 157,
                        color: "black",
                        fontSize: 18,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                        lineHeight: "29px",
                      }}
                    >
                      Nullam dictum felis eu pede mollis pretium. Integer
                      tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                      lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                      Phasellus viverra nulla ut metus varius laoreet.{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === translations[language].jobPageCompanyDetail.vacancies && (
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
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
                          <img src={YandexIcon167} alt="" />
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
                            {translations[language].jobPageCompanyDetail.vacancyName}
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
                            {translations[language].jobPageCompanyDetail.companyName}
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
                            {translations[language].jobPageCompanyDetail.location}
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
                            {translations[language].jobPageCompanyDetail.office}
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
                            {translations[language].jobPageCompanyDetail.workHours}
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
                            {translations[language].jobPageCompanyDetail.time}
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
                          <img src={YandexIcon167} alt="" />
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
                            {translations[language].jobPageCompanyDetail.vacancyName}
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
                            {translations[language].jobPageCompanyDetail.companyName2}
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
                            {translations[language].jobPageCompanyDetail.location2}
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
                            {translations[language].jobPageCompanyDetail.office2}
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
                            {translations[language].jobPageCompanyDetail.workHours2}
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
                            {translations[language].jobPageCompanyDetail.time2}
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
                          <img src={YandexIcon167} alt="" />
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
                            {translations[language].jobPageCompanyDetail.vacancyName2}
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
                            {translations[language].jobPageCompanyDetail.companyName3}
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
                            {translations[language].jobPageCompanyDetail.location3}
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
                            {translations[language].jobPageCompanyDetail.office3}
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
                            {translations[language].jobPageCompanyDetail.workHours3}
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
                            {translations[language].jobPageCompanyDetail.time3}
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
                          <img src={YandexIcon167} alt="" />
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
                            {translations[language].jobPageCompanyDetail.vacancyName3}
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
                            {translations[language].jobPageCompanyDetail.companyName4}
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
                            {translations[language].jobPageCompanyDetail.location4}
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
                            {translations[language].jobPageCompanyDetail.office4}
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
                            {translations[language].jobPageCompanyDetail.workHours4}
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
                            {translations[language].jobPageCompanyDetail.time4}
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
                          <img src={YandexIcon167} alt="" />
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
                            {translations[language].jobPageCompanyDetail.vacancyName4}
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
                            {translations[language].jobPageCompanyDetail.companyName5}
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
                            {translations[language].jobPageCompanyDetail.location5}
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
                            {translations[language].jobPageCompanyDetail.office5}
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
                            {translations[language].jobPageCompanyDetail.workHours5}
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
                            {translations[language].jobPageCompanyDetail.time5}
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
                          <img src={YandexIcon167} alt="" />
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
                            {translations[language].jobPageCompanyDetail.vacancyName5}
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
                            {translations[language].jobPageCompanyDetail.companyName6}
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
                            {translations[language].jobPageCompanyDetail.location6}
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
                            {translations[language].jobPageCompanyDetail.office6}
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
                            {translations[language].jobPageCompanyDetail.workHours6}
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
                            {translations[language].jobPageCompanyDetail.time6}
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
                          <img src={YandexIcon167} alt="" />
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
                            {translations[language].jobPageCompanyDetail.vacancyName6}
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
                            {translations[language].jobPageCompanyDetail.companyName7}
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
                            {translations[language].jobPageCompanyDetail.location7}
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
                            {translations[language].jobPageCompanyDetail.office7}
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
                            {translations[language].jobPageCompanyDetail.workHours7}
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
                            {translations[language].jobPageCompanyDetail.time7}
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
                              <img src={YandexIcon167} alt="" />
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
                              {translations[language].jobPageCompanyDetail.companyName8}
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
                              {translations[language].jobPageCompanyDetail.apply}
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
                          {translations[language].jobPageCompanyDetail.vacancyName8}
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
                                {translations[language].jobPageCompanyDetail.location8}
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
                                {translations[language].jobPageCompanyDetail.office8}
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
                                {translations[language].jobPageCompanyDetail.workHours8}
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
                              {translations[language].jobPageCompanyDetail.description}
                            </p>
                            <p>{translations[language].jobPageCompanyDetail.tasks}</p>
                            <ul></ul>
                            <li>
                              {translations[language].jobPageCompanyDetail.task1}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task2}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task3}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task4}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task5}
                            </li>
                            <ul />
                            <p>
                              {translations[language].jobPageCompanyDetail.description}
                            </p>
                            <p>{translations[language].jobPageCompanyDetail.tasks}</p>
                            <ul></ul>
                            <li>
                              {translations[language].jobPageCompanyDetail.task1}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task2}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task3}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task4}
                            </li>
                            <li>
                              {translations[language].jobPageCompanyDetail.task5}
                            </li>
                            <ul />
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
                              {translations[language].jobPageCompanyDetail.loadMore}
                            </p>
                          </div>
                          <img src={ArrowMoreSVG} alt="" />
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
                      {translations[language].jobPageCompanyDetail.companyOverview}
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
                      {translations[language].jobPageCompanyDetail.numberOfEmployees}
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
                      {translations[language].jobPageCompanyDetail.numberOfEmployeesAll}
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
                      {translations[language].jobPageCompanyDetail.averageSalary}
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
                      {translations[language].jobPageCompanyDetail.yearOfCreation}
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
                      {translations[language].jobPageCompanyDetail.yearOfCreationAll}
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
                      {translations[language].jobPageCompanyDetail.capital}
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
                      {translations[language].jobPageCompanyDetail.netProfit}
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
                      Баланс, ₽
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
                      {translations[language].jobPageCompanyDetail.balanceAll}
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
                      2,6 {translations[language].jobPageCompanyDetail.netProfitUnit} ({translations[language].jobPageCompanyDetail.netProfitYear})
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
                      875,3 {translations[language].jobPageCompanyDetail.authorizedCapitalUnit}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === translations[language].jobPageCompanyDetail.events && <p>{translations[language].jobPageCompanyDetail.events}...</p>}
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
              {translations[language].jobPageCompanyDetail.jobExchange} /
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
                {translations[language].jobPageCompanyDetail.backToContour}
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
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageCompanyDetail.employers}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPageCompanyDetail.vacancyPlacement}</p> <p>{translations[language].jobPageCompanyDetail.companyPage}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageCompanyDetail.applicants}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>{translations[language].jobPageCompanyDetail.vacancies}</p> <p>{translations[language].jobPageCompanyDetail.createResume}</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>{translations[language].jobPageCompanyDetail.aboutUs}</p>
                <div>
                  <p>{translations[language].jobPageCompanyDetail.news}</p>
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
                2023, {translations[language].jobPageCompanyDetail.copyright}
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
                  {translations[language].jobPageCompanyDetail.userAgreement}
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
                  {translations[language].jobPageCompanyDetail.privacyPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
