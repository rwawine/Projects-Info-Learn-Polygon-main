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

export default function JobPage() {
  const [isOpen, setIsOpen] = useState(false);

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
                Биржа труда
              </h3>
              <div
                style={{ display: "flex", gap: "100px", alignItems: "center" }}
              >
                <Link
          to="/job-exchange"
          style={{ textDecoration: "none", color: "black" }}
        >
          Главная
        </Link>
        <Link
          to="/job-exchange/news"
          style={{ textDecoration: "none", color: "black" }}
        >
          Новости
        </Link>
        <Link
          to="/job-exchange/company"
          style={{ textDecoration: "none", color: "black" }}
        >
          Компании
        </Link>
        <Link
          to="/job-exchange/vacancy"
          style={{ textDecoration: "none", color: "#EF6C00" }}
        >
          Вакансии
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
              Вакансии
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
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}><img src={GPSIcon} alt="" /><p>Страна</p></div>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}><p>Выбрать</p><img src={OtherPlusIcon} alt="" /></div>  
                    </div>
                  
                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}><img src={LampIcon} alt="" /><p>Сфера деятельности</p></div>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}><p>Выбрать</p><img src={OtherPlusIcon} alt="" /></div>  
                    </div>

                    <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                    <p style={{opacity: .5}}>Найдено 28 вакансий</p>
                    <button style={{cursor: "pointer", width: '100%', height: '100%', paddingLeft: 100, paddingRight: 100, paddingTop: 12, paddingBottom: 12, background: '#EF6C00', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 13.52, display: 'inline-flex'}}>
<div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>Применить</div>
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
                    Москва
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
                    Офисный
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
                    40 часов в неделю
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "33px" }}>
                <input
                  type="text"
                  placeholder="Например, аналитик"
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
                          Аналитик данных
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
                          Москва
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
                          Офисный
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
                          40 часов в неделю
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
                          2 часа назад
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
                          Консультант по визуализации данных - Power BI
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
                          Москва
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
                          Офисный
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
                          40 часов в неделю
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
                          2 часа назад
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
                          Разработчик Full Stack
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
                          Яндекс
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
                          Москва
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
                          Офисный
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
                          40 часов в неделю
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
                          3 часа назад
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
                          Cтажер по обработке данных и аналитике
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
                          Москва
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
                          Офисный
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
                          20 часов в неделю
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
                          3 часа назад
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
                          Дипломированный аналитик данных
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
                          Москва
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
                          Офисный
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
                          20 часов в неделю
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
                          2 часа назад
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
                          Cтажер по обработке данных и аналитике
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
                          Москва
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
                          Офисный
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
                          240 часов в неделю
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
                          3 часа назад
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
                          Дипломированный аналитик данных
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
                          Москва
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
                          Офисный
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
                          20 часов в неделю
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
                          4 часа назад
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
                          Дипломированный аналитик данных
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
                          Москва
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
                          Офисный
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
                          20 часов в неделю
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
                          4 часа назад
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
                          Cтажер по обработке данных и аналитике
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
                          Москва
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
                          Офисный
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
                          20 часов в неделю
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
                          3 часа назад
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
                          Дипломированный аналитик данных
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
                          Москва
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
                          Офисный
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
                          20 часов в неделю
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
                          4 часа назад
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
                          Аналитик данных
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
                          Москва
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
                          Офисный
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
                          40 часов в неделю
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
                          2 часа назад
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
                            CAPCO, Москва, Россия
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
                            Подать резюме
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
                        Консультант по визуализации данных - Power BI
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
                              Москва
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
                              Офисный
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
                              40 часов в неделю
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
                            Capco - это глобальная консалтинговая компания в
                            области технологий и бизнеса, специализирующаяся на
                            секторе финансовых услуг. Мы стремимся помочь нашим
                            клиентам добиться успеха в постоянно меняющейся
                            отрасли, сочетая инновационное мышление с
                            уникальными экспертными ноу-хау. Решения, которые мы
                            предлагаем нашим клиентам каждый день, так же
                            разнообразны, как и наши сотрудники.
                          </p>

                          <p style={{ marginTop: "24px" }}>
                            В рамках нашей продолжающейся глобальной стратегии
                            расширения Capco расширяет свою практику обработки
                            данных в Великобритании в нашем лондонском офисе. В
                            настоящее время мы ищем консультантов по управлению,
                            обладающих опытом анализа данных, для руководства и
                            развития команд для поддержки крупномасштабных
                            проектов по преобразованию для наших ведущих
                            клиентов в сфере финансовых услуг.
                          </p>

                          <p style={{ marginTop: "24px" }}> Кандидат должен:</p>

                          <p style={{ marginTop: "24px" }}>
                            Обладаете настоящей страстью к обработке данных и
                            стремлением перевести отрасль на перспективный
                            подход к анализу данных Будьте готовы присоединиться
                            к команде, которая будет развивать возможности
                            британской практики визуализации данных и более
                            широкую британскую и глобальную практику обработки
                            данных для поддержки таких изменяющихся в отрасли
                            тем, как визуализация данных, рассказывание историй
                            о данных, описательная и диагностическая аналитика,
                            Диалоговая аналитика и
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
                            Загрузить еще
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
                    Обзор компании
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
                    Количество сотрудников
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
                    От 5 тыс. до 10 тыс. чел
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
                    Средняя зарплата
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
                    Год создания
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
                    183 895 рублей (2023)
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
                    Уставной капитал, ₽
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
                    Чистая прибыль, ₽
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
                    18,26 млрд (2023 г.)
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
                    2,6 млрд (2023 г.)
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
                    875,3 млн
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
              Биржа труда /
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
                Назад в контур
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
                <p style={{ color: "rgb(255,255,255,0.6)" }}>Работодателям</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>Размещение вакансий</p> <p>Страница компании</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>Соискателям</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>Вакансии</p> <p>Создать резюме</p>
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
                  <p>Новости</p>
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
                2023, Все права защищены
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
                  Пользовательское соглашение
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
                  Политика конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
