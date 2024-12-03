import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../../assets/DefaultArrow.svg";
import SearchIcon from "../../assets/Search.svg";
import VkontakteIcon from "../../assets/Vkontakte.png";
import YandexIcon from "../../assets/Yandex.png";
import TinkoffIcon from "../../assets/Tinkoff.png";
import CAPCOIcon from "../../assets/CAPCO.png";

export default function JobPageCompany() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          style={{ textDecoration: "none", color: "#EF6C00" }}
        >
          Компании
        </Link>
        <Link
          to="/job-exchange/vacancy"
          style={{ textDecoration: "none", color: "black" }}
        >
          Вакансии
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
            <h2 style={{ fontSize: "48px", marginTop: "47px" }}>Компании</h2>
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
                  placeholder="Например, Яндекс"
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
                      Аналитик данных
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "140%",
                      marginTop: "35px",
                    }}
                  >
                    Яндекс — одна из крупнейших IT-компаний в России. Мы
                    развиваем самую популярную в стране поисковую систему и
                    создаём сервисы, которые делают жизнь людей более комфортной
                    и яркой.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>3 вакансии</p>
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
                      Тинькофф
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "140%",
                      marginTop: "35px",
                    }}
                  >
                    Тинькофф — финансовая экосистема для 15 млн клиентов. Наша
                    команда создает и развивает удобные продукты и сервисы:
                    суперприложение, голосовых роботов, инвестиции, кредитные и
                    дебетовые карты.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>3 вакансии</p>
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
                    VK Team — это 10 тысяч профессионалов, которые создают
                    удобные сервисы для миллионов людей. Мы стремимся улучшить
                    все сферы жизни наших пользователей.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>2 вакансии</p>
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
                    Capco - это глобальная консалтинговая компания в области технологий и бизнеса, специализирующаяся на секторе финансовых услуг. Мы стремимся помочь нашим клиентам добиться успеха в постоянно меняющейся отрасли.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "35px",
                    }}
                  >
                    <p>3 вакансии</p>
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
