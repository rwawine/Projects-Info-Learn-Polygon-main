import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import Close from "../../assets/Close.svg";
import ArrowBack from "../../assets/BackArrow.svg";
import Refresh from "../../assets/Refresh.svg";

import Captha1 from "../../assets/captha/Captcha/Active/Captcha/1.svg";
import Captha2 from "../../assets/captha/Captcha/Active/Captcha/2.svg";
import Captha3 from "../../assets/captha/Captcha/Active/Captcha/3.svg";
import Captha4 from "../../assets/captha/Captcha/Active/Captcha/4.svg";
import Captha5 from "../../assets/captha/Captcha/Active/Captcha/5.svg";
import Captha6 from "../../assets/captha/Captcha/Active/Captcha/6.svg";
import Captha7 from "../../assets/captha/Captcha/Active/Captcha/7.svg";
import Captha8 from "../../assets/captha/Captcha/Active/Captcha/8.svg";
import Captha9 from "../../assets/captha/Captcha/Active/Captcha/9.svg";

import { useLanguage } from "../../context/LanguageContext";

export default function NewsPageSectionArtice({ goToAuth }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { language, translations } = useLanguage();
  const navigate = useNavigate();

  const newsPage = () => {
    navigate("/news");
  };

  const handleLinkClickPage = (pageName) => {
    navigate(`/${pageName}`);
  };

  const links = [
    {
      id: 1,
      label: translations[language].newsPageSectionArticle.economy,
      href: "#economy",
      pageName: "news/economy",
    },
    {
      id: 2,
      label: translations[language].newsPageSectionArticle.technology,
      href: "#technology",
      pageName: "news",
    },
    { id: 3, label: translations[language].newsPageSectionArticle.society, href: "#society", pageName: "news" },
    { id: 4, label: translations[language].newsPageSectionArticle.other, href: "#other", pageName: "news/other" },
  ];

  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCloseModal = () => {
    setIsModalVisible(false);
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

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
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
                  textDecoration: "none",
                  color: hoveredIndex === index ? "#B64D4A" : "black",
                  fontSize: "18px",
                  cursor: "pointer",
                  fontWeight: "400",
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
            justifyContent: "flex-start",
            marginTop: "20px",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            onClick={newsPage}
            src={ArrowBack}
            alt="ArrowBack"
            style={{
              cursor: "pointer",
              transform: isHovered ? "scale(1.3)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <main
          style={{
            width: "1400px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <section style={{ width: "1400px" }}>
            <article style={{ width: "100%" }}>
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
                  {translations[language].newsPageSectionArticle.politics}
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
                  {translations[language].newsPageSectionArticle.hotNews}
                </span>
                <h3
                  style={{
                    fontSize: "28px",
                    marginTop: "30px",
                    marginBottom: "110px",
                  }}
                >
                  {translations[language].newsPageSectionArticle.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: "18px", color: "black", margin: "0" }}>
                    {translations[language].newsPageSectionArticle.source}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "black",
                      opacity: "0.5",
                      margin: "0",
                    }}
                  >
                    {translations[language].newsPageSectionArticle.sourceTime}
                  </p>
                </div>
              </div>
            </article>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  filter: isModalVisible ? "blur(5px)" : "none",
                  transition: "filter 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    marginTop: "110px",
                    maxWidth: "1200px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo.
                </p>
                <p
                  style={{
                    fontSize: "28px",
                    marginTop: "50px",
                    maxWidth: "1200px",
                  }}
                >
                  Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                  eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                  metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                  ultricies nisi vel augue. Curabitur ullamcorper ultricies
                  nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                  eget condimentum rhoncus, sem quam semper libero, sit amet
                  adipiscing sem neque sed ipsum. Nam quam n
                </p>
                <div
                  style={{
                    display: "flex",
                    marginTop: "110px",
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
                    {translations[language].newsPageSectionArticle.showMore}
                  </button>
                </div>
              </div>
              {isModalVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: "-10%",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "60px 160px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "300px",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      {" "}
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
                        {translations[language].newsPageSectionArticle.selectCosmonaut}
                      </h2>
                      <img src={Refresh} />
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "10px",
                        maxWidth: "300px",
                        margin: "6px 0 24px 0",
                      }}
                    >
                      {images.map((image, index) => (
                        <div
                          onClick={() => handleClick(index)}
                          key={index}
                          style={{
                            transform:
                              selectedIndex === index
                                ? "scale(0.9)"
                                : "scale(1)",
                            width: "95px",
                            height: "95px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={image}
                            alt={`Captcha ${index + 1}`}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
              onClick={handleCloseModal}
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
              {translations[language].newsPageSectionArticle.selectCosmonaut}
            </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
        <div
          style={{
            marginTop: "90px",
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
              {translations[language].newsPageSectionArticle.newsResource}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
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
                {translations[language].newsPageSectionArticle.subscribe}
              </button>
              <img src={Close} alt="close" />
            </div>
          </div>
        </div>
        <hr style={{ margin: "30px 0 30px 0" }} />
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
              {translations[language].newsPageSectionArticle.newsResource}
            </div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                opacity: "0.5",
                color: "black",
              }}
            >
              2023. {translations[language].newsPageSectionArticle.copyright}
            </p>
          </div>
          <Link to="/info" style={{color: 'black', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].newsPageSectionArticle.backToContour}</Link>
          </div>
      </div>
    </div>
  );
}
