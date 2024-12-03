import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import search from "../../assets/Search.svg";
import flags from "../../assets/Flags.png";
import Close from "../../assets/Close.svg";
import Refresh from "../../assets/Refresh.svg";
import ArrowInput from "../../assets/ArrowInput.svg";

import Captha1 from "../../assets/captha/Captcha/Active/Captcha/1.svg";
import Captha2 from "../../assets/captha/Captcha/Active/Captcha/2.svg";
import Captha3 from "../../assets/captha/Captcha/Active/Captcha/3.svg";
import Captha4 from "../../assets/captha/Captcha/Active/Captcha/4.svg";
import Captha5 from "../../assets/captha/Captcha/Active/Captcha/5.svg";
import Captha6 from "../../assets/captha/Captcha/Active/Captcha/6.svg";
import Captha7 from "../../assets/captha/Captcha/Active/Captcha/7.svg";
import Captha8 from "../../assets/captha/Captcha/Active/Captcha/8.svg";
import Captha9 from "../../assets/captha/Captcha/Active/Captcha/9.svg";

import Thumbnail1 from "../../assets/NewPage/Thumbnail1.png";
import Thumbnail2 from "../../assets/NewPage/Thumbnail2.png";
import Thumbnail3 from "../../assets/NewPage/Thumbnail3.png";
import Thumbnail4 from "../../assets/NewPage/Thumbnail4.png";
import Thumbnail5 from "../../assets/NewPage/Thumbnail5.png";
import Thumbnail6 from "../../assets/NewPage/Thumbnail6.png";

