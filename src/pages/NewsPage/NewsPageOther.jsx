import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import ArrowInput from "../../assets/ArrowInput.svg";
import ArrowPagination from "../../assets/ArrowPagination.svg";
import BannerImage from "../../assets/NewsBannerPage.png";

import Thumbnail14 from "../../assets/NewPage/Thumbnail14.png";
import Thumbnail15 from "../../assets/NewPage/Thumbnail15.png";
import Thumbnail16 from "../../assets/NewPage/Thumbnail16.png";
import Thumbnail17 from "../../assets/NewPage/Thumbnail17.png";
import Thumbnail18 from "../../assets/NewPage/Thumbnail18.png";

export default function NewsPageOther() {
  const [hoveredIndex, setHoveredIndex] = React.useState(3);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news");
  };
  const links = [
    {
      id: 1,
      label: "Экономика",
      href: "#economy",
      pageName: "news/economy",
    },
    {
      id: 2,
      label: "Технологии",
      href: "#technology",
      pageName: "news",
    },
    { id: 3, label: "Общество", href: "#society", pageName: "news" },
    { id: 4, label: "Другое", href: "#other", pageName: "news/other" },
  ];

  const handleLinkClickPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  return (
    <div style={{ backgroundColor: "#F5F1E7", width: "100%" }}>
      <div style={{ maxWidth: "1370px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            paddingBottom: "10px",
          }}
        >
          <hr
            style={{
              margin: "20px 0",
              padding: "0",
              height: "0",
              border: "none",
              borderTop: "15px solid #333",
              width: "100%",
            }}
          />
          <img
            onClick={handleClick}
            src={logo}
            alt="Logo"
            style={{ cursor: "pointer", height: "114px", margin: "80px 0" }}
          />
          <nav
            style={{
              borderBottom: "1px solid #1F1F1F",
              borderTop: "1px solid #1F1F1F",
              width: "100%",
              display: "flex",
              gap: "92px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {links.map((link, index) => (
              <a
                key={link.id}
                onClick={() => handleLinkClickPage(link.pageName)}
                style={{
                  transition:
                    "color 0.3s ease, border-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  padding: "18px 10px",
                  cursor: "pointer",
                  textDecoration: "none",
                  color:
                    index === 3 || hoveredIndex === index ? "#B64D4A" : "black",
                  fontSize: "18px",
                  fontWeight: "400",
                  borderBottom:
                    index === 3 || hoveredIndex === index
                      ? "5px solid #B64D4A"
                      : "5px solid transparent",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            marginBottom: "60px",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              padding: "9px 25px",
              border: "1px solid #1F1F1F",
              borderRadius: "3px",
              backgroundColor: "white",
              display: "flex",
              gap: "50px",
              alignItems: "center",
            }}
          >
            Показывать: 30 <img src={ArrowInput} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
          <article
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "420px",
                maxHeight: "252px",
                backgroundColor: "#D9D9D9",
              }}
            ><img src={Thumbnail14} alt="" /></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "70px",
                    color: "#2A2A2A",
                    fontSize: "18px",
                    border: "1px solid #2A2A2A",
                  }}
                >
                  политика
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "70px",
                    color: "white",
                    fontSize: "18px",
                    backgroundColor: "#C9543C",
                    border: "1px solid #C9543C",
                  }}
                >
                  горячие новости
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  1 час назад
                </p>
              </div>
              <h4
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "28px 0 32px 0",
                }}
              >
               Коалиционное правительство распалось из-за разногласий по ключевым вопросам
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  lineHeight: "140%",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                 Правящая коалиция, состоящая из нескольких политических партий, распалась в результате непреодолимых разногласий по ряду принципиальных вопросов, что привело к политическому кризису в стране.
              </p>
            </div>
          </article>
          <article
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "420px",
                maxHeight: "252px",
                backgroundColor: "#D9D9D9",
              }}
            ><img src={Thumbnail15} alt="" /></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "70px",
                    color: "#2A2A2A",
                    fontSize: "18px",
                    border: "1px solid #2A2A2A",
                  }}
                >
                  оон
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "70px",
                    color: "white",
                    fontSize: "18px",
                    backgroundColor: "#C9543C",
                    border: "1px solid #C9543C",
                  }}
                >
                  горячие новости
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  21 час назад
                </p>
              </div>
              <h4
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "140%",
                  margin: "28px 0 32px 0",
                }}
              >
                Страны-члены ООН договорились о новых мерах по борьбе с терроризмом
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  lineHeight: "140%",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                На заседании Генеральной Ассамблеи ООН государства-члены приняли резолюцию, предусматривающую усиление международного сотрудничества и обмена информацией в сфере противодействия терроризму.
              </p>
            </div>
          </article>
          <div
            style={{
              backgroundImage: `url(${BannerImage})`,
              height: "364px",
              width: "1360px",
              position: "relative",
            }}
          >
            <p
              style={{
                margin: "150px 0 0 60px",
                fontSize: "43.27px",
                color: "white",
              }}
            >
              Искусство ведения дебатов.
            </p>
            <p
              style={{
                margin: "16px 0 0 60px",
                fontSize: "43.27px",
                color: "white",
              }}
            >
              Курсы “Прямая речь”
            </p>
          </div>
          <article
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "420px",
                maxHeight: "252px",
                backgroundColor: "#D9D9D9",
              }}
            ><img src={Thumbnail16} alt="" /></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "70px",
                    color: "#2A2A2A",
                    fontSize: "18px",
                    border: "1px solid #2A2A2A",
                  }}
                >
                  политика
                </span>

                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  21 час назад
                </p>
              </div>
              <h4
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "28px 0 32px 0",
                  fontWeight: "500",
                  lineHeight: "140%",
                }}
              >
                Правительство объявило о масштабной приватизации государственных компаний
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  lineHeight: "140%",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                В рамках программы по сокращению государственного долга и стимулированию экономического роста правительство анонсировало планы по приватизации ряда крупных государственных предприятий.
              </p>
            </div>
          </article>
          <article
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "420px",
                maxHeight: "252px",
                backgroundColor: "#D9D9D9",
              }}
            ><img src={Thumbnail17} alt="" /></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "70px",
                    color: "#2A2A2A",
                    fontSize: "18px",
                    border: "1px solid #2A2A2A",
                  }}
                >
                  выборы
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  21 час назад
                </p>
              </div>
              <h4
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "28px 0 32px 0",
                }}
              >
              Оппозиционная партия объявила о бойкоте предстоящих выборов
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  lineHeight: "140%",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                Крупнейшая оппозиционная партия заявила, что не будет участвовать в предстоящих парламентских выборах, обвинив правящую партию в манипуляциях и ограничении политической конкуренции.
              </p>
            </div>
          </article>
          <article
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "420px",
                maxHeight: "252px",
                backgroundColor: "#D9D9D9",
              }}
            ><img src={Thumbnail18} alt="" /></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: "70px",
                    color: "#2A2A2A",
                    fontSize: "18px",
                    border: "1px solid #2A2A2A",
                  }}
                >
                  политика
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  21 час назад
                </p>
              </div>
              <h4
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  lineHeight: "140%",
                  fontWeight: "500",
                  margin: "28px 0 32px 0",
                }}
              >
               Дипломатический скандал: посол отозван из-за противоречивых высказываний
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  lineHeight: "140%",
                  margin: "0",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                Министерство иностранных дел отозвало своего посла из союзной страны после того, как он сделал ряд спорных заявлений, вызвавших дипломатический конфликт между государствами.
              </p>
            </div>
          </article>
        </div>
        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            marginTop: "90px",
            marginBottom: "126px",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                border: "1px solid rgb(0,0,0,1)",
                backgroundColor: "#E4E3DE",
              }}
            >
              1
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                border: "1px solid rgb(0,0,0,.07)",
                backgroundColor: "#E4E3DE",
              }}
            >
              2
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                border: "1px solid rgb(0,0,0,.07)",
                backgroundColor: "#E4E3DE",
              }}
            >
              3
            </div>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                backgroundColor: "none",
              }}
            >
              ...
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                border: "1px solid rgb(0,0,0,.07)",
                backgroundColor: "#E4E3DE",
              }}
            >
              12
            </div>
          </div>
          <img src={ArrowPagination} />
        </div>

        <hr style={{ margin: "50px 0 30px 0" }} />
        <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "30px"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img style={{ height: "18px" }} src={logo} alt="" />
              Новостной ресурс
            </div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                opacity: "0.5",
                color: "black",
              }}
            >
              2023. Все права защищены
            </p>
          </div>
          <Link to="/info" style={{color: 'black', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>Вернуться в контур системы</Link>
          </div>
      </div>
    </div>
  );
}
