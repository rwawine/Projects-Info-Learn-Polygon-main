import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoPage from "./InfoPage";
import "../../index.css";
import LanguageDropdown from "../../components/LanguageDropdown";
import { useLanguage } from "../../context/LanguageContext";

function CollapseButton({ name, children, symbol }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#EFEEEC", display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "190px", paddingTop: "50px", paddingBottom: "50px", borderBottom: "1px solid #000" }}>
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

function RecoveryForm({ onBack, translations, language }) {
  return (
    <div style={{backgroundColor: '#F2F1EF', width: '100%'}}>
    <div style={{
      background: '#F2F1EF',
      padding: '50px 0 50px 0',
    }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: '#222',
          fontSize: '16px',
          marginLeft: '200px',
          marginBottom: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '20px', marginRight: '8px' }}>←</span>
        {translations[language].backToAuth || 'Вернуться к авторизации'}
      </button>
      <div style={{
        marginLeft: '200px',
        width: '100%',
        maxWidth: '1000px',
      }}>
        <h1 style={{
          color: '#000',
          fontSize: '64px',
          maxWidth: '1000px',
          fontStyle: 'normal',
          fontWeight: 400,
          marginBottom: '42px',
        }}>
          {translations[language].accessRecovery || 'Восстановление доступа'}
        </h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '460px',}}>
          <input
            type="text"
            placeholder={translations[language].username || 'Введите логин'}
            style={{
              fontSize: '20px',
              padding: '16px',
              borderRadius: '12px',
              background: '#FFF',
              border: '1px solid #E0E0E0',
              outline: 'none',
            }}
          />
          <input
            type="email"
            placeholder={translations[language].email || 'Введите почту'}
            style={{
              fontSize: '20px',
              padding: '16px',
              borderRadius: '12px',
              background: '#FFF',
              border: '1px solid #E0E0E0',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              background: '#FF6600',
              color: '#fff',
              fontSize: '22px',
              border: 'none',
              borderRadius: '12px',
              padding: '18px 0',
              marginTop: '10px',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            {translations[language].restore || 'Восстановить'}
          </button>
        </form>
      </div>
    </div></div>
  );
}

function LoginForm({ onRecovery }) {
  const { language, translations } = useLanguage();
  return (
    <>
      <div className="login">
        <input type="text" placeholder={translations[language].username} />
        <input type="password" placeholder={translations[language].password} />
        <div className="links">
          <a href="#" onClick={e => { e.preventDefault(); onRecovery(); }}>{translations[language].accessRecovery}</a>
        </div>
        <input type="submit" value={translations[language].enter} />
      </div>
    </>
  );
}

function RegForm() {
  const { language, translations } = useLanguage();

  return (
    <>
      <div className="login">
        <input type="text" placeholder={translations[language].username} />
        <input type="password" placeholder={translations[language].password} />
        <input type="phone" placeholder={translations[language].phone} />
        <input type="group" placeholder={translations[language].groupNumber} />
        <input type="submit" value={translations[language].enter} />
      </div>
    </>
  );
}

function AuthPage() {
  const { language, translations } = useLanguage();
  const [showRecovery, setShowRecovery] = useState(false);

  if (showRecovery) {
    return <RecoveryForm onBack={() => setShowRecovery(false)} translations={translations} language={language} />;
  }

  return (
    <div style={{ width: "100%" }}>
      <div style={{ flexGrow: 1, background: "#E1D6E7" }}>
        <CollapseButton name={translations[language].login} symbol={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none" style={{ transform: 'rotate(90deg)' }}>
  <path d="M16.8341 28.5L24.0058 21.3284L31.1774 28.5C31.9584 29.2809 33.2246 29.2809 34.0058 28.5C34.1034 28.4022 34.1888 28.297 34.262 28.1862C34.7746 27.4098 34.6892 26.3548 34.0058 25.6714L25.42 17.0856C25.0448 16.7106 24.5362 16.5 24.0058 16.5C23.4752 16.5 22.9666 16.7106 22.5916 17.0856L14.0057 25.6714C13.2247 26.4526 13.2247 27.7188 14.0057 28.5C14.1033 28.5975 14.2086 28.6829 14.3195 28.7562C15.0958 29.2687 16.1507 29.1833 16.8341 28.5Z" fill="black"/>
</svg>}>
          <LoginForm onRecovery={() => setShowRecovery(true)} />
        </CollapseButton>
        <CollapseButton name={translations[language].registration} symbol={">"}>
          <RegForm />
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
  const [showRecovery, setShowRecovery] = useState(false);
  const navigate = useNavigate();
  const { language, translations } = useLanguage();

  const togglePage = () => {
    setIsAuthPage((prev) => !prev);
  };

  const menuItems = [
    { label: translations[language].landing, route: "/katarium" },
    { label: translations[language].politicalSite, route: "/political-site" },
    { label: translations[language].jobExchange, route: "/job-board" },
    { label: translations[language].newsResource, route: "/news" },
  ];

  const buttonPosition = isAuthPage ? { left: "0" } : { right: "0" };

  if (showRecovery) {
    return <RecoveryForm onBack={() => setShowRecovery(false)} translations={translations} language={language} />;
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          width: "100%",
          borderBottom: "1px solid black",
          background: "#E1D6E7",
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1520px', margin: '0 auto' }}>
          <span style={{ fontSize: "22px" }}>
            {translations[language].systemContour}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <LanguageDropdown />
            <Burger
              isOpen={burgerIsOpen}
              open={() => setBurgerIsOpen(true)}
              close={() => setBurgerIsOpen(false)}
            />
          </div>
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
                  paddingLeft: "200px",
                  fontSize: "42px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                {label}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                  <path d="M26.09 11.4186L37.1716 22.5H6C4.89542 22.5 4 23.3956 4 24.5C4 25.6046 4.89542 26.5 6 26.5H37.1716L26.09 37.5816C25.309 38.3626 25.309 39.629 26.09 40.41C26.8712 41.191 28.1374 41.191 28.9184 40.41L43.4142 25.9144C44.1952 25.1332 44.1952 23.867 43.4142 23.0858L28.9184 8.59018C28.5266 8.1983 28.0126 8.00304 27.499 8.0044C27.3728 8.00474 27.2466 8.01694 27.1222 8.041C26.744 8.11422 26.383 8.29728 26.09 8.59018C25.309 9.37122 25.309 10.6376 26.09 11.4186Z" fill="black" />
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
