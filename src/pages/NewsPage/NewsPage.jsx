import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import search from "../../assets/Search.svg"
import flags from "../../assets/Flags.png"
import Close from "../../assets/Close.svg"
import MagicButton from "../../components/MagicButton";

export default function NewsPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const [placeholder, setPlaceholder] = useState("Введите ваш email");

  const changePlaceholder = () => {
    setPlaceholder("ekkaterinasmirnova@mail.ru");
  };

  return (
    <div style={{ backgroundColor: "#F5F1E7", width: "100%" }}>
      <MagicButton />
            <div style={{maxWidth: "1440px", margin: "0 auto"}}>
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
                style={{cursor: "pointer", height: "114px", margin: "80px 0" }}
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
              <input
                type="text"
                placeholder="Все разделы"
                style={{
                  width: "190px",
                  fontSize: "18px",
                  padding: "10px 24px",
                  border: "1px solid #1F1F1F",
                  borderRadius: "5px",
                }}
              />
              с
              <input
                type="date"
                placeholder="с"
                style={{
                  fontSize: "18px",
                  padding: "9px 25px",
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
                    src={flags}
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
                    src={flags}
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
                    src={flags}
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
                  Сайт использует cookie. <p style={{ margin: "0" }}>Зачем?</p>{" "}
                </div>
                <img src={Close} alt="close" />
              </div>
            </div>
            <h2
              style={{
                marginTop: "-30px",
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
                <img style={{ width: "100%" }} src={flags} alt="flags" />
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
                  <h4 style={{ margin: "20px 0 27px 0", fontWeight: "bold" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                <img style={{ width: "100%" }} src={flags} alt="flags" />
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
                  <h4 style={{ margin: "20px 0 27px 0", fontWeight: "bold" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                <img style={{ width: "100%" }} src={flags} alt="flags" />
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
                  <h4 style={{ margin: "20px 0 27px 0", fontWeight: "bold" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                  backgroundColor: "transparent",
                }}
              >
                Показать ещё
              </button>
            </div>
            <h2
              style={{
                marginTop: "100px",
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
                    21 час назад
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                    21 час назад
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
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                    21 час назад
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                    21 час назад
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Ipsum dolor sit amet, consectetuer adipiscing elit.
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
                  backgroundColor: "transparent",
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
                flexDirection: "row",
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
            </div>
      </div>
  );
}
