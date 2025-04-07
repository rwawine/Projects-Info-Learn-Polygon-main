import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import ArrowInput from "../../assets/ArrowInput.svg";
import ArrowPagination from "../../assets/ArrowPagination.svg";

import Thubmnail7 from "../../assets/NewPage/Thumbnail7.png";
import Thubmnail8 from "../../assets/NewPage/Thumbnail8.png";
import Thubmnail9 from "../../assets/NewPage/Thumbnail9.png";
import Thubmnail10 from "../../assets/NewPage/Thumbnail10.png";
import Thubmnail11 from "../../assets/NewPage/Thumbnail11.png";
import Thubmnail12 from "../../assets/NewPage/Thumbnail12.png";
import Thubmnail13 from "../../assets/NewPage/Thumbnail13.png";

import { useLanguage } from "../../context/LanguageContext";

export default function NewsPageEconomy() {
  const [hoveredIndex, setHoveredIndex] = React.useState(0);
  const navigate = useNavigate();
  const { language, translations } = useLanguage();

  const handleClick = () => {
    navigate("/news");
  };

  const links = [
    {
      id: 1,
      label: translations[language].newsPageEconomy.economy,
      href: "#economy",
      pageName: "news/economy",
    },
    {
      id: 2,
      label: translations[language].newsPageEconomy.technology,
      href: "#technology",
      pageName: "news",
    },
    { id: 3, label: translations[language].newsPageEconomy.society, href: "#society", pageName: "news" },
    { id: 4, label: translations[language].newsPageEconomy.other, href: "#other", pageName: "news/other" },
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
                  cursor: "pointer",
                  color:
                    index === 0 || hoveredIndex === index ? "#B64D4A" : "black",
                  fontSize: "18px",
                  fontWeight: "400",
                  borderBottom:
                    index === 0 || hoveredIndex === index
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
            {translations[language].newsPageEconomy.show}: 30 <img src={ArrowInput} />
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
            ><img src={Thubmnail7} alt="" /></div>
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
                  {translations[language].newsPageEconomy.economy}
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
                  {translations[language].newsPageEconomy.hotNews}
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  {translations[language].newsPageEconomy.oneHourAgo}
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
                {translations[language].newsPageEconomy.coalitionGovernment}
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus
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
            ><img src={Thubmnail8} alt="" /></div>
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
                  {translations[language].newsPageEconomy.economy}
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
                  {translations[language].newsPageEconomy.hotNews}
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  {translations[language].newsPageEconomy.TwentyOneHoursAgo}
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
                {translations[language].newsPageEconomy.coalitionGovernmentDescription}
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                dapibus. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt. Cras dapibus
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
            ><img src={Thubmnail9} alt="" /></div>
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
                  {translations[language].newsPageEconomy.economy}
                </span>

                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  {translations[language].newsPageEconomy.TwentyOneHoursAgo}
                </p>
              </div>
              <h4
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "28px 0 32px 0",
                  fontWeight: "500",
                }}
              >
              {translations[language].newsPageEconomy.coalitionGovernment2}
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                dapibus. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt. Cras dapibus
              </p>
            </div>
          </article>
          <div style={{display: "flex", justifyContent: "space-between"}}>
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
            ><img src={Thubmnail10} alt="" /></div>
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
                  {translations[language].newsPageEconomy.economy}
                </span>

                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  {translations[language].newsPageEconomy.TwentyOneHoursAgo}
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
                {translations[language].newsPageEconomy.coalitionGovernment3}
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                dapibus. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt. Cras dapibus
              </p>
            </div>
          </article>
          <div style={{paddingTop: 6, height: "215px", width: "197px", paddingLeft: 14, paddingRight: 14, background: '#F6F6F6', borderRadius: 10,flexDirection: 'column', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <img style={{width: 164, height: 164, borderRadius: 11.09}} src={Thubmnail12} />
          <div style={{color: 'black', fontSize: 12, fontFamily: 'Inter',textAlign: "center", fontWeight: '500'}}>{translations[language].newsPageEconomy.coalitionGovernment4}</div>
</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
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
            ><img src={Thubmnail11} alt="" /></div>
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
                  {translations[language].newsPageEconomy.economy}
                </span>
                <p
                  style={{
                    fontSize: "18px",
                    color: "gray",
                    margin: "0 0 0 40px",
                  }}
                >
                  {translations[language].newsPageEconomy.TwentyOneHoursAgo}
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
                {translations[language].newsPageEconomy.coalitionGovernment5}
              </h4>
              <p
                style={{
                  maxWidth: "670px",
                  fontSize: "18px",
                  margin: "0",
                  color: "rgb(0,0,0,0.5)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                dapibus. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt. Cras dapibus
              </p>
            </div>
          </article>
          <div style={{paddingTop: 6, height: "197px", width: "197px", paddingLeft: 14, paddingRight: 14, background: '#F6F6F6', borderRadius: 10,flexDirection: 'column', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
          <img style={{width: 164, height: 164, borderRadius: 11.09}} src={Thubmnail13} />
          <div style={{width: 164, color: 'black',textAlign: "center", fontSize: 12, fontFamily: 'Inter', fontWeight: '500'}}>{translations[language].newsPageEconomy.coalitionGovernment6}</div>
</div>
          </div>
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
              {translations[language].newsPageEconomy.newsResource}
            </div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                opacity: "0.5",
                color: "black",
              }}
            >
              2023. {translations[language].newsPageEconomy.copyright}
            </p>
          </div>
          <Link to="/info" style={{color: 'black', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>{translations[language].newsPageEconomy.backToContour}</Link>
          </div>
      </div>
    </div>
  );
}
