import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import flags from "../../assets/Flags.png";
import Close from "../../assets/Close.svg";
import ArrowBack from "../../assets/BackArrow.svg";

import { useLanguage } from "../../context/LanguageContext";

export default function NewsPageArtice() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { language, translations } = useLanguage();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news");
  };

  const links = [
    {
      id: 1,
      label: translations[language].newsPageArticle.economy,
      href: "#economy",
      pageName: "news/economy",
    },
    {
      id: 2,
      label: translations[language].newsPageArticle.technology,
      href: "#technology",
      pageName: "news",
    },
    { id: 3, label: translations[language].newsPageArticle.society, href: "#society", pageName: "news" },
    { id: 4, label: translations[language].newsPageArticle.other, href: "#other", pageName: "news/other" },
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
            onClick={handleClick}
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
              <img
                src={flags}
                alt="Flags"
                style={{ width: "100%", height: "670px", borderRadius: "10px" }}
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
                  {translations[language].newsPageArticle.politics}
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
                  {translations[language].newsPageArticle.hotNews}
                </span>
                <h3
                  style={{
                    fontSize: "28px",
                    marginTop: "30px",
                    marginBottom: "110px",
                  }}
                >
                  {translations[language].newsPageArticle.news1}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: "18px", color: "black", margin: "0" }}>
                    {translations[language].newsPageArticle.news1Source}
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "black",
                      opacity: "0.5",
                      margin: "0",
                    }}
                  >
                    {translations[language].newsPageArticle.news1Time}
                  </p>
                </div>
              </div>
            </article>
            <p
              style={{
                fontSize: "28px",
                marginTop: "110px",
                maxWidth: "1200px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo.
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
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
              feugiat a, tellus. Phasellus viverra nulla ut metus varius
              laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
              vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              Nam quam n
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
                  backgroundColor: "#fff",
                }}
              >
                {translations[language].newsPageArticle.showMore}
              </button>
            </div>
          </section>
        </main>
        <div
          style={{
            marginTop: "65px",
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
              {translations[language].newsPageArticle.newsResource}
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
                {translations[language].newsPageArticle.subscribe}
              </button>
              <img src={Close} alt="close" />
            </div>
          </div>
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
              {translations[language].newsPageArticle.newsResource}
            </div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                opacity: "0.5",
                color: "black",
              }}
            >
              2023, {translations[language].newsPageArticle.copyright}
            </p>
          </div>
          <Link to="/info" style={{color: 'black', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].newsPageArticle.backToContour}</Link>
          </div>
      </div>
    </div>
  );
}
