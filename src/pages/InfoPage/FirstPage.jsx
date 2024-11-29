import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoPage from "./InfoPage";
import "../../index.css";

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
        onClick={() => {
          if (isOpen) {
            close();
          } else {
            open();
          }
        }}
        style={{
          background: "#E1D6E7",
        }}
      >
        {isOpen ? <div style={{ border: "0px solid #000000" }}>X</div> : "="}
      </button>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="ring">
      {/* <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i> */}
      <div className="login">
        {/* <h2>Login</h2> */}
        <div className="inputBx">
          <input type="text" placeholder="Логин" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Пароль" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Войти" />
        </div>
        <div className="links">
          <a href="#">Восстановление доступа</a>
          {/* <a href="#">Signup</a> */}
        </div>
      </div>
    </div>
  );
}

function RegForm() {
  return (
    <div className="ring">
      <div className="login">
        {/* <h2>Login</h2> */}
        <div className="inputBx">
          <input type="text" placeholder="Логин" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Пароль" />
        </div>
        <div className="inputBx">
          <input type="phone" placeholder="Номер телефона" />
        </div>
        <div className="inputBx">
          <input type="group" placeholder="Номер группы" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Войти" />
        </div>
      </div>
    </div>
  );
}

function AuthPage() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ flexGrow: 1, background: "#E1D6E7" }}>
        <CollapseButton name="Вход" symbol={">"}>
          <div>
            <LoginForm />
          </div>
        </CollapseButton>
        <CollapseButton name="Регистрация" symbol={">"}>
          <div>
            <RegForm />
          </div>
        </CollapseButton>
      </div>
    </div>
  );
}

export default function FirstPage() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(true);
  const navigate = useNavigate();

  const togglePage = () => {
    setIsAuthPage((prev) => !prev);
  };

  const menuItems = [
    { label: "Лендинг", route: "/katarium" },
    { label: "Сайт политического устройства", route: "/political-site" },
    { label: "Биржа труда", route: "/job-exchange" },
    { label: "Новостной ресурс", route: "/news" },
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
          Контур системы
        </span>
        <Burger
          isOpen={burgerIsOpen}
          open={() => setBurgerIsOpen(true)}
          close={() => setBurgerIsOpen(false)}
        />
      </header>
      <section
        style={{
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
              height: "886px",
              zIndex: "5",
              backgroundColor: "#EFEEEC",
              flexGrow: 1,
            }}
          >
            {menuItems.map(({ label, route }) => (
              <button
                key={route}
                onClick={() => navigate(route)}
                style={{
                  display: "flex",
                  padding: "30px",
                  gap: "40px",
                  width: "100%",
                  borderBottom: "1px solid #000000",
                  backgroundColor: "#EFEEEC",
                  paddingLeft: "75px",
                  fontSize: "42px",
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        {isAuthPage ? <InfoPage /> : <AuthPage />}
        <button
          onClick={togglePage}
          style={{
            position: "absolute",
            backgroundColor: "#1D1D1B",
            padding: "10px 10px",
            height: "886px",
            ...buttonPosition,
          }}
        >
          <div
            style={{
              color: "#845BFF",
              background: "#EEEDEB",
              borderRadius: "20px",
              fontSize: "30px",
            }}
          >
            {isAuthPage ? "<" : ">"}
          </div>
        </button>
      </section>
    </div>
  );
}
