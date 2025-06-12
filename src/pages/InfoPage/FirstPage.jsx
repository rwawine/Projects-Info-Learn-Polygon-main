import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoPage from "./InfoPage";
import "../../index.css";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";

function CollapseButton({ name, children, symbol }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#EFEEEC" }}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="sign-in"
        style={{
          display: "flex",
          gap: "40px",
          width: "100%",
          borderBottom: "0px solid #000000",
          borderRight: "0px",
          backgroundColor: "#EFEEEC",
          paddingLeft: "75px",
        }}
      >
        {name}{" "}
        <div
          style={{
            transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
            marginTop: "5px",
          }}
        >
          {symbol}
        </div>
      </button>
      {isOpen && children}
    </div>
  );
}

function Burger({ isOpen, open, close }) {
  return (
    <div
      style={{
        marginLeft: "auto",
        position: "relative",
      }}
    >
      <button
        onClick={() => (isOpen ? close() : open())}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "30px",
          height: "16px",
          padding: 0,
        }}
      >
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#000",
            borderRadius: "1px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#000",
            borderRadius: "1px",
            opacity: isOpen ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#000",
            borderRadius: "1px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}
        />
      </button>
    </div>
  );
}

function LoginForm() {
  const { language, translations } = useLanguage();
  
  return (
    <div className="ring">
      <div className="login">
        <div className="inputBx">
          <input type="text" placeholder={translations[language].username} />
        </div>
        <div className="inputBx">
          <input type="password" placeholder={translations[language].password} />
        </div>
        <div className="inputBx">
          <input type="submit" value={translations[language].enter} />
        </div>
        <div className="links">
          <a href="#">{translations[language].accessRecovery}</a>
        </div>
      </div>
    </div>
  );
}

function RegForm() {
  const { language, translations } = useLanguage();
  
  return (
    <div className="ring">
      <div className="login">
        <div className="inputBx">
          <input type="text" placeholder={translations[language].username} />
        </div>
        <div className="inputBx">
          <input type="password" placeholder={translations[language].password} />
        </div>
        <div className="inputBx">
          <input type="phone" placeholder={translations[language].phone} />
        </div>
        <div className="inputBx">
          <input type="group" placeholder={translations[language].groupNumber} />
        </div>
        <div className="inputBx">
          <input type="submit" value={translations[language].enter} />
        </div>
      </div>
    </div>
  );
}

function AuthPage() {
  const { language, translations } = useLanguage();
  
  return (
    <div style={{ width: "100%" }}>
      <div style={{ flexGrow: 1, background: "#E1D6E7" }}>
        <CollapseButton name={translations[language].login} symbol={">"}>
          <div>
            <LoginForm />
          </div>
        </CollapseButton>
        <CollapseButton name={translations[language].registration} symbol={">"}>
          <div>
            <RegForm />
          </div>
        </CollapseButton>
      </div>
    </div>
  );
}

export default function FirstPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(true);
  const navigate = useNavigate();
  const { language, translations } = useLanguage();

  const togglePage = () => {
    setIsAuthPage((prev) => !prev);
  };

  const menuItems = [
    { label: translations[language].landing, route: "/katarium" },
    { label: translations[language].politicalSite, route: "/political-site" },
    { label: translations[language].jobExchange, route: "/job-exchange" },
    { label: translations[language].newsResource, route: "/news" },
  ];

  const buttonPosition = isAuthPage ? { left: "0" } : { right: "0" };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          borderBottom: "1px solid black",
          background: "#E1D6E7",
        }}
      >
        <span style={{ fontSize: "22px", paddingLeft: "60px" }}>
          {translations[language].systemContour}
        </span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Burger
            isOpen={burgerIsOpen}
            open={() => setBurgerIsOpen(true)}
            close={() => setBurgerIsOpen(false)}
          />
          <LanguageSwitcher />
        </div>
      </header>
      <section
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexGrow: 1,
          backgroundColor: "#E1D6E7",
        }}
      >
        {burgerIsOpen && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: "5",
              backgroundColor: "#EFEEEC",
              flexGrow: 1,
            }}
          >
            {menuItems.map(({ label, route }, index) => (
              <button
                key={route}
                onClick={() => navigate(route)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  padding: "30px",
                  height: "25%",
                  gap: "32px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  borderBottom: "1px solid #000000",
                  backgroundColor: hoveredIndex === index ? "#E1D6E8" : "#EFEEEC",
                  paddingLeft: "75px",
                  fontSize: "42px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                {label}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
  <path d="M26.09 11.4186L37.1716 22.5H6C4.89542 22.5 4 23.3956 4 24.5C4 25.6046 4.89542 26.5 6 26.5H37.1716L26.09 37.5816C25.309 38.3626 25.309 39.629 26.09 40.41C26.8712 41.191 28.1374 41.191 28.9184 40.41L43.4142 25.9144C44.1952 25.1332 44.1952 23.867 43.4142 23.0858L28.9184 8.59018C28.5266 8.1983 28.0126 8.00304 27.499 8.0044C27.3728 8.00474 27.2466 8.01694 27.1222 8.041C26.744 8.11422 26.383 8.29728 26.09 8.59018C25.309 9.37122 25.309 10.6376 26.09 11.4186Z" fill="black"/>
</svg>
              </button>
            ))}
          </div>
        )}
        {isAuthPage ? <InfoPage /> : <AuthPage />}
        <button
          onClick={togglePage}
          style={{
            position: "absolute",
            backgroundColor: isHovered ? "#E1D6E7 " : "#1D1D1B",
            padding: "10px 10px",
            borderRight: isHovered ? '1px #1D1D1B solid' : "1px solid transparent",
            borderLeft: isHovered ? '1px #1D1D1B solid' : "1px solid transparent",
            height: "100%",
            width: "63px",
            transition: "background 0.3s ease",
            ...buttonPosition,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            style={{
              color: "#845BFF",
              background: isHovered ? "#1D1D1B" : "#EEEDEB",
              borderRadius: "20px",
              width: "40px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isAuthPage ? <div style={{ transform: "rotate(-180deg)", marginBottom: "5px" }}><svg onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                stroke: isHovered ? "#EFEEEC" : "#1D1D1B",
              }}>
              <path d="M1.8125 23.4609L11.0439 13.3064C11.4797 12.827 11.4797 12.0949 11.0439 11.6155L1.8125 1.46094" strokeWidth="1.69783" strokeLinecap="round" />
            </svg>
            </div> : <div style={{ marginTop: "5px" }}><svg onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                stroke: isHovered ? "#EFEEEC" : "#1D1D1B",
              }}>
              <path d="M1.8125 23.4609L11.0439 13.3064C11.4797 12.827 11.4797 12.0949 11.0439 11.6155L1.8125 1.46094" strokeWidth="1.69783" strokeLinecap="round" />
            </svg>
            </div>}
          </div>
        </button>
      </section>
    </div>
  );
}