export default function NewsPage() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news");
  };

  const NewsPageArticle = () => {
    navigate("/news/article");
  };

  const NewsPageSectionArticle = () => {
    navigate("/news/articles");
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickIndex = (index) => {
    setSelectedIndex(index);
  };

  const images = [
    Captha1,
    Captha2,
    Captha3,
    Captha4,
    Captha5,
    Captha6,
    Captha7,
    Captha8,
    Captha9,
  ];

  const [isHovered, setIsHovered] = useState(false);

  const [placeholder, setPlaceholder] = useState("Введите ваш email");

  const changePlaceholder = () => {
    setPlaceholder("ekkaterinasmirnova@mail.ru");
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalVisible]);

  const handleCloseModalWindow = () => {
    if (selectedIndex !== null) {
      setIsModalVisible(false);
    } else {
      alert("Выберите космонавта с табличкой в руках!");
    }
  };

  return (
    <>
      {isModalVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              textAlign: "center",
              borderRadius: "10px",
              width: "80%",
              maxWidth: "400px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  textAlign: "left",
                  margin: "0",
                  color: "#845BFF",
                  maxWidth: "200px",
                  fontSize: "16px",
                  lineHeight: "100%",
                }}
              >
                Выберите космонавта с табличкой в руках
              </h2>
              <img src={Refresh} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleClickIndex(index)}
                  style={{
                    width: "95px",
                    height: "95px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    borderRadius: "11px",
                    transform:
                      selectedIndex === index ? "scale(0.95)" : "scale(1)",
                    border:
                      selectedIndex === index ? "3px solid #845BFF" : "none",
                  }}
                >
                  <img
                    src={image}
                    alt={`Captcha ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleCloseModalWindow}
              style={{
                padding: "10px 30px",
                fontSize: "16px",
                backgroundColor: "#845BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#FFC700";
                e.target.style.color = "#845BFF";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#845BFF";
                e.target.style.color = "#fff";
              }}
            >
              Я не робот
            </button>
          </div>
        </div>
      )}
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
                    textDecoration: "none",
                    color: hoveredIndex === index ? "#B64D4A" : "black",
                    fontSize: "18px",
                    fontWeight: "400",
                    cursor: "pointer",
                    borderBottom:
                      hoveredIndex === index
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
              marginTop: "50px",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "190px",
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                fontSize: "18px",
                padding: "10px 24px",
                border: "1px solid #1F1F1F",
                borderRadius: "5px",
                backgroundColor: "#FFFFFF",
                cursor: "pointer"
              }}
            ><p>Все разделы</p><img src={ArrowInput} alt="" /></div>
            с
            <input
              type="date"
              placeholder="с"
              style={{
                fontSize: "18px",
                padding: "9px 25px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #1F1F1F",
                borderRadius: "5px",
              }}
            />
            по
            <input
              type="date"
              placeholder="по"
              style={{
                fontSize: "18px",
                backgroundColor: "#FFFFFF",
                padding: "9px 25px",
                border: "1px solid #1F1F1F",
                borderRadius: "3px",
              }}
            />
            <input
              type="search"
              placeholder="Поиск"
              style={{
                width: "311px",
                height: "44px",
                fontSize: "18px",
                padding: "9px 25px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #1F1F1F",
                borderRadius: "3px",
              }}
            />
            <button
              onClick={handleOpenModal}
              style={{
                width: "41px",
                height: "41px",
                padding: "10px 10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "14.24px",
              }}
            >
              <img src={search} alt="Search" />
            </button>
            {isModalOpen && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    padding: "70px 120px",
                  }}
                >
                  <h2
                    style={{
                      margin: "0",
                      textAlign: "left",
                      color: "#2A2A2A",
                      fontSize: "16px",
                      width: "410px",
                    }}
                  >
                    Подпишитесь, чтобы получать актуальные новости сразу на
                    почту
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "18px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        padding: "10px",
                        margin: "10px 0",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                      onClick={changePlaceholder}
                    >
                      {placeholder}
                    </div>
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#888888",
                        color: "white",
                        height: "43px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={handleCloseModal}
                    >
                      Подписаться
                    </button>
                  </div>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "12px",
                      color: "black",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={handleCloseModal}
                  >
                    Условия подписки
                  </p>
                </div>
              </div>
            )}
          </div>
          <main
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              marginTop: "50px",
            }}
          >
            <section>
              <article style={{ width: "700px" }}>
                <img
                  src={flags}
                  alt="Flags"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <div style={{ marginTop: "19px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "5px 12px",
                      borderRadius: "70px",
                      color: "#2A2A2A",
                      marginRight: "10px",
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
                      marginRight: "10px",
                      fontSize: "18px",
                      backgroundColor: "#C9543C",
                      border: "1px solid #C9543C",
                    }}
                  >
                    горячие новости
                  </span>
                  <h3
                    onClick={NewsPageArticle}
                    style={{
                      cursor: "pointer",
                      fontSize: "28px",
                      marginTop: "30px",
                    }}
                  >
                    Гондурас подал запрос на вступление в Новый банк развития
                    БРИКС
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "70px",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        color: "black",
                        opacity: "0.5",
                        margin: "0",
                      }}
                    >
                      2 минуты назад
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        color: "black",
                        margin: "0",
                      }}
                    >
                      Источник: РИА
                    </p>
                  </div>
                </div>
              </article>
            </section>

            <aside
              style={{
                width: "640px",
                display: "flex",
                gap: "34px",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <article
                style={{
                  display: "flex",
                  gap: "24px",
                }}
              >
                <img
                  style={{
                    width: "308px",
                    maxHeight: "185px",
                  }}
                  src={Thumbnail1}
                  alt="thumbnail"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
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
                  </div>
                  <h4 style={{ fontSize: "18px" }}>
                    МИД оценил решение Международного суда ООН по иску Украины
                    против России
                  </h4>
                  <p style={{ fontSize: "18px", color: "gray", margin: "0" }}>
                    2 минуты назад
                  </p>
                </div>
              </article>
              <article
                style={{
                  display: "flex",
                  gap: "24px",
                }}
              >
                <img
                  style={{
                    width: "308px",
                    maxHeight: "185px",
                  }}
                  src={Thumbnail2}
                  alt="thumbnail"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
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
                  </div>
                  <h4 style={{ fontSize: "18px" }}>
                    Совфед одобрил закон о переносе на год компенсации советских
                    вкладов
                  </h4>
                  <p style={{ fontSize: "18px", color: "gray", margin: "0" }}>
                    2 минуты назад
                  </p>
                </div>
              </article>
              <article
                style={{
                  display: "flex",
                  gap: "24px",
                }}
              >
                <img
                  style={{
                    width: "308px",
                    maxHeight: "185px",
                  }}
                  src={Thumbnail3}
                  alt="thumbnail"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
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
                  </div>
                  <h4 style={{ fontSize: "18px" }}>
                    Сенаторы внесли в Госдуму законопроект об упрощении
                    госзакупок
                  </h4>
                  <p style={{ fontSize: "18px", color: "gray", margin: "0" }}>
                    2 минуты назад
                  </p>
                </div>
              </article>
            </aside>
          </main>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "60px",
                width: "600px",
                padding: "16px",
                backgroundColor: "black",
                opacity: "0.9",
                borderRadius: "4px",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "0",
                  margin: "0",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Сайт использует cookie. <p style={{ margin: "0", textDecoration: "underline" }}>Зачем?</p>{" "}
              </div>
              <img src={Close} alt="close" />
            </div>
          </div>
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "44px",
              color: "black",
              fontWeight: "400",
            }}
          >
            Последние
          </h2>
          <hr style={{ margin: "0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "100px",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                maxWidth: "430px",
              }}
            >
              <img style={{ width: "100%" }} src={Thumbnail4} alt="flags" />
              <div
                style={{
                  display: "flex",
                  margin: "20px 0 0 0",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "103px",
                    height: "32px",
                    margin: "0",
                    fontSize: "18px",
                    color: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "70px",
                  }}
                >
                  политика
                </p>
                <h4
                  style={{
                    margin: "20px 0 27px 0",
                    fontSize: 18,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Скандал в правительстве: министр уличен в коррупции
                </h4>
                <p
                  style={{
                    margin: "0",
                    fontSize: "18px",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  21 час назад
                </p>
              </div>
            </div>
            <div
              style={{
                maxWidth: "430px",
              }}
            >
              <img style={{ width: "100%" }} src={Thumbnail5} alt="flags" />
              <div
                style={{
                  display: "flex",
                  margin: "20px 0 0 0",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "32px",
                    margin: "0",
                    maxWidth: "122px",
                    fontSize: "18px",
                    color: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "70px",
                  }}
                >
                  технологии
                </p>
                <h4
                  style={{
                    margin: "20px 0 27px 0",
                    fontSize: 18,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Прорыв в медицине: ученые разработали новое лекарство от рака
                </h4>
                <p
                  style={{
                    margin: "0",
                    fontSize: "18px",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  1 день назад
                </p>
              </div>
            </div>
            <div
              style={{
                maxWidth: "430px",
              }}
            >
              <img style={{ width: "100%" }} src={Thumbnail6} alt="flags" />
              <div
                style={{
                  display: "flex",
                  margin: "20px 0 0 0",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "103px",
                    height: "32px",
                    margin: "0",
                    fontSize: "18px",
                    color: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "70px",
                  }}
                >
                  политика
                </p>
                <h4
                  style={{
                    margin: "20px 0 27px 0",
                    fontSize: 18,
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Парламент принял спорный законопроект о регулировании
                  социальных сетей
                </h4>
                <p
                  style={{
                    margin: "0",
                    fontSize: "18px",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  1 день назад
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5.5px 12px",
                margin: "0",
                fontSize: "18px",
                color: isHovered ? "#FFFFFF" : "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "70px",
                cursor: "pointer",
                backgroundColor: isHovered ? "#2A2A2A" : "#fff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Показать ещё
            </button>
          </div>
          <h2
            style={{
              marginTop: "100px",
              marginBottom: "20px",
              fontSize: "44px",
              color: "black",
              fontWeight: "400",
            }}
          >
            Более старые
          </h2>
          <hr style={{ margin: "0" }} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "50px",
              justifyContent: "space-between",
              marginBottom: "100px",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                width: "620px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px 12px",
                    margin: "0",
                    fontSize: "18px",
                    color: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "70px",
                  }}
                >
                  политика
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "18px",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  21 Апреля 2023
                </p>
              </div>
              <h4
                style={{
                  margin: "18px 0 29px 0",
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "141%",
                }}
              >
                Лидеры стран G7 провели экстренный саммит по вопросам климата
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "141%",
                  color: "black",
                  opacity: "0.5",
                }}
              >
                Главы государств "Большой семерки" собрались на внеочередную
                встречу для обсуждения глобальных климатических проблем и
                согласования совместных действий по борьбе с изменением климата.
              </p>
            </div>
            <div
              style={{
                width: "620px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px 12px",
                    margin: "0",
                    fontSize: "18px",
                    color: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "70px",
                  }}
                >
                  общество
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "18px",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  21 Апреля 2023
                </p>
              </div>
              <h4
                onClick={NewsPageSectionArticle}
                style={{
                  cursor: "pointer",
                  margin: "18px 0 29px 0",
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "141%",
                  color: "#2A2A2A",
                  transition: "color 0.3s ease",
                }}
              >
                Президент подписал указ о повышении пенсий и пособий
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "141%",
                  color: "black",
                  opacity: "0.5",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                dapibus.
              </p>
            </div>
            <div
              style={{
                width: "620px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px 12px",
                    margin: "0",
                    fontSize: "18px",
                    color: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "70px",
                  }}
                >
                  политика
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "18px",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  21 Апреля 2023
                </p>
              </div>
              <h4
                style={{
                  margin: "18px 0 29px 0",
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "141%",
                }}
              >
                Оппозиционная партия объявила о бойкоте предстоящих выборов
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "141%",
                  color: "black",
                  opacity: "0.5",
                }}
              >
                Крупнейшая оппозиционная партия заявила, что не будет
                участвовать в предстоящих парламентских выборах, обвинив
                правящую партию в манипуляциях и ограничении политической
                конкуренции.
              </p>
            </div>
            <div
              style={{
                width: "620px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px 12px",
                    margin: "0",
                    fontSize: "18px",
                    color: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "70px",
                  }}
                >
                  политика
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "18px",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  21 Апреля 2023
                </p>
              </div>
              <h4
                style={{
                  margin: "18px 0 29px 0",
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "141%",
                }}
              >
                Страны-члены ООН договорились о новых мерах по борьбе с
                терроризмом
              </h4>
              <p
                style={{
                  margin: "0",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "141%",
                  color: "black",
                  opacity: "0.5",
                }}
              >
                На заседании Генеральной Ассамблеи ООН государства-члены приняли
                резолюцию, предусматривающую усиление международного
                сотрудничества и обмена информацией в сфере противодействия
                терроризму.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5.5px 12px",
                margin: "0",
                fontSize: "18px",
                color: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "70px",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
            >
              Показать ещё
            </button>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                width: "600px",
                padding: "16px",
                backgroundColor: "black",
                opacity: "0.9",
                borderRadius: "4px",
                color: "white",
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
                <img
                  style={{ height: "18px", fill: "white" }}
                  src={logo}
                  alt=""
                />
                Новостной ресурс
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "25px" }}
              >
                <button
                  style={{
                    backgroundColor: "#B64D4A",
                    padding: "6px 16px",
                    borderRadius: "4px",
                    color: "white",
                    fontSize: "14px",
                    border: "none",
                  }}
                >
                  Подписаться
                </button>
                <img src={Close} alt="close" />
              </div>
            </div>
          </div>
          <hr style={{ margin: "40px 0 30px 0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "30px",
            }}
          >
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
            <Link
              to="/info"
              style={{
                color: "black",
                fontSize: 16,
                fontFamily: "IBM Plex Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Вернуться в контур системы
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
